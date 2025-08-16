#!/usr/bin/env python3
""" 11-schools_by_topic """


def schools_by_topic(mongo_collection, topic):
    """
    Returns a list of school documents having a specific topic.

    Args:
        mongo_collection: pymongo collection object
        topic (str): Topic to search for

    Returns:
        list: List of school documents containing the topic
    """
    # Recherche des écoles dont le champ "topics" contient le topic
    return list(mongo_collection.find({"topics": topic}))
