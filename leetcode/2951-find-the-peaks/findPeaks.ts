function findPeaks(mountain: number[]): number[] {
  const peaks: number[] = [];

  for (let index = 1; index < mountain.length - 1; index++) {
    const item = mountain[index];

    if (item > mountain[index - 1] && item > mountain[index + 1]) {
      peaks.push(index);
    }
  }

  return peaks;
}

export default findPeaks;
