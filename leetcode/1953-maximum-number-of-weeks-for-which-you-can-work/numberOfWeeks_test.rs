use std::{env::current_dir, path::Path};

use serde::Deserialize;

use crate::{util::load_cases, Solution};

#[derive(Deserialize, Debug)]
struct Case {
    input: Vec<i32>,
    output: i64,
}

#[test]
fn test_maximum_number_of_weeks_for_which_you_can_work() {
    let current_path = current_dir().unwrap().join(file!());
    let dir = current_path.parent().unwrap();

    let cases: Vec<Case> = load_cases(Path::new(&dir.join("./cases.json")));

    for case in &cases {
        assert_eq!(Solution::number_of_weeks(case.input.clone()), case.output);
    }
}
