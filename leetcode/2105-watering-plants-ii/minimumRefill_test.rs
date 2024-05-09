use std::{env::current_dir, path::Path};

use serde::Deserialize;

use crate::{util::load_cases, Solution};

#[derive(Deserialize, Debug)]
#[serde(rename_all = "camelCase")]
struct Input {
    plants: Vec<i32>,
    capacity_a: i32,
    capacity_b: i32,
}

#[derive(Deserialize, Debug)]
struct Case {
    input: Input,
    output: i32,
}

#[test]
fn test_minimum_refill() {
    let current_path = current_dir().unwrap().join(file!());
    let dir = current_path.parent().unwrap();

    let cases: Vec<Case> = load_cases(Path::new(&dir.join("./cases.json")));

    for case in &cases {
        assert_eq!(
            Solution::minimum_refill(
                case.input.plants.clone(),
                case.input.capacity_a,
                case.input.capacity_b
            ),
            case.output
        );
    }
}
