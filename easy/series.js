class Series {
  constructor(string) {
    this.numberString = string ? string : "";
  }

  static toDigits(numberString) {
    return numberString.split("").map(digit => Number(digit));
  }

  slices(length) {
    if (length > this.numberString.length) {
      throw new Error("Length must be equal to less than the length of string");
    }

    const digits = Series.toDigits(this.numberString);
    const cominations = [];

    for (let start = 0; start <= digits.length - length; start += 1) {
      cominations.push(digits.slice(start, start + length));
    }

    return cominations;
  }
}

// console.log(new Series("12345").slices(0));

module.exports = Series;
