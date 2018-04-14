class Driver {

  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    return Number.parseInt(year) - this.startDate.getFullYear();
  }

  motto = "I'm a driver and I love it!"
}

class Route {
  constructor(beginningLocation, endingLocation) {

  }

  blocksTravelled() {

  }

  estimatedTime() {

  }
}
