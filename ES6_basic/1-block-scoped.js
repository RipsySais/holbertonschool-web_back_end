// 1-block-scoped.js

export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    let taskInside = true;
    let task2Inside = false;
    // on n’utilise pas taskInside ni task2Inside en dehors
  }

  return [task, task2];
}
