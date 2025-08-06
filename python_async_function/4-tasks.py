#!/usr/bin/env python3
"""Module for creating multiple asyncio tasks concurrently."""

import asyncio

task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> list[float]:
    """
    Spawn task_wait_random n times with max_delay.
    Return list of delays in ascending order (order of completion).
    
    Args:
        n: Number of times to spawn task_wait_random
        max_delay: Maximum delay for each task_wait_random call
        
    Returns:
        List of delays in ascending order
    """
    tasks = [task_wait_random(max_delay) for _ in range(n)]

    results = []
    for task in asyncio.as_completed(tasks):
        res = await task
        results.append(res)

    return results
