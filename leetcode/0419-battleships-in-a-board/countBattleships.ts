function countBattleships(board: string[][]): number {
  let count = 0;
  const rowCount = board.length;
  const colCount = board[0].length;

  for (const [rowIndex, row] of board.entries()) {
    for (const [colIndex, cell] of row.entries()) {
      if (cell != "X") {
        continue;
      }

      // 相连的设置成 .
      for (
        let nextRowIndex = rowIndex + 1;
        nextRowIndex < rowCount;
        nextRowIndex++
      ) {
        if (board[nextRowIndex][colIndex] != "X") {
          break;
        }
        board[nextRowIndex][colIndex] = ".";
      }

      for (
        let nextColIndex = colIndex + 1;
        nextColIndex < colCount;
        nextColIndex++
      ) {
        if (row[nextColIndex] != "X") {
          break;
        }
        row[nextColIndex] = ".";
      }

      count++;
    }
  }

  return count;
}

export default countBattleships;
