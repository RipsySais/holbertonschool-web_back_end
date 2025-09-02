/**
 * Met à jour les notes des étudiants d'une ville spécifique.
 * @param {Array} students - Tableau d'objets étudiants.
 * @param {String} city - Ville à filtrer.
 * @param {Array} newGrades - Tableau d'objets contenant les nouvelles notes.
 * @returns {Array} - Tableau d'étudiants avec leurs nouvelles notes.
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: gradeObj ? gradeObj.grade : 'N/A',
      };
    });
}
