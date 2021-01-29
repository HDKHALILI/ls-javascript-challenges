class Clock {
  static hoursInADay = 24;
  static minutesInHour = 60;
  static minutesInADay = Clock.hoursInADay * Clock.minutesInHour;

  static at(hours, minutes = 0) {
    return new Clock(hours, minutes);
  }

  constructor(hours, minutes) {
    this.hours = hours;
    this.minutes = minutes;
  }

  toString() {
    return `${this.padZero(this.hours)}:${this.padZero(this.minutes)}`;
  }

  padZero(number) {
    return number < 10 ? `0${number}` : number;
  }

  setTime([hours, minutes]) {
    this.hours = hours;
    this.minutes = minutes;
  }

  add(minutes) {
    let totalMinutes = this.timeInMinutes() + minutes;
    if (totalMinutes > Clock.minutesInADay) {
      totalMinutes %= Clock.minutesInADay;
    }

    this.setTime(this.hoursAndMinutes(totalMinutes));

    return this;
  }

  subtract(minutes) {
    // (minutes % Clock.minutesInADay) in case minutes is more than 24hrs
    let totalMinutes = this.timeInMinutes() - (minutes % Clock.minutesInADay);
    if (this.hours === 0) {
      totalMinutes += Clock.minutesInADay;
    }

    this.setTime(this.hoursAndMinutes(totalMinutes));

    return this;
  }

  hoursAndMinutes(totalMinutes) {
    const hours = Math.floor(totalMinutes / Clock.minutesInHour);
    const minutes = Math.round(
      (totalMinutes / Clock.minutesInHour - hours) * Clock.minutesInHour
    );
    return [hours, minutes];
  }

  timeInMinutes() {
    return this.hours * Clock.minutesInHour + this.minutes;
  }

  isEqual(clock) {
    return this.timeInMinutes() === clock.timeInMinutes();
  }
}

// console.log(Clock.at(10).toString());
// console.log(Clock.at(8).toString());
// console.log(Clock.at(9).toString());
// console.log(Clock.at(11, 9).toString());

// let clock = Clock.at(10).subtract(3061);
// console.log(clock.toString());
// let clock2 = Clock.at(23, 30).add(60);
// console.log(clock2.toString());
// let clock3 = Clock.at(23, 60).add(60);
// console.log(clock3.toString());

module.exports = Clock;
