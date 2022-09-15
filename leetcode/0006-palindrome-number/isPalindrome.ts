function isPalindrome(x: number): boolean {
  if (x < 0) {
    return false;
  }
  let length = 1;
  while (Math.pow(10, length) <= x) {
    length++;
  }

  for (let left = length, right = 1; left > right; left--, right++) {
    const rightNumber = Math.floor(
      (x % Math.pow(10, right)) / Math.pow(10, right - 1)
    );

    const leftNumber = Math.floor(x / Math.pow(10, left - 1)) % 10;

    if (rightNumber !== leftNumber) {
      return false;
    }
  }

  return true;
}

export default isPalindrome;
