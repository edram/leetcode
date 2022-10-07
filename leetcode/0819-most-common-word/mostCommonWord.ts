function mostCommonWord(paragraph: string, banned: string[]): string {
  let maxWordCount: [string, number] = ["", 0];

  const words = paragraph.toLowerCase().replace(/[!?',;.]/g, ' ').split(" ").filter((item) => item != "");
  const wordCountMap = new Map<string, number>();

  for (const word of words) {
    if (banned.includes(word)) {
      continue;
    }
    if (wordCountMap.has(word)) {
      wordCountMap.set(word, wordCountMap.get(word)! + 1);
      continue;
    }

    wordCountMap.set(word, 1);
  }

  for (const [word, count] of wordCountMap) {
    if (count <= maxWordCount[1]!) {
      continue;
    }

    maxWordCount = [word, count];
  }

  return maxWordCount[0]!;
}

export default mostCommonWord;
