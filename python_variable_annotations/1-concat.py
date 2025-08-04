#!/usr/bin/env python3
import asyncio
import importlib.util
import sys
from typing import List

# Chargement dynamique du module
spec = importlib.util.spec_from_file_location(
    "basic_async_syntax", 
    "0-basic_async_syntax.py"
)
basic_async = importlib.util.module_from_spec(spec)
sys.modules["basic_async_syntax"] = basic_async
spec.loader.exec_module(basic_async)
wait_random = basic_async.wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """Execute wait_random n times with specified max_delay"""
    tasks = [wait_random(max_delay) for _ in range(n)]
    delays = await asyncio.gather(*tasks)
    
    # Sort without using sort()
    sorted_delays = []
    while delays:
        min_delay = min(delays)
        sorted_delays.append(min_delay)
        delays.remove(min_delay)
    
    return sorted_delays
