import json

from matplotlib import pyplot
from sklearn.cluster import KMeans
import numpy as np
import matplotlib.pyplot as plt
from matplotlib.pyplot import figure
import pandas as pd

# with open('DataAvalancheOrg.json') as f:
#     data = json.load(f)

#print(data)

#coordinates = [feature['geometry']['coordinates'] for feature in data['features']]
#coordinates = np.array(coordinates)#Train model


tab_raw_avalanche = pd.read_json (r'DataAvalancheOrg.json')
pd.set_option('display.max_rows', None)

nb_ava_par_an = pd.Series(tab_raw_avalanche.groupby('année').size().sort_index(axis = 0))
print(nb_ava_par_an)
nb_ava_par_an.plot()
plt.title("Nombre d'avalanche par an")
plt.ylabel("Nb d'avalanche")
plt.show()

# on peut estimer que le nombre d'avalanche est significatif à partir de 2008

nb_ava_par_an = nb_ava_par_an[nb_ava_par_an.between(90,9999)]
annee_seuil = nb_ava_par_an.index[0]
nb_ava_par_an.plot()
plt.title("Nombre d'avalanche par an")
plt.ylabel("Nb d'avalanche")
plt.show()

#
tab_avalanche_post_2008 = tab_raw_avalanche[tab_raw_avalanche['année'].between(annee_seuil, 9999)]
print(tab_avalanche_post_2008['année'])
freq_ava = tab_avalanche_post_2008.groupby('mois').size().sort_index(axis = 0)
print(freq_ava)
freq_ava.plot()
plt.title("Fréquence des avalanche par mois")
plt.ylabel("nb d'avalanche")
plt.show()


#print(coordinates)

# kmeans = KMeans(n_clusters=5)
#
# kmeans.fit(coordinates)#Plot clusters
#
# plt.figure(num=None, figsize=(10, 10), dpi=80, facecolor='w', edgecolor='k')
#
# plt.scatter(coordinates[:, 0], coordinates[:, 1], c=kmeans.predict(coordinates), s=50, cmap='viridis')
#
# # centers = kmeans.cluster_centers_
# #
# # plt.xlim(min(coordinates[:,0]) - 10, -50)
# #
# # plt.scatter(centers[:, 0],
# #             centers[:, 1],
# #             c='black',
# #             s=200,
# #             alpha=0.5);
#
# plt.show()