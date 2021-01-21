class DNA {
  static getShorterStrand(strandA, strandB) {
    return strandA.length < strandB.length ? strandA : strandB;
  }

  constructor(strand) {
    this.strand = strand;
  }

  hammingDistance(newStrand) {
    const shorterStrand = DNA.getShorterStrand(this.strand, newStrand);

    let differences = 0;

    for (let index = 0; index < shorterStrand.length; index += 1) {
      if (this.strand[index] !== newStrand[index]) {
        differences += 1;
      }
    }

    return differences;
  }
}

module.exports = DNA;
