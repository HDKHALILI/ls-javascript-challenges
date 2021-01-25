class Scrable {
  static score(word) {
    return new Scrable(word).score();
  }

  static getScore(char) {
    if ("AEIOULNRST".includes(char)) {
      return 1;
    } else if ("DG".includes(char)) {
      return 2;
    } else if ("BCMP".includes(char)) {
      return 3;
    } else if ("FHVWY".includes(char)) {
      return 4;
    } else if (char === "K") {
      return 5;
    } else if ("JX".includes(char)) {
      return 8;
    } else if ("QZ".includes(char)) {
      return 10;
    }

    return 0;
  }

  constructor(word) {
    this.chars = word ? word.toUpperCase().split("") : [];
  }

  score() {
    return this.chars.reduce((totalScore, char) => {
      return totalScore + Scrable.getScore(char);
    }, 0);
  }
}

module.exports = Scrable;
