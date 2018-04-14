class Driver {
  const driverMotto = "I'm a driver and I love it!";
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    return Number.parseInt(year) - this.startDate.getFullYear();
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
