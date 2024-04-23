function maxSatisfied(
  customers: number[],
  grumpy: number[],
  minutes: number
): number {
  let result = 0;

  for (const [index, custom] of customers.entries()) {
    if (grumpy[index] === 0) {
      result += custom;
    }
  }

  let increase = 0;
  let maxIncrease = 0;
  for (let i = 0; i < minutes; i++) {
    increase = increase + customers[i] * grumpy[i];
  }
  maxIncrease = increase;

  for (let i = minutes; i < customers.length; i++) {
    increase =
      increase -
      customers[i - minutes] * grumpy[i - minutes] +
      customers[i] * grumpy[i];

    maxIncrease = Math.max(maxIncrease, increase);
  }

  return result + maxIncrease;
}

export default maxSatisfied;
