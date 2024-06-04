function distributeCandies(candies: number, num_people: number): number[] {
  const result = new Array<number>(num_people).fill(0);

  const times = Math.ceil(Math.sqrt(2 * candies - 1)); // 分糖果的次数
  const round = Math.ceil(times / num_people); // 每人最多轮到的次数
  const rest = round * num_people - times; // 剩下几人没有轮到最后一轮
  const left = candies - ((1 + times - 1) * (times - 1)) / 2;

  for (let index = 0; index < num_people; index++) {
    const itemRound = index < num_people - rest - 1 ? round : round - 1;
    const last = index + 1 + (itemRound - 1) * num_people;

    const num = ((index + 1 + last) / 2) * itemRound;

    result[index] = num;
  }

  // 其余都是等差数列求和，最后一人拿走剩下的糖果
  result[num_people - rest - 1] = result[num_people - rest - 1] + left;

  return result;
}

export default distributeCandies;
