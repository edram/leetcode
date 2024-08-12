class MagicDictionary {
  private dictionary: string[];
  constructor() {}

  buildDict(dictionary: string[]): void {
    this.dictionary = dictionary;
  }

  search(searchWord: string): boolean {
    for (const word of this.dictionary) {
      if (word.length !== searchWord.length) {
        continue;
      }

      let diff = 0;
      for (let index = 0; index < word.length; index++) {
        const letter = word[index];
        if (searchWord[index] !== letter) {
          diff++;
        }

        if (diff > 1) {
          break;
        }
      }

      if (diff === 1) {
        return true;
      }
    }

    return false;
  }
}

export default MagicDictionary;
