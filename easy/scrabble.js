class Scrable {
  static score(word) {
    return new Scrable(word).score();
  }

  static POINTS = {
    AEIOULNRST: 1,
    DG: 2,
    BCMP: 3,
    FHVWY: 4,
    K: 5,
    JX: 8,
    QZ: 10,
  };

  static getPoint(char) {
    let key = Object.keys(Scrable.POINTS).find(letters =>
      letters.includes(char)
    );
    return Scrable.POINTS[key] || 0;
  }

  constructor(word) {
    this.chars = word ? word.toUpperCase().split("") : [];
  }

  score() {
    return this.chars.reduce((totalScore, char) => {
      return totalScore + Scrable.getPoint(char);
    }, 0);
  }
}

module.exports = Scrable;
