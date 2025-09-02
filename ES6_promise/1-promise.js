/**
 * Retourne une Promise résolue ou rejetée en fonction de la valeur de `success`.
 * @param {Boolean} success - Si vrai, la Promise est résolue, sinon elle est rejetée.
 * @returns {Promise} - Une Promise.
 */
export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
