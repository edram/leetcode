function minimumRounds(tasks: number[]): number {
  let rounds = 0;
  const taskCountMap = new Map<number, number>();

  for (const task of tasks) {
    if (taskCountMap.has(task)) {
      taskCountMap.set(task, taskCountMap.get(task) + 1);
    } else {
      taskCountMap.set(task, 1);
    }
  }

  for (const count of taskCountMap.values()) {
    if (count == 1) {
      rounds = -1;
      break;
    }

    rounds = rounds + Math.ceil(count / 3);
  }

  return rounds;
}

export default minimumRounds;
