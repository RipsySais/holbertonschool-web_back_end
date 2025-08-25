import createEmployeesObject from "../11-createEmployeesObject.js";

describe("Test suite for 11-createEmployeesObject.js", () => {
  test("should return correct object with department and employees", () => {
    const departmentName = "Software";
    const employees = ["Bob", "Sylvie"];
    
    const result = createEmployeesObject(departmentName, employees);
    
    expect(result).toEqual({
      Software: ["Bob", "Sylvie"]
    });
  });

  test("should work with empty employees array", () => {
    const departmentName = "HR";
    const employees = [];
    
    const result = createEmployeesObject(departmentName, employees);
    
    expect(result).toEqual({
      HR: []
    });
  });

  test("should work with single employee", () => {
    const departmentName = "Marketing";
    const employees = ["Alice Johnson"];
    
    const result = createEmployeesObject(departmentName, employees);
    
    expect(result).toEqual({
      Marketing: ["Alice Johnson"]
    });
  });

  test("should return new object each time", () => {
    const departmentName = "IT";
    const employees = ["Bob Brown", "Charlie Wilson"];
    
    const result1 = createEmployeesObject(departmentName, employees);
    const result2 = createEmployeesObject(departmentName, employees);
    
    expect(result1).toEqual(result2);
    expect(result1).not.toBe(result2);
  });
});
