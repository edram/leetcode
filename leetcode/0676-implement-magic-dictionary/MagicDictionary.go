package leetcode

type MagicDictionary struct {
	dictionary []string
}

func Constructor() MagicDictionary {
	return MagicDictionary{}
}

func (MagicDictionary *MagicDictionary) BuildDict(dictionary []string) {
	MagicDictionary.dictionary = dictionary
}

func (MagicDictionary *MagicDictionary) Search(searchWord string) bool {
	for _, word := range MagicDictionary.dictionary {
		if len(word) != len(searchWord) {
			continue
		}

		var diff = 0
		for i := 0; i < len(word); i++ {
			var letter = word[i]
			if letter != searchWord[i] {
				diff++
			}

			if diff > 1 {
				break
			}
		}

		if diff == 1 {
			return true
		}
	}

	return false
}
