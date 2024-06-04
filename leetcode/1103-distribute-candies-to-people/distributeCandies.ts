function distributeCandies(candies: number, num_people: number): number[] {
  const result = new Array<number>(num_people).fill(0);

  const times = Math.floor(Math.sqrt(2 * candies - 1)); // 最多能完美分的次数
  const round = Math.ceil(times / num_people); // 每人最多轮到的次数
  const rest = round * num_people - times; // 剩下几人没有轮到最后一轮
  const left = candies - ((1 + times) * times) / 2;
  const restCol = num_people - rest - 1;

  for (let index = 0; index < num_people; index++) {
    const itemRound = index <= restCol ? round : round - 1;
    const last = index + 1 + (itemRound - 1) * num_people;

    const num = ((index + 1 + last) / 2) * itemRound;

    result[index] = num;
  }

  // 其余都是等差数列求和，最后一人拿走剩下的糖果
  // 或者是最后一个多拿了，从最后一个人拿拿回来
  if (left > 0) {
    result[restCol + 1] = result[restCol + 1] + left;
  } else {
    result[restCol] = result[restCol] + left;
  }

  return result;
}

export default distributeCandies;
