#!/usr/bin/env python3
"""
Type-annotated function that sums a list of floats.
"""

from typing import List


def sum_list(input_list: List[float]) -> float:
    """
    Sum all floats in a list and return the result.

    Args:
        input_list (List[float]): List of float numbers to sum

    Returns:
        float: Sum of all floats in the list
    """
    return sum(input_list) 
