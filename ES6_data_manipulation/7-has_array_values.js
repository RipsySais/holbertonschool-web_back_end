/**
 * Vérifie si tous les éléments d'un tableau existent dans un Set.
 * @param {Set} set - Le Set à vérifier.
 * @param {Array} array - Le tableau d'éléments à vérifier.
 * @returns {Boolean} - `true` si tous les éléments du tableau sont dans le Set, sinon `false`.
 */
export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
