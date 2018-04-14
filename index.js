class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    this.startDate.getFullYear() - Number.parseInt(year);
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {

  }

  blocksTravelled() {

  }

  estimatedTime() {

  }
}
