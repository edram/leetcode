function minimumSteps(s: string): number {
  let steps: number = 0;
  let blackCount: number = 0;
  for (const color of s) {
    if (color === "1") {
      blackCount++;
    } else {
      steps += blackCount;
    }
  }

  return steps;
}

export default minimumSteps;
