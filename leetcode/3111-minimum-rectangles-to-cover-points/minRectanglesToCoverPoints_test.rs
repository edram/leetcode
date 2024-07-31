use std::{env::current_dir, path::Path};

use serde::Deserialize;

use crate::{util::load_cases, Solution};

#[derive(Deserialize, Debug)]
struct Input {
    points: Vec<Vec<i32>>,
    w: i32,
}

#[derive(Deserialize, Debug)]
struct Case {
    input: Input,
    output: i32,
}

#[test]
fn test_minimum_rectangles_to_cover_points() {
    let current_path = current_dir().unwrap().join(file!());
    let dir = current_path.parent().unwrap();

    let cases: Vec<Case> = load_cases(Path::new(&dir.join("./cases.json")));

    for case in &cases {
        assert_eq!(
            Solution::min_rectangles_to_cover_points(case.input.points.clone(), case.input.w),
            case.output
        );
    }
}
