function missingRolls(rolls: number[], mean: number, n: number): number[] {
  const result: number[] = [];
  let missingSum = mean * (rolls.length + n);
  for (const roll of rolls) {
    missingSum -= roll;
  }

  const avg = Math.floor(missingSum / n);
  const rest = missingSum % n;

  if (missingSum >= n && missingSum <= 6 * n) {
    for (let i = 1; i <= n; i++) {
      if (i <= rest) {
        result[i - 1] = avg + 1;
      } else {
        result[i - 1] = avg;
      }
    }
  }

  return result;
}

export default missingRolls;
