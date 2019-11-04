// Компоновщик. Позволяет скомпоновать множество объектов в древовидную
// структуру и работать с ней так, как будто это - один единственный объект.
// Имеет единый интерфейс вызова. В самом исходном компоненте никаких действий
// не происходит. Он передает вызовы во все вложенные компоненты по цепочке и методы
// вызываются уже в каждом их них.

class Equipment {
  getPrice() {
    return this.price || 0;
  }

  setPrice(price) {
    this.price = price;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }
}

class Engine extends Equipment {
  constructor() {
    super();
    this.setName("Engine");
    this.setPrice(800);
  }
}

class Body extends Equipment {
  constructor() {
    super();
    this.setName("Body");
    this.setPrice(3000);
  }
}

class Tools extends Equipment {
  constructor() {
    super();
    this.setName("Tools");
    this.setPrice(4000);
  }
}

class Composite extends Equipment {
  constructor() {
    super();
    this.equipments = [];
  }

  add(equipment) {
    this.equipments.push(equipment);
  }

  getPrice() {
    return this.equipments
      .map(equipment => equipment.getPrice())
      .reduce((a, b) => a + b);
  }
}

class Car extends Composite {
  constructor() {
    super();
    this.setName("Audi");
  }
}

const myCar = new Car();

myCar.add(new Engine());
myCar.add(new Body());
myCar.add(new Tools());

console.log(`${myCar.getName()} price is ${myCar.getPrice()}`);
