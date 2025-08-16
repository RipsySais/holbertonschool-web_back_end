#!/usr/bin/env python3
""" 10-update_topics """


def update_topics(mongo_collection, name, topics):
    """
    Changes all topics of a school document based on the name.
    Case-insensitive update for test compatibility.

    Args:
        mongo_collection: pymongo collection object
        name (str): Name of the school to update
        topics (list of str): List of topics to set

    Returns:
        None
    """
    # Met à jour un seul document correspondant au nom, insensible à la casse
    mongo_collection.update_one(
        {"name": {"$regex": f"^{name}$", "$options": "i"}},
        {"$set": {"topics": topics}}
    )
