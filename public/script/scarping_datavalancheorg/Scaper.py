# -*- coding: utf-8 -*-
"""
Created on Wed Mar 11 16:33:59 2020

@author: et8ge
"""
import selenium
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from bs4 import BeautifulSoup
import re
import json

# Fontions for MANUALLY PROCESSING
# def val_or_none(var):
#     if (var[0] is None):
#         var = ""
#     else:
#         var = var[0]
#     return var

url_patern = 'http://www.data-avalanche.org/avalanche/'
url_init = 'http://www.data-avalanche.org/avalanche/1351431005476'
url_last = 'http://www.data-avalanche.org/avalanche/1585675415865'
url_temp = 'http://www.data-avalanche.org/avalanche/1542443688305'
url_fail_prec = url_init

url_2_tier_init = 'http://www.data-avalanche.org/avalanche/1362834789133'
url_3_tier_init = 'http://www.data-avalanche.org/avalanche/1514801165640'

# Ouverture du navigateur et accès à la premiere avalanche du site
driver = webdriver.Firefox()
driver.get(url_3_tier_init)

#creation du json final
json_avalanche = []

# pour chaque page...
for i in range(3000):
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

    #Ajout de l'url de la page de l'avalanche au dictionnaire
    data_dict["URL"] = driver.current_url

    #dumping du dict
    json_avalanche.append(json.dumps(data_dict).encode().decode('unicode-escape'))
    print(json.dumps(data_dict).encode().decode('unicode-escape'))

    #affichage des infos du dictionnaire
    # print("----------Infos Scrapées----------")
    # for cle, val in data_dict.items() :
    #     print(cle + " : " + str(val))


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

    # 1er tier
    if (driver.current_url == 'http://www.data-avalanche.org/avalanche/1362850966301') :
        with open('DataAvalancheOrg1.json', 'w', encoding='utf-8') as json_file:
            json_file.write(json.dumps(json_avalanche).encode().decode('unicode-escape'))

    # 2ieme tier
    elif (driver.current_url == 'http://www.data-avalanche.org/avalanche/1514795696856') :
        with open('DataAvalancheOrg2.json', 'w', encoding='utf-8') as json_file:
            json_file.write(json.dumps(json_avalanche).encode().decode('unicode-escape'))

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
        if(url_fail_prec == url_fail) and (url_fail != url_init) :
            print("Derniere avalanche !")

            #serialisation du JSON
            with open('DataAvalancheOrg3.json', 'w', encoding='utf-8') as json_file:
                json_file.write(json.dumps(json_avalanche).encode().decode('unicode-escape'))
                #json.dump(json_avalanche, json_file, ensure_ascii=False)

            driver.close()
        else :
            print("problème de connection, chargement de la page trop long...")
            print("Page non-scrapée : " + url_fail)
            url_fail_prec = url_fail
            continue
    except selenium.common.exceptions.InvalidSessionIdException :
        print("Fermeture du navigateur")

driver.close()