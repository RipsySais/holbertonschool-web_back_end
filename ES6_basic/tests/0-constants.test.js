import { taskFirst, taskNext } from "../0-constants.js";

describe("Test suite for 0-constants.js", () => {
  test("taskFirst returns correct string", () => {
    expect(taskFirst()).toBe("I prefer const when I can.");
  });

  test("taskNext returns correct combination string", () => {
    expect(taskNext()).toBe("But sometimes let is okay");
  });
});
