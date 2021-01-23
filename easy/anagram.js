class Anagram {
  constructor(subject) {
    this.subject = subject.toLowerCase();
  }

  static isAnagram(word1, word2) {
    const word1Sorted = Anagram.sortedChars(word1).join("");
    const word2Sorted = Anagram.sortedChars(word2).join("");
    return word1Sorted === word2Sorted;
  }

  static sortedChars(word) {
    return word.toLowerCase().split("").sort();
  }

  match(words) {
    return words.filter(word => {
      return (
        word.toLowerCase() !== this.subject &&
        Anagram.isAnagram(word, this.subject)
      );
    });
  }
}

module.exports = Anagram;
