// 1-block-scoped.js

export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // Constantes locales au bloc if
    const taskIf = true;
    const task2If = false;
    // Elles restent locales et ne sont pas retournées
  }

  return [task, task2];
}
