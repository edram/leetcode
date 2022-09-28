function isValid(s: string): boolean {
  const stack = [];
  const parenthesesMap = new Map([
    [")", "("],
    ["}", "{"],
    ["]", "["],
  ]);

  for (const parentheses of s) {
    var matchParentheses = parenthesesMap.get(parentheses);

    if (!matchParentheses) {
      stack.push(parentheses);
      continue;
    }

    var lastItem = stack[stack.length - 1];
    if (lastItem !== matchParentheses) {
      stack.push(parentheses);
      continue;
    }

    stack.pop();
  }

  return stack.length == 0;
}

export default isValid;
