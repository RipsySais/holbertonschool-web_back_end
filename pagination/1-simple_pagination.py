#!/usr/bin/env python3
"""
Simple pagination implementation
"""

import csv
import math
from typing import List, Tuple


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]  # Skip header row

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """Get a page of data from the dataset.
        
        Args:
            page (int): Page number (1-indexed)
            page_size (int): Number of items per page
            
        Returns:
            List[List]: List of rows for the requested page
        """
        assert isinstance(page, int) and isinstance(page_size, int)
        assert page > 0 and page_size > 0
        
        start_index, end_index = index_range(page, page_size)
        dataset = self.dataset()
        
        if start_index >= len(dataset):
            return []
            
        return dataset[start_index:end_index]


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    Calculate the start and end index for pagination.
    
    Args:
        page (int): Page number (1-indexed)
        page_size (int): Number of items per page
        
    Returns:
        Tuple[int, int]: A tuple containing (start_index, end_index)
    """
    start_index = (page - 1) * page_size
    end_index = start_index + page_size
    
    return (start_index, end_index)
