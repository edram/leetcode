function addStrings(num1: string, num2: string): string {
  let result = "";
  let num1CurrentIndex = num1.length - 1;
  let num2CurrentIndex = num2.length - 1;
  let carry = 0;

  while (num1CurrentIndex >= 0 || num2CurrentIndex >= 0) {
    const sum =
      parseInt(num1[num1CurrentIndex] ?? "0") +
      parseInt(num2[num2CurrentIndex] ?? "0") +
      carry;
    carry = Math.floor(sum / 10);

    result = `${sum % 10}${result}`;

    if (num1CurrentIndex >= 0) {
      num1CurrentIndex--;
    }
    if (num2CurrentIndex >= 0) {
      num2CurrentIndex--;
    }
  }

  if (carry > 0) {
    result = `${carry}${result}`;
  }

  return result;
}

export default addStrings;
