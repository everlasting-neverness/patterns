// Применяется, когда в системе необходим только 1 экземпляр конкретного объекта.
// Пример - корзина в интерент магазине.
// Паттерн гарантирует, что у объекта есть только один экземпляр.
// В примере ниже можно увидеть, что создав 2 инстанса класса, они оба ссылаются на один и тот же объект.

let instance;

class Counter {
  constructor() {
    if (typeof Counter.instance === 'object') {
      return Counter.instance;
    }
    Counter.instance = this;
    this.count = 0;
    return this;
  }

  getCount() {
    return this.count;
  }

  increaseCount() {
    return this.count++;
  }
}


const myCount1 = new Counter();
const myCount2 = new Counter();

myCount1.increaseCount();
myCount1.increaseCount();
myCount2.increaseCount();
myCount2.increaseCount();

console.log(myCount1.getCount());
console.log(myCount2.getCount());
