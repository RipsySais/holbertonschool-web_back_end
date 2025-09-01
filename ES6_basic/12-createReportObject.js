// 11-createEmployeesObject.js

/**
 * Creates an object with the department name as key
 * and an array of employees as value.
 *
 * @param {string} departmentName - The name of the department
 * @param {string[]} employees - The list of employees
 * @returns {Object} - Object with departmentName as key and employees as value
 */
export default function createEmployeesObject(departmentName, employees) {
  return {
    [departmentName]: employees,
  };
}
