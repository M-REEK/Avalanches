# -*- coding: utf-8 -*-
"""
Created on Tue Feb 25 15:57:51 2020

@author: et8ge
"""

import csv
import sklearn

#with open('Dataset_Avalanches_Activité_originel.csv', newline='') as csvfile:
#    reader = csv.DictReader(csvfile)
#    for row in reader:
#        print(row)



import pandas as pd

ma_ligne = 10
ma_colonne = 10
with open("Dataset_Avalanches_Activité_originel.csv") as f:
    reader = pd.read_csv(f)
ma_valeur = reader.iloc[ma_ligne, ma_colonne]
print(reader)




























