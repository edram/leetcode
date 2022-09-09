function constructArray(n: number, k: number): number[] {
  var limit = n - k;
  var result = [];
  for (let i = 1; i <= n; i++) {
    if (i <= limit) {
      result.push(i);
      continue;
    }
  }
  for (let min = limit + 1, max = n; min <= max; min++, max--) {
    result.push(max);
    if (max == min) {
      continue;
    }
    result.push(min);
  }

  return result;
}

export default constructArray;
