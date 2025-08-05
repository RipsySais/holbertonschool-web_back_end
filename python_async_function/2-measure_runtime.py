#!/usr/bin/env python3
"""
Module for measuring the runtime of concurrent coroutines.
"""

import asyncio
import time
from typing import Callable

# Import wait_n from the previous file
wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """
    Measure the total execution time for wait_n(n, max_delay).
    
    Args:
        n (int): Number of concurrent coroutines to run
        max_delay (int): Maximum delay for each coroutine
        
    Returns:
        float: Average time per coroutine (total_time / n)
    """
    start_time = time.time()
    
    # Run the wait_n function
    asyncio.run(wait_n(n, max_delay))
    
    end_time = time.time()
    total_time = end_time - start_time
    
    # Return the average time per coroutine
    return total_time / n
