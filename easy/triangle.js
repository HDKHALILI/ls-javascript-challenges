class Triangle {
  static isLengthValid(sides) {
    return sides.every(side => side > 0);
  }

  static isValidTriangle(sides) {
    const [sideA, sideB, sideC] = sides;

    return (
      sideA + sideB >= sideC && sideA + sideC >= sideB && sideB + sideC >= sideA
    );
  }

  static isEquilateral(sides) {
    const sideA = sides[0];
    return sides.every(side => side === sideA);
  }

  static isIsosceles(sides) {
    const [sideA, sideB, sideC] = sides;

    return sideA === sideB || sideA === sideC || sideB === sideC;
  }

  static isScalene(sides) {
    const [sideA, sideB, sideC] = sides;
    return sideA !== sideB && sideA !== sideC && sideB !== sideC;
  }

  constructor(sideA, sideB, sideC) {
    this.sides = [sideA, sideB, sideC];
    if (
      !Triangle.isLengthValid(this.sides) ||
      !Triangle.isValidTriangle(this.sides)
    ) {
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

    return "unknow triangle";
  }
}

const a = new Triangle(10, 10, 10);
console.log(a.kind());

module.exports = Triangle;
