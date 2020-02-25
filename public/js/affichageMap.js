
mapboxgl.accessToken = 'pk.eyJ1IjoiYXltZXJpY3QiLCJhIjoiY2s2cWZiM29zMWxucDNtcXN5cXRobHZhdiJ9.cX5vgHzNHwG14iDQRJiWRw';


// Création de la map
var mymap = new mapboxgl.Map({
container: 'mapid', // container id
style: 'mapbox://styles/aymerict/ck6qg0rrx3aeo1iqycti86k4d', // stylesheet location
center: [6.147068, 46.227253], // starting position [lng, lat]
zoom: 10 // starting zoom
});

var layerList = document.getElementById('menu');
    var inputs = layerList.getElementsByTagName('input');
    
    function switchLayer(layer) {
    var layerId = layer.target.id;
    map.setStyle('mapbox://styles/mapbox/' + layerId);
    }
    
    for (var i = 0; i < inputs.length; i++) {
    inputs[i].onclick = switchLayer;
    }

// Add zoom and rotation controls to the map.
mymap.addControl(new mapboxgl.NavigationControl());
mymap.addControl(new mapboxgl.FullscreenControl());




// Affichage des éléments sur la map
mymap.on('load', function() {

    // Polygones
    mymap.addSource('avalanchesPolygones', {
        type: 'vector',
        url: 'mapbox://aymerict.0z79a39n'
    });
    mymap.addLayer({
        'id': 'avalanches-boundary',
        'type': 'fill',
        'source': 'avalanchesPolygones',
        'source-layer': 'l_clpa_photointer_s_r82-5o4mj0',
        'paint': {
        'fill-color': '#FF392B',
        'fill-opacity': 0.4,
        'fill-outline-color' : '#801D16'
        },
        'filter': ['==', '$type', 'Polygon']
    });

    // Points
    mymap.addSource('avalanchesPoints', {
        type: 'vector',
        url: 'mapbox://aymerict.ck6xd6rmb17jl2nph9fwsq40b-7hmlm'
    });
    mymap.addLayer({
        'id': 'avalanches-activite',
        'type': 'circle',
        'source': 'avalanchesPoints',
        'source-layer': 'AvalanchesActivit',
        'paint': {
        'circle-radius': 6,
        'circle-color': '#B42222'
        },
        'filter': ['==', '$type', 'Point']
    });      
});

//Events

    //Polygones
    // When a click event occurs on a feature in the states layer, open a popup at the
    // location of the click, with description HTML from its properties.
    mymap.on('click', 'avalanches-boundary', function(e) {
    new mapboxgl.Popup()
    .setLngLat(e.lngLat)
    .setHTML("surface: " + e.features[0].properties.area + " m² </br>périmètre: " + e.features[0].properties.perimeter + " m")
    .addTo(mymap);
    });

    // Change the cursor to a pointer when the mouse is over the states layer.
    mymap.on('mouseenter', 'avalanches-boundary', function() {
    mymap.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    mymap.on('mouseleave', 'avalanches-boundary', function() {
    mymap.getCanvas().style.cursor = '';
    });

    //Points
    mymap.on('click', 'avalanches-activite', function(e) {
        var cause='cause départ';
    new mapboxgl.Popup()
    .setLngLat(e.lngLat)
    .setHTML("date: " + e.features[0].properties.date + " </br>emportés: " + e.features[0].properties.emportés + " </br>décès: "+ e.features[0].properties.décédés + " </br>activité pratiquée: "+ e.features[0].properties.activité + " </br>groupe: "+ e.features[0].properties.groupe)
    .addTo(mymap);
    });

    // Change the cursor to a pointer when the mouse is over the states layer.
    mymap.on('mouseenter', 'avalanches-activite', function() {
    mymap.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    mymap.on('mouseleave', 'avalanches-activite', function() {
    mymap.getCanvas().style.cursor = '';
    });

    //Showing mouse position on hover with pixel and latitude and longitude coordinates.
    mymap.on('mousemove', function(e) {
        document.getElementById('info').innerHTML =
        // e.point is the x, y coordinates of the mousemove event relative
        // to the top-left corner of the map
        JSON.stringify(e.point) +
        '    ----    ' +
        // e.lngLat is the longitude, latitude geographical position of the event
        JSON.stringify(e.lngLat.wrap());
    });
