#!/usr/bin/env python3
"""8-main.py: affiche toutes les écoles de la collection 'school'"""

from pymongo import MongoClient
list_all = __import__('8-all').list_all  # importe la fonction list_all

if __name__ == "__main__":
    # Connexion au serveur MongoDB local
    client = MongoClient('mongodb://127.0.0.1:27017')

    # Sélection de la base 'my_db' et de la collection 'school'
    school_collection = client.my_db.school

    # Récupère tous les documents via la fonction list_all
    schools = list_all(school_collection)

    # Affiche chaque école dans le format demandé
    for school in schools:
        # Convertit l'_id en str pour éviter des problèmes d'affichage
        print("[{}] {}".format(str(school.get('_id')), school.get('name')))
