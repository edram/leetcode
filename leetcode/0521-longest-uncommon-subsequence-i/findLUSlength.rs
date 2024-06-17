use crate::Solution;

impl Solution {
    pub fn find_lu_slength(a: String, b: String) -> i32 {
        let mut length: i32 = -1;

        if a != b {
            length = a.len().max(b.len()) as i32
        }

        return length;
    }
}
