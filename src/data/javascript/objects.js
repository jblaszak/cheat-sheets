export const pageData = {
  pageTitle: "Javascript Objects",
  pageInfo: `Objects are containers for key value pairs to make things easy to look up. Values can be of any type but keys
must be strings not starting with a number.`,
  cheats: [
    [
      { h2: `Object Usage` },
      {
        code: {
          language: `javascript`,
          code: `const dynamicallySetKey = 'myCoolKey';

const person = {
    name: 'Bob',
    age: 10,
    'otherAttribute': [1, 2, 3],
    'my multi word key': 'cool',
    [dynamicallySetKey]: 'superCool',
    myFunc: () => {
        console.log('A cool function!');
    },
    myFunc2() {
        console.log('Another cool function!');
    },
}; // assigning an object

const name = 'Bob';
const person = {
    name: name,
};

// Shorthand of above if key name matches value's variable name
const person = {
    name,
}

const person = new Object();
person.name = 'Bob';

const myKey = 'age';
const thisPersonsAge = person['age']; // accessing objects values by key
const thisPersonsAge = person[myKey]; // accessing objects values by key
const thisPersonsAge = person.age; // accessing object values by key
person.age = 15; // changing values in object

console.log(person.unknownKey); // logs 'undefined'`,
        },
      },
      {
        p: `NOTE: Objects and arrays can use const since the const declarations describes the object/array that is is pointing to,
      not the contents of the object.`,
      },
    ],
    [
      { h2: `Constucting Object Using a Function` },
      {
        code: {
          language: `javascript`,
          code: `function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
};

const bob = new Person('Bob', '80', 'Retired');`,
        },
      },
    ],
    [
      { h2: `Adding and Removing Keys` },
      {
        code: {
          language: `javascript`,
          code: `myPerson.parent = 'Bob'; // automatically creates key when assigned
delete myPerson.age; // removes key`,
        },
      },
    ],
    [
      { h2: `Comparing Objects` },
      {
        p: `For objects to be evaluated as equal, they must reference the same object, not just one with the same values.`,
      },
      {
        code: {
          language: `javascript`,
          code: `const obj = {};
console.log({} == {});  // false 
console.log({} === {});  // false
console.log(obj == {});  // false
console.log(obj === {});  // false
console.log(obj == obj);  // true
console.log(obj === obj);  // true`,
        },
      },
    ],
    [
      { h2: `Checking if a Key is in Object` },
      {
        p: `'Key in Object' looks at the object and all of its inherited prototype properties, while 'hasOwnProperty' only looks at the object itself,
      ignoring inheritances.`,
      },
      {
        code: {
          language: `javascript`,
          code: `const myObject = {
    prop1: '100',
};

console.log('prop1' in myObject); // true
console.log(myObject.hasOwnProperty('prop1')); // true

console.log('toString' in myObject); // true
console.log(myObject.hasOwnProperty('toString')); // false

// NOT RECOMMENDED because of potential false positive 
console.log(myObject.name !== undefined); // true
myObject.name = undefined;
console.log(myObject.name !== undefined); // false
console.log(myObject.hasOwnProperty('name')); // true`,
        },
      },
    ],
    [
      { h2: `Getters and Setters` },
      {
        code: {
          language: `javascript`,
          code: `const myObject = {
    myValue: 10,
    get getMyValue() {
        return this.myValue;
    },
    set setMyValue(value) {
        this.myValue = value;
    }
}

myObject.getMyValue; // 10;
myObject.setMyValue = 15; // sets to 15`,
        },
      },
    ],
    [
      { h2: `Inheriting From Other Objects` },
      {
        code: {
          language: `javascript`,
          code: `const myObject1 = {
    prop1: 1,
    prop2: 2,
}

const myObject2 = {
    __proto__: myObject1,
}

console.log(myObject2.prop1); // outputs 1`,
        },
      },
    ],
    [
      { h2: `Iterating Over Objects` },
      {
        code: {
          language: `javascript`,
          code: `const myObject1 = {
    prop1: 1,
    prop2: 2,
}

const myObject2 = {
    prop3: 3,
    [Symbol('id')]: 0,
    __proto__: myObject1,
}

console.log(Object.keys(myObject2)); // returns array with prop3 in it, ignores symbols and prototype keys
console.log(Object.values(myObject2)); // returns array with 3 in it, ignores symbols and prototype keys
console.log(Object.entries(myObject2)); // returns array with [prop3, 3] in it, ignores symbols and prototype keys

// Includes inherited properties, but not the non-enumerable properties like toString or symbols
for (key in myObject2) {
    console.log(key); // returns [prop1, prop2, prop3]
};`,
        },
      },
    ],
    [
      { h2: `Copying Objects` },
      {
        code: {
          language: `javascript`,
          code: `const myObject1 = {
    prop1: 1,
    prop2: 2,
}

const myObject2 = {
    prop3: 3,
    [Symbol('id')]: 0,
    __proto__: myObject1,
}

const newObj = {
    prop4: 4,
}
Object.assign(newObj, myObject2);
console.log(newObj);  // returns object with prop4, prop3, and Symbol('id') but nothing else`,
        },
      },
    ],
    [
      { h2: `Making Objects Immutable` },
      {
        code: {
          language: `javascript`,
          code: `Object.freeze(myObject); // makes object immutable
myObject.currentProperty = 10;  // does nothing now, may throw error if in strict mode
myObject.newProperty = 5; // also does nothing!
Object.isFrozen(myObject);  // returns true

Object.seal(myObject);
myObject.currentProperty = 10; // changes property value
myObject.newProperty = 10; // does nothing
Object.isSealed(myObject); // returns true`,
        },
      },
    ],
    [
      { h2: `Object Functions` },
      {
        code: {
          language: `javascript`,
          code: `JSON.stringify(myObject); // converts object to string
JSON.parse(myString); // converts valid string into Javascript Object Notation (JSON) format

console.log(myObject.toString()); // returns [object Object] ... not very useful
// Can override default to do something useful
myObject.toString = function() {
    return 'Descriptive stuff about object.';
}

console.log(myObject.valueOf()); // outputs all of the object
// Can override default
myObject.valueOf = function() {
    return 5;
};
`,
        },
      },
    ],
    [
      { h2: `Converting Object to Another Type` },
      {
        code: {
          language: `javascript`,
          code: `const myObject = {
    prop1: 1,
    [Symbol.toPrimitive](hint) {
        if (hint === 'number') {
            return 10;
        } else if (hint === 'string') {
            return 'a string';
        }
        return 15;
    },
};

console.log(Number(myObject)) // converts to number with value of 5;
console.log(String(myObject)) // returns 'a string', NOTE: if we didn't set, would use default .toString() and return [object Object]

console.log(myObject - 5); // returns 5
console.log(myObject + 5); // returns 20 because it uses default value, '+' could mean addition or concatenation so it doesn't know and uses default`,
        },
      },
    ],
  ],
}
