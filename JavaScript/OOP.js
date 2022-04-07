// ======== FreeCodeCamp ========
// class and objects
function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log("nom nom");
  },
};

let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);

// ======== FreeCodeCamp ========
// prototype, class, and objects
function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log("nom nom");
  },
};

function Bird() {}
function Dog() {}
Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// update constructors (inherited constructor is Animal)
// Bird.prototype.constructor: Animal -> Bird
// Dog.prototype.constructor: Animal -> Dog
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

let duck2 = new Bird();
let beagle2 = new Dog();

// ======== W3School ========
// before ES6
function Vehicle(brand) {
  this.carname = brand;
}

Vehicle.prototype = {
  present: function () {
    return "I have a " + this.carname;
  },
};

// how do I inherit parent constructor?
function Model(brand, mod) {
  this.brand = brand;
  this.mod = mod;
}

Model.prototype = Object.create(Vehicle.prototype);
Model.prototype.constructor = Model;

// ======== W3School ========
// ES6
class Vehicle {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return "I have a " + this.carname;
  }
}

class Model extends Vehicle {
  constructor(brand, mod) {
    super(brand); // inherit parent class
    this.model = mod;
  }
  show() {
    return this.present() + ", it is a " + this.model;
  }
}

let myCar = new Model("Ford", "Mustang");

// ======== Eloquent JS ========
// prototype
function Person(name) {
  this.name = name;
}
let bob = new Person("bob");
Object.getPrototypeOf(bob); // returns an empty object {}
console.log(Person.prototype); // returns [Object: null prototype] {}
console.log(Object.getPrototypeOf(bob) === Person.prototype); // returns true

console.log(Object.getPrototypeOf(Object.prototype)); // returns null

// ======== Eloquent JS ========
// Symbol
let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 === id2); // returns false

let user = { name: "John" };
user.id1 = 1;
user[id1] = 11;
console.log(user); // returns { name: "John", id1: 1, [Symbol(id)]: 11}

console.log(user.id1 === user["id1"]); // returns true for normal key
console.log(user.id1); // returns 1
console.log(user[id1]); // returns 11

// Global Symbol
let newId1 = Symbol.for("newId");
let newId2 = Symbol.for("newId");
console.log(newId1 === newId2); // returns true

console.log(Symbol.for("id")); // returns Symbol(id)
console.log(Symbol.keyFor(newId1)); // returns "newId"
console.log(Symbol.keyFor(newId2)); // returns "newId"

// Java Iterable interface
// Iterable has a method that returns an Iterator
// Iterator has methods hasNext() and next()

/**
 * public interface Iterable<Item> {
 *  Iterator<Item> iterator();
 * }
 */

/**
 * public interface Iterator<Item> {
 *  boolean hasNext();
 *  Item next();
 * }
 */

// JavaScript iterable
// iterable has a method that returns an iterator
// iterator has methods next() that returns object in forms of
// { value: xxx, done: false }
let okIterator = "OK"[Symbol.iterator]();
console.log(okIterator.next()); // → {value: "O", done: false}
console.log(okIterator.next()); // → {value: "K", done: false}
console.log(okIterator.next()); // → {value: undefined, done: true}

let arr = [1, 2, 3];
let arrIterator = arr[Symbol.iterator]();
console.log(arrIterator.next()); // → {value: 1, done: false}
console.log(arrIterator.next()); // → {value: 2, done: false}
console.log(arrIterator.next()); // → {value: 3, done: false}
console.log(arrIterator.next()); // → {value: undefined, done: true}

// customized iterator
let range = { from: 1, to: 5 };
range[Symbol.iterator] = () => {
  return {
    current: this.from,
    last: this.to,
    next() {
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    },
  };
};

for (let num of range) {
  console.log(num);
}
