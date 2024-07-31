use crate::Solution;

impl Solution {
    pub fn min_rectangles_to_cover_points(points: Vec<Vec<i32>>, w: i32) -> i32 {
        let mut points = points.clone();
        points.sort_by(|a, b| a[0].cmp(&b[0]));
        let mut count = 0;
        let mut next = -1;

        for p in points {
            let x = p[0];
            if x > next {
                next = x + w;
                count = count + 1;
            }
        }

        return count;
    }
}
