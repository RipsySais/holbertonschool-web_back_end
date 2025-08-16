#!/usr/bin/env python3
""" 10-update_topics """
def update_topics(mongo_collection, name, topics):
    """
    Update the topics of a school document based on its name.

    Args:
        mongo_collection: pymongo collection object
        name (str): Name of the school to update
        topics (list of str): List of topics to set for the school

    Returns:
        None
    """
    # Utilisation de update_one pour mettre à jour le document correspondant au nom
    mongo_collection.update_one(
        {"name": name},  # Filtre sur le nom de l'école
        {"$set": {"topics": topics}}  # Met à jour le champ 'topics'
    )
