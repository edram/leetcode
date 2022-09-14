function trimMean(arr: number[]): number {
  arr.sort((a, b) => a - b);
  const length = arr.length;
  const start = length * 0.05;
  const end = length * 0.95;

  let sum = 0;
  for (let index = start; index < end; index++) {
    sum = sum + arr[index]!;
  }

  return sum / (length * 0.9);
}

export default trimMean;
