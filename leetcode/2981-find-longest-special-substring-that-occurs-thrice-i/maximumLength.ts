function maximumLength(s: string): number {
  let length = -1;
  const letterLengthsMap = new Map<string, number[]>();

  let tempLength = 1;
  for (const [index, letter] of [...s].entries()) {
    if (index > 0 && letter === s[index - 1]) {
      tempLength++;
    } else {
      tempLength = 1;
    }

    const letterLengths = letterLengthsMap.get(letter) || [];

    letterLengths.push(tempLength);
    letterLengths.sort((a, b) => b - a);
    if (letterLengths.length > 3) {
      letterLengths.pop();
    }

    if (!letterLengthsMap.has(letter)) {
      letterLengthsMap.set(letter, letterLengths);
    }
  }

  for (const letterLengths of letterLengthsMap.values()) {
    if (letterLengths.length >= 3) {
      length = Math.max(length, letterLengths[2]);
    }
  }

  return length;
}

export default maximumLength;
