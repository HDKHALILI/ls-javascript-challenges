class RomanNumeral {
  static ROMAN_NUMERALS = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };

  constructor(decimalNumber) {
    this.decimalNumber = decimalNumber;
  }

  toRoman() {
    let value;
    let romanNumber = "";

    // so not to mutate the state
    let decimalNumber = this.decimalNumber;

    const keys = Object.keys(RomanNumeral.ROMAN_NUMERALS);

    while (decimalNumber > 0) {
      // finding the highest value less than or equal to the decimalNumber
      for (let index = 0; index < keys.length; index += 1) {
        if (Number(keys[index]) > decimalNumber) {
          break;
        }

        value = keys[index];
      }

      romanNumber += RomanNumeral.ROMAN_NUMERALS[value];
      decimalNumber -= Number(value);
    }

    return romanNumber;
  }
}

module.exports = RomanNumeral;
