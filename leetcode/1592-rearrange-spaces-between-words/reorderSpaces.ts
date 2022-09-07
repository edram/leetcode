function reorderSpaces(text: string): string {
  const tempText = text.split(" ");
  const words = tempText.filter((item) => item !== "");
  const wordsCount = words.length;
  const spaceCount = text.length - words.join("").length;
  if (wordsCount <= 1) {
    return `${words.join("")}${" ".repeat(spaceCount)}`;
  }

  const betweenSpaceCount = Math.floor(spaceCount / (wordsCount- 1));
  const restSpace = spaceCount % (wordsCount- 1);

  return `${words.join(" ".repeat(betweenSpaceCount))}${" ".repeat(restSpace)}`;
}

export default reorderSpaces;
