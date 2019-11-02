// Позволяет создавать различные конфигурации объектов, не засоряя исходный конструктор дополнительной логикой.
// Применяется, когда процесс инициализации объекта состоит из нескольких шагов или
// для инициализации требуется множество различных параметров.
// Каждый из методов класса возвращает this, чтобы был возможен чейнинг.

class Car {

	constructor() {
		this.autoPilot = false;
		this.parktronic = false;
		this.signaling = false;
	}
}

class CarBuilder {
	constructor() {
		this.car = new Car();
	}

	addAutoPilot(autoPilot) {
		this.car.autoPilot = autoPilot;
		return this;
	}

	addParktronic(parktronic) {
		this.car.parktronic = parktronic;
		return this;
	}

	addSignaling(signaling) {
		this.car.signaling = signaling;
		return this;
	}

	updateEngine(engine) {
		this.car.engine = engine;
		return this;
	}

	build() {
		return this.car;
	}
}

const myCar1 = new CarBuilder()
                    .addSignaling(true)
                    .addParktronic(true)
                    .updateEngine('V8')
                    .build();

const myCar2 = new CarBuilder()
                    .addAutoPilot(true)
                    .updateEngine('V4')
                    .build();

console.log(myCar1);
console.log(myCar2);
