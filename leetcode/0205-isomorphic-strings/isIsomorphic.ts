function isIsomorphic(s: string, t: string): boolean {
  let result = true;
  const s2t = new Map<string, string>();
  const t2s = new Map<string, string>();

  for (const [index, tString] of Array.from(t).entries()) {
    const sString = s[index]!;

    const t1 = s2t.get(sString);
    const s1 = t2s.get(tString);

    if ((t1 != null && t1 != tString) || (s1 != null && s1 != sString)) {
      result = false;
      break;
    }

    s2t.set(sString, tString);
    t2s.set(tString, sString);
  }

  return result;
}

export default isIsomorphic;
