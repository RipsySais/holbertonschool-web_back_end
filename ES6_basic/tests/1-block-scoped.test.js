// __tests__/1-block-scoped.test.js
import taskBlock from '../1-block-scoped.js';

describe('taskBlock', () => {
  test('should return the correct array [false, true]', () => {
    // Peu importe le paramètre, les valeurs retournées sont toujours [false, true]
    expect(taskBlock(true)).toEqual([false, true]);
    expect(taskBlock(false)).toEqual([false, true]);
  });
});
