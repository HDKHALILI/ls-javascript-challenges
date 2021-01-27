class BeerSong {
  static verse(number) {
    return new Verse(number).getVerse();
  }

  static verses(begin, end) {
    const song = [];

    for (let currentVerse = begin; currentVerse >= end; currentVerse -= 1) {
      song.push(this.verse(currentVerse));
    }

    return song.join("\n");
  }

  static lyrics() {
    return this.verses(99, 0);
  }
}

class Verse {
  constructor(bottles) {
    this.bottles = bottles;
  }

  getVerse() {
    const bottles = this.bottles;

    if (bottles === 0) {
      return this.getLastVerse();
    }

    return `${this.getLineOne(bottles)}\n${this.getLineTwo(bottles - 1)}\n`;
  }

  bottleOrBottles(number) {
    return number > 1 ? "bottles" : "bottle";
  }

  getLineOne(number) {
    const bottle = this.bottleOrBottles(number);
    return `${number} ${bottle} of beer on the wall, ${number} ${bottle} of beer.`;
  }

  getLineTwo(number) {
    const bottle = this.bottleOrBottles(number);
    if (number === 0) {
      return "Take it down and pass it around, no more bottles of beer on the wall.";
    }

    return `Take one down and pass it around, ${number} ${bottle} of beer on the wall.`;
  }

  getLastVerse() {
    return (
      "No more bottles of beer on the wall, no more bottles of beer.\n" +
      "Go to the store and buy some more, 99 bottles of beer on the wall.\n"
    );
  }
}

// // console.log(BeerSong.verse(99));
// // console.log(BeerSong.verses(99, 98));
// console.log(BeerSong.verses(2, 0));

module.exports = BeerSong;
