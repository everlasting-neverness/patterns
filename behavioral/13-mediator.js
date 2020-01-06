// Посредник содержит в себе связи между различными классами, что позволяет инкапсулировать специфическую логику
// и переиспользовать компонент.

class OfficialDealer {
    constructor() {
        this.customers = [];
    }

    orderAuto(customer, auto, info) {
        const name = customer.getName();
        console.log(`Order name: ${name}. Order auto is ${auto}`);
        console.log(`Additional info: ${info}`);
        this.addToCustomersList(name);
    }

    addToCustomersList(name) {
        this.customers.push(name);
    }

    getCustomerList() {
        return this.customers;
    }
}

class Customer {
    constructor(name, dealerMediator) {
        this.name = name;
        this.dealerMediator = dealerMediator;
    }

    getName() {
        return this.name;
    }

    makeOrder(auto, info) {
        this.dealerMediator.orderAuto(this, auto, info);
    }
}


const mediator = new OfficialDealer();

const john = new Customer('John', mediator);
const helen = new Customer('helen', mediator);

john.makeOrder('BMW', 'with parktronic');
helen.makeOrder('Tesla', 'with autopilot');

console.log(mediator.getCustomerList());