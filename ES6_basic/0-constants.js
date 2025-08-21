// 0-constants.js

// Utilise const car la variable n'est jamais modifiée
export function taskFirst() {
  return 'I prefer const when I can.';
}

// Fonction utilitaire
export function getLast() {
  return ' is okay';
}

// Utilise let car la variable est réassignée
export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();
  return combination;
}
