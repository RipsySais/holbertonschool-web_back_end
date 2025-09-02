/**
 * Retourne une chaîne de caractères des valeurs d'un Set qui commencent par startString,
 * en supprimant startString et en joignant les résultats avec un tiret.
 * @param {Set} set - Le Set à filtrer.
 * @param {String} startString - La chaîne de début à vérifier.
 * @returns {String} - Chaîne de caractères des valeurs filtrées, séparées par "-".
 */
export default function cleanSet(set, startString) {
  const result = [];
  for (const value of set) {
    if (value.startsWith(startString)) {
      result.push(value.slice(startString.length));
    }
  }
  return result.join('-');
}
