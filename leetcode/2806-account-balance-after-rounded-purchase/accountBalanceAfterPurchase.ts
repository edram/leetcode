function accountBalanceAfterPurchase(purchaseAmount: number): number {
  const amount = Math.floor(purchaseAmount / 10);
  const rest = purchaseAmount % 10;

  let balance = 100 - amount * 10;
  if (rest >= 5) {
    balance = balance - 10;
  }

  return balance;
}

export default accountBalanceAfterPurchase;
