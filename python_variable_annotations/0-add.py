#!/usr/bin/python3
import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """
    Attend un délai aléatoire entre 0 et max_delay secondes (inclus)
    et retourne ce délai.
    
    Args:
        max_delay (int): Le délai maximum (par défaut 10)
        
    Returns:
        float: Le délai aléatoire qui a été attendu
    """
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
