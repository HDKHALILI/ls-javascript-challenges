class Diamond {
  static alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  static makeDiamond(letter) {
    // height from top to middle (exclusive)
    let topHeight = this.alphabet.indexOf(letter);
    let padding = topHeight;
    let spaces = 0;

    if (letter === "A") {
      return this.firstRow();
    }

    // building top to middle rows
    const topRows = [];
    for (let index = 0; index < topHeight; index += 1) {
      const letter = this.alphabet[index];
      topRows.push(this.getRow(letter, padding, spaces));

      padding -= 1;
      // second row only has one space
      spaces += index === 0 ? 1 : 2;
    }

    const middleRow = this.getRow(letter, padding, spaces);
    const bottomRows = [...topRows].reverse();

    return [...topRows, middleRow, ...bottomRows].join("");
  }

  static getRow(letter, padding, spaces) {
    if (letter === "A") {
      return this.firstRow(letter, padding);
    }

    return this.defaultRow(letter, padding, spaces);
  }

  static defaultRow(letter, padding, spaces) {
    const left = `${this.getPadding(padding)}${letter}`;
    const right = `${letter}${this.getPadding(padding)}`;
    const middle = this.getPadding(spaces);

    return `${left}${middle}${right}\n`;
  }

  static firstRow(letter = "A", padding = 0) {
    return `${this.getPadding(padding)}${letter}${this.getPadding(padding)}\n`;
  }

  static middleRow(letter, spaces) {
    return `${letter}${this.getPadding(spaces)}${letter}\n`;
  }

  static getPadding(length) {
    return " ".repeat(length);
  }
}

// console.log(Diamond.makeDiamond("A"));
// console.log(Diamond.makeDiamond("B"));
// console.log(Diamond.makeDiamond("C"));
console.log(Diamond.makeDiamond("E"));
// console.log(Diamond.makeDiamond("B") === " A \nB B\n A \n");
module.exports = Diamond;
