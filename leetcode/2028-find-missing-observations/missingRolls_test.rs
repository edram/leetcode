use std::{env::current_dir, path::Path};

use serde::Deserialize;

use crate::{util::load_cases, Solution};

#[derive(Deserialize, Debug)]
struct Input {
    rolls: Vec<i32>,
    mean: i32,
    n: i32,
}

#[derive(Deserialize, Debug)]
struct Case {
    input: Input,
    output: Vec<i32>,
}

#[test]
fn test_find_missing_observations() {
    let current_path = current_dir().unwrap().join(file!());
    let dir = current_path.parent().unwrap();

    let cases: Vec<Case> = load_cases(Path::new(&dir.join("./cases.json")));

    for case in &cases {
        assert_eq!(
            Solution::missing_rolls(
                case.input.rolls.clone(),
                case.input.mean,
                case.input.n
            ),
            case.output
        );
    }
}
