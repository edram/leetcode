use std::{env::current_dir, path::Path};

use serde::Deserialize;

use crate::{util::load_cases, Solution};

#[derive(Deserialize, Debug)]
struct Case {
    input: Vec<Vec<i32>>,
    output: Vec<Vec<i32>>,
}

#[test]
fn test_find_players_with_zero_or_one_losses() {
    let current_path = current_dir().unwrap().join(file!());
    let dir = current_path.parent().unwrap();

    let cases: Vec<Case> = load_cases(Path::new(&dir.join("./cases.json")));

    for case in &cases {
        assert_eq!(Solution::find_winners(case.input.clone()), case.output);
    }
}
