import ClassRoom from './0-classroom.js';

describe('ClassRoom', () => {
  test('should create a ClassRoom with maxStudentsSize', () => {
    const room = new ClassRoom(10);
    expect(room._maxStudentsSize).toBe(10);
  });

  test('should create a ClassRoom with different size', () => {
    const room = new ClassRoom(30);
    expect(room._maxStudentsSize).toBe(30);
  });

  test('should create a ClassRoom with 0 size', () => {
    const room = new ClassRoom(0);
    expect(room._maxStudentsSize).toBe(0);
  });
});
