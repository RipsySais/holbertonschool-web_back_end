# Pagination

Ce projet implémente des fonctionnalités de pagination pour gérer l'affichage de grandes quantités de données par pages.

## Fonctionnalités

### `index_range(page, page_size)`

Une fonction utilitaire qui calcule les indices de début et de fin pour la pagination.

**Paramètres :**
- `page` (int) : Numéro de la page (1-indexée)
- `page_size` (int) : Nombre d'éléments par page

**Retour :**
- `tuple` : Un tuple contenant (start_index, end_index)

**Exemples :**
```python
# Page 1 avec 7 éléments par page
index_range(1, 7)  # Retourne (0, 7)

# Page 3 avec 15 éléments par page  
index_range(3, 15)  # Retourne (30, 45)
```

## Logique de pagination

- **Page 1** : indices 0 à page_size-1
- **Page 2** : indices page_size à 2*page_size-1
- **Page 3** : indices 2*page_size à 3*page_size-1
- Et ainsi de suite...

## Utilisation

```python
from 0-simple_helper_function import index_range

# Obtenir les indices pour la page 2 avec 10 éléments par page
start, end = index_range(2, 10)
# start = 10, end = 20

# Extraire les éléments de la page
page_items = all_items[start:end]
```

## Tests

Exécutez les tests avec :
```bash
python3 0-main.py
```
