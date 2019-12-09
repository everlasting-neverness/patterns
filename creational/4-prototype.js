// Прототип - паттерн который позволяет копировать объекты и не вдаваться в подробности их реализации.
// Возвращает клоны объектов. Затраты памяти минимальные. 

class TeslaCar {
  constructor(model, price, interior, autopilot) {
    this.model = model;
    this.price = price;
    this.interior = interior;
    this.autopilot = autopilot;
  }

  produce() {
    return new TeslaCar(this.model, this.price, this.interior, this.autopilot);
  }
}

const prototypeCar = new TeslaCar('S', 80000, 'black',  false);

const car1 = prototypeCar.produce();
const car2 = prototypeCar.produce();
const car3 = prototypeCar.produce();

car1.interior = "white";
car1.autopilot = true;

console.log(car2.interior);
console.log(car3.autopilot);
