use crate::Solution;

impl Solution {
    pub fn satisfies_conditions(grid: Vec<Vec<i32>>) -> bool {
        let row_length = grid.len();
        let col_length = grid[0].len();

        for row in 0..row_length {
            for col in 0..col_length {
                let cell = grid[row][col];

                if row < row_length - 1 {
                    if cell != grid[row + 1][col] {
                        return false;
                    }
                }

                if col < col_length - 1 {
                    if cell == grid[row][col + 1] {
                        return false;
                    }
                }
            }
        }

        return true;
    }
}
