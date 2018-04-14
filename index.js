class Driver {

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
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  static get eastWest() {
    return ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
  }

  blocksTravelled() {
    const horizontalDistanceCallback = (location) => {
      return location === this.horizontal;
    }
    const verticalDistanceTravelled = Math.abs(beginningLocation.vertical - endingLocation.vertical);
    const horizontalDistanceTravelled = Math.abs(Route.eastWest.findIndex(horizontalDistanceCallback.bind(this.beginningLocation)) - Route.eastWest.findIndex(horizontalDistanceCallback.bind(this.endingLocation)));
    return verticalDistanceTravelled + horizontalDistanceTravelled;
  }

  estimatedTime() {

  }
}
