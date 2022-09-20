function lengthOfLastWord(s: string): number {
  const words = s.split(" ").filter((word) => word !== "");

  return words[words.length - 1]?.length ?? 0;
}

export default lengthOfLastWord;
