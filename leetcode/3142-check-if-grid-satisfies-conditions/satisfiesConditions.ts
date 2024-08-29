function satisfiesConditions(grid: number[][]): boolean {
  let rowLength = grid.length;
  let colLength = grid[0].length;

  for (let row = 0; row < rowLength; row++) {
    for (let col = 0; col < colLength; col++) {
      const cell = grid[row][col];

      if (row < rowLength - 1) {
        if (cell != grid[row + 1][col]) {
          return false;
        }
      }

      if (col < colLength - 1) {
        if (cell == grid[row][col - 1]) {
          return false;
        }
      }
    }
  }

  return true;
}

export default satisfiesConditions;
