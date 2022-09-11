function lengthOfLongestSubstring(s: string): number {
  const set = new Set<string>();
  let leftIndex = 0;
  let maxLength = 0;

  for (let rightIndex = 0; rightIndex < s.length; rightIndex++) {
    const letter = s[rightIndex]!;

    while (set.has(letter)) {
      set.delete(s[leftIndex]!);
      leftIndex++;
    }

    set.add(letter);
    maxLength = Math.max(maxLength, set.size);
  }

  return maxLength;
}

export default lengthOfLongestSubstring;
