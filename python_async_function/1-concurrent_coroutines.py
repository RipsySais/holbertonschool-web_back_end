#!/usr/bin/env python3
"""Execute multiple coroutines concurrently and return sorted delays."""
import asyncio

wait_random = __import__('0-basic_async_syntax').wait_random

async def wait_n(n: int, max_delay: int) -> list[float]:
    """
    Spawn wait_random n times with max_delay.
    Return list of delays in ascending order (order of completion).
    
    Args:
        n: Number of times to spawn wait_random
        max_delay: Maximum delay for each wait_random call
        
    Returns:
        List of delays in ascending order
    """
    tasks = [asyncio.create_task(wait_random(max_delay)) for _ in range(n)]

    results = []
    for task in asyncio.as_completed(tasks):
        res = await task
        results.append(res)

    return results
