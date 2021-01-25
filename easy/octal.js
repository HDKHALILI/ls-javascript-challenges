class Octal {
  constructor(octalString) {
    this.number = octalString;
  }

  static invalidOctal(digit) {
    return Number(digit) >= 8 || Number.isNaN(Number(digit));
  }

  toDecimal() {
    let decimalNumber = 0;
    let exponent = 0;

    for (let index = this.number.length - 1; index >= 0; index -= 1) {
      const digit = Number(this.number[index]);

      if (Octal.invalidOctal(digit)) {
        return 0;
      }

      decimalNumber += digit * Math.pow(8, exponent);
      exponent += 1;
    }

    return decimalNumber;
  }
}

module.exports = Octal;
