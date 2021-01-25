class PerfectNumber {
  static classify(number) {
    if (number < 1) {
      throw new Error("Number must be greater than or equal to 1");
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
