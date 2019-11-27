let driverId = 0;
let passengerId = 0;
let tripId = 0;
let store = {drivers: [], passengers: [], trips: []};

class Driver{
  constructor(name){
    this.id = ++driverId;
    this.name = name;
    store.drivers.push(this);
  }
  trips(){
    return store.trips.filter(
      function(trip){
        return trip.driverId === this.id;
      }.bind(this)
    );
  }
  passengers(){
    return this.trips().map(trip => {
      return trip.passenger();
    });
  }
}

class Passenger{
  constructor(name){
    this.id = ++passengerId;
    this.name = name;
    store.passengers.push(this);
  }

  drivers(){
    return this.trips().map(trip => {
      return trip.driver();
    });
  }

  trips(){
    return store.trips.filter(
      function(trip){
        return trip.passengerId === this.id;
      }.bind(this)
    );
  }

}

class Trip{
  constructor(driver, passenger){
    this.id = ++tripId;
    this.driverId = driver.id;
    this.passengerId = passenger.id;

    store.trips.push(this);
  }

  driver(){
    return store.drivers.find(driver => {
      return driver.id === this.driverId;
    });
  }

  passenger(){
    return store.passengers.find(passenger => {
      return passenger.id === this.passengerId;
    });
  }
}
