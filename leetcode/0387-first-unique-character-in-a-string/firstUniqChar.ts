function firstUniqChar(s: string): number {
  const charOnlyOnceMap = new Map<string, boolean>();
  let result = -1;

  for (const char of s) {
    if (charOnlyOnceMap.has(char)) {
      charOnlyOnceMap.set(char, false);
      continue;
    }

    charOnlyOnceMap.set(char, true);
  }

  for (const [index, char] of Array.from(s).entries()) {
    if (!charOnlyOnceMap.get(char)) {
      continue;
    }

    result = index;
    break;
  }

  return result;
}

export default firstUniqChar;
