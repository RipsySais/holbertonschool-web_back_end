export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true;    // Nouvelle variable de bloc
    const task2 = false;  // Nouvelle variable de bloc
  }

  return [task, task2];
}
