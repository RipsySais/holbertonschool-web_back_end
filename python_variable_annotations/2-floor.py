#!/usr/bin/env python3
"""
Type-annotated function that returns the floor of a float.
"""

import math


def floor(n: float) -> int:
    """
    Return the floor of a float number.
    
    Args:
        n (float): The float number to get the floor of
        
    Returns:
        int: The floor of the float number
    """
    return math.floor(n) 
    