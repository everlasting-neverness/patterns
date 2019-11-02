// Цель паттерна - скрыть сложную логику внутри объекта и выдать наружу простой способ манипуляции им.
// Фасад является обстракцией над объектом, предоставляющий удобный интерфейс взаимодействия с ним.

class Сonveyor {
  setBody() {
    console.log("Body set!");
  }

  getEngine() {
    console.log("Dismantle Engine!");
  }

  setEngine() {
    console.log("Engine set!");
  }

  setInterior() {
    console.log("Exterior added!");
  }

  changeInterior() {
    console.log("Update interior!");
  }

  setExterior() {
    console.log("Added interior!");
  }

  setWheels() {
    console.log("Wheels!");
  }

  addElectronics() {
    console.log("Added electronics!");
  }

  paint() {
    console.log("Car painted!");
  }
}

class СonveyorFacade {
  constructor(car) {
    this.car = car;
  }

  assembleCar() {
    this.car.setBody();
    this.car.setEngine();
    this.car.setInterior();
    this.car.setExterior();
    this.car.setWheels();
    this.car.addElectronics();
    this.car.paint();
    return this.car;
  }

  changeEngine() {
    this.car.getEngine();
    this.car.setEngine();
    return this.car;
  }

  changeInterior() {
    this.car.getInterior();
    this.car.setInterior();
    return this.car;
  }
}

let conveyor = new СonveyorFacade(new Сonveyor());

let newCar = conveyor.assembleCar();
console.log(newCar);

newCar = conveyor
                .changeEngine()
                .changeInterior();
console.log(newCar);
