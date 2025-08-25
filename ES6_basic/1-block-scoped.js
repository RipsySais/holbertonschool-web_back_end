export default function taskBlock(trueOrFalse) {
  void trueOrFalse; // Paramètre non utilisé mais nécessaire pour la signature

  const task = false;
  const task2 = true;

  return [task, task2];
}
