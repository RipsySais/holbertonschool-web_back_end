/**
 * Met à jour les quantités des articles dont la quantité initiale est 1 dans une Map.
 * @param {Map} map - La Map à mettre à jour.
 * @throws {Error} - Si l'argument n'est pas une Map.
 */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [key, value] of map) {
    if (value === 1) {
      map.set(key, 100);
    }
  }
}
