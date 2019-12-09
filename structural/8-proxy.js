// Прокси позволяет перехатывать вызовы оригинального объекта и производить
// какие-либо действия перед или после обращения к нему.

class CarAccess {
  constructor(password) {
    this.password = password;
  }

  open() {
    console.log("Opening the car door");
  }

  close() {
    console.log("Closing the car door");
  }
}

// Proxy
class SecuritySystem {
  constructor(door) {
    this.door = door;
  }

  open(password) {
    if (this.authenticate(password)) {
      this.door.open();
    } else {
      console.log("Access denied!");
    }
  }

  authenticate(password) {
    return password === this.door.password;
  }

  close() {
    this.door.close();
  }
}


const door = new SecuritySystem(new CarAccess('test123'));

console.log(door.open('bla-bla'));
console.log(door.open('test123'));

door.close();
