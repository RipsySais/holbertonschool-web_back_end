/**
 * Retourne un tableau d'étudiants situés dans une ville spécifique.
 * @param {Array} students - Tableau d'objets étudiants.
 * @param {String} city - Ville à filtrer.
 * @returns {Array} - Tableau d'étudiants filtrés.
 */
export default function getStudentsByLocation(students, city) {
  return students.filter((student) => student.location === city);
}
