class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  };

  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime++;
    }, 1000);
  };

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  };

  getSeconds() {
    return this.currentTime % 60;
  };

  twoDigitsNumber(nbr) {
    if (nbr > 9) {
      return (`${nbr}`);
    } 
    else {
      return (`0${nbr}`)
    };
  };

  stopClick() {
    clearInterval(this.intervalId);
  };

  resetClick() {
    this.currentTime = 0;
  };
  // splitClick() {}
}