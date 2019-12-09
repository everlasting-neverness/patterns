// Нужен для разделения несоприкасающихся функциональностей в одном классе.
// Позволяет поместить всю реализацию в несколько классов: класс абстракции и класс реализации.
// Абстракция - интерфейс взаимодействия, который делегирует управление в реализацию.
// В примере ниже мост создается чтобы не плодить большое кол-во специфичных классов,
// вроде BlackColorBmw и т.п.


class Model {
	constructor(color) {
		this.color = color;
	}
};

class Color {
	constructor(type) {
		this.type = type;
	}
	get() {
		return this.type;
	}
};

class BlackColor extends Color {
	constructor() {
		super("dark-black");
	}
}

class SilbrigColor extends Color {
	constructor() {
		super("Silbermetallic");
	}
}

class Audi extends Model {
	constructor(color) {
		super(color);
	}

	paint() {
		return `Auto: Audi, Color: ${this.color.get()}`;
	}
};

class Bmw extends Model {
	constructor(color) {
		super(color);
	}

	paint() {
		return `Auto: Bmw, Color: ${this.color.get()}`;
	}
};


const blackBmw = new Bmw(new BlackColor());

console.log(blackBmw.paint());