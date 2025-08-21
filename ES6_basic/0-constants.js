// 0-constants.js

// Déclare avec const car la variable ne change pas
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

// Fonction donnée
export function getLast() {
  return ' is okay';
}

// Déclare avec let car la variable est réassignée (+=)
export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
