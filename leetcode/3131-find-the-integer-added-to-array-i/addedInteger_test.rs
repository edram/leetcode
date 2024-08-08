use std::{env::current_dir, path::Path};

use serde::Deserialize;

use crate::{util::load_cases, Solution};

#[derive(Deserialize, Debug)]
struct Input {
    nums1: Vec<i32>,
    nums2: Vec<i32>,
}

#[derive(Deserialize, Debug)]
struct Case {
    input: Input,
    output: i32,
}

#[test]
fn test_find_the_integer_added_to_array_i() {
    let current_path = current_dir().unwrap().join(file!());
    let dir = current_path.parent().unwrap();

    let cases: Vec<Case> = load_cases(Path::new(&dir.join("./cases.json")));

    for case in &cases {
        assert_eq!(
            Solution::added_integer(case.input.nums1.clone(), case.input.nums2.clone()),
            case.output
        );
    }
}
