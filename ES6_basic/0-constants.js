// 0-constants.js

// Utilise const car la valeur ne change pas
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

// Fonction fournie
export function getLast() {
  return ' is okay';
}

// Utilise let car la valeur est modifiée
export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
