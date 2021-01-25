class SumOfMultiples {
  static DEFAULT_MULTIPLES = [3, 5];

  static to(number) {
    return new SumOfMultiples(3, 5).to(number);
  }

  constructor(...multiples) {
    if (multiples.length === 0) {
      this.multiples = SumOfMultiples.DEFAULT_MULTIPLES;
    } else {
      this.multiples = multiples;
    }
  }

  to(number) {
    let sum = 0;

    for (let count = 1; count < number; count += 1) {
      for (let index = 0; index < this.multiples.length; index += 1) {
        if (count % this.multiples[index] === 0) {
          sum += count;
          break;
        }
      }
    }

    return sum;
  }
}

module.exports = SumOfMultiples;
