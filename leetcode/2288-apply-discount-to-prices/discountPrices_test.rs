use std::{env::current_dir, path::Path};

use serde::Deserialize;

use crate::{util::load_cases, Solution};

#[derive(Deserialize, Debug)]
struct Input {
    sentence: String,
    discount: i32,
}

#[derive(Deserialize, Debug)]
struct Case {
    input: Input,
    output: String,
}

#[test]
fn test_apply_discount_to_prices() {
    let current_path = current_dir().unwrap().join(file!());
    let dir = current_path.parent().unwrap();

    let cases: Vec<Case> = load_cases(Path::new(&dir.join("./cases.json")));

    for case in &cases {
        assert_eq!(
            Solution::discount_prices(case.input.sentence.clone(), case.input.discount),
            case.output
        );
    }
}
