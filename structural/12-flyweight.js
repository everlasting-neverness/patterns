// Предназначен для экономии памяти, занимаемой объектами.
// Если объект еще не создан, то он создается и помещается во внутренний пулл, если
// он уже был создан - возвращается ссылка на него. Является подобием кэша.
// Предполагается, что свойства, устанавливаемые в объекте будут неизменяемы для всех
// сущностей, которые будут его использовать.

class Auto {
	constructor(model) {
		this.model = model;
	}
}

class AutoFactory {
	constructor(name) {
		this.models = {};
	}

	create(name) {
		let model = this.models[name];
		if (model) return model;
		this.models[name] = new Auto(name);
		return this.models[name];
	}
};

