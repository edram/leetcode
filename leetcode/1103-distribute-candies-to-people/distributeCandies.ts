function distributeCandies(candies: number, num_people: number): number[] {
  const result = new Array<number>(num_people).fill(0);

  const times = Math.floor(Math.sqrt(2 * candies + 0.25) - 0.5); // 能完美分的次数
  const round = Math.floor(times / num_people); // 所有人都轮到完美分的次数
  const restCol = times % num_people; // 剩下可以完美论分的次数

  const left = candies - Math.floor((times + 1) * times * 0.5);

  // 处理每人都轮到的
  for (let index = 0; index < num_people; index++) {
    const last = index + 1 + (round - 1) * num_people;

    const num = ((index + 1 + last) / 2) * round;

    result[index] = num;
  }

  // 处理最后一轮
  for (let index = 0; index < restCol; index++) {
    result[index] += index + 1 + round * num_people;
  }

  // 处理剩下的
  result[restCol] += left;

  return result;
}

export default distributeCandies;
