function minOperations(logs: string[]): number {
  let step = 0;

  for (const log of logs) {
    if (log == "./") {
      continue;
    }
    if (log == "../") {
      if (step > 0) {
        step--;
      }
      continue;
    }

    step++;
  }

  return step;
}

export default minOperations;
