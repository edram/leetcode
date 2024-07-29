function calPoints(operations: string[]): number {
  const points = [];
  let point = 0;

  for (const operation of operations) {
    if (operation === "+") {
      const round = points[points.length - 1] + points[points.length - 2];
      points.push(round);
      point = point + round;
      continue;
    }
    if (operation === "D") {
      const round = points[points.length - 1] * 2;
      points.push(round);
      point = point + round;
      continue;
    }
    if (operation === "C") {
      const rm = points[points.length - 1];
      points.pop();
      point = point - rm;
      continue;
    }

    const round = parseInt(operation);
    points.push(round);
    point = point + round;
  }

  return point;
}

export default calPoints;
