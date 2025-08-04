#!/usr/bin/env python3
import asyncio
from 0-basic_async_syntax import wait_random  # ajuste l'import selon ton fichier précédent

async def wait_n(n: int, max_delay: int) -> list[float]:
    """
    Spawn wait_random n times with max_delay.
    Return list of delays in ascending order (order of completion).
    """
    # Créer une liste de coroutines wait_random avec max_delay
    tasks = [asyncio.create_task(wait_random(max_delay)) for _ in range(n)]

    # asyncio.as_completed retourne un itérateur qui produit les coroutines dans l'ordre de fin d'exécution
    results = []
    for task in asyncio.as_completed(tasks):
        res = await task
        results.append(res)

    return results
