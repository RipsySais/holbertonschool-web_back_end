/**
 * Crée un Set à partir d'un tableau.
 * @param {Array} array - Tableau d'éléments de n'importe quel type.
 * @returns {Set} - Un Set contenant les éléments uniques du tableau.
 */
export default function setFromArray(array) {
  return new Set(array);
}
