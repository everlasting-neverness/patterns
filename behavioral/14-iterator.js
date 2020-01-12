// Дает возможность последовательно обходить элементы со стороны их объектов,
// не раскрывая их внутреннее представление.
// Ключевая идея - вынести поведение обхода коллекции из самой коллекции в отдельный класс.

class ArrayIterator {
    constructor(el) {
        this.index = 0;
        this.elements = el;
    }

    next() {
        return this.elements[this.index++];
    }

    hasNext() {
        return this.index < this.elements.length;
    }
}

class ObjectIterator {
    constructor(el) {
        this.index = 0;
        (this.keys = Object.keys(el)), (this.elements = el);
    }

    next() {
        return this.elements[this.keys[this.index++]];
    }

    hasNext() {
        return this.index < this.keys.length;
    }
}

const collection = new ArrayIterator(['Audi', 'BMW', 'Tesla', 'Mersedes']);

while (collection.hasNext()) {
    console.log(collection.next());
}
