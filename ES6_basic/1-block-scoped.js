export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // Ne pas redéclarer les variables du même nom
    // Le bloc if n'affecte pas les variables existantes
  }

  return [task, task2];
}
