#!/usr/bin/env python3
async def wait_n(n: int, max_delay: int) -> List[float]:
    """Version alternative utilisant as_completed pour maintenir l'ordre"""
    tasks = [wait_random(max_delay) for _ in range(n)]
    delays = []
    for task in asyncio.as_completed(tasks):
        delay = await task
        delays.append(delay)
    return delays