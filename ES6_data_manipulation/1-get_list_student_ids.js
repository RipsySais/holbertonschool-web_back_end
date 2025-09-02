/**
 * Retourne un tableau d'IDs d'étudiants à partir d'une liste d'objets.
 * @param {Array} students - Tableau d'objets étudiants.
 * @returns {Array} - Tableau d'IDs ou un tableau vide si l'argument n'est pas un tableau.
 */
export default function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  return students.map((student) => student.id);
}
