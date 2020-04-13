# -*- coding: utf-8 -*-
"""
Created on Wed Mar 11 16:33:59 2020

@author: et8ge
"""
import os
import string

import selenium
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from bs4 import BeautifulSoup
import re
import json

url_patern = 'http://www.data-avalanche.org/avalanche/'
url_init = 'http://www.data-avalanche.org/avalanche/1351431005476'
url_last = 'http://www.data-avalanche.org/avalanche/1585675415865'
url_temp = 'http://www.data-avalanche.org/avalanche/50000058'
url_check_last = url_init

# constante du nombre maximal de lignes au-dela de laquelle elle seront insérée dans le document
CACHE_NB_LIGNES_MAX = 100
# nombre de boucle que l'algo doit effectuer, doit être supérieur au nombre total d'avalanches contenues sur le site
BOUCLE_MAX = 3000
# nom du fichier cible
FICHIER_CIBLE = "DataAvalancheOrg_test.json"
# liste-cache des avalanches chargées
list_avalanche = []

# suppression du fichier json s'il existe
if (os.path.isfile(FICHIER_CIBLE)) :
    while(1) :
        print("fichier cible existant !")
        rep = input("Voulez-vous le supprimer ? (y/n)")
        if rep == "y" or rep =="Y" or rep == "o" or rep == "O" or rep == "oui" or rep == "yes" or rep == "yep":
            os.remove(FICHIER_CIBLE)
            print("le fichier a été supprimé, un nouveau sera crée.")
            break

        elif rep == "n" or rep == "N" or rep == "non" or rep == "no" or rep == "nop":
            print("fichier conservé, les avalanches seront placées à la suite.")
            break

        else :
            print("la commande na pas été comprise, veuillez la réitérer...")

# Ouverture du navigateur et accès à la premiere avalanche du site
driver = webdriver.Firefox()
driver.get(url_temp)



# pour chaque page...
for i in range(BOUCLE_MAX):
    # extraction de toute la page en html
    html_page = BeautifulSoup(driver.page_source, 'html.parser')
    # extraction des balise <script> sur la page
    data_html = html_page.find_all("script")

    #extraction du tuple qui nous interesse dans la page
    data = re.findall("JSON\.parse\('(.+),\\\\\"localisation", str(data_html[1]))
    if (len(data)==0):
        data = re.findall("JSON\.parse\('(.+),\\\\\"thumbnails", str(data_html[1]))

    #decodage unicode 1
    data = data[0].encode().decode('unicode-escape') + "}"

    #Création du dictionnaire json
    data_dict = json.loads(data)

    # ajout d'une propriété renseignant le nombre de décédés
    data_dict["décédés"] = "nc"

    # modification du format de dateStr
    bon_format = data_dict["dateStr"].replace(" ", "/")
    data_dict["dateStr"] = bon_format

    # ajout d'une propriété renseigant uniquement le mois
    mois = re.findall("[0-3][0-9]/([0-1][0-9])/[0-9]{4}", data_dict["dateStr"])
    data_dict["mois"] = mois[0]

    #ajout d'une propriété renseignant uniquement l'année
    annee = re.findall("[0-3][0-9]/[0-1][0-9]/([0-9]{4})", data_dict["dateStr"])
    data_dict["année"] = annee[0]

    #Ajout de l'url de la page de l'avalanche au dictionnaire
    data_dict["URL"] = driver.current_url

    # nettoyage de la description de l'avalanche
    raw_desc = BeautifulSoup(data_dict["description"], features="html.parser").get_text() # retire toutes les balises html
    substitut = str.maketrans("\n\t\r", "   ") # créé une substitution pour les caractère spéciaux
    clean_desc = raw_desc.translate(substitut) # applique la subsitution à la description
    data_dict["description"] = clean_desc # affecte la description nettoyé à la propriété ad hoc de l'avalanche

    # retraint de la propriété auteurs_photos (inutile)
    del data_dict["auteurs_photos"]

    # Si le fichier n'existe pas, il est créé et la premiere avalanche y est insérée
    if not (os.path.isfile(FICHIER_CIBLE)):
        print("# Création du fichier ' " + FICHIER_CIBLE + "'")
        with open(FICHIER_CIBLE, 'w', encoding='utf-8') as json_file:
            json.dump(data_dict, json_file)
        print("| Ajout de l'avalanche " + str(data_dict["id"]) + " au fichier")
    else :
        # accrétion des données dans un tableau
        list_avalanche.append(data_dict)
        print("Ajout de l'avalanche " + str(data_dict["id"]) + " à la liste cache")

    # vidage de la liste des avalanches quand le nombre de lignes est supérieur à CACHE_NB_LIGNES_MAX
    if(len(list_avalanche) >= CACHE_NB_LIGNES_MAX) :
        print("# vidage de la liste cache")
        with open(FICHIER_CIBLE, 'a', encoding='utf-8') as json_file:
            for a in list_avalanche :
                json_file.write(",\n")  # ajoute une virgule et un saut de ligne à la fin de chaque ligne
                json.dump(a, json_file)
        print("# vidage de la liste cache")
        for a in list_avalanche :
            print("| Ajout de l'avalanche " + str(a["id"]) + " au fichier")
        list_avalanche.clear()

# Recherche du bouton pour passer à l'avalanche suivante
    try :
        button = driver.find_element_by_css_selector('a.btn:nth-child(2)')
        element = WebDriverWait(driver, 10).until(lambda x: x.find_element_by_css_selector("a.btn:nth-child(2)"))
        button.click()
    except selenium.common.exceptions.ElementClickInterceptedException :
        url_fail = driver.current_url

        # Compare les 2 dernieres URL ratées
        # Si elles sont identiques mais différentes de la premiere avalanche du site,
        # Alors c'est la derniere avalanche du site
        if(url_check_last == url_fail) and (url_fail != url_init) :
            print("Dernieres avalanches !")
            # suppression de la derniere entrée, qui correspond au doublon de la précédente, i.e. la derniere
            list_avalanche.pop(len(list_avalanche)-1)
            #serialisation du JSON
            with open(FICHIER_CIBLE, 'a', encoding='utf-8') as json_file:
                for a in list_avalanche:
                    json_file.write(",\n")  # ajoute une virgule et un saut de ligne à la fin de chaque ligne
                    json.dump(a, json_file)
            print("# vidage de la liste cache")
            for a in list_avalanche:
                print("| Ajout de l'avalanche " + str(a["id"]) + " au fichier")
            list_avalanche.clear()
            driver.close()
        else :
            print("problème de connection, chargement de la page trop long... (ou derniere page et cest normal !)")
            print("Page non-scrapée (ou derniere page et c'est normal !) : " + url_fail)
            url_check_last = url_fail
            continue
    except selenium.common.exceptions.InvalidSessionIdException :
        print("Fermeture du navigateur")
        continue

# fermeture du navigateur
driver.close()


# Fontions for MANUALLY PROCESSING
# def val_or_none(var):
#     if (var[0] is None):
#         var = ""
#     else:
#         var = var[0]
#     return var

###   MANUALLY PROCESSING... FAIL !
#
#     id = re.findall("(?<=id\":)[0-9]*", data)
#     id = val_or_none(id)
#     print(id)
#
#     pays = re.findall("(?<=pays\":\")[A-Za-z \u0027áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]*", data)
#     pays = val_or_none(pays)
#
#     massif = re.findall("(?<=massif\":\")[A-Za-z \u0027áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]*", data)
#     massif = val_or_none(massif)
#
#     sommet = re.findall("(?<=sommet\":\")[A-Za-z \u0027éèêëàâäiïîüûù]*", data)
#     sommet = val_or_none(sommet)
#
#     itineraire = re.findall("(?<=itineraire\":\")[A-Za-z \u0027áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]*", data)
#     itineraire = val_or_none(itineraire)
#
#     orientation = re.findall("(?<=orientation\":\")[A-Za-z \u0027áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]*", data)
#     orientation = val_or_none(orientation)
#
#     dateStr = re.findall("(?<=dateStr\":\")[A-Za-z0-9 \u0027áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]*", data)
#     dateStr = val_or_none(dateStr)
#
#     heureAuPlusTot = re.findall("(?<=heureAuPlusTot\":\")[0-9:]*", data)
#     heureAuPlusTot = val_or_none(heureAuPlusTot)
#
#     description = re.findall("(?<=description\":\")[A-Za-z \u0027áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]*",data)
#     description = val_or_none(description)
#
#     declenchement_a_distance = re.findall("(?<=declenchement_a_distance\":)[A-Za-z \'áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]*", str(data))
#     declenchement_a_distance = val_or_none(declenchement_a_distance)
#
#     distance_declenchement = re.findall("(?<=distance_declenchement\":)[0-9]*", str(data))
#     distance_declenchement = val_or_none(distance_declenchement)
#
#     caracteristique = re.findall("(?<=caracteristique\":\")[A-Za-z \'áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]*", str(data))
#     caracteristique = val_or_none(caracteristique)
#
#     denivele = re.findall("(?<=denivele\":)[0-9]*", str(data))
#     denivele = val_or_none(denivele)
#
#     origine_principale =re.findall("(?<=origine_principale\":\")[A-Za-z \'áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]*", str(data))
#     origine_principale = val_or_none(origine_principale)
#
#     origine_secondaire = re.findall("(?<=origine_secondaire\":\")[A-Za-z \'áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]*", str(data))
#     origine_secondaire = val_or_none(origine_secondaire)
#
#     altitude_depart = re.findall("(?<=altitude_depart\":)[0-9]*", str(data))
#     altitude_depart = val_or_none(altitude_depart)
#
#     commentaire_zone_depart = re.findall("(?<=commentaire_zone_depart\":\")[A-Za-z \'áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]*", str(data))
#     commentaire_zone_depart = val_or_none(commentaire_zone_depart)
#
#     epaisseur_rupture = re.findall("(?<=epaisseur_rupture\":)[0-9.]*", str(data))
#     epaisseur_rupture = val_or_none(epaisseur_rupture)
#
#     epaisseur_max_rupture = re.findall("(?<=epaisseur_max_rupture\":)[0-9.]*", str(data))
#     epaisseur_max_rupture = val_or_none(epaisseur_max_rupture)
#
#     longueur_rupture = re.findall("(?<=longueur_rupture\":)[0-9.]*", str(data))
#     longueur_rupture = val_or_none(longueur_rupture)
#
#     type_ecoulement_principal = re.findall("(?<=type_ecoulement_principal\":\")[A-Za-z \'áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]*", str(data))
#     type_ecoulement_principal = val_or_none(type_ecoulement_principal)
#
#     commentaire_type_ecoulement = re.findall("(?<=commentaire_type_ecoulement\":\")[A-Za-z \'áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]*", str(data))
#     commentaire_type_ecoulement = val_or_none(commentaire_type_ecoulement)
#
#     altitude_arrivee = re.findall("(?<=altitude_arrivee\":)[0-9]*", str(data))
#     altitude_arrivee = val_or_none(altitude_arrivee)
#
#     commentaire_zone_arrivee = re.findall("(?<=commentaire_zone_arrivee\":\")[A-Za-z \'áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]*", str(data))
#     commentaire_zone_arrivee = val_or_none(commentaire_zone_arrivee)
#
#     qualite_neige = re.findall("(?<=qualite_neige\":\")[A-Za-z \'áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]*", str(data))
#     qualite_neige = val_or_none(qualite_neige)
#
#     commentaire_qualite_neige = re.findall("(?<=commentaire_qualite_neige\":\")[A-Za-z \'áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]*", str(data))
#     commentaire_qualite_neige = val_or_none(commentaire_qualite_neige)
#
#     commentaire_qualite_transportee = re.findall("(?<=commentaire_qualite_transportee\":\")[A-Za-z \'áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]*", str(data))
#     commentaire_qualite_transportee = val_or_none(commentaire_qualite_transportee)
#
#     risque_meteo_france = re.findall("(?<=risque_meteo_france\":\")[A-Za-z0-9\- \'áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]*", str(data))
#     risque_meteo_france = val_or_none(risque_meteo_france)
#
#     lat_long = re.findall("-?([1-8]?[0-9]\.{1}\d{3,15}|90\.{1}0{3,15})", str(data))
#
#     if (len(lat_long) < 1):
#         lat = ""
#         long = ""
#     else:
#         lat = lat_long[0]
#         long = lat_long[1]
#
# #Apercu console
#     print("ID : " + id)
#     print("Pays = " + pays)
#     print("Massif = " + massif)
#     print("Sommet = " + sommet)
#     print("Itinéraire = " + itineraire)
#     print("Orientation = " + orientation)
#
#     print("Date = " + dateStr)
#     print("Heure = " + heureAuPlusTot)
#     print("Description = " + description)
#     print("Déclenchement à distance = " + declenchement_a_distance)
#     print("Distance de déclenchement = " + distance_declenchement)
#     print("Caractéristiques = " + caracteristique)
#     print("Dénivelé = " + denivele)
#     print("Origine principale = " + origine_principale)
#     print("Origine secondaire = " + origine_secondaire)
#     print("Altitude de départ = " + altitude_depart)
#     print("Commentaire zone départ = " + commentaire_zone_depart)
#     print("Epaisseur de rupture =  " + epaisseur_rupture)
#     print("Epaisseur max de rupture = " + epaisseur_max_rupture)
#     print("Longueur de rupture = " + longueur_rupture)
#     print("Type d'écoulement principal = " + type_ecoulement_principal)
#     print("Commentaire_type_ecoulement = " + commentaire_type_ecoulement)
#     print("Altitude d'arrivée = " + altitude_arrivee)
#     print("Commentaire zone arrivée = " + commentaire_zone_arrivee)
#     print("Qualite de la neige = " + qualite_neige)
#     print("Commentaire qualité de la neige = " + commentaire_qualite_neige)
#     print("Commentaire qualité transportée = " + commentaire_qualite_transportee)
#     print("Risque meteo france = " + risque_meteo_france)
#
#     print("lat, long : " + lat + ", " + long)
