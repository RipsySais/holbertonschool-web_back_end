// 0-get_list_students.test.js
import getListStudents from "./0-get_list_students.js";

describe("getListStudents", () => {
  test("should return an array of 3 students with correct structure", () => {
    const students = getListStudents();

    // Vérifie que c'est bien un tableau de 3 éléments
    expect(Array.isArray(students)).toBe(true);
    expect(students).toHaveLength(3);

    // Vérifie le contenu exact
    expect(students).toEqual([
      { id: 1, firstName: "Guillaume", location: "San Francisco" },
      { id: 2, firstName: "James", location: "Columbia" },
      { id: 5, firstName: "Serena", location: "San Francisco" },
    ]);
  });
});
