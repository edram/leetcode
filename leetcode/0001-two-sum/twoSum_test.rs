use std::{env::current_dir, path::Path};

use serde::Deserialize;

use crate::{util::load_cases, Solution};

#[derive(Deserialize, Debug)]
struct Input {
    nums: Vec<i32>,
    target: i32,
}

#[derive(Deserialize, Debug)]
struct Case {
    input: Input,
    output: Vec<i32>,
}

#[test]
fn test_two_sum() {
    let current_path = current_dir().unwrap().join(file!());
    let dir = current_path.parent().unwrap();

    let cases: Vec<Case> = load_cases(Path::new(&dir.join("./cases.json")));

    for case in &cases {
        assert_eq!(
            Solution::two_sum(case.input.nums.clone(), case.input.target),
            case.output
        );
    }

}
