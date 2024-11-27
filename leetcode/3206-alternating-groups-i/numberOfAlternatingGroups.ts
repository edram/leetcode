function numberOfAlternatingGroups(colors: number[]): number {
  let result = 0;
  const length = colors.length;

  for (const [index, color] of colors.entries()) {
    const start = (index - 1 + length) % length;
    const end = (index + 1) % length;

    if (color !== colors[start] && color !== colors[end]) {
      result++;
    }
  }
  return result;
}

export default numberOfAlternatingGroups;
