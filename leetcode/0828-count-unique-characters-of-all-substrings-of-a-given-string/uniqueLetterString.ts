function uniqueLetterString(s: string): number {
  const letterIndexesMap = new Map<string, number[]>();
  const stringLength = s.length;
  let result = 0;

  for (let index = 0; index < stringLength; index++) {
    const letter = s[index]!;
    const letterIndexes = letterIndexesMap.get(letter) ?? [];

    if (letterIndexes.length < 1) {
      letterIndexesMap.set(letter, letterIndexes);
    }

    letterIndexes.push(index);
  }

  for (const [, letterIndexes] of letterIndexesMap) {
    for (const [index, current] of letterIndexes.entries()) {
      const start = (letterIndexes[index - 1] ?? -1) + 1;
      const end = (letterIndexes[index + 1] ?? stringLength) - 1;

      result = result + (current - start + 1) * (end - current + 1);
    }
  }
  return result;
}

export default uniqueLetterString;
