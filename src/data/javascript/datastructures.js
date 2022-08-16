export const pageData = {
  pageTitle: "Javascript Datastuctures",
  pageInfo: ``,
  cheats: [
    [
      { h2: "Stack" },
      {
        code: {
          language: `javascript`,
          code: `const stack = [];
stack.push(1);
stack.push(2);
console.log(stack.pop()); // 2`,
        },
      },
    ],
    [
      { h2: "Queue" },
      {
        code: {
          language: `javascript`,
          code: `// bad implementation because taking something from front of queue is 0(n), not 0(1)
const queue = [];
queue.push(1);
queue.push(2);
console.log(queue.shift()); // 1

// better implementation using linked lists (see linked list at bottom)
const queue = new LinkedList();
queue.addEnd(1);
queue.addEnd(2);
console.log(queue.removeStart()); // 1`,
        },
      },
    ],
    [
      { h2: "Map" },
      {
        p: `Holds key-value pairs like an object but has a few key differences.  Object keys must be strings or symbols, but map
      keys can be of any type. Objects do not maintain insertion order for iteration but maps do! Objects can be easily converted 
      into JSON but Maps cannot.  Objects can utilize the prototype chain for inheritance, but maps cannot.`,
      },
      {
        code: {
          language: `javascript`,
          code: `const map = new Map(); // creates a new map
map.set('myKey', 'myValue'); // adds first key-value pair
map.set(10, 'ten'); // can use any type as key
console.log(map.get(10)); // outputs the value associated with a key
map.size;  //  outputs number of keys in map
map.has(10); // checks for a key, output true

const map = new Map([['myKey', 'myValue'],[10, 'ten']]); // initializes map with 2D array 

map.set({}, 100);
map.has({}); // false, since {} here is a new object so comparison fails

map.delete(10); // deletes a key from map
map.clear(); // empties the whole map

// loop through all map key-value pairs using 'for of' loop
for([key, value] of map) {
    console.log(key, value);
};
    
// loop through all map key-value pairs using 'forEach'
map.forEach((value,key) => {
    console.log(key, value);
});

// iterate through entries
const iter = map.entries();
console.log(iter.next().value); // outputs first key-value pair in array
const keys = map.keys();
const values = map.values();`,
        },
      },
    ],
    [
      { h2: "Set" },
      {
        p: `Sets just a collection of unique values. There cannot be duplicates of a value even if you try to add the same value
      twice. Values in the sets are kept in insertion order for when the set is iterated over.`,
      },
      {
        code: {
          language: `javascript`,
          code: `const set = new Set();
set.add(123);
set.add(456);
console.log(set.has(123)); // true
console.log(set.has(1234)); // false

set.delete(123);  // deletes a specific value from the set
set.clear(); // deletes all values from the set

// loop through all values using 'for of' loop
for (value of set) {
    console.log(value);
}
    
// loop through all values using 'forEach'
set.forEach(value => {
    console.log(value);
});

// iterating through values, note: keys, values and entries all exist [key, value], [123, 123]
const iter = set.values();
console.log(iter.next().value);

// use case, filter out duplicates in array
const arr = [1,2,2,3,4];
console.log(Array.from(new Set(arr)));  // [1,2,3,4]`,
        },
      },
    ],
    [
      { h2: "Weak Sets and Weak Maps" },
      {
        p: `Weak Set values can only be objects. Weak Map keys can only be objects.  Both hold 'weak' references to the objects,
        meaning they do not prevent the objects from being garbage collected.  Neither can be iterated over.`,
      },
      {
        code: {
          language: `javascript`,
          code: `const weakSet = new WeakSet();

(function() {
    const obj={};
    weakSet.add(obj);
})();  // here obj could potentially be garbage collected after since the only reference is scoped inside this IIFE

console.log(weakSet.size); // undefined
console.log(weakSet.has({})); // false
console.log(weakSet.has(obj)); // true`,
        },
      },
    ],
    [
      { h2: "Linked List" },
      {
        p: `Weak Set values can only be objects. Weak Map keys can only be objects.  Both hold 'weak' references to the objects,
        meaning they do not prevent the objects from being garbage collected.  Neither can be iterated over.`,
      },
      {
        code: {
          language: `javascript`,
          code: `class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    addStart(value) {
        const node = new Node(value);
        const node.next = this.head;
        this.head = node;
    }
    addEnd(value) {
        const node = new Node(value);
        let curr = this.head;

        if (curr == null) {
            this.head = node;
            return;
        }
        
        while (curr != null && curr.next != null) {
            curr = curr.next;
        }
        curr.next = node;
    }
    removeStart() {
        const oldValue = this.head.value;
        this.head = this.head.next;
        return oldValue;
    }
}

const list = new LinkedList();
list.addStart(1);
list.addStart(2);
list.addEnd(3);

console.log(list.head.value); // 2
console.log(list.head.next.value); // 1
console.log(list.head.next.next.value); // 3
console.log(list.head.next.next.next.value); // null`,
        },
      },
    ],
  ],
}
