/**
 * Crée un ArrayBuffer avec une valeur Int8 à une position spécifique.
 * @param {Number} length - Longueur de l'ArrayBuffer.
 * @param {Number} position - Position où insérer la valeur.
 * @param {Number} value - Valeur Int8 à insérer.
 * @returns {DataView} - DataView de l'ArrayBuffer.
 * @throws {Error} - Si la position est hors limites.
 */
export default function createInt8TypedArray(length, position, value) {
  // Vérifie si la position est hors limites
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Crée un ArrayBuffer de la longueur spécifiée
  const buffer = new ArrayBuffer(length);

  // Crée une DataView pour manipuler les données dans l'ArrayBuffer
  const view = new DataView(buffer);

  // Insère la valeur Int8 à la position spécifiée
  view.setInt8(position, value);

  return view;
}
