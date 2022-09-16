function romanToInt(s: string): number {
  var romanIntMap: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,

    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };

  let int = 0;
  for (let index = 0; index < s.length; index++) {
    const roman = s[index]!;
    const nextRoman = s[index + 1] ?? "";
    const combineRoman = `${roman}${nextRoman}`;

    if (romanIntMap[combineRoman] != undefined) {
      int = int + romanIntMap[combineRoman]!;

      index++;

      continue;
    }

    int = int + romanIntMap[roman]!;
  }

  return int;
}

export default romanToInt;
