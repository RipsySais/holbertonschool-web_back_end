function updateStudentGradeByCity(students, city, newGrades) {
    if (!Array.isArray(students) || !Array.isArray(newGrades)) {
        return [];
    }
    
    // Filtrer les étudiants par ville
    const studentsInCity = students.filter(student => student.location === city);
    
    // Mapper les étudiants avec leurs nouvelles notes
    return studentsInCity.map(student => {
        // Trouver la note correspondante dans newGrades
        const gradeObj = newGrades.find(grade => grade.studentId === student.id);
        
        // Retourner l'étudiant avec sa note (ou 'N/A' si non trouvée)
        return {
            ...student,
            grade: gradeObj ? gradeObj.grade : 'N/A'
        };
    });
}

export default updateStudentGradeByCity;
