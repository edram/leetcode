use std::{env::current_dir, path::Path};

use serde::Deserialize;

use crate::{util::load_cases, Solution};

#[derive(Deserialize, Debug)]
struct Input {
    num: i32,
    t: i32,
}

#[derive(Deserialize, Debug)]
struct Case {
    input: Input,
    output: i32,
}

#[test]
fn test_find_the_maximum_achievable_number() {
    let current_path = current_dir().unwrap().join(file!());
    let dir = current_path.parent().unwrap();

    let cases: Vec<Case> = load_cases(Path::new(&dir.join("./cases.json")));

    for case in &cases {
        assert_eq!(
            Solution::the_maximum_achievable_x(
                case.input.num,
                case.input.t
            ),
            case.output
        );
    }
}
