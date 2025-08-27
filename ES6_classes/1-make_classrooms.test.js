import initializeRooms from './1-make_classrooms.js';

describe('initializeRooms', () => {
  test('should return an array of 3 ClassRoom objects', () => {
    const rooms = initializeRooms();
    
    expect(Array.isArray(rooms)).toBe(true);
    expect(rooms.length).toBe(3);
    
    rooms.forEach(room => {
      expect(room).toBeInstanceOf(ClassRoom);
      expect(room).toHaveProperty('_maxStudentsSize');
    });
  });

  test('should have classrooms with correct sizes', () => {
    const rooms = initializeRooms();
    const expectedSizes = [19, 20, 34];
    
    rooms.forEach((room, index) => {
      expect(room._maxStudentsSize).toBe(expectedSizes[index]);
    });
  });

  test('should return classrooms in correct order', () => {
    const rooms = initializeRooms();
    const sizes = rooms.map(room => room._maxStudentsSize);
    
    expect(sizes).toEqual([19, 20, 34]);
  });
});
