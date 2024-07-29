use crate::Solution;

impl Solution {
    pub fn cal_points(operations: Vec<String>) -> i32 {
        let mut point = 0;
        let mut points: Vec<i32> = Vec::new();

        for operation in operations {
            let length = points.len();
            if operation == "+" {
                let round = points[length - 1] + points[length - 2];
                points.push(round);
                point = point + round;
                continue;
            }
            if operation == "D" {
                let round = points[length - 1] * 2;
                points.push(round);
                point = point + round;
                continue;
            }

            if operation == "C" {
                let rm = points[length - 1];
                points.pop();
                point = point - rm;
                continue;
            }

            let round: i32 = operation.parse().unwrap();
            point = point + round;
            points.push(round)
        }

        return point;
    }
}
