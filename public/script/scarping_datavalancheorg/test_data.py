import json

with open('DataAvalancheOrg1.json', 'r', encoding='utf-8') as json_data :
    print(json_data)
    data_dict = json.load(json_data)

print(data_dict)