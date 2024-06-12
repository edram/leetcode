package leetcode

func accountBalanceAfterPurchase(purchaseAmount int) int {
	var amount = purchaseAmount / 10
	var rest = purchaseAmount % 10

	var balance = 100 - amount*10
	if rest >= 5 {
		balance = balance - 10
	}

	return balance
}
