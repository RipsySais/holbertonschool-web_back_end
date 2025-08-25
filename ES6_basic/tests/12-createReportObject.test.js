// __tests__/12-createReportObject.test.js
import createReportObject from '../12-createReportObject.js';

describe('createReportObject', () => {
  test('should return an object with allEmployees and getNumberOfDepartments', () => {
    const employeesList = {
      engineering: ['Bob', 'Jane'],
      marketing: ['Sylvie']
    };

    const report = createReportObject(employeesList);

    // Vérifie que allEmployees contient bien l’objet passé
    expect(report.allEmployees).toEqual(employeesList);

    // Vérifie que getNumberOfDepartments retourne le bon nombre
    expect(report.getNumberOfDepartments(report.allEmployees)).toBe(2);
  });
});
