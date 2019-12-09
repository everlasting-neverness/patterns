// Принимает объект и расширяет его свойства.
// Позволяет добавлять и изменять свойства и поведение объекта уже после его инициализации.

class Car {
  constructor() {
    this.price = 10000;
    this.nodel = "Car";
  }

  getPrice() {
    return this.price;
  }

  getDescription() {
    return this.model;
  }
}

class Tesla extends Car {
  constructor() {
    super();
    this.price = 25000;
    this.model = "Tesla";
  }
}

class Autopilot {
  constructor(car) {
    this.car = car;
  }

  getPrice() {
    return this.car.getPrice() + 5000;
  }

  getDescription() {
    return `${this.car.getDescription()} with autopilot`;
  }
}

class Parktronic {
  constructor(car) {
    this.car = car;
  }

  getPrice() {
    return this.car.getPrice() + 3000;
  }

  getDescription() {
    return `${this.car.getDescription()} with parktronic`;
  }
}

let tesla1 = new Tesla();
tesla1 = new Autopilot(tesla1);
tesla1 = new Parktronic(tesla1);

let tesla2 = new Tesla();
tesla2 = new Autopilot(tesla2);

console.log({
  tesla1Price: tesla1.getPrice(),
  tesla1Description: tesla1.getDescription()
});
console.log({
  tesla2Price: tesla2.getPrice(),
  tesla2Description: tesla2.getDescription()
});
