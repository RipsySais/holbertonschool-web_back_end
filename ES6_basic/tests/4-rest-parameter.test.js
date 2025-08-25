// __tests__/4-rest-parameter.test.js
import returnHowManyArguments from '../4-rest-parameter.js';

test('returnHowManyArguments counts arguments correctly', () => {
  expect(returnHowManyArguments("one")).toBe(1);
  expect(returnHowManyArguments("one", "two", 3, "4th")).toBe(4);
  expect(returnHowManyArguments()).toBe(0);
});
