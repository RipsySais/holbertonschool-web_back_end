// 12-createReportObject.js

/**
 * Creates a report object from the given employees list.
 *
 * @param {Object} employeesList - Object returned by createEmployeesObject
 * @returns {Object} - Report object with allEmployees and a method
 */
export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments(employees) {
      return Object.keys(employees).length;
    },
  };
}
