function minRectanglesToCoverPoints(points: number[][], w: number): number {
  points.sort((a, b) => a[0] - b[0]);
  let count = 0;
  let next = -1;

  for (const [x] of points) {
    if (x > next) {
      next = x + w;
      count++;
    }
  }

  return count;
}

export default minRectanglesToCoverPoints;
