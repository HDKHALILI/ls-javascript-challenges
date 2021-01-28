class Robot {
  static names = [];

  name() {
    if (this.robotName) {
      return this.robotName;
    }

    while (Robot.names.includes(this.robotName) || !this.robotName) {
      this.robotName = this.generateName();
    }

    Robot.names.push(this.robotName);
    return this.robotName;
  }

  reset() {
    const nameIndex = Robot.names.indexOf(this.robotName);
    Robot.names.splice(nameIndex, 1);
    this.robotName = "";
  }

  generateName() {
    const letters = this.getLetters();
    const numbers = this.getNumbers();
    return `${letters}${numbers}`;
  }

  getLetters() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let letters = "";
    for (let count = 0; count < 2; count += 1) {
      const randomIndex = this.getRandomNumber(0, alphabet.length);
      letters += alphabet[randomIndex];
    }

    return letters;
  }

  getNumbers() {
    let numbers = "";
    for (let count = 0; count < 3; count += 1) {
      const randomNumber = this.getRandomNumber(0, 9);
      numbers += String(randomNumber);
    }

    return numbers;
  }

  getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

module.exports = Robot;
