export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // Ne pas redéclarer les variables, juste les utiliser
    console.log('Condition is true');
  }

  return [task, task2];
}
