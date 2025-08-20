export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    const innerTask = true;
    const innerTask2 = false;
    // Les variables internes n'affectent pas les externes
  }

  return [task, task2];
}
