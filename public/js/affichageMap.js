
mapboxgl.accessToken = 'pk.eyJ1IjoiYXltZXJpY3QiLCJhIjoiY2s2cWZiM29zMWxucDNtcXN5cXRobHZhdiJ9.cX5vgHzNHwG14iDQRJiWRw';


// Création de la map
var mymap = new mapboxgl.Map({
container: 'mapid', // container id
style: 'mapbox://styles/aymerict/ck6qg0rrx3aeo1iqycti86k4d', // stylesheet location
center: [6.147068, 46.227253], // starting position [lng, lat]
zoom: 10 // starting zoom
});

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
        url: 'mapbox://aymerict.9z9uzl9n'
    });
    mymap.addLayer({
        'id': 'avalanches-activite-2017',
        'type': 'circle',
        'source': 'avalanchesPoints',
        'source-layer': 'tableau-accidents-2017-2018-861t01',
        'paint': {
        'circle-radius': 6,
        'circle-color': '#B42222'
        },
        'filter': ['==', '$type', 'Point']
    }); 
});

//Events

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
