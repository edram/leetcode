use std::{env::current_dir, path::Path};

use serde::Deserialize;

use crate::{util::load_cases, Solution};

#[derive(Deserialize, Debug)]
struct Input {
    garbage: Vec<String>,
    travel: Vec<i32>,
}

#[derive(Deserialize, Debug)]
struct Case {
    input: Input,
    output: i32,
}

#[test]
fn test_minimum_amount_of_time_to_collect_garbage() {
    let current_path = current_dir().unwrap().join(file!());
    let dir = current_path.parent().unwrap();

    let cases: Vec<Case> = load_cases(Path::new(&dir.join("./cases.json")));

    for case in &cases {
        assert_eq!(
            Solution::garbage_collection(case.input.garbage.clone(), case.input.travel.clone()),
            case.output
        );
    }
}
