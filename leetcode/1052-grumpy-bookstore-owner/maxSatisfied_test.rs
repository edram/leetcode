use std::{env::current_dir, path::Path};

use serde::Deserialize;

use crate::{util::load_cases, Solution};

#[derive(Deserialize, Debug)]
struct Input {
    customers: Vec<i32>,
    grumpy: Vec<i32>,
    minutes: i32,
}

#[derive(Deserialize, Debug)]
struct Case {
    input: Input,
    output: i32,
}

#[test]
fn test_max_satisfied() {
    let current_path = current_dir().unwrap().join(file!());
    let dir = current_path.parent().unwrap();

    let cases: Vec<Case> = load_cases(Path::new(&dir.join("./cases.json")));

    for case in &cases {
        assert_eq!(
            Solution::max_satisfied(case.input.customers.clone(), case.input.grumpy.clone(), case.input.minutes),
            case.output
        );
    }
}
