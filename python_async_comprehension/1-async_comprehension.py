#!/usr/bin/env python3
"""Module for async comprehension."""

import asyncio
from typing import List

async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """
    Collect 10 random numbers using async comprehension.
    Returns a list of 10 random numbers from async_generator.
    """
    return [i async for i in async_generator()] 