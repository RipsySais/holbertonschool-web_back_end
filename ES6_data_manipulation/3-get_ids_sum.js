/**
 * Retourne la somme des IDs de tous les étudiants.
 * @param {Array} students - Tableau d'objets étudiants.
 * @returns {Number} - Somme des IDs.
 */
export default function getStudentIdsSum(students) {
  return students.reduce((sum, student) => sum + student.id, 0);
}
