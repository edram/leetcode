use std::{env::current_dir, path::Path};

use serde::Deserialize;

use crate::{util::load_cases, Solution};

#[derive(Deserialize, Debug)]
struct Case {
    input: Vec<Vec<i32>>,
    output: bool,
}

#[test]
fn test_find_the_integer_added_to_array_i() {
    let current_path = current_dir().unwrap().join(file!());
    let dir = current_path.parent().unwrap();

    let cases: Vec<Case> = load_cases(Path::new(&dir.join("./cases.json")));

    for case in &cases {
        assert_eq!(
            Solution::satisfies_conditions(case.input.clone()),
            case.output
        );
    }
}
