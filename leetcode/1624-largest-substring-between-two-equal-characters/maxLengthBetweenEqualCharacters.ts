function maxLengthBetweenEqualCharacters(s: string): number {
  const letterFirstIndexMap = new Map<string, number>();
  let length = -1;

  for (let index = 0; index < s.length; index++) {
    const letter = s[index]!;
    if (!letterFirstIndexMap.has(letter)) {
      letterFirstIndexMap.set(letter, index);
      continue;
    }

    length = Math.max(length, index - letterFirstIndexMap.get(letter)! - 1);
  }

  return length;
}

export default maxLengthBetweenEqualCharacters;
