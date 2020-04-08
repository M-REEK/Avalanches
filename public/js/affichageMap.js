
mapboxgl.accessToken = 'pk.eyJ1IjoiYXltZXJpY3QiLCJhIjoiY2s2cWZiM29zMWxucDNtcXN5cXRobHZhdiJ9.cX5vgHzNHwG14iDQRJiWRw';


// Création de la map
var mymap = new mapboxgl.Map({
container: 'mapid', // container id
style: 'mapbox://styles/aymerict/ck6qg0rrx3aeo1iqycti86k4d', // stylesheet location
center: [6.40, 45.71], // starting position [lng, lat]
zoom: 6 // starting zoom
});



// Add zoom and rotation controls to the map.
mymap.addControl(new mapboxgl.NavigationControl());
mymap.addControl(new mapboxgl.FullscreenControl());



// Affichage des éléments sur la map
mymap.on('load', function() {
    // Sources
        // Polygones
          mymap.addSource('avalanchesPolygones', {
              type: 'vector',
              url: 'mapbox://aymerict.0z79a39n'
          });
        // Points            
          mymap.addSource('points', {
            type: 'geojson',
            // Point to GeoJSON data. This example visualizes all M1.0+ earthquakes
            // from 12/22/15 to 1/21/16 as logged by USGS' Earthquake hazards program.
            data:
            '../../app/models/dataset/avalanches.geojson',
            cluster: true,
            clusterMaxZoom: 14, // Max zoom to cluster points on
            clusterRadius: 50 // Radius of each cluster when clustering points (defaults to 50)
          });        
     

    // Layers
        // Polygones
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
              'filter': ['==', '$type', 'Polygon'],
          });
          mymap.setLayoutProperty('avalanches-boundary', 'visibility', 'none');

        // Points    
          mymap.addLayer({
              'id': 'points',
              'type': 'circle',
              'source': 'points',
              filter: ['!', ['has', 'point_count']],
              paint: {
                'circle-color': [
                  'match',
                  ['get', 'décédés'],
                  'nc',
                  '#0237E6',
                  '0',
                  '#27FB19',
                  '1',
                  '#FAC814',
                  '2',
                  '#FAC814',
                  '3',
                  '#FAC814',
                  '4',
                  '#FAC814',
                  '5',
                  '#E37907',
                  '6',
                  '#E37907',
                  '7',
                  '#E37907',
                  '8',
                  '#FF3005',
                  /* other */ '#FF3005'
                  ],
              'circle-radius': 6,
              'circle-stroke-width': 1,
              'circle-stroke-color': '#fff'
              }
          });

        // Clusters
          mymap.addLayer({
            id: 'clusters',
            type: 'circle',
            source: 'points',
            filter: ['has', 'point_count'],
            paint: {
              // Use step expressions (https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-step)
              // with three steps to implement three types of circles:
              //   * Blue, 20px circles when point count is less than 100
              //   * Yellow, 30px circles when point count is between 100 and 750
              //   * Pink, 40px circles when point count is greater than or equal to 750
              'circle-color': [
                'step',
                ['get', 'point_count'],
                '#51bbd6',
                20,
                '#f1f075',
                70,
                '#f28cb1'
              ],
              'circle-radius': [
                'step',
                ['get', 'point_count'],
                20,
                100,
                30,
                750,
                40
              ]
            }
          });
           
          mymap.addLayer({
            id: 'cluster-count',
            type: 'symbol',
            source: 'points',
            filter: ['has', 'point_count'],
              layout: {
              'text-field': '{point_count_abbreviated}',
              'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
              'text-size': 12
            }
          });

            


});

//Events

    // Change de Layer (photo interprétation ou avalanches)
    function handleChange(e) {
        e.preventDefault();
        e.stopPropagation();

        if(document.getElementById("check").checked == false){
                mymap.setLayoutProperty('points', 'visibility', 'none');
                mymap.setLayoutProperty('clusters', 'visibility', 'none');
                mymap.setLayoutProperty('cluster-count', 'visibility', 'none');
                mymap.setLayoutProperty('avalanches-boundary', 'visibility', 'visible');
                    mymap.easeTo({
                        zoom: 10
                    });
                $('#infos').hide();
        } else {
                mymap.setLayoutProperty('points', 'visibility', 'visible');
                mymap.setLayoutProperty('clusters', 'visibility', 'visible');
                mymap.setLayoutProperty('cluster-count', 'visibility', 'visible');
                mymap.setLayoutProperty('avalanches-boundary', 'visibility', 'none');
                $('#infos').show();
        }
    }

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
        
        
        mymap.on('click', 'points', function(e) {
          var srcImage = e.features[0].properties.thumbnail;
          var lien = e.features[0].properties.URL;

        $('#date').text(e.features[0].properties.dateStr); // remplace le contenu actuel du paragraphe par "Nouveau contenu !"
        $('#cause').text(e.features[0].properties.origine_principale); // remplace le contenu actuel du paragraphe par "Nouveau contenu !"
        $('#massif').text(e.features[0].properties.massif); // remplace le contenu actuel du paragraphe par "Nouveau contenu !"
        $('#site').text(e.features[0].properties.sommet); // remplace le contenu actuel du paragraphe par "Nouveau contenu !"
        $('#neige').text(e.features[0].properties.qualite_neige); // remplace le contenu actuel du paragraphe par "Nouveau contenu !"
        $('#orientation').text(e.features[0].properties.orientation); // remplace le contenu actuel du paragraphe par "Nouveau contenu !"
        $('#activite').text(e.features[0].properties.activité); // remplace le contenu actuel du paragraphe par "Nouveau contenu !"
        $('#decedes').text(e.features[0].properties.décédés); // remplace le contenu actuel du paragraphe par "Nouveau contenu !"
        $('#description').text(e.features[0].properties.description); // remplace le contenu actuel du paragraphe par "Nouveau contenu !"
        $("#image").attr("src",srcImage);
        $('#source').text(e.features[0].properties.URL); // remplace le contenu actuel du paragraphe par "Nouveau contenu !"
        $("#source").attr("src",lien);

        
        });

        // Change the cursor to a pointer when the mouse is over the states layer.
        mymap.on('mouseenter', 'points', function() {
        mymap.getCanvas().style.cursor = 'pointer';
        });

        // Change it back to a pointer when it leaves.
        mymap.on('mouseleave', 'points', function() {
        mymap.getCanvas().style.cursor = '';
        });

        //Showing mouse position on hover with pixel and latitude and longitude coordinates.
        mymap.on('mousemove', function(e) {
            document.getElementById('info').innerHTML =
            // e.point is the x, y coordinates of the mousemove event relative
            // e.lngLat is the longitude, latitude geographical position of the event
            JSON.stringify(e.lngLat.wrap());
        });


        // clusters

            // inspect a cluster on click
            mymap.on('click', 'clusters', function(e) {
                    var features = mymap.queryRenderedFeatures(e.point, {
                        layers: ['clusters']
                    });
                    var clusterId = features[0].properties.cluster_id;
                    mymap.getSource('points').getClusterExpansionZoom(
                        clusterId,
                        function(err, zoom) {
                            if (err) return;
                            
                            mymap.easeTo({
                                center: features[0].geometry.coordinates,
                                zoom: zoom
                            });
                        }
                    );
            });

            mymap.on('mouseenter', 'clusters', function() {
                mymap.getCanvas().style.cursor = 'pointer';
            });
            mymap.on('mouseleave', 'clusters', function() {
                mymap.getCanvas().style.cursor = '';
            });

