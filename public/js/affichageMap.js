
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
          mymap.addSource('points', { type: 'geojson', data: 'app/models/dataset/DataAvalancheOrg.geojson', cluster: true, clusterMaxZoom: 14, clusterRadius: 50});        
          mymap.addSource('avalanches1983', { type: 'geojson', data: 'app/models/dataset/avalanches1983.geojson', cluster: true, clusterMaxZoom: 14, clusterRadius: 50});        
          mymap.addSource('avalanches1986', { type: 'geojson', data: 'app/models/dataset/avalanches1986.geojson', cluster: true, clusterMaxZoom: 14, clusterRadius: 50});        
          mymap.addSource('avalanches1990', { type: 'geojson', data: 'app/models/dataset/avalanches1990.geojson', cluster: true, clusterMaxZoom: 14, clusterRadius: 50});        
          mymap.addSource('avalanches1991', { type: 'geojson', data: 'app/models/dataset/avalanches1991.geojson', cluster: true, clusterMaxZoom: 14, clusterRadius: 50});        
          mymap.addSource('avalanches1992', { type: 'geojson', data: 'app/models/dataset/avalanches1992.geojson', cluster: true, clusterMaxZoom: 14, clusterRadius: 50});        
          mymap.addSource('avalanches1993', { type: 'geojson', data: 'app/models/dataset/avalanches1993.geojson', cluster: true, clusterMaxZoom: 14, clusterRadius: 50});        
          mymap.addSource('avalanches1994', { type: 'geojson', data: 'app/models/dataset/avalanches1994.geojson', cluster: true, clusterMaxZoom: 14, clusterRadius: 50});        
          mymap.addSource('avalanches1995', { type: 'geojson', data: 'app/models/dataset/avalanches1995.geojson', cluster: true, clusterMaxZoom: 14, clusterRadius: 50});        
          mymap.addSource('avalanches1996', { type: 'geojson', data: 'app/models/dataset/avalanches1996.geojson', cluster: true, clusterMaxZoom: 14, clusterRadius: 50});        
          mymap.addSource('avalanches1997', { type: 'geojson', data: 'app/models/dataset/avalanches1997.geojson', cluster: true, clusterMaxZoom: 14, clusterRadius: 50});        
          mymap.addSource('avalanches1998', { type: 'geojson', data: 'app/models/dataset/avalanches1998.geojson', cluster: true, clusterMaxZoom: 14, clusterRadius: 50});        
          mymap.addSource('avalanches1999', { type: 'geojson', data: 'app/models/dataset/avalanches1999.geojson', cluster: true, clusterMaxZoom: 14, clusterRadius: 50});        
          mymap.addSource('avalanches2000', { type: 'geojson', data: 'app/models/dataset/avalanches2000.geojson', cluster: true, clusterMaxZoom: 14, clusterRadius: 50});        
          mymap.addSource('avalanches2001', { type: 'geojson', data: 'app/models/dataset/avalanches2001.geojson', cluster: true, clusterMaxZoom: 14, clusterRadius: 50});        
          mymap.addSource('avalanches2002', { type: 'geojson', data: 'app/models/dataset/avalanches2002.geojson', cluster: true, clusterMaxZoom: 14, clusterRadius: 50});        
          mymap.addSource('avalanches2003', { type: 'geojson', data: 'app/models/dataset/avalanches2003.geojson', cluster: true, clusterMaxZoom: 14, clusterRadius: 50});        
          mymap.addSource('avalanches2004', { type: 'geojson', data: 'app/models/dataset/avalanches2004.geojson', cluster: true, clusterMaxZoom: 14, clusterRadius: 50});        
          mymap.addSource('avalanches2005', { type: 'geojson', data: 'app/models/dataset/avalanches2005.geojson', cluster: true, clusterMaxZoom: 14, clusterRadius: 50});        
          mymap.addSource('avalanches2006', { type: 'geojson', data: 'app/models/dataset/avalanches2006.geojson', cluster: true, clusterMaxZoom: 14, clusterRadius: 50});        
          mymap.addSource('avalanches2007', { type: 'geojson', data: 'app/models/dataset/avalanches2007.geojson', cluster: true, clusterMaxZoom: 14, clusterRadius: 50});        
          mymap.addSource('avalanches2008', { type: 'geojson', data: 'app/models/dataset/avalanches2008.geojson', cluster: true, clusterMaxZoom: 14, clusterRadius: 50});        
          mymap.addSource('avalanches2009', { type: 'geojson', data: 'app/models/dataset/avalanches2009.geojson', cluster: true, clusterMaxZoom: 14, clusterRadius: 50});        
          mymap.addSource('avalanches2010', { type: 'geojson', data: 'app/models/dataset/avalanches2010.geojson', cluster: true, clusterMaxZoom: 14, clusterRadius: 50});        
          mymap.addSource('avalanches2011', { type: 'geojson', data: 'app/models/dataset/avalanches2011.geojson', cluster: true, clusterMaxZoom: 14, clusterRadius: 50});        
          mymap.addSource('avalanches2012', { type: 'geojson', data: 'app/models/dataset/avalanches2012.geojson', cluster: true, clusterMaxZoom: 14, clusterRadius: 50});        
          mymap.addSource('avalanches2013', { type: 'geojson', data: 'app/models/dataset/avalanches2013.geojson', cluster: true, clusterMaxZoom: 14, clusterRadius: 50});        
          mymap.addSource('avalanches2014', { type: 'geojson', data: 'app/models/dataset/avalanches2014.geojson', cluster: true, clusterMaxZoom: 14, clusterRadius: 50});        
          mymap.addSource('avalanches2015', { type: 'geojson', data: 'app/models/dataset/avalanches2015.geojson', cluster: true, clusterMaxZoom: 14, clusterRadius: 50});        
          mymap.addSource('avalanches2016', { type: 'geojson', data: 'app/models/dataset/avalanches2016.geojson', cluster: true, clusterMaxZoom: 14, clusterRadius: 50});        
          mymap.addSource('avalanches2017', { type: 'geojson', data: 'app/models/dataset/avalanches2017.geojson', cluster: true, clusterMaxZoom: 14, clusterRadius: 50});        
          mymap.addSource('avalanches2018', { type: 'geojson', data: 'app/models/dataset/avalanches2018.geojson', cluster: true, clusterMaxZoom: 14, clusterRadius: 50});        
          mymap.addSource('avalanches2019', { type: 'geojson', data: 'app/models/dataset/avalanches2019.geojson', cluster: true, clusterMaxZoom: 14, clusterRadius: 50});        
          

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
          mymap.addLayer({ 'id': 'points', 'type': 'circle', 'source': 'points', filter: ['!', ['has', 'point_count']], paint: { 'circle-color': [ 'match', ['get', 'décédés'], 'nc', '#0237E6',  '0', '#27FB19', '1', '#FAC814', '2', '#FAC814', '3', '#FAC814', '4', '#FAC814', '5', '#E37907', '6', '#E37907', '7', '#E37907', '8', '#FF3005', '#FF3005' ], 'circle-radius': 6, 'circle-stroke-width': 1, 'circle-stroke-color': '#fff' }});
          mymap.addLayer({ 'id': 'avalanches1983', 'type': 'circle', 'source': 'avalanches1983', filter: ['!', ['has', 'point_count']], paint: { 'circle-color': [ 'match', ['get', 'décédés'], 'nc', '#0237E6',  '0', '#27FB19', '1', '#FAC814', '2', '#FAC814', '3', '#FAC814', '4', '#FAC814', '5', '#E37907', '6', '#E37907', '7', '#E37907', '8', '#FF3005', '#FF3005' ], 'circle-radius': 6, 'circle-stroke-width': 1, 'circle-stroke-color': '#fff' }});
          mymap.addLayer({ 'id': 'avalanches1986', 'type': 'circle', 'source': 'avalanches1986', filter: ['!', ['has', 'point_count']], paint: { 'circle-color': [ 'match', ['get', 'décédés'], 'nc', '#0237E6',  '0', '#27FB19', '1', '#FAC814', '2', '#FAC814', '3', '#FAC814', '4', '#FAC814', '5', '#E37907', '6', '#E37907', '7', '#E37907', '8', '#FF3005', '#FF3005' ], 'circle-radius': 6, 'circle-stroke-width': 1, 'circle-stroke-color': '#fff' }});
          mymap.addLayer({ 'id': 'avalanches1990', 'type': 'circle', 'source': 'avalanches1990', filter: ['!', ['has', 'point_count']], paint: { 'circle-color': [ 'match', ['get', 'décédés'], 'nc', '#0237E6',  '0', '#27FB19', '1', '#FAC814', '2', '#FAC814', '3', '#FAC814', '4', '#FAC814', '5', '#E37907', '6', '#E37907', '7', '#E37907', '8', '#FF3005', '#FF3005' ], 'circle-radius': 6, 'circle-stroke-width': 1, 'circle-stroke-color': '#fff' }});
          mymap.addLayer({ 'id': 'avalanches1991', 'type': 'circle', 'source': 'avalanches1991', filter: ['!', ['has', 'point_count']], paint: { 'circle-color': [ 'match', ['get', 'décédés'], 'nc', '#0237E6',  '0', '#27FB19', '1', '#FAC814', '2', '#FAC814', '3', '#FAC814', '4', '#FAC814', '5', '#E37907', '6', '#E37907', '7', '#E37907', '8', '#FF3005', '#FF3005' ], 'circle-radius': 6, 'circle-stroke-width': 1, 'circle-stroke-color': '#fff' }});
          mymap.addLayer({ 'id': 'avalanches1992', 'type': 'circle', 'source': 'avalanches1992', filter: ['!', ['has', 'point_count']], paint: { 'circle-color': [ 'match', ['get', 'décédés'], 'nc', '#0237E6',  '0', '#27FB19', '1', '#FAC814', '2', '#FAC814', '3', '#FAC814', '4', '#FAC814', '5', '#E37907', '6', '#E37907', '7', '#E37907', '8', '#FF3005', '#FF3005' ], 'circle-radius': 6, 'circle-stroke-width': 1, 'circle-stroke-color': '#fff' }});
          mymap.addLayer({ 'id': 'avalanches1993', 'type': 'circle', 'source': 'avalanches1993', filter: ['!', ['has', 'point_count']], paint: { 'circle-color': [ 'match', ['get', 'décédés'], 'nc', '#0237E6',  '0', '#27FB19', '1', '#FAC814', '2', '#FAC814', '3', '#FAC814', '4', '#FAC814', '5', '#E37907', '6', '#E37907', '7', '#E37907', '8', '#FF3005', '#FF3005' ], 'circle-radius': 6, 'circle-stroke-width': 1, 'circle-stroke-color': '#fff' }});
          mymap.addLayer({ 'id': 'avalanches1994', 'type': 'circle', 'source': 'avalanches1994', filter: ['!', ['has', 'point_count']], paint: { 'circle-color': [ 'match', ['get', 'décédés'], 'nc', '#0237E6',  '0', '#27FB19', '1', '#FAC814', '2', '#FAC814', '3', '#FAC814', '4', '#FAC814', '5', '#E37907', '6', '#E37907', '7', '#E37907', '8', '#FF3005', '#FF3005' ], 'circle-radius': 6, 'circle-stroke-width': 1, 'circle-stroke-color': '#fff' }});
          mymap.addLayer({ 'id': 'avalanches1995', 'type': 'circle', 'source': 'avalanches1995', filter: ['!', ['has', 'point_count']], paint: { 'circle-color': [ 'match', ['get', 'décédés'], 'nc', '#0237E6',  '0', '#27FB19', '1', '#FAC814', '2', '#FAC814', '3', '#FAC814', '4', '#FAC814', '5', '#E37907', '6', '#E37907', '7', '#E37907', '8', '#FF3005', '#FF3005' ], 'circle-radius': 6, 'circle-stroke-width': 1, 'circle-stroke-color': '#fff' }});
          mymap.addLayer({ 'id': 'avalanches1996', 'type': 'circle', 'source': 'avalanches1996', filter: ['!', ['has', 'point_count']], paint: { 'circle-color': [ 'match', ['get', 'décédés'], 'nc', '#0237E6',  '0', '#27FB19', '1', '#FAC814', '2', '#FAC814', '3', '#FAC814', '4', '#FAC814', '5', '#E37907', '6', '#E37907', '7', '#E37907', '8', '#FF3005', '#FF3005' ], 'circle-radius': 6, 'circle-stroke-width': 1, 'circle-stroke-color': '#fff' }});
          mymap.addLayer({ 'id': 'avalanches1997', 'type': 'circle', 'source': 'avalanches1997', filter: ['!', ['has', 'point_count']], paint: { 'circle-color': [ 'match', ['get', 'décédés'], 'nc', '#0237E6',  '0', '#27FB19', '1', '#FAC814', '2', '#FAC814', '3', '#FAC814', '4', '#FAC814', '5', '#E37907', '6', '#E37907', '7', '#E37907', '8', '#FF3005', '#FF3005' ], 'circle-radius': 6, 'circle-stroke-width': 1, 'circle-stroke-color': '#fff' }});
          mymap.addLayer({ 'id': 'avalanches1998', 'type': 'circle', 'source': 'avalanches1998', filter: ['!', ['has', 'point_count']], paint: { 'circle-color': [ 'match', ['get', 'décédés'], 'nc', '#0237E6',  '0', '#27FB19', '1', '#FAC814', '2', '#FAC814', '3', '#FAC814', '4', '#FAC814', '5', '#E37907', '6', '#E37907', '7', '#E37907', '8', '#FF3005', '#FF3005' ], 'circle-radius': 6, 'circle-stroke-width': 1, 'circle-stroke-color': '#fff' }});
          mymap.addLayer({ 'id': 'avalanches1999', 'type': 'circle', 'source': 'avalanches1999', filter: ['!', ['has', 'point_count']], paint: { 'circle-color': [ 'match', ['get', 'décédés'], 'nc', '#0237E6',  '0', '#27FB19', '1', '#FAC814', '2', '#FAC814', '3', '#FAC814', '4', '#FAC814', '5', '#E37907', '6', '#E37907', '7', '#E37907', '8', '#FF3005', '#FF3005' ], 'circle-radius': 6, 'circle-stroke-width': 1, 'circle-stroke-color': '#fff' }});
          mymap.addLayer({ 'id': 'avalanches2000', 'type': 'circle', 'source': 'avalanches2000', filter: ['!', ['has', 'point_count']], paint: { 'circle-color': [ 'match', ['get', 'décédés'], 'nc', '#0237E6',  '0', '#27FB19', '1', '#FAC814', '2', '#FAC814', '3', '#FAC814', '4', '#FAC814', '5', '#E37907', '6', '#E37907', '7', '#E37907', '8', '#FF3005', '#FF3005' ], 'circle-radius': 6, 'circle-stroke-width': 1, 'circle-stroke-color': '#fff' }});
          mymap.addLayer({ 'id': 'avalanches2001', 'type': 'circle', 'source': 'avalanches2001', filter: ['!', ['has', 'point_count']], paint: { 'circle-color': [ 'match', ['get', 'décédés'], 'nc', '#0237E6',  '0', '#27FB19', '1', '#FAC814', '2', '#FAC814', '3', '#FAC814', '4', '#FAC814', '5', '#E37907', '6', '#E37907', '7', '#E37907', '8', '#FF3005', '#FF3005' ], 'circle-radius': 6, 'circle-stroke-width': 1, 'circle-stroke-color': '#fff' }});
          mymap.addLayer({ 'id': 'avalanches2002', 'type': 'circle', 'source': 'avalanches2002', filter: ['!', ['has', 'point_count']], paint: { 'circle-color': [ 'match', ['get', 'décédés'], 'nc', '#0237E6',  '0', '#27FB19', '1', '#FAC814', '2', '#FAC814', '3', '#FAC814', '4', '#FAC814', '5', '#E37907', '6', '#E37907', '7', '#E37907', '8', '#FF3005', '#FF3005' ], 'circle-radius': 6, 'circle-stroke-width': 1, 'circle-stroke-color': '#fff' }});
          mymap.addLayer({ 'id': 'avalanches2003', 'type': 'circle', 'source': 'avalanches2003', filter: ['!', ['has', 'point_count']], paint: { 'circle-color': [ 'match', ['get', 'décédés'], 'nc', '#0237E6',  '0', '#27FB19', '1', '#FAC814', '2', '#FAC814', '3', '#FAC814', '4', '#FAC814', '5', '#E37907', '6', '#E37907', '7', '#E37907', '8', '#FF3005', '#FF3005' ], 'circle-radius': 6, 'circle-stroke-width': 1, 'circle-stroke-color': '#fff' }});
          mymap.addLayer({ 'id': 'avalanches2004', 'type': 'circle', 'source': 'avalanches2004', filter: ['!', ['has', 'point_count']], paint: { 'circle-color': [ 'match', ['get', 'décédés'], 'nc', '#0237E6',  '0', '#27FB19', '1', '#FAC814', '2', '#FAC814', '3', '#FAC814', '4', '#FAC814', '5', '#E37907', '6', '#E37907', '7', '#E37907', '8', '#FF3005', '#FF3005' ], 'circle-radius': 6, 'circle-stroke-width': 1, 'circle-stroke-color': '#fff' }});
          mymap.addLayer({ 'id': 'avalanches2005', 'type': 'circle', 'source': 'avalanches2005', filter: ['!', ['has', 'point_count']], paint: { 'circle-color': [ 'match', ['get', 'décédés'], 'nc', '#0237E6',  '0', '#27FB19', '1', '#FAC814', '2', '#FAC814', '3', '#FAC814', '4', '#FAC814', '5', '#E37907', '6', '#E37907', '7', '#E37907', '8', '#FF3005', '#FF3005' ], 'circle-radius': 6, 'circle-stroke-width': 1, 'circle-stroke-color': '#fff' }});
          mymap.addLayer({ 'id': 'avalanches2006', 'type': 'circle', 'source': 'avalanches2006', filter: ['!', ['has', 'point_count']], paint: { 'circle-color': [ 'match', ['get', 'décédés'], 'nc', '#0237E6',  '0', '#27FB19', '1', '#FAC814', '2', '#FAC814', '3', '#FAC814', '4', '#FAC814', '5', '#E37907', '6', '#E37907', '7', '#E37907', '8', '#FF3005', '#FF3005' ], 'circle-radius': 6, 'circle-stroke-width': 1, 'circle-stroke-color': '#fff' }});
          mymap.addLayer({ 'id': 'avalanches2007', 'type': 'circle', 'source': 'avalanches2007', filter: ['!', ['has', 'point_count']], paint: { 'circle-color': [ 'match', ['get', 'décédés'], 'nc', '#0237E6',  '0', '#27FB19', '1', '#FAC814', '2', '#FAC814', '3', '#FAC814', '4', '#FAC814', '5', '#E37907', '6', '#E37907', '7', '#E37907', '8', '#FF3005', '#FF3005' ], 'circle-radius': 6, 'circle-stroke-width': 1, 'circle-stroke-color': '#fff' }});
          mymap.addLayer({ 'id': 'avalanches2008', 'type': 'circle', 'source': 'avalanches2008', filter: ['!', ['has', 'point_count']], paint: { 'circle-color': [ 'match', ['get', 'décédés'], 'nc', '#0237E6',  '0', '#27FB19', '1', '#FAC814', '2', '#FAC814', '3', '#FAC814', '4', '#FAC814', '5', '#E37907', '6', '#E37907', '7', '#E37907', '8', '#FF3005', '#FF3005' ], 'circle-radius': 6, 'circle-stroke-width': 1, 'circle-stroke-color': '#fff' }});
          mymap.addLayer({ 'id': 'avalanches2009', 'type': 'circle', 'source': 'avalanches2009', filter: ['!', ['has', 'point_count']], paint: { 'circle-color': [ 'match', ['get', 'décédés'], 'nc', '#0237E6',  '0', '#27FB19', '1', '#FAC814', '2', '#FAC814', '3', '#FAC814', '4', '#FAC814', '5', '#E37907', '6', '#E37907', '7', '#E37907', '8', '#FF3005', '#FF3005' ], 'circle-radius': 6, 'circle-stroke-width': 1, 'circle-stroke-color': '#fff' }});
          mymap.addLayer({ 'id': 'avalanches2010', 'type': 'circle', 'source': 'avalanches2010', filter: ['!', ['has', 'point_count']], paint: { 'circle-color': [ 'match', ['get', 'décédés'], 'nc', '#0237E6',  '0', '#27FB19', '1', '#FAC814', '2', '#FAC814', '3', '#FAC814', '4', '#FAC814', '5', '#E37907', '6', '#E37907', '7', '#E37907', '8', '#FF3005', '#FF3005' ], 'circle-radius': 6, 'circle-stroke-width': 1, 'circle-stroke-color': '#fff' }});
          mymap.addLayer({ 'id': 'avalanches2011', 'type': 'circle', 'source': 'avalanches2011', filter: ['!', ['has', 'point_count']], paint: { 'circle-color': [ 'match', ['get', 'décédés'], 'nc', '#0237E6',  '0', '#27FB19', '1', '#FAC814', '2', '#FAC814', '3', '#FAC814', '4', '#FAC814', '5', '#E37907', '6', '#E37907', '7', '#E37907', '8', '#FF3005', '#FF3005' ], 'circle-radius': 6, 'circle-stroke-width': 1, 'circle-stroke-color': '#fff' }});
          mymap.addLayer({ 'id': 'avalanches2012', 'type': 'circle', 'source': 'avalanches2012', filter: ['!', ['has', 'point_count']], paint: { 'circle-color': [ 'match', ['get', 'décédés'], 'nc', '#0237E6',  '0', '#27FB19', '1', '#FAC814', '2', '#FAC814', '3', '#FAC814', '4', '#FAC814', '5', '#E37907', '6', '#E37907', '7', '#E37907', '8', '#FF3005', '#FF3005' ], 'circle-radius': 6, 'circle-stroke-width': 1, 'circle-stroke-color': '#fff' }});
          mymap.addLayer({ 'id': 'avalanches2013', 'type': 'circle', 'source': 'avalanches2013', filter: ['!', ['has', 'point_count']], paint: { 'circle-color': [ 'match', ['get', 'décédés'], 'nc', '#0237E6',  '0', '#27FB19', '1', '#FAC814', '2', '#FAC814', '3', '#FAC814', '4', '#FAC814', '5', '#E37907', '6', '#E37907', '7', '#E37907', '8', '#FF3005', '#FF3005' ], 'circle-radius': 6, 'circle-stroke-width': 1, 'circle-stroke-color': '#fff' }});
          mymap.addLayer({ 'id': 'avalanches2014', 'type': 'circle', 'source': 'avalanches2014', filter: ['!', ['has', 'point_count']], paint: { 'circle-color': [ 'match', ['get', 'décédés'], 'nc', '#0237E6',  '0', '#27FB19', '1', '#FAC814', '2', '#FAC814', '3', '#FAC814', '4', '#FAC814', '5', '#E37907', '6', '#E37907', '7', '#E37907', '8', '#FF3005', '#FF3005' ], 'circle-radius': 6, 'circle-stroke-width': 1, 'circle-stroke-color': '#fff' }});
          mymap.addLayer({ 'id': 'avalanches2015', 'type': 'circle', 'source': 'avalanches2015', filter: ['!', ['has', 'point_count']], paint: { 'circle-color': [ 'match', ['get', 'décédés'], 'nc', '#0237E6',  '0', '#27FB19', '1', '#FAC814', '2', '#FAC814', '3', '#FAC814', '4', '#FAC814', '5', '#E37907', '6', '#E37907', '7', '#E37907', '8', '#FF3005', '#FF3005' ], 'circle-radius': 6, 'circle-stroke-width': 1, 'circle-stroke-color': '#fff' }});
          mymap.addLayer({ 'id': 'avalanches2016', 'type': 'circle', 'source': 'avalanches2016', filter: ['!', ['has', 'point_count']], paint: { 'circle-color': [ 'match', ['get', 'décédés'], 'nc', '#0237E6',  '0', '#27FB19', '1', '#FAC814', '2', '#FAC814', '3', '#FAC814', '4', '#FAC814', '5', '#E37907', '6', '#E37907', '7', '#E37907', '8', '#FF3005', '#FF3005' ], 'circle-radius': 6, 'circle-stroke-width': 1, 'circle-stroke-color': '#fff' }});
          mymap.addLayer({ 'id': 'avalanches2017', 'type': 'circle', 'source': 'avalanches2017', filter: ['!', ['has', 'point_count']], paint: { 'circle-color': [ 'match', ['get', 'décédés'], 'nc', '#0237E6',  '0', '#27FB19', '1', '#FAC814', '2', '#FAC814', '3', '#FAC814', '4', '#FAC814', '5', '#E37907', '6', '#E37907', '7', '#E37907', '8', '#FF3005', '#FF3005' ], 'circle-radius': 6, 'circle-stroke-width': 1, 'circle-stroke-color': '#fff' }});
          mymap.addLayer({ 'id': 'avalanches2018', 'type': 'circle', 'source': 'avalanches2018', filter: ['!', ['has', 'point_count']], paint: { 'circle-color': [ 'match', ['get', 'décédés'], 'nc', '#0237E6',  '0', '#27FB19', '1', '#FAC814', '2', '#FAC814', '3', '#FAC814', '4', '#FAC814', '5', '#E37907', '6', '#E37907', '7', '#E37907', '8', '#FF3005', '#FF3005' ], 'circle-radius': 6, 'circle-stroke-width': 1, 'circle-stroke-color': '#fff' }});
          mymap.addLayer({ 'id': 'avalanches2019', 'type': 'circle', 'source': 'avalanches2019', filter: ['!', ['has', 'point_count']], paint: { 'circle-color': [ 'match', ['get', 'décédés'], 'nc', '#0237E6',  '0', '#27FB19', '1', '#FAC814', '2', '#FAC814', '3', '#FAC814', '4', '#FAC814', '5', '#E37907', '6', '#E37907', '7', '#E37907', '8', '#FF3005', '#FF3005' ], 'circle-radius': 6, 'circle-stroke-width': 1, 'circle-stroke-color': '#fff' }});
        
          mymap.setLayoutProperty('avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2019', 'visibility', 'none');

        // Clusters
          mymap.addLayer({ id: 'clusters', type: 'circle', source: 'points', filter: ['has', 'point_count'], paint: { 'circle-color': [ 'step', ['get', 'point_count'], '#51bbd6', 20, '#f1f075', 70, '#f28cb1' ], 'circle-radius': [ 'step', ['get', 'point_count'], 20, 100, 30, 750, 40 ] }});
          mymap.addLayer({ id: 'cluster-count', type: 'symbol', source: 'points', filter: ['has', 'point_count'], layout: { 'text-field': '{point_count_abbreviated}',  'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'], 'text-size': 12 }});
          mymap.addLayer({ id: 'clusters-avalanches1983', type: 'circle', source: 'avalanches1983', filter: ['has', 'point_count'], paint: { 'circle-color': [ 'step', ['get', 'point_count'], '#51bbd6', 20, '#f1f075', 70, '#f28cb1' ], 'circle-radius': [ 'step', ['get', 'point_count'], 20, 100, 30, 750, 40 ] }});
          mymap.addLayer({ id: 'cluster-count-avalanches1983', type: 'symbol', source: 'avalanches1983', filter: ['has', 'point_count'], layout: { 'text-field': '{point_count_abbreviated}',  'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'], 'text-size': 12 }});
          mymap.addLayer({ id: 'clusters-avalanches1986', type: 'circle', source: 'avalanches1986', filter: ['has', 'point_count'], paint: { 'circle-color': [ 'step', ['get', 'point_count'], '#51bbd6', 20, '#f1f075', 70, '#f28cb1' ], 'circle-radius': [ 'step', ['get', 'point_count'], 20, 100, 30, 750, 40 ] }});
          mymap.addLayer({ id: 'cluster-count-avalanches1986', type: 'symbol', source: 'avalanches1986', filter: ['has', 'point_count'], layout: { 'text-field': '{point_count_abbreviated}',  'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'], 'text-size': 12 }});
          mymap.addLayer({ id: 'clusters-avalanches1990', type: 'circle', source: 'avalanches1990', filter: ['has', 'point_count'], paint: { 'circle-color': [ 'step', ['get', 'point_count'], '#51bbd6', 20, '#f1f075', 70, '#f28cb1' ], 'circle-radius': [ 'step', ['get', 'point_count'], 20, 100, 30, 750, 40 ] }});
          mymap.addLayer({ id: 'cluster-count-avalanches1990', type: 'symbol', source: 'avalanches1990', filter: ['has', 'point_count'], layout: { 'text-field': '{point_count_abbreviated}',  'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'], 'text-size': 12 }});
          mymap.addLayer({ id: 'clusters-avalanches1991', type: 'circle', source: 'avalanches1991', filter: ['has', 'point_count'], paint: { 'circle-color': [ 'step', ['get', 'point_count'], '#51bbd6', 20, '#f1f075', 70, '#f28cb1' ], 'circle-radius': [ 'step', ['get', 'point_count'], 20, 100, 30, 750, 40 ] }});
          mymap.addLayer({ id: 'cluster-count-avalanches1991', type: 'symbol', source: 'avalanches1991', filter: ['has', 'point_count'], layout: { 'text-field': '{point_count_abbreviated}',  'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'], 'text-size': 12 }});
          mymap.addLayer({ id: 'clusters-avalanches1992', type: 'circle', source: 'avalanches1992', filter: ['has', 'point_count'], paint: { 'circle-color': [ 'step', ['get', 'point_count'], '#51bbd6', 20, '#f1f075', 70, '#f28cb1' ], 'circle-radius': [ 'step', ['get', 'point_count'], 20, 100, 30, 750, 40 ] }});
          mymap.addLayer({ id: 'cluster-count-avalanches1992', type: 'symbol', source: 'avalanches1992', filter: ['has', 'point_count'], layout: { 'text-field': '{point_count_abbreviated}',  'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'], 'text-size': 12 }});
          mymap.addLayer({ id: 'clusters-avalanches1993', type: 'circle', source: 'avalanches1993', filter: ['has', 'point_count'], paint: { 'circle-color': [ 'step', ['get', 'point_count'], '#51bbd6', 20, '#f1f075', 70, '#f28cb1' ], 'circle-radius': [ 'step', ['get', 'point_count'], 20, 100, 30, 750, 40 ] }});
          mymap.addLayer({ id: 'cluster-count-avalanches1993', type: 'symbol', source: 'avalanches1993', filter: ['has', 'point_count'], layout: { 'text-field': '{point_count_abbreviated}',  'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'], 'text-size': 12 }});
          mymap.addLayer({ id: 'clusters-avalanches1994', type: 'circle', source: 'avalanches1994', filter: ['has', 'point_count'], paint: { 'circle-color': [ 'step', ['get', 'point_count'], '#51bbd6', 20, '#f1f075', 70, '#f28cb1' ], 'circle-radius': [ 'step', ['get', 'point_count'], 20, 100, 30, 750, 40 ] }});
          mymap.addLayer({ id: 'cluster-count-avalanches1994', type: 'symbol', source: 'avalanches1994', filter: ['has', 'point_count'], layout: { 'text-field': '{point_count_abbreviated}',  'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'], 'text-size': 12 }});
          mymap.addLayer({ id: 'clusters-avalanches1995', type: 'circle', source: 'avalanches1995', filter: ['has', 'point_count'], paint: { 'circle-color': [ 'step', ['get', 'point_count'], '#51bbd6', 20, '#f1f075', 70, '#f28cb1' ], 'circle-radius': [ 'step', ['get', 'point_count'], 20, 100, 30, 750, 40 ] }});
          mymap.addLayer({ id: 'cluster-count-avalanches1995', type: 'symbol', source: 'avalanches1995', filter: ['has', 'point_count'], layout: { 'text-field': '{point_count_abbreviated}',  'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'], 'text-size': 12 }});
          mymap.addLayer({ id: 'clusters-avalanches1996', type: 'circle', source: 'avalanches1996', filter: ['has', 'point_count'], paint: { 'circle-color': [ 'step', ['get', 'point_count'], '#51bbd6', 20, '#f1f075', 70, '#f28cb1' ], 'circle-radius': [ 'step', ['get', 'point_count'], 20, 100, 30, 750, 40 ] }});
          mymap.addLayer({ id: 'cluster-count-avalanches1996', type: 'symbol', source: 'avalanches1996', filter: ['has', 'point_count'], layout: { 'text-field': '{point_count_abbreviated}',  'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'], 'text-size': 12 }});
          mymap.addLayer({ id: 'clusters-avalanches1997', type: 'circle', source: 'avalanches1997', filter: ['has', 'point_count'], paint: { 'circle-color': [ 'step', ['get', 'point_count'], '#51bbd6', 20, '#f1f075', 70, '#f28cb1' ], 'circle-radius': [ 'step', ['get', 'point_count'], 20, 100, 30, 750, 40 ] }});
          mymap.addLayer({ id: 'cluster-count-avalanches1997', type: 'symbol', source: 'avalanches1997', filter: ['has', 'point_count'], layout: { 'text-field': '{point_count_abbreviated}',  'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'], 'text-size': 12 }});
          mymap.addLayer({ id: 'clusters-avalanches1998', type: 'circle', source: 'avalanches1998', filter: ['has', 'point_count'], paint: { 'circle-color': [ 'step', ['get', 'point_count'], '#51bbd6', 20, '#f1f075', 70, '#f28cb1' ], 'circle-radius': [ 'step', ['get', 'point_count'], 20, 100, 30, 750, 40 ] }});
          mymap.addLayer({ id: 'cluster-count-avalanches1998', type: 'symbol', source: 'avalanches1998', filter: ['has', 'point_count'], layout: { 'text-field': '{point_count_abbreviated}',  'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'], 'text-size': 12 }});
          mymap.addLayer({ id: 'clusters-avalanches1999', type: 'circle', source: 'avalanches1999', filter: ['has', 'point_count'], paint: { 'circle-color': [ 'step', ['get', 'point_count'], '#51bbd6', 20, '#f1f075', 70, '#f28cb1' ], 'circle-radius': [ 'step', ['get', 'point_count'], 20, 100, 30, 750, 40 ] }});
          mymap.addLayer({ id: 'cluster-count-avalanches1999', type: 'symbol', source: 'avalanches1999', filter: ['has', 'point_count'], layout: { 'text-field': '{point_count_abbreviated}',  'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'], 'text-size': 12 }});
          mymap.addLayer({ id: 'clusters-avalanches2000', type: 'circle', source: 'avalanches2000', filter: ['has', 'point_count'], paint: { 'circle-color': [ 'step', ['get', 'point_count'], '#51bbd6', 20, '#f1f075', 70, '#f28cb1' ], 'circle-radius': [ 'step', ['get', 'point_count'], 20, 100, 30, 750, 40 ] }});
          mymap.addLayer({ id: 'cluster-count-avalanches2000', type: 'symbol', source: 'avalanches2000', filter: ['has', 'point_count'], layout: { 'text-field': '{point_count_abbreviated}',  'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'], 'text-size': 12 }});
          mymap.addLayer({ id: 'clusters-avalanches2001', type: 'circle', source: 'avalanches2001', filter: ['has', 'point_count'], paint: { 'circle-color': [ 'step', ['get', 'point_count'], '#51bbd6', 20, '#f1f075', 70, '#f28cb1' ], 'circle-radius': [ 'step', ['get', 'point_count'], 20, 100, 30, 750, 40 ] }});
          mymap.addLayer({ id: 'cluster-count-avalanches2001', type: 'symbol', source: 'avalanches2001', filter: ['has', 'point_count'], layout: { 'text-field': '{point_count_abbreviated}',  'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'], 'text-size': 12 }});
          mymap.addLayer({ id: 'clusters-avalanches2002', type: 'circle', source: 'avalanches2002', filter: ['has', 'point_count'], paint: { 'circle-color': [ 'step', ['get', 'point_count'], '#51bbd6', 20, '#f1f075', 70, '#f28cb1' ], 'circle-radius': [ 'step', ['get', 'point_count'], 20, 100, 30, 750, 40 ] }});
          mymap.addLayer({ id: 'cluster-count-avalanches2002', type: 'symbol', source: 'avalanches2002', filter: ['has', 'point_count'], layout: { 'text-field': '{point_count_abbreviated}',  'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'], 'text-size': 12 }});
          mymap.addLayer({ id: 'clusters-avalanches2003', type: 'circle', source: 'avalanches2003', filter: ['has', 'point_count'], paint: { 'circle-color': [ 'step', ['get', 'point_count'], '#51bbd6', 20, '#f1f075', 70, '#f28cb1' ], 'circle-radius': [ 'step', ['get', 'point_count'], 20, 100, 30, 750, 40 ] }});
          mymap.addLayer({ id: 'cluster-count-avalanches2003', type: 'symbol', source: 'avalanches2003', filter: ['has', 'point_count'], layout: { 'text-field': '{point_count_abbreviated}',  'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'], 'text-size': 12 }});
          mymap.addLayer({ id: 'clusters-avalanches2004', type: 'circle', source: 'avalanches2004', filter: ['has', 'point_count'], paint: { 'circle-color': [ 'step', ['get', 'point_count'], '#51bbd6', 20, '#f1f075', 70, '#f28cb1' ], 'circle-radius': [ 'step', ['get', 'point_count'], 20, 100, 30, 750, 40 ] }});
          mymap.addLayer({ id: 'cluster-count-avalanches2004', type: 'symbol', source: 'avalanches2004', filter: ['has', 'point_count'], layout: { 'text-field': '{point_count_abbreviated}',  'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'], 'text-size': 12 }});
          mymap.addLayer({ id: 'clusters-avalanches2005', type: 'circle', source: 'avalanches2005', filter: ['has', 'point_count'], paint: { 'circle-color': [ 'step', ['get', 'point_count'], '#51bbd6', 20, '#f1f075', 70, '#f28cb1' ], 'circle-radius': [ 'step', ['get', 'point_count'], 20, 100, 30, 750, 40 ] }});
          mymap.addLayer({ id: 'cluster-count-avalanches2005', type: 'symbol', source: 'avalanches2005', filter: ['has', 'point_count'], layout: { 'text-field': '{point_count_abbreviated}',  'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'], 'text-size': 12 }});
          mymap.addLayer({ id: 'clusters-avalanches2006', type: 'circle', source: 'avalanches2006', filter: ['has', 'point_count'], paint: { 'circle-color': [ 'step', ['get', 'point_count'], '#51bbd6', 20, '#f1f075', 70, '#f28cb1' ], 'circle-radius': [ 'step', ['get', 'point_count'], 20, 100, 30, 750, 40 ] }});
          mymap.addLayer({ id: 'cluster-count-avalanches2006', type: 'symbol', source: 'avalanches2006', filter: ['has', 'point_count'], layout: { 'text-field': '{point_count_abbreviated}',  'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'], 'text-size': 12 }});
          mymap.addLayer({ id: 'clusters-avalanches2007', type: 'circle', source: 'avalanches2007', filter: ['has', 'point_count'], paint: { 'circle-color': [ 'step', ['get', 'point_count'], '#51bbd6', 20, '#f1f075', 70, '#f28cb1' ], 'circle-radius': [ 'step', ['get', 'point_count'], 20, 100, 30, 750, 40 ] }});
          mymap.addLayer({ id: 'cluster-count-avalanches2007', type: 'symbol', source: 'avalanches2007', filter: ['has', 'point_count'], layout: { 'text-field': '{point_count_abbreviated}',  'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'], 'text-size': 12 }});
          mymap.addLayer({ id: 'clusters-avalanches2008', type: 'circle', source: 'avalanches2008', filter: ['has', 'point_count'], paint: { 'circle-color': [ 'step', ['get', 'point_count'], '#51bbd6', 20, '#f1f075', 70, '#f28cb1' ], 'circle-radius': [ 'step', ['get', 'point_count'], 20, 100, 30, 750, 40 ] }});
          mymap.addLayer({ id: 'cluster-count-avalanches2008', type: 'symbol', source: 'avalanches2008', filter: ['has', 'point_count'], layout: { 'text-field': '{point_count_abbreviated}',  'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'], 'text-size': 12 }});
          mymap.addLayer({ id: 'clusters-avalanches2009', type: 'circle', source: 'avalanches2009', filter: ['has', 'point_count'], paint: { 'circle-color': [ 'step', ['get', 'point_count'], '#51bbd6', 20, '#f1f075', 70, '#f28cb1' ], 'circle-radius': [ 'step', ['get', 'point_count'], 20, 100, 30, 750, 40 ] }});
          mymap.addLayer({ id: 'cluster-count-avalanches2009', type: 'symbol', source: 'avalanches2009', filter: ['has', 'point_count'], layout: { 'text-field': '{point_count_abbreviated}',  'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'], 'text-size': 12 }});
          mymap.addLayer({ id: 'clusters-avalanches2010', type: 'circle', source: 'avalanches2010', filter: ['has', 'point_count'], paint: { 'circle-color': [ 'step', ['get', 'point_count'], '#51bbd6', 20, '#f1f075', 70, '#f28cb1' ], 'circle-radius': [ 'step', ['get', 'point_count'], 20, 100, 30, 750, 40 ] }});
          mymap.addLayer({ id: 'cluster-count-avalanches2010', type: 'symbol', source: 'avalanches2010', filter: ['has', 'point_count'], layout: { 'text-field': '{point_count_abbreviated}',  'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'], 'text-size': 12 }});
          mymap.addLayer({ id: 'clusters-avalanches2011', type: 'circle', source: 'avalanches2011', filter: ['has', 'point_count'], paint: { 'circle-color': [ 'step', ['get', 'point_count'], '#51bbd6', 20, '#f1f075', 70, '#f28cb1' ], 'circle-radius': [ 'step', ['get', 'point_count'], 20, 100, 30, 750, 40 ] }});
          mymap.addLayer({ id: 'cluster-count-avalanches2011', type: 'symbol', source: 'avalanches2011', filter: ['has', 'point_count'], layout: { 'text-field': '{point_count_abbreviated}',  'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'], 'text-size': 12 }});
          mymap.addLayer({ id: 'clusters-avalanches2012', type: 'circle', source: 'avalanches2012', filter: ['has', 'point_count'], paint: { 'circle-color': [ 'step', ['get', 'point_count'], '#51bbd6', 20, '#f1f075', 70, '#f28cb1' ], 'circle-radius': [ 'step', ['get', 'point_count'], 20, 100, 30, 750, 40 ] }});
          mymap.addLayer({ id: 'cluster-count-avalanches2012', type: 'symbol', source: 'avalanches2012', filter: ['has', 'point_count'], layout: { 'text-field': '{point_count_abbreviated}',  'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'], 'text-size': 12 }});
          mymap.addLayer({ id: 'clusters-avalanches2013', type: 'circle', source: 'avalanches2013', filter: ['has', 'point_count'], paint: { 'circle-color': [ 'step', ['get', 'point_count'], '#51bbd6', 20, '#f1f075', 70, '#f28cb1' ], 'circle-radius': [ 'step', ['get', 'point_count'], 20, 100, 30, 750, 40 ] }});
          mymap.addLayer({ id: 'cluster-count-avalanches2013', type: 'symbol', source: 'avalanches2013', filter: ['has', 'point_count'], layout: { 'text-field': '{point_count_abbreviated}',  'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'], 'text-size': 12 }});
          mymap.addLayer({ id: 'clusters-avalanches2014', type: 'circle', source: 'avalanches2014', filter: ['has', 'point_count'], paint: { 'circle-color': [ 'step', ['get', 'point_count'], '#51bbd6', 20, '#f1f075', 70, '#f28cb1' ], 'circle-radius': [ 'step', ['get', 'point_count'], 20, 100, 30, 750, 40 ] }});
          mymap.addLayer({ id: 'cluster-count-avalanches2014', type: 'symbol', source: 'avalanches2014', filter: ['has', 'point_count'], layout: { 'text-field': '{point_count_abbreviated}',  'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'], 'text-size': 12 }});
          mymap.addLayer({ id: 'clusters-avalanches2015', type: 'circle', source: 'avalanches2015', filter: ['has', 'point_count'], paint: { 'circle-color': [ 'step', ['get', 'point_count'], '#51bbd6', 20, '#f1f075', 70, '#f28cb1' ], 'circle-radius': [ 'step', ['get', 'point_count'], 20, 100, 30, 750, 40 ] }});
          mymap.addLayer({ id: 'cluster-count-avalanches2015', type: 'symbol', source: 'avalanches2015', filter: ['has', 'point_count'], layout: { 'text-field': '{point_count_abbreviated}',  'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'], 'text-size': 12 }});
          mymap.addLayer({ id: 'clusters-avalanches2016', type: 'circle', source: 'avalanches2016', filter: ['has', 'point_count'], paint: { 'circle-color': [ 'step', ['get', 'point_count'], '#51bbd6', 20, '#f1f075', 70, '#f28cb1' ], 'circle-radius': [ 'step', ['get', 'point_count'], 20, 100, 30, 750, 40 ] }});
          mymap.addLayer({ id: 'cluster-count-avalanches2016', type: 'symbol', source: 'avalanches2016', filter: ['has', 'point_count'], layout: { 'text-field': '{point_count_abbreviated}',  'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'], 'text-size': 12 }});
          mymap.addLayer({ id: 'clusters-avalanches2017', type: 'circle', source: 'avalanches2017', filter: ['has', 'point_count'], paint: { 'circle-color': [ 'step', ['get', 'point_count'], '#51bbd6', 20, '#f1f075', 70, '#f28cb1' ], 'circle-radius': [ 'step', ['get', 'point_count'], 20, 100, 30, 750, 40 ] }});
          mymap.addLayer({ id: 'cluster-count-avalanches2017', type: 'symbol', source: 'avalanches2017', filter: ['has', 'point_count'], layout: { 'text-field': '{point_count_abbreviated}',  'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'], 'text-size': 12 }});
          mymap.addLayer({ id: 'clusters-avalanches2018', type: 'circle', source: 'avalanches2018', filter: ['has', 'point_count'], paint: { 'circle-color': [ 'step', ['get', 'point_count'], '#51bbd6', 20, '#f1f075', 70, '#f28cb1' ], 'circle-radius': [ 'step', ['get', 'point_count'], 20, 100, 30, 750, 40 ] }});
          mymap.addLayer({ id: 'cluster-count-avalanches2018', type: 'symbol', source: 'avalanches2018', filter: ['has', 'point_count'], layout: { 'text-field': '{point_count_abbreviated}',  'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'], 'text-size': 12 }});
          mymap.addLayer({ id: 'clusters-avalanches2019', type: 'circle', source: 'avalanches2019', filter: ['has', 'point_count'], paint: { 'circle-color': [ 'step', ['get', 'point_count'], '#51bbd6', 20, '#f1f075', 70, '#f28cb1' ], 'circle-radius': [ 'step', ['get', 'point_count'], 20, 100, 30, 750, 40 ] }});
          mymap.addLayer({ id: 'cluster-count-avalanches2019', type: 'symbol', source: 'avalanches2019', filter: ['has', 'point_count'], layout: { 'text-field': '{point_count_abbreviated}',  'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'], 'text-size': 12 }});


          mymap.setLayoutProperty('avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2019', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2019', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2019', 'visibility', 'none');
            


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
                mymap.setLayoutProperty('clusters-avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2019', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2019', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2019', 'visibility', 'none');
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

    function handleChangeSelect(e) {
        e.preventDefault();
        e.stopPropagation();

        if(document.getElementById("annee").value == "toutes"){
            mymap.setLayoutProperty('points', 'visibility', 'visible');
            mymap.setLayoutProperty('clusters', 'visibility', 'visible');
            mymap.setLayoutProperty('cluster-count', 'visibility', 'visible');
            mymap.setLayoutProperty('avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2019', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2019', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2019', 'visibility', 'none');

        } else if(document.getElementById("annee").value == "1983"){
            mymap.setLayoutProperty('points', 'visibility', 'none');
            mymap.setLayoutProperty('clusters', 'visibility', 'none');
            mymap.setLayoutProperty('cluster-count', 'visibility', 'none');
            mymap.setLayoutProperty('avalanches1983', 'visibility', 'visible');
          mymap.setLayoutProperty('clusters-avalanches1983', 'visibility', 'visible');
          mymap.setLayoutProperty('cluster-count-avalanches1983', 'visibility', 'visible');
          mymap.setLayoutProperty('avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2019', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2019', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2019', 'visibility', 'none');

        } else if(document.getElementById("annee").value == "1986"){
            mymap.setLayoutProperty('points', 'visibility', 'none');
            mymap.setLayoutProperty('clusters', 'visibility', 'none');
            mymap.setLayoutProperty('cluster-count', 'visibility', 'none');
            mymap.setLayoutProperty('avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1986', 'visibility', 'visible');
          mymap.setLayoutProperty('clusters-avalanches1986', 'visibility', 'visible');
          mymap.setLayoutProperty('cluster-count-avalanches1986', 'visibility', 'visible');
          mymap.setLayoutProperty('avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2019', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2019', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2019', 'visibility', 'none');

        } else if(document.getElementById("annee").value == "1990"){
            mymap.setLayoutProperty('points', 'visibility', 'none');
            mymap.setLayoutProperty('clusters', 'visibility', 'none');
            mymap.setLayoutProperty('cluster-count', 'visibility', 'none');
            mymap.setLayoutProperty('avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1990', 'visibility', 'visible');
          mymap.setLayoutProperty('clusters-avalanches1990', 'visibility', 'visible');
          mymap.setLayoutProperty('cluster-count-avalanches1990', 'visibility', 'visible');
          mymap.setLayoutProperty('avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2019', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2019', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2019', 'visibility', 'none');

        } else if(document.getElementById("annee").value == "1991"){
            mymap.setLayoutProperty('points', 'visibility', 'none');
            mymap.setLayoutProperty('clusters', 'visibility', 'none');
            mymap.setLayoutProperty('cluster-count', 'visibility', 'none');
            mymap.setLayoutProperty('avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1991', 'visibility', 'visible');
          mymap.setLayoutProperty('clusters-avalanches1991', 'visibility', 'visible');
          mymap.setLayoutProperty('cluster-count-avalanches1991', 'visibility', 'visible');
          mymap.setLayoutProperty('avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2019', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2019', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2019', 'visibility', 'none');

        } else if(document.getElementById("annee").value == "1992"){
            mymap.setLayoutProperty('points', 'visibility', 'none');
            mymap.setLayoutProperty('clusters', 'visibility', 'none');
            mymap.setLayoutProperty('cluster-count', 'visibility', 'none');
            mymap.setLayoutProperty('avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1992', 'visibility', 'visible');
          mymap.setLayoutProperty('clusters-avalanches1992', 'visibility', 'visible');
          mymap.setLayoutProperty('cluster-count-avalanches1992', 'visibility', 'visible');
          mymap.setLayoutProperty('avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2019', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2019', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2019', 'visibility', 'none');

        } else if(document.getElementById("annee").value == "1993"){
            mymap.setLayoutProperty('points', 'visibility', 'none');
            mymap.setLayoutProperty('clusters', 'visibility', 'none');
            mymap.setLayoutProperty('cluster-count', 'visibility', 'none');
            mymap.setLayoutProperty('avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1993', 'visibility', 'visible');
          mymap.setLayoutProperty('clusters-avalanches1993', 'visibility', 'visible');
          mymap.setLayoutProperty('cluster-count-avalanches1993', 'visibility', 'visible');
          mymap.setLayoutProperty('avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2019', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2019', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2019', 'visibility', 'none');

        } else if(document.getElementById("annee").value == "1994"){
            mymap.setLayoutProperty('points', 'visibility', 'none');
            mymap.setLayoutProperty('clusters', 'visibility', 'none');
            mymap.setLayoutProperty('cluster-count', 'visibility', 'none');
            mymap.setLayoutProperty('avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1994', 'visibility', 'visible');
          mymap.setLayoutProperty('clusters-avalanches1994', 'visibility', 'visible');
          mymap.setLayoutProperty('cluster-count-avalanches1994', 'visibility', 'visible');
          mymap.setLayoutProperty('avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2019', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2019', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2019', 'visibility', 'none');

        } else if(document.getElementById("annee").value == "1995"){
            mymap.setLayoutProperty('points', 'visibility', 'none');
            mymap.setLayoutProperty('clusters', 'visibility', 'none');
            mymap.setLayoutProperty('cluster-count', 'visibility', 'none');
            mymap.setLayoutProperty('avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1995', 'visibility', 'visible');
          mymap.setLayoutProperty('clusters-avalanches1995', 'visibility', 'visible');
          mymap.setLayoutProperty('cluster-count-avalanches1995', 'visibility', 'visible');
          mymap.setLayoutProperty('avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2019', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2019', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2019', 'visibility', 'none');

        } else if(document.getElementById("annee").value == "1996"){
            mymap.setLayoutProperty('points', 'visibility', 'none');
            mymap.setLayoutProperty('clusters', 'visibility', 'none');
            mymap.setLayoutProperty('cluster-count', 'visibility', 'none');
            mymap.setLayoutProperty('avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1996', 'visibility', 'visible');
          mymap.setLayoutProperty('clusters-avalanches1996', 'visibility', 'visible');
          mymap.setLayoutProperty('cluster-count-avalanches1996', 'visibility', 'visible');
          mymap.setLayoutProperty('avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2019', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2019', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2019', 'visibility', 'none');

        } else if(document.getElementById("annee").value == "1997"){
            mymap.setLayoutProperty('points', 'visibility', 'none');
            mymap.setLayoutProperty('clusters', 'visibility', 'none');
            mymap.setLayoutProperty('cluster-count', 'visibility', 'none');
            mymap.setLayoutProperty('avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1997', 'visibility', 'visible');
          mymap.setLayoutProperty('clusters-avalanches1997', 'visibility', 'visible');
          mymap.setLayoutProperty('cluster-count-avalanches1997', 'visibility', 'visible');
          mymap.setLayoutProperty('avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2019', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2019', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2019', 'visibility', 'none');

        } else if(document.getElementById("annee").value == "1998"){
            mymap.setLayoutProperty('points', 'visibility', 'none');
            mymap.setLayoutProperty('clusters', 'visibility', 'none');
            mymap.setLayoutProperty('cluster-count', 'visibility', 'none');
            mymap.setLayoutProperty('avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1998', 'visibility', 'visible');
          mymap.setLayoutProperty('clusters-avalanches1998', 'visibility', 'visible');
          mymap.setLayoutProperty('cluster-count-avalanches1998', 'visibility', 'visible');
          mymap.setLayoutProperty('avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2019', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2019', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2019', 'visibility', 'none');

        } else if(document.getElementById("annee").value == "1999"){
            mymap.setLayoutProperty('points', 'visibility', 'none');
            mymap.setLayoutProperty('clusters', 'visibility', 'none');
            mymap.setLayoutProperty('cluster-count', 'visibility', 'none');
            mymap.setLayoutProperty('avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1999', 'visibility', 'visible');
          mymap.setLayoutProperty('clusters-avalanches1999', 'visibility', 'visible');
          mymap.setLayoutProperty('cluster-count-avalanches1999', 'visibility', 'visible');
          mymap.setLayoutProperty('avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2019', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2019', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2019', 'visibility', 'none');

        } else if(document.getElementById("annee").value == "2000"){
            mymap.setLayoutProperty('points', 'visibility', 'none');
            mymap.setLayoutProperty('clusters', 'visibility', 'none');
            mymap.setLayoutProperty('cluster-count', 'visibility', 'none');
            mymap.setLayoutProperty('avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2000', 'visibility', 'visible');
          mymap.setLayoutProperty('clusters-avalanches2000', 'visibility', 'visible');
          mymap.setLayoutProperty('cluster-count-avalanches2000', 'visibility', 'visible');
          mymap.setLayoutProperty('avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2019', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2019', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2019', 'visibility', 'none');

        } else if(document.getElementById("annee").value == "2001"){
            mymap.setLayoutProperty('points', 'visibility', 'none');
            mymap.setLayoutProperty('clusters', 'visibility', 'none');
            mymap.setLayoutProperty('cluster-count', 'visibility', 'none');
            mymap.setLayoutProperty('avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2001', 'visibility', 'visible');
          mymap.setLayoutProperty('clusters-avalanches2001', 'visibility', 'visible');
          mymap.setLayoutProperty('cluster-count-avalanches2001', 'visibility', 'visible');
          mymap.setLayoutProperty('avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2019', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2019', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2019', 'visibility', 'none');

        } else if(document.getElementById("annee").value == "2002"){
            mymap.setLayoutProperty('points', 'visibility', 'none');
            mymap.setLayoutProperty('clusters', 'visibility', 'none');
            mymap.setLayoutProperty('cluster-count', 'visibility', 'none');
            mymap.setLayoutProperty('avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2002', 'visibility', 'visible');
          mymap.setLayoutProperty('clusters-avalanches2002', 'visibility', 'visible');
          mymap.setLayoutProperty('cluster-count-avalanches2002', 'visibility', 'visible');
          mymap.setLayoutProperty('avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2019', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2019', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2019', 'visibility', 'none');

        } else if(document.getElementById("annee").value == "2003"){
            mymap.setLayoutProperty('points', 'visibility', 'none');
            mymap.setLayoutProperty('clusters', 'visibility', 'none');
            mymap.setLayoutProperty('cluster-count', 'visibility', 'none');
            mymap.setLayoutProperty('avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2003', 'visibility', 'visible');
          mymap.setLayoutProperty('clusters-avalanches2003', 'visibility', 'visible');
          mymap.setLayoutProperty('cluster-count-avalanches2003', 'visibility', 'visible');
          mymap.setLayoutProperty('avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2019', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2019', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2019', 'visibility', 'none');

        } else if(document.getElementById("annee").value == "2004"){
            mymap.setLayoutProperty('points', 'visibility', 'none');
            mymap.setLayoutProperty('clusters', 'visibility', 'none');
            mymap.setLayoutProperty('cluster-count', 'visibility', 'none');
            mymap.setLayoutProperty('avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2004', 'visibility', 'visible');
          mymap.setLayoutProperty('clusters-avalanches2004', 'visibility', 'visible');
          mymap.setLayoutProperty('cluster-count-avalanches2004', 'visibility', 'visible');
          mymap.setLayoutProperty('avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2019', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2019', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2019', 'visibility', 'none');

        } else if(document.getElementById("annee").value == "2005"){
            mymap.setLayoutProperty('points', 'visibility', 'none');
            mymap.setLayoutProperty('clusters', 'visibility', 'none');
            mymap.setLayoutProperty('cluster-count', 'visibility', 'none');
            mymap.setLayoutProperty('avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2005', 'visibility', 'visible');
          mymap.setLayoutProperty('clusters-avalanches2005', 'visibility', 'visible');
          mymap.setLayoutProperty('cluster-count-avalanches2005', 'visibility', 'visible');
          mymap.setLayoutProperty('avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2019', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2019', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2019', 'visibility', 'none');

        } else if(document.getElementById("annee").value == "2006"){
            mymap.setLayoutProperty('points', 'visibility', 'none');
            mymap.setLayoutProperty('clusters', 'visibility', 'none');
            mymap.setLayoutProperty('cluster-count', 'visibility', 'none');
            mymap.setLayoutProperty('avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2006', 'visibility', 'visible');
          mymap.setLayoutProperty('clusters-avalanches2006', 'visibility', 'visible');
          mymap.setLayoutProperty('cluster-count-avalanches2006', 'visibility', 'visible');
          mymap.setLayoutProperty('avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2019', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2019', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2019', 'visibility', 'none');

        } else if(document.getElementById("annee").value == "2007"){
            mymap.setLayoutProperty('points', 'visibility', 'none');
            mymap.setLayoutProperty('clusters', 'visibility', 'none');
            mymap.setLayoutProperty('cluster-count', 'visibility', 'none');
            mymap.setLayoutProperty('avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2007', 'visibility', 'visible');
          mymap.setLayoutProperty('clusters-avalanches2007', 'visibility', 'visible');
          mymap.setLayoutProperty('cluster-count-avalanches2007', 'visibility', 'visible');
          mymap.setLayoutProperty('avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2019', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2019', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2019', 'visibility', 'none');

        } else if(document.getElementById("annee").value == "2008"){
            mymap.setLayoutProperty('points', 'visibility', 'none');
          mymap.setLayoutProperty('clusters', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count', 'visibility', 'none');
            mymap.setLayoutProperty('avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2008', 'visibility', 'visible');
          mymap.setLayoutProperty('clusters-avalanches2008', 'visibility', 'visible');
          mymap.setLayoutProperty('cluster-count-avalanches2008', 'visibility', 'visible');
          mymap.setLayoutProperty('avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2019', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2019', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2019', 'visibility', 'none');

        } else if(document.getElementById("annee").value == "2009"){
            mymap.setLayoutProperty('points', 'visibility', 'none');
          mymap.setLayoutProperty('clusters', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count', 'visibility', 'none');
            mymap.setLayoutProperty('avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2009', 'visibility', 'visible');
          mymap.setLayoutProperty('clusters-avalanches2009', 'visibility', 'visible');
          mymap.setLayoutProperty('cluster-count-avalanches2009', 'visibility', 'visible');
          mymap.setLayoutProperty('avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2019', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2019', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2019', 'visibility', 'none');

        } else if(document.getElementById("annee").value == "2010"){
            mymap.setLayoutProperty('points', 'visibility', 'none');
          mymap.setLayoutProperty('clusters', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count', 'visibility', 'none');
            mymap.setLayoutProperty('avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2010', 'visibility', 'visible');
          mymap.setLayoutProperty('clusters-avalanches2010', 'visibility', 'visible');
          mymap.setLayoutProperty('cluster-count-avalanches2010', 'visibility', 'visible');
          mymap.setLayoutProperty('avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2019', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2019', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2019', 'visibility', 'none');

        } else if(document.getElementById("annee").value == "2011"){
            mymap.setLayoutProperty('points', 'visibility', 'none');
          mymap.setLayoutProperty('clusters', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count', 'visibility', 'none');
            mymap.setLayoutProperty('avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2011', 'visibility', 'visible');
          mymap.setLayoutProperty('clusters-avalanches2011', 'visibility', 'visible');
          mymap.setLayoutProperty('cluster-count-avalanches2011', 'visibility', 'visible');
          mymap.setLayoutProperty('avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2019', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2019', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2019', 'visibility', 'none');

        } else if(document.getElementById("annee").value == "2012"){
            mymap.setLayoutProperty('points', 'visibility', 'none');
          mymap.setLayoutProperty('clusters', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count', 'visibility', 'none');
            mymap.setLayoutProperty('avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2012', 'visibility', 'visible');
          mymap.setLayoutProperty('clusters-avalanches2012', 'visibility', 'visible');
          mymap.setLayoutProperty('cluster-count-avalanches2012', 'visibility', 'visible');
          mymap.setLayoutProperty('avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2019', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2019', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2019', 'visibility', 'none');

        } else if(document.getElementById("annee").value == "2013"){
            mymap.setLayoutProperty('points', 'visibility', 'none');
          mymap.setLayoutProperty('clusters', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count', 'visibility', 'none');
            mymap.setLayoutProperty('avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2013', 'visibility', 'visible');
          mymap.setLayoutProperty('clusters-avalanches2013', 'visibility', 'visible');
          mymap.setLayoutProperty('cluster-count-avalanches2013', 'visibility', 'visible');
          mymap.setLayoutProperty('avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2019', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2019', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2019', 'visibility', 'none');

        } else if(document.getElementById("annee").value == "2014"){
            mymap.setLayoutProperty('points', 'visibility', 'none');
          mymap.setLayoutProperty('clusters', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count', 'visibility', 'none');
            mymap.setLayoutProperty('avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2014', 'visibility', 'visible');
          mymap.setLayoutProperty('clusters-avalanches2014', 'visibility', 'visible');
          mymap.setLayoutProperty('cluster-count-avalanches2014', 'visibility', 'visible');
          mymap.setLayoutProperty('avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2019', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2019', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2019', 'visibility', 'none');

        } else if(document.getElementById("annee").value == "2015"){
            mymap.setLayoutProperty('points', 'visibility', 'none');
          mymap.setLayoutProperty('clusters', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count', 'visibility', 'none');
            mymap.setLayoutProperty('avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2015', 'visibility', 'visible');
          mymap.setLayoutProperty('clusters-avalanches2015', 'visibility', 'visible');
          mymap.setLayoutProperty('cluster-count-avalanches2015', 'visibility', 'visible');
          mymap.setLayoutProperty('avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2019', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2019', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2019', 'visibility', 'none');

        } else if(document.getElementById("annee").value == "2016"){
            mymap.setLayoutProperty('points', 'visibility', 'none');
          mymap.setLayoutProperty('clusters', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count', 'visibility', 'none');
            mymap.setLayoutProperty('avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2016', 'visibility', 'visible');
          mymap.setLayoutProperty('clusters-avalanches2016', 'visibility', 'visible');
          mymap.setLayoutProperty('cluster-count-avalanches2016', 'visibility', 'visible');
          mymap.setLayoutProperty('avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2019', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2019', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2019', 'visibility', 'none');

        } else if(document.getElementById("annee").value == "2017"){
            mymap.setLayoutProperty('points', 'visibility', 'none');
          mymap.setLayoutProperty('clusters', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count', 'visibility', 'none');
            mymap.setLayoutProperty('avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2017', 'visibility', 'visible');
          mymap.setLayoutProperty('clusters-avalanches2017', 'visibility', 'visible');
          mymap.setLayoutProperty('cluster-count-avalanches2017', 'visibility', 'visible');
          mymap.setLayoutProperty('avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2018', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2019', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2019', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2019', 'visibility', 'none');

        } else if(document.getElementById("annee").value == "2018"){
            mymap.setLayoutProperty('points', 'visibility', 'none');
          mymap.setLayoutProperty('clusters', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count', 'visibility', 'none');
            mymap.setLayoutProperty('avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1983', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1986', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1990', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1991', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1992', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1993', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1994', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1995', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1996', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1997', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1998', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches1999', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2000', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2001', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2002', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2003', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2004', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2005', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2006', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2007', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2008', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2009', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2010', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2011', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2012', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2013', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2014', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2015', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2016', 'visibility', 'none');
          mymap.setLayoutProperty('avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2017', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2017', 'visibility', 'visnoneible');
          mymap.setLayoutProperty('avalanches2018', 'visibility', 'visible');
          mymap.setLayoutProperty('clusters-avalanches2018', 'visibility', 'visible');
          mymap.setLayoutProperty('cluster-count-avalanches2018', 'visibility', 'visible');
          mymap.setLayoutProperty('avalanches2019', 'visibility', 'none');
          mymap.setLayoutProperty('clusters-avalanches2019', 'visibility', 'none');
          mymap.setLayoutProperty('cluster-count-avalanches2019', 'visibility', 'none');

        } else if(document.getElementById("annee").value == "2019"){
            mymap.setLayoutProperty('points', 'visibility', 'none');
            mymap.setLayoutProperty('clusters', 'visibility', 'none');
            mymap.setLayoutProperty('cluster-count', 'visibility', 'none');
            mymap.setLayoutProperty('avalanches1986', 'visibility', 'none');
            mymap.setLayoutProperty('clusters-avalanches1986', 'visibility', 'none');
            mymap.setLayoutProperty('cluster-count-avalanches1986', 'visibility', 'none');
            mymap.setLayoutProperty('avalanches1990', 'visibility', 'none');
            mymap.setLayoutProperty('clusters-avalanches1990', 'visibility', 'none');
            mymap.setLayoutProperty('cluster-count-avalanches1990', 'visibility', 'none');
            mymap.setLayoutProperty('avalanches1991', 'visibility', 'none');
            mymap.setLayoutProperty('clusters-avalanches1991', 'visibility', 'none');
            mymap.setLayoutProperty('cluster-count-avalanches1991', 'visibility', 'none');
            mymap.setLayoutProperty('avalanches1992', 'visibility', 'none');
            mymap.setLayoutProperty('clusters-avalanches1992', 'visibility', 'none');
            mymap.setLayoutProperty('cluster-count-avalanches1992', 'visibility', 'none');
            mymap.setLayoutProperty('avalanches1993', 'visibility', 'none');
            mymap.setLayoutProperty('clusters-avalanches1993', 'visibility', 'none');
            mymap.setLayoutProperty('cluster-count-avalanches1993', 'visibility', 'none');
            mymap.setLayoutProperty('avalanches1994', 'visibility', 'none');
            mymap.setLayoutProperty('clusters-avalanches1994', 'visibility', 'none');
            mymap.setLayoutProperty('cluster-count-avalanches1994', 'visibility', 'none');
            mymap.setLayoutProperty('avalanches1995', 'visibility', 'none');
            mymap.setLayoutProperty('clusters-avalanches1995', 'visibility', 'none');
            mymap.setLayoutProperty('cluster-count-avalanches1995', 'visibility', 'none');
            mymap.setLayoutProperty('avalanches1996', 'visibility', 'none');
            mymap.setLayoutProperty('clusters-avalanches1996', 'visibility', 'none');
            mymap.setLayoutProperty('cluster-count-avalanches1996', 'visibility', 'none');
            mymap.setLayoutProperty('avalanches1997', 'visibility', 'none');
            mymap.setLayoutProperty('clusters-avalanches1997', 'visibility', 'none');
            mymap.setLayoutProperty('cluster-count-avalanches1997', 'visibility', 'none');
            mymap.setLayoutProperty('avalanches1998', 'visibility', 'none');
            mymap.setLayoutProperty('clusters-avalanches1998', 'visibility', 'none');
            mymap.setLayoutProperty('cluster-count-avalanches1998', 'visibility', 'none');
            mymap.setLayoutProperty('avalanches1999', 'visibility', 'none');
            mymap.setLayoutProperty('clusters-avalanches1999', 'visibility', 'none');
            mymap.setLayoutProperty('cluster-count-avalanches1999', 'visibility', 'none');
            mymap.setLayoutProperty('avalanches2000', 'visibility', 'none');
            mymap.setLayoutProperty('clusters-avalanches2000', 'visibility', 'none');
            mymap.setLayoutProperty('cluster-count-avalanches2000', 'visibility', 'none');
            mymap.setLayoutProperty('avalanches2001', 'visibility', 'none');
            mymap.setLayoutProperty('clusters-avalanches2001', 'visibility', 'none');
            mymap.setLayoutProperty('cluster-count-avalanches2001', 'visibility', 'none');
            mymap.setLayoutProperty('avalanches2002', 'visibility', 'none');
            mymap.setLayoutProperty('clusters-avalanches2002', 'visibility', 'none');
            mymap.setLayoutProperty('cluster-count-avalanches2002', 'visibility', 'none');
            mymap.setLayoutProperty('avalanches2003', 'visibility', 'none');
            mymap.setLayoutProperty('clusters-avalanches2003', 'visibility', 'none');
            mymap.setLayoutProperty('cluster-count-avalanches2003', 'visibility', 'none');
            mymap.setLayoutProperty('avalanches2004', 'visibility', 'none');
            mymap.setLayoutProperty('clusters-avalanches2004', 'visibility', 'none');
            mymap.setLayoutProperty('cluster-count-avalanches2004', 'visibility', 'none');
            mymap.setLayoutProperty('avalanches2005', 'visibility', 'none');
            mymap.setLayoutProperty('clusters-avalanches2005', 'visibility', 'none');
            mymap.setLayoutProperty('cluster-count-avalanches2005', 'visibility', 'none');
            mymap.setLayoutProperty('avalanches2006', 'visibility', 'none');
            mymap.setLayoutProperty('clusters-avalanches2006', 'visibility', 'none');
            mymap.setLayoutProperty('cluster-count-avalanches2006', 'visibility', 'none');
            mymap.setLayoutProperty('avalanches2007', 'visibility', 'none');
            mymap.setLayoutProperty('clusters-avalanches2007', 'visibility', 'none');
            mymap.setLayoutProperty('cluster-count-avalanches2007', 'visibility', 'none');
            mymap.setLayoutProperty('avalanches2008', 'visibility', 'none');
            mymap.setLayoutProperty('clusters-avalanches2008', 'visibility', 'none');
            mymap.setLayoutProperty('cluster-count-avalanches2008', 'visibility', 'none');
            mymap.setLayoutProperty('avalanches2009', 'visibility', 'none');
            mymap.setLayoutProperty('clusters-avalanches2009', 'visibility', 'none');
            mymap.setLayoutProperty('cluster-count-avalanches2009', 'visibility', 'none');
            mymap.setLayoutProperty('avalanches2010', 'visibility', 'none');
            mymap.setLayoutProperty('clusters-avalanches2010', 'visibility', 'none');
            mymap.setLayoutProperty('cluster-count-avalanches2010', 'visibility', 'none');
            mymap.setLayoutProperty('avalanches2011', 'visibility', 'none');
            mymap.setLayoutProperty('clusters-avalanches2011', 'visibility', 'none');
            mymap.setLayoutProperty('cluster-count-avalanches2011', 'visibility', 'none');
            mymap.setLayoutProperty('avalanches2012', 'visibility', 'none');
            mymap.setLayoutProperty('clusters-avalanches2012', 'visibility', 'none');
            mymap.setLayoutProperty('cluster-count-avalanches2012', 'visibility', 'none');
            mymap.setLayoutProperty('avalanches2013', 'visibility', 'none');
            mymap.setLayoutProperty('clusters-avalanches2013', 'visibility', 'none');
            mymap.setLayoutProperty('cluster-count-avalanches2013', 'visibility', 'none');
            mymap.setLayoutProperty('avalanches2014', 'visibility', 'none');
            mymap.setLayoutProperty('clusters-avalanches2014', 'visibility', 'none');
            mymap.setLayoutProperty('cluster-count-avalanches2014', 'visibility', 'none');
            mymap.setLayoutProperty('avalanches2015', 'visibility', 'none');
            mymap.setLayoutProperty('clusters-avalanches2015', 'visibility', 'none');
            mymap.setLayoutProperty('cluster-count-avalanches2015', 'visibility', 'none');
            mymap.setLayoutProperty('avalanches2016', 'visibility', 'none');
            mymap.setLayoutProperty('clusters-avalanches2016', 'visibility', 'none');
            mymap.setLayoutProperty('cluster-count-avalanches2016', 'visibility', 'none');
            mymap.setLayoutProperty('avalanches2017', 'visibility', 'none');
            mymap.setLayoutProperty('clusters-avalanches2017', 'visibility', 'none');
            mymap.setLayoutProperty('cluster-count-avalanches2017', 'visibility', 'none');
            mymap.setLayoutProperty('avalanches2018', 'visibility', 'none');
            mymap.setLayoutProperty('clusters-avalanches2018', 'visibility', 'none');
            mymap.setLayoutProperty('cluster-count-avalanches2018', 'visibility', 'none');
            mymap.setLayoutProperty('avalanches2019', 'visibility', 'visible');
            mymap.setLayoutProperty('clusters-avalanches2019', 'visibility', 'visible');
            mymap.setLayoutProperty('cluster-count-avalanches2019', 'visibility', 'visible');
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
            $('#source').text(e.features[0].properties.URL); // remplace le contenu actuel du paragraphe par "Nouveau contenu !"
            $("#source").attr("href",lien);
        
        });
        mymap.on('click', 'avalanches1983', function(e) {
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
            $('#source').text(e.features[0].properties.URL); // remplace le contenu actuel du paragraphe par "Nouveau contenu !"
            $("#source").attr("href",lien);
        
        });
        mymap.on('click', 'avalanches1986', function(e) {
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
            $('#source').text(e.features[0].properties.URL); // remplace le contenu actuel du paragraphe par "Nouveau contenu !"
            $("#source").attr("href",lien);
        
        });
        mymap.on('click', 'avalanches1991', function(e) {
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
            $('#source').text(e.features[0].properties.URL); // remplace le contenu actuel du paragraphe par "Nouveau contenu !"
            $("#source").attr("href",lien);
        
        });
        mymap.on('click', 'avalanches1992', function(e) {
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
            $('#source').text(e.features[0].properties.URL); // remplace le contenu actuel du paragraphe par "Nouveau contenu !"
            $("#source").attr("href",lien);
        
        });
        mymap.on('click', 'avalanches1993', function(e) {
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
            $('#source').text(e.features[0].properties.URL); // remplace le contenu actuel du paragraphe par "Nouveau contenu !"
            $("#source").attr("href",lien);
        
        });
        mymap.on('click', 'avalanches1994', function(e) {
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
            $('#source').text(e.features[0].properties.URL); // remplace le contenu actuel du paragraphe par "Nouveau contenu !"
            $("#source").attr("href",lien);
        
        });
        mymap.on('click', 'avalanches1995', function(e) {
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
            $('#source').text(e.features[0].properties.URL); // remplace le contenu actuel du paragraphe par "Nouveau contenu !"
            $("#source").attr("href",lien);
        
        });
        mymap.on('click', 'avalanches1996', function(e) {
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
            $('#source').text(e.features[0].properties.URL); // remplace le contenu actuel du paragraphe par "Nouveau contenu !"
            $("#source").attr("href",lien);
        
        });
        mymap.on('click', 'avalanches1997', function(e) {
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
            $('#source').text(e.features[0].properties.URL); // remplace le contenu actuel du paragraphe par "Nouveau contenu !"
            $("#source").attr("src",lien);
        
        });
        mymap.on('click', 'avalanches1998', function(e) {
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
            $('#source').text(e.features[0].properties.URL); // remplace le contenu actuel du paragraphe par "Nouveau contenu !"
            $("#source").attr("href",lien);
        
        });
        mymap.on('click', 'avalanches1999', function(e) {
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
            $('#source').text(e.features[0].properties.URL); // remplace le contenu actuel du paragraphe par "Nouveau contenu !"
            $("#source").attr("href",lien);
        
        });
        mymap.on('click', 'avalanches2000', function(e) {
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
            $('#source').text(e.features[0].properties.URL); // remplace le contenu actuel du paragraphe par "Nouveau contenu !"
            $("#source").attr("href",lien);
        
        });
        mymap.on('click', 'avalanches2001', function(e) {
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
            $('#source').text(e.features[0].properties.URL); // remplace le contenu actuel du paragraphe par "Nouveau contenu !"
            $("#source").attr("href",lien);
        
        });
        mymap.on('click', 'avalanches2002', function(e) {
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
            $("#source").attr("href",lien);
        
        });
        mymap.on('click', 'avalanches2003', function(e) {
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
            $('#source').text(e.features[0].properties.URL); // remplace le contenu actuel du paragraphe par "Nouveau contenu !"
            $("#source").attr("href",lien);
        
        });
        mymap.on('click', 'avalanches2004', function(e) {
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
            $('#source').text(e.features[0].properties.URL); // remplace le contenu actuel du paragraphe par "Nouveau contenu !"
            $("#source").attr("href",lien);
        
        });
        mymap.on('click', 'avalanches2005', function(e) {
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
            $('#source').text(e.features[0].properties.URL); // remplace le contenu actuel du paragraphe par "Nouveau contenu !"
            $("#source").attr("href",lien);
        
        });
        mymap.on('click', 'avalanches2006', function(e) {
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
            $('#source').text(e.features[0].properties.URL); // remplace le contenu actuel du paragraphe par "Nouveau contenu !"
            $("#source").attr("href",lien);
        
        });
        mymap.on('click', 'avalanches2007', function(e) {
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
            $('#source').text(e.features[0].properties.URL); // remplace le contenu actuel du paragraphe par "Nouveau contenu !"
            $("#source").attr("href",lien);
        
        });
        mymap.on('click', 'avalanches2008', function(e) {
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
            $('#source').text(e.features[0].properties.URL); // remplace le contenu actuel du paragraphe par "Nouveau contenu !"
            $("#source").attr("href",lien);
        
        });
        mymap.on('click', 'avalanches2009', function(e) {
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
            $('#source').text(e.features[0].properties.URL); // remplace le contenu actuel du paragraphe par "Nouveau contenu !"
            $("#source").attr("href",lien);
        
        });
        mymap.on('click', 'avalanches2010', function(e) {
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
            $('#source').text(e.features[0].properties.URL); // remplace le contenu actuel du paragraphe par "Nouveau contenu !"
            $("#source").attr("href",lien);
        
        });
        mymap.on('click', 'avalanches2011', function(e) {
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
            $('#source').text(e.features[0].properties.URL); // remplace le contenu actuel du paragraphe par "Nouveau contenu !"
            $("#source").attr("href",lien);
        
        });
        mymap.on('click', 'avalanches2012', function(e) {
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
            $('#source').text(e.features[0].properties.URL); // remplace le contenu actuel du paragraphe par "Nouveau contenu !"
            $("#source").attr("href",lien);
        
        });
        mymap.on('click', 'avalanches2013', function(e) {
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
            $('#source').text(e.features[0].properties.URL); // remplace le contenu actuel du paragraphe par "Nouveau contenu !"
            $("#source").attr("href",lien);
        
        });
        mymap.on('click', 'avalanches2014', function(e) {
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
            $('#source').text(e.features[0].properties.URL); // remplace le contenu actuel du paragraphe par "Nouveau contenu !"
            $("#source").attr("href",lien);
        
        });
        mymap.on('click', 'avalanches2015', function(e) {
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
            $('#source').text(e.features[0].properties.URL); // remplace le contenu actuel du paragraphe par "Nouveau contenu !"
            $("#source").attr("href",lien);
        
        });
        mymap.on('click', 'avalanches2016', function(e) {
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
            $('#source').text(e.features[0].properties.URL); // remplace le contenu actuel du paragraphe par "Nouveau contenu !"
            $("#source").attr("href",lien);
        
        });
        mymap.on('click', 'avalanches2017', function(e) {
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
            $('#source').text(e.features[0].properties.URL); // remplace le contenu actuel du paragraphe par "Nouveau contenu !"
            $("#source").attr("href",lien);
        
        });
        mymap.on('click', 'avalanches2018', function(e) {
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
            $('#source').text(e.features[0].properties.URL); // remplace le contenu actuel du paragraphe par "Nouveau contenu !"
            $("#source").attr("href",lien);
        
        });
        mymap.on('click', 'avalanches2019', function(e) {
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
            $('#source').text(e.features[0].properties.URL); // remplace le contenu actuel du paragraphe par "Nouveau contenu !"
            $("#source").attr("href",lien);
        
        });

        // Change the cursor to a pointer when the mouse is over the states layer.
        mymap.on('mouseenter', 'points' , function() {
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
            // inspect a cluster on click
            mymap.on('click', 'clusters-avalanches1983', function(e) {
                    var features = mymap.queryRenderedFeatures(e.point, {
                        layers: ['clusters-avalanches1983']
                    });
                    var clusterId = features[0].properties.cluster_id;
                    mymap.getSource('avalanches1983').getClusterExpansionZoom(
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
            // inspect a cluster on click
            mymap.on('click', 'clusters-avalanches1986', function(e) {
                    var features = mymap.queryRenderedFeatures(e.point, {
                        layers: ['clusters-avalanches1986']
                    });
                    var clusterId = features[0].properties.cluster_id;
                    mymap.getSource('avalanches1986').getClusterExpansionZoom(
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
            // inspect a cluster on click
            mymap.on('click', 'clusters-avalanches1990', function(e) {
                    var features = mymap.queryRenderedFeatures(e.point, {
                        layers: ['clusters-avalanches1990']
                    });
                    var clusterId = features[0].properties.cluster_id;
                    mymap.getSource('avalanches1990').getClusterExpansionZoom(
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
            // inspect a cluster on click
            mymap.on('click', 'clusters-avalanches1990', function(e) {
                    var features = mymap.queryRenderedFeatures(e.point, {
                        layers: ['clusters-avalanches1990']
                    });
                    var clusterId = features[0].properties.cluster_id;
                    mymap.getSource('avalanches1990').getClusterExpansionZoom(
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
            // inspect a cluster on click
            mymap.on('click', 'clusters-avalanches1992', function(e) {
                    var features = mymap.queryRenderedFeatures(e.point, {
                        layers: ['clusters-avalanches1992']
                    });
                    var clusterId = features[0].properties.cluster_id;
                    mymap.getSource('avalanches1992').getClusterExpansionZoom(
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
            // inspect a cluster on click
            mymap.on('click', 'clusters-avalanches1993', function(e) {
                    var features = mymap.queryRenderedFeatures(e.point, {
                        layers: ['clusters-avalanches1993']
                    });
                    var clusterId = features[0].properties.cluster_id;
                    mymap.getSource('avalanches1993').getClusterExpansionZoom(
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
            // inspect a cluster on click
            mymap.on('click', 'clusters-avalanches1994', function(e) {
                    var features = mymap.queryRenderedFeatures(e.point, {
                        layers: ['clusters-avalanches1994']
                    });
                    var clusterId = features[0].properties.cluster_id;
                    mymap.getSource('avalanches1994').getClusterExpansionZoom(
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
            // inspect a cluster on click
            mymap.on('click', 'clusters-avalanches1995', function(e) {
                    var features = mymap.queryRenderedFeatures(e.point, {
                        layers: ['clusters-avalanches1995']
                    });
                    var clusterId = features[0].properties.cluster_id;
                    mymap.getSource('avalanches1995').getClusterExpansionZoom(
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
            // inspect a cluster on click
            mymap.on('click', 'clusters-avalanches1995', function(e) {
                    var features = mymap.queryRenderedFeatures(e.point, {
                        layers: ['clusters-avalanches1995']
                    });
                    var clusterId = features[0].properties.cluster_id;
                    mymap.getSource('avalanches1995').getClusterExpansionZoom(
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
            // inspect a cluster on click
            mymap.on('click', 'clusters-avalanches1996', function(e) {
                    var features = mymap.queryRenderedFeatures(e.point, {
                        layers: ['clusters-avalanches1996']
                    });
                    var clusterId = features[0].properties.cluster_id;
                    mymap.getSource('avalanches1996').getClusterExpansionZoom(
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
            // inspect a cluster on click
            mymap.on('click', 'clusters-avalanches1997', function(e) {
                    var features = mymap.queryRenderedFeatures(e.point, {
                        layers: ['clusters-avalanches1997']
                    });
                    var clusterId = features[0].properties.cluster_id;
                    mymap.getSource('avalanches1997').getClusterExpansionZoom(
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
            // inspect a cluster on click
            mymap.on('click', 'clusters-avalanches1998', function(e) {
                    var features = mymap.queryRenderedFeatures(e.point, {
                        layers: ['clusters-avalanches1998']
                    });
                    var clusterId = features[0].properties.cluster_id;
                    mymap.getSource('avalanches1998').getClusterExpansionZoom(
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
            // inspect a cluster on click
            mymap.on('click', 'clusters-avalanches1999', function(e) {
                    var features = mymap.queryRenderedFeatures(e.point, {
                        layers: ['clusters-avalanches1999']
                    });
                    var clusterId = features[0].properties.cluster_id;
                    mymap.getSource('avalanches1999').getClusterExpansionZoom(
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
            // inspect a cluster on click
            mymap.on('click', 'clusters-avalanches2000', function(e) {
                    var features = mymap.queryRenderedFeatures(e.point, {
                        layers: ['clusters-avalanches2000']
                    });
                    var clusterId = features[0].properties.cluster_id;
                    mymap.getSource('avalanches2000').getClusterExpansionZoom(
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
            // inspect a cluster on click
            mymap.on('click', 'clusters-avalanches2001', function(e) {
                    var features = mymap.queryRenderedFeatures(e.point, {
                        layers: ['clusters-avalanches2001']
                    });
                    var clusterId = features[0].properties.cluster_id;
                    mymap.getSource('avalanches2001').getClusterExpansionZoom(
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
            // inspect a cluster on click
            mymap.on('click', 'clusters-avalanches2002', function(e) {
                    var features = mymap.queryRenderedFeatures(e.point, {
                        layers: ['clusters-avalanches2002']
                    });
                    var clusterId = features[0].properties.cluster_id;
                    mymap.getSource('avalanches2002').getClusterExpansionZoom(
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
            // inspect a cluster on click
            mymap.on('click', 'clusters-avalanches2003', function(e) {
                    var features = mymap.queryRenderedFeatures(e.point, {
                        layers: ['clusters-avalanches2003']
                    });
                    var clusterId = features[0].properties.cluster_id;
                    mymap.getSource('avalanches2003').getClusterExpansionZoom(
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
            // inspect a cluster on click
            mymap.on('click', 'clusters-avalanches2004', function(e) {
                    var features = mymap.queryRenderedFeatures(e.point, {
                        layers: ['clusters-avalanches2004']
                    });
                    var clusterId = features[0].properties.cluster_id;
                    mymap.getSource('avalanches2004').getClusterExpansionZoom(
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
            // inspect a cluster on click
            mymap.on('click', 'clusters-avalanches2005', function(e) {
                    var features = mymap.queryRenderedFeatures(e.point, {
                        layers: ['clusters-avalanches2005']
                    });
                    var clusterId = features[0].properties.cluster_id;
                    mymap.getSource('avalanches2005').getClusterExpansionZoom(
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
            // inspect a cluster on click
            mymap.on('click', 'clusters-avalanches2006', function(e) {
                    var features = mymap.queryRenderedFeatures(e.point, {
                        layers: ['clusters-avalanches2006']
                    });
                    var clusterId = features[0].properties.cluster_id;
                    mymap.getSource('avalanches2006').getClusterExpansionZoom(
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
            // inspect a cluster on click
            mymap.on('click', 'clusters-avalanches2007', function(e) {
                    var features = mymap.queryRenderedFeatures(e.point, {
                        layers: ['clusters-avalanches2007']
                    });
                    var clusterId = features[0].properties.cluster_id;
                    mymap.getSource('avalanches2007').getClusterExpansionZoom(
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
            // inspect a cluster on click
            mymap.on('click', 'clusters-avalanches2008', function(e) {
                    var features = mymap.queryRenderedFeatures(e.point, {
                        layers: ['clusters-avalanches2008']
                    });
                    var clusterId = features[0].properties.cluster_id;
                    mymap.getSource('avalanches2008').getClusterExpansionZoom(
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
            // inspect a cluster on click
            mymap.on('click', 'clusters-avalanches2009', function(e) {
                    var features = mymap.queryRenderedFeatures(e.point, {
                        layers: ['clusters-avalanches2009']
                    });
                    var clusterId = features[0].properties.cluster_id;
                    mymap.getSource('avalanches2009').getClusterExpansionZoom(
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
            // inspect a cluster on click
            mymap.on('click', 'clusters-avalanches2010', function(e) {
                    var features = mymap.queryRenderedFeatures(e.point, {
                        layers: ['clusters-avalanches2010']
                    });
                    var clusterId = features[0].properties.cluster_id;
                    mymap.getSource('avalanches2010').getClusterExpansionZoom(
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
            // inspect a cluster on click
            mymap.on('click', 'clusters-avalanches2011', function(e) {
                    var features = mymap.queryRenderedFeatures(e.point, {
                        layers: ['clusters-avalanches2011']
                    });
                    var clusterId = features[0].properties.cluster_id;
                    mymap.getSource('avalanches2011').getClusterExpansionZoom(
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
            // inspect a cluster on click
            mymap.on('click', 'clusters-avalanches2012', function(e) {
                    var features = mymap.queryRenderedFeatures(e.point, {
                        layers: ['clusters-avalanches2012']
                    });
                    var clusterId = features[0].properties.cluster_id;
                    mymap.getSource('avalanches2012').getClusterExpansionZoom(
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
            // inspect a cluster on click
            mymap.on('click', 'clusters-avalanches2013', function(e) {
                    var features = mymap.queryRenderedFeatures(e.point, {
                        layers: ['clusters-avalanches2013']
                    });
                    var clusterId = features[0].properties.cluster_id;
                    mymap.getSource('avalanches2013').getClusterExpansionZoom(
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
            // inspect a cluster on click
            mymap.on('click', 'clusters-avalanches2014', function(e) {
                    var features = mymap.queryRenderedFeatures(e.point, {
                        layers: ['clusters-avalanches2014']
                    });
                    var clusterId = features[0].properties.cluster_id;
                    mymap.getSource('avalanches2014').getClusterExpansionZoom(
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
            // inspect a cluster on click
            mymap.on('click', 'clusters-avalanches2015', function(e) {
                    var features = mymap.queryRenderedFeatures(e.point, {
                        layers: ['clusters-avalanches2015']
                    });
                    var clusterId = features[0].properties.cluster_id;
                    mymap.getSource('avalanches2015').getClusterExpansionZoom(
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
            // inspect a cluster on click
            mymap.on('click', 'clusters-avalanches2016', function(e) {
                    var features = mymap.queryRenderedFeatures(e.point, {
                        layers: ['clusters-avalanches2016']
                    });
                    var clusterId = features[0].properties.cluster_id;
                    mymap.getSource('avalanches2016').getClusterExpansionZoom(
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
            // inspect a cluster on click
            mymap.on('click', 'clusters-avalanches2017', function(e) {
                    var features = mymap.queryRenderedFeatures(e.point, {
                        layers: ['clusters-avalanches2017']
                    });
                    var clusterId = features[0].properties.cluster_id;
                    mymap.getSource('avalanches2017').getClusterExpansionZoom(
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
            // inspect a cluster on click
            mymap.on('click', 'clusters-avalanches2018', function(e) {
                    var features = mymap.queryRenderedFeatures(e.point, {
                        layers: ['clusters-avalanches2018']
                    });
                    var clusterId = features[0].properties.cluster_id;
                    mymap.getSource('avalanches2018').getClusterExpansionZoom(
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
            // inspect a cluster on click
            mymap.on('click', 'clusters-avalanches2019', function(e) {
                    var features = mymap.queryRenderedFeatures(e.point, {
                        layers: ['clusters-avalanches2019']
                    });
                    var clusterId = features[0].properties.cluster_id;
                    mymap.getSource('avalanches2019').getClusterExpansionZoom(
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
