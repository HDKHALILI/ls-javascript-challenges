class Triangle {
  static isValidTriangle(sides) {
    const [sideA, sideB, sideC] = sides;
    const isLengthValid = sides.every(side => side > 0);
    return (
      isLengthValid &&
      sideA + sideB >= sideC &&
      sideA + sideC >= sideB &&
      sideB + sideC >= sideA
    );
  }

  static isEquilateral(sides) {
    const sideA = sides[0];
    return sides.every(side => side === sideA);
  }

  static isIsosceles([sideA, sideB, sideC]) {
    return sideA === sideB || sideA === sideC || sideB === sideC;
  }

  static isScalene([sideA, sideB, sideC]) {
    return sideA !== sideB && sideA !== sideC && sideB !== sideC;
  }

  constructor(sideA, sideB, sideC) {
    this.sides = [sideA, sideB, sideC];
    if (!Triangle.isValidTriangle(this.sides)) {
      throw new Error("invalid traingle");
    }
  }

  kind() {
    if (Triangle.isEquilateral(this.sides)) {
      return "equilateral";
    } else if (Triangle.isIsosceles(this.sides)) {
      return "isosceles";
    } else if (Triangle.isScalene(this.sides)) {
      return "scalene";
    }

    return "unknown triangle";
  }
}

module.exports = Triangle;
