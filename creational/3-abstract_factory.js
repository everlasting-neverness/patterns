// Надстройка над "фабрикой". Для успешного функционирования необходимо, чтобы у "подфабрик" был
// одинаковый интерфейс создания объектов.

// Абстрактная фабрика
function bmwProducer(kind) {
  return kind === 'sport' ? sportCarFactory : familyCarFactory;
}

// Фабрика
function sportCarFactory() {
  return new Z4();
}

// Фабрика
function familyCarFactory() {
  return new I3();
}

class Z4 {
  info() {
    return "Z4 is a Sport car!";
  }
}

class I3 {
  info() {
    return "i3 is a Family car!";
  }
}

// Инициализация Абстрактной фабрики
const produce = bmwProducer('sport');

// Фабрика
const sportCar = new produce();

console.log(sportCar.info());
