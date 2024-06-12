use crate::Solution;

impl Solution {
    pub fn account_balance_after_purchase(purchase_amount: i32) -> i32 {
        let amount = purchase_amount / 10;
        let rest = purchase_amount % 10;

        let mut balance = 100 - amount * 10;

        if rest >= 5 {
            balance = balance - 10
        }

        return balance;
    }
}
