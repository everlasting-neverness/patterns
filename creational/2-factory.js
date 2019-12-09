// Применяется, когда треубется создать множество однотипных объектов, имеющих одинаковую структуру, но с
// разными данными, которые передаются в кач-ве параметров при создании инстанса.
// Может иметь 2 класса: суперкласс как надстройка из "фабрики", и сам класс объекта.
// Подходит, когда кол-во типов возвращаемых объектов невелико и их структура однородна.
// Проблему увеличения кол-ва типов и усложнения структуры помогает решить паттерн Abstract Factory.

class BMW {
  constructor(model, price, maxSpeed) {
    this.model = model;
    this.price = price;
    this.maxSpeed = maxSpeed;
  }
}

class BMWFactory {
  create(type) {
    if (type === 'X5') {
      return new BMW(type, 108000, 300);
    }
    if (type === 'X6') {
      return new BMW(type, 111000, 320);
    }
  }
}

const factory = new BMWFactory();

const x5 =  factory.create('X5');
const x6 =  factory.create('X6');

console.log(x5.maxSpeed);
console.log(x6.maxSpeed);
