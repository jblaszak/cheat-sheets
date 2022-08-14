export const pageData = {
  pageTitle: "Javascript Classes & Inheritance",
  pageInfo: ``,
  cheats: [
    [
      { h2: "Inheritance" },
      {
        p: `Inheritance in javascript is done through prototypal inheritance where objects only inherit from other objects rather
        than from blueprints. This inheritance only goes one way.  Inheritance keeps going up the chain of prototypes until a null
        prototype is found, so one object can inherit propreties from many layers up.`,
      },
      {
        code: {
          language: `javascript`,
          code: `const person = {
    isHuman: true,
};
const child = Object.create(person); // creates a child object inheriting the properties of person
child.maxAge = 18;

console.log(person.maxAge); // error
console.log(child.maxAge); // 18
console.log(child.isHuman); // true`,
        },
      },
    ],
    [
      { h2: "Inheritance Functions" },
      {
        code: {
          language: `javascript`,
          code: `const person = {
    isHuman: true,
};

const child = {};
child.__proto__ = person; // becoming deprecated way of assigning inheritance, not recommended

const child = Object.create(person); // creates a child object inheriting the properties of person

const child = Object.assign(Object.create(person), {maxAge: 18}); // creates child object with maxAge property and all person props

const child = {
    max.Age: 18,
};
Object.setPrototypeOf(child, person); // same as above but inefficient, best to just set inheritance when creating object and do it once

const child = Object.create(person, {
    maxAge: {
        value: 18,
        writable: true, // can this value be changed?
        configurable: true, // can we change any of the values on the object?
        enumerable: true, // can we find this property when we iterate through this object?
    }
}); // lots of extra verbose code, not recommended

const bob = Object.create(child);
bob.name = 'bob';
console.log(bob.__prototype__.__prototype__); // outputs {isHuman: true}, old way, not recommended
console.log(Object.getPrototypeOf(Object.getPrototype(bob))); // new way, does same as above

child.maxAge = 19;
console.log(bob.maxAge); // 19, prototype are actual references to the inherited object`,
        },
      },
    ],
    [
      { h2: "Constructor Functions" },
      {
        code: {
          language: `javascript`,
          code: `function Person(name) {
    this.name = name;
}

Person.prototype = {
    constructor: Person,
    isHuman: true,
}

const bob = new Person('Bob');
const bill = new bob.constructor('Bill'); // same as calling person
console.log(Object.getPrototypeOf(bob) === Object.getPrototypeOf(bill)); // true, they reference the same prototype object

bob.__proto__.test = 'test';
console.log(bill.test); // test, again since referencing the same prototype, adding that property adds it to both persons

Person.prototype.speak = function() {
    console.log('My name is' + this.name);
};
bob.speak(); // bob
bill.speak(); // bill, 'this' keyword targets the instance

console.log(bob instanceOf Person); // true, checks if somewhere in the chain there is the Person.prototype object
console.log(bob instanceOf Object); // true, at the top of the chain there's an object prototype`,
        },
      },
    ],
    [
      { h2: "Polyfills" },
      {
        p: `Check if a browser supports certain functions and if not, adds them with one behaves as we expect.`,
      },
      {
        code: {
          language: `javascript`,
          code: `if (Array.prototype.push === undefined) {
    Array.prototype.push = function(value) {
        this[this.length] = value;
    }
}

const arr = [1,2,3];
arr.push(4);`,
        },
      },
    ],
    [
      { h2: "Modern Syntax" },
      {
        code: {
          language: `javascript`,
          code: `class Person {
    static isCoolHuman = true; // static properties are properties of the class, not the instance

    isHuman = true;

    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log('My name is ' + this.name);
    }
}

const bob = new Person('bob');
const bill = new Person('bill);
bob.speak();
bob.isHuman = false;
console.log(bob.isHuman); // false
console.log(bill.isHuman); // true, these properties are tied to the instance!

console.log(bob.isCoolHuman); // undefined
console.log(Person.isCoolHuman); // true, static properties are properties of the class, not the instance

class Child extends Person {
    #age; // private variable, only accessible inside of this class, not even if this value is inherited!
    constructor (name, age) {
        super(name); // calls the constructor of the class we are inheriting from
        this.#age = age;
    }
}

const child = new Child('jill', 15);
child.speak(); // 'My name is jill'

console.log(child instanceof Person); // true
console.log(child.age); // undefined
console.log(child.#age); // error`,
        },
      },
    ],
  ],
}
