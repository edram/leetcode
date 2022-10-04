function findTheDifference(s: string, t: string): string {
  const letterCountMap = new Map<string, number>();
  let result = "";

  for (const string of s) {
    if (letterCountMap.has(string)) {
      letterCountMap.set(string, letterCountMap.get(string)! + 1);
      continue;
    }

    letterCountMap.set(string, 1);
  }

  for (const string of t) {
    if (!letterCountMap.has(string)) {
      result = string;
      break;
    }

    const letterCount = letterCountMap.get(string)!;
    if (letterCount < 1) {
      result = string;
      break;
    }

    letterCountMap.set(string, letterCount - 1);
  }

  return result;
}

export default findTheDifference;
