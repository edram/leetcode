pub mod util;

pub mod leetcode {
  #[path = "0000-add/add.rs"]
  pub mod add;

  #[cfg(test)]
  #[path = ""]
  mod rust {
      #[path = "0000-add/add_test.rs"]
      mod add_test;
  }
}

