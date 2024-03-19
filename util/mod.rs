use serde::Deserialize;
use std::{fs, path::Path};

pub fn load_cases<T>(path: &Path) -> T
where
    T: for<'de> Deserialize<'de>,
{
    let json = fs::read_to_string(path).expect("Unable to read file");

    return serde_json::from_str(&json).unwrap();
}

#[cfg(test)]
mod tests {
    use std::env::current_dir;

    use super::*;

    #[derive(Deserialize, Debug)]
    #[allow(dead_code)]
    struct Case {
        input: String,
        output: i32,
    }

    #[test]
    fn test_load_cases() {
        let current_path = current_dir().unwrap().join(file!());
        let dir = current_path.parent().unwrap();

        let _cases: Vec<Case> = load_cases(Path::new(&dir.join("./cases.json")));
    }
}
