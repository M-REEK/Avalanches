import simplejson as json

data = json.load(open('DataAvalancheOrg_test.json'))

geojson = {
    "type": "FeatureCollection",
    "features": [
    {
        "type": "Feature",
        "geometry" : {
            "type": "Point",
            "coordinates": [d["longitude"], d["latitude"]],
            },
        "properties" : d,
     } for d in data]
}

output = open('DataAvalancheOrg_test.geojson', 'w')
json.dump(geojson, output)

print(geojson)