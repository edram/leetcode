function findLUSlength(a: string, b: string): number {
  let length = -1;
  if (a != b) {
    length = Math.max(a.length, b.length);
  }

  return length;
}

export default findLUSlength;
