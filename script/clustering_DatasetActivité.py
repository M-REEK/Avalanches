# -*- coding: utf-8 -*-
"""
Created on Tue Feb 25 15:57:51 2020

@author: et8ge
"""

import json
import sklearn

#with open('Dataset_Avalanches_Activité_originel.csv', newline='') as csvfile:
#    reader = csv.DictReader(csvfile)
#    for row in reader:
#        print(row)


with open('C:/wamp64/www/Avalanches/app/models/dataset/Dataset_Avalanches_Activité_originel.json') as json_data:
    data_dict = json.load(json_data)
for row in data_dict :
    print(row)




















































