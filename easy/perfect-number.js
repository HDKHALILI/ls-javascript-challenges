class PerfectNumber {
  constructor() {}

  static classify(number) {
    if (number < 0) {
      throw new Error("Negative numbers is not allowed");
    }

    let aliquotSum = PerfectNumber.getAliquoteSum(number);

    if (aliquotSum === number) {
      return "perfect";
    } else if (aliquotSum > number) {
      return "abundant";
    } else {
      return "deficient";
    }
  }

  static getAliquoteSum(number) {
    let aliquotSum = 0;
    for (let divisor = 1; divisor < number; divisor += 1) {
      if (number % divisor === 0) {
        aliquotSum += divisor;
      }
    }

    return aliquotSum;
  }
}

module.exports = PerfectNumber;
