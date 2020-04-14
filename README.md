# Avalanches
LIFPROJET Printemps 2020

## La collecte de données

Plusieurs sources de données ont été explorées et exploitées:

Tout d'abord nous avons trouvé un premier jeu de données de Photo-interprétation collecté par l'IRSTEA, nommé CLPA.

Par la suite nous avons exploité un jeu de données montrant les accidents dûs aux avalanches trouvé sur le site de l'ANENA.

Enfin nous avons utilisé un scraper afin de parcourir le site data-avalanche.org et de récupérer des données sur les avalanches que l'association a recensées.

## Le site

Ce site est composé de deux parties principales:

Une première affichant une carte sur laquelle sont épinglées différentes avalanches contenues dans plusieurs jeux de données.

Une seconde partie affichant une analyse statistiques du jeu de données le plus volumineux qui contient environ 2500 avalanches.

### La carte

La carte a été implémentée grâce à la librairie Javascript Mapbox.
Cet outil permet de créer un fond de carte adapté au sujet traité ainsi que plusieurs layers qui contiennent les informations sur les avalanches.
Ces layers sont par la suite ajoutés à la carte selon les actions de l'utilisateur.

### L'analyse

jkslhgfljsdfghqs

## Le code

### Les technos utilisées

Le site web a été développé grâce à l'utilisation framework Slim PHP, du moteur de templates Twig.
JavaScript et les librairies JQuery et Mapbox ont été indispensable pour implémenter la carte et la rendre interactive.

La récupération de données sur le web a été réalisée grace à un scrapper codé en Python.

### L'architecture

Le fichier index.php agit comme point d'entrée du site et de controlleur

Le dossier app contient d'un coté les différentes pages du site & de l'autre les fichiers geojson dans lesquels sont renseignées les données sur les avalanches

Le dossier public contient le fichier CSS d'une part et les scripts JavaScript permettant l'affichage de la carte et les interactions avec l'utilisateur. Les polices et les images affichées se trouvent également à cet endroit.

Le dossier script contient quant-à lui le code python du scrapper.

Dans le dossier vendor sont répertoriées toutes les dépendances nécéssaires au bon fonctionnement du site, notamment les librairies Twig et Slim PHP.
