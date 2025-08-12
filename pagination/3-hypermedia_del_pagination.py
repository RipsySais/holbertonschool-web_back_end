#!/usr/bin/env python3
"""
Deletion-resilient hypermedia pagination
"""

import csv
import math
from typing import List, Dict


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexed by sorting position, starting at 0
        """
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            truncated_dataset = dataset[:1000]
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
        """
        Get hypermedia pagination information with deletion resilience.
        
        Args:
            index (int): Start index for the page (default: None)
            page_size (int): Number of items per page (default: 10)
            
        Returns:
            Dict: Dictionary with pagination metadata
        """
        indexed_dataset = self.indexed_dataset()
        
        # If no index provided, start from 0
        if index is None:
            index = 0
            
        # Assert that index is in valid range
        assert index >= 0 and index < len(indexed_dataset), "Index out of range"
        
        # Find the next available index if current one was deleted
        current_index = index
        while current_index < len(indexed_dataset) and current_index not in indexed_dataset:
            current_index += 1
            
        # If we've reached the end, return empty data
        if current_index >= len(indexed_dataset):
            return {
                'index': index,
                'data': [],
                'page_size': page_size,
                'next_index': None
            }
        
        # Collect data for the current page
        data = []
        next_index = current_index
        
        for i in range(page_size):
            if next_index in indexed_dataset:
                data.append(indexed_dataset[next_index])
                next_index += 1
            else:
                # Skip deleted items
                while next_index < len(indexed_dataset) and next_index not in indexed_dataset:
                    next_index += 1
                if next_index < len(indexed_dataset):
                    data.append(indexed_dataset[next_index])
                    next_index += 1
                else:
                    break
        
        # Find the next available index for the next page
        if next_index >= len(indexed_dataset):
            next_index = None
        else:
            while next_index < len(indexed_dataset) and next_index not in indexed_dataset:
                next_index += 1
            if next_index >= len(indexed_dataset):
                next_index = None
        
        return {
            'index': index,
            'data': data,
            'page_size': len(data),
            'next_index': next_index
        }
