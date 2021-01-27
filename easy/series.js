class Series {
  constructor(string) {
    this.numberString = string ? string : "";
  }

  slices(length) {
    if (length > this.numberString.length) {
      throw new Error("Length must be equal to less than the length of string");
    }

    const digits = this.numberString.split("").map(digit => Number(digit));
    const cominations = [];

    for (let start = 0; start < digits.length; start += 1) {
      const end = start + length;
      if (end <= digits.length) {
        cominations.push(digits.slice(start, end));
      }
    }

    return cominations;
  }
}

// console.log(new Series("12345").slices(0));

module.exports = Series;
