// Позволяет изменять поведение класса в зависимости от его состояния, создавая
// разные реакции на одни и те же данные внутри одного класса.

class OrderStatus {
    constructor(name, nextStatus) {
        this.name = name;
        this.nextStatus = nextStatus;
    }

    next() {
        return new this.nextStatus();
    }
}

class WaitingForPayment extends OrderStatus {
    constructor() {
        super('waitingForPayment', Shipping);
    }
}

class Shipping extends OrderStatus {
    constructor() {
        super('shipping', Delivered);
    }
}

class Delivered extends OrderStatus {
    constructor() {
        super('delivered', Delivered);
    }
}

class Order {
    constructor() {
        this.state = new WaitingForPayment();
    }

    nextState() {
        this.state = this.state.next();
    }

    cancelOrder() {
        this.state.neme === 'waitingForPayment' ?
            console.log('Order has been canceled!') :
            console.log('Order can not be canceled!');
    }
}


const order = new Order();

console.log(order.state.name);

order.nextState();
console.log(order.state.name);

order.nextState();
console.log(order.state.name);