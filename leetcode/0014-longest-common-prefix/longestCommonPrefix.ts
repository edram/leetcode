function longestCommonPrefix(strs: string[]): string {
  let checkStr = strs[0] ?? "";
  let prefix = "";

  for (let index = 0; index < checkStr.length; index++) {
    const letter = checkStr[index];

    for (const str of strs) {
      if (str[index] !== letter) {
        return prefix;
      }
    }

    prefix = prefix + letter;
  }

  return prefix;
}

export default longestCommonPrefix;
