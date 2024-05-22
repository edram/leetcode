function findWinners(matches: number[][]): number[][] {
  const lossesMap = new Map<number, number>();
  const result: number[][] = [[], []];

  for (const [winner, loser] of matches) {
    if (!lossesMap.has(winner)) {
      lossesMap.set(winner, 0);
    }

    if (!lossesMap.has(loser)) {
      lossesMap.set(loser, 1);
    } else {
      lossesMap.set(loser, lossesMap.get(loser) + 1);
    }
  }

  for (const [key, count] of lossesMap) {
    if (count >= 2) {
      continue;
    }

    if (count === 0) {
      result[0].push(key);
    } else {
      result[1].push(key);
    }
  }

  result[0].sort((a, b) => a - b);
  result[1].sort((a, b) => a - b);

  return result;
}

export default findWinners;
