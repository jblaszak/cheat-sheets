export const pageData = {
  pageTitle: "Javascript Basics",
  pageInfo: `Javascript is a multi-paradigm language that is dynamically typed! It's capable of declarative, event-driven,
    functional, imperative, and object oriented paradigms!`,
  cheats: [
    [
      { h2: "Javascript Versions" },
      {
        p: "Defined by the ECMAScript version, or ES6, etc. for short.",
      },
    ],
    [
      { h2: "Primitive Types" },
      {
        p: "The most basic types of data in javascript.",
      },
      {
        definitionList: [
          {
            title: `BigInt`,
            definition: `Integers that are too big to store in a number.`,
          },
          {
            title: `Boolean`,
            definition: `A value of either 'true' or 'false'.`,
          },
          { title: `Null`, definition: `A non-existant value.` },
          { title: `Number`, definition: `Integer and decimal numbers.` },
          { title: `String`, definition: `A sequence of characters.` },
          {
            title: `Symbol`,
            definition: `A dynamically generated unique value.`,
          },
          { title: `Undefined`, definition: `A value that has not been set.` },
        ],
      },
    ],
    [
      { h2: `Connecting to HTML` },
      {
        code: {
          language: `html`,
          code: `<!DOCTYPE html>
<html>
  <head>
    <script src="script.js"></script>
  </head>
  <body>
    <button>Click me!</button>
  </body>
</html>`,
        },
      },
      {
        code: {
          language: `javascript`,
          code: `window.addEventListener('DOMContentLoaded', main); // waits for DOM tree to be constructed
// OR
window.addEventListener('load', main); // waits for images and css to be loaded

function main() {
  const button = document.querySelector('button');
  button.addEventListener('click', setBackgroundColor);
}

function setBackgroundColor() {
  document.body.style.backgroundColor = '000000';
}`,
        },
      },
      {
        p: `RECOMMENDED WAY: don't create event listener in javascript and use html attributes.`,
      },
      {
        code: {
          language: `html`,
          code: `<script src="script.js" defer></script>`,
        },
      },
      {
        p: `For loading in scripts that don't need the DOM loaded, like metrics tracking, use async attribute. Scripts may potentially finish loading
      before the DOM.`,
      },
      {
        code: {
          language: `html`,
          code: `<script src="script.js" async></script>`,
        },
      },
    ],
    [
      { h2: `Comments` },
      {
        code: {
          language: `javascript`,
          code: `// single-line comment

/* this is a 
multi-line
comment */`,
        },
      },
    ],
    [{ h2: `Variables` }, { p: `Variables are used to store information.` }],
    [
      { h3: `Assigning Variables` },
      {
        code: {
          language: `javascript`,
          code: `console.log(myNum); // throws error because variable isn't assigned yet
console.log(myNum3); // outputs undefined because 'var' variables initialize to undefined
const myNum = 10; // constant that doesn't change
let myNum2 = 12; // a variable that we expect to change later
var myNum3 = 20; // a variable that has hoisting`,
        },
      },
    ],
    [
      { h3: `Hoisting and Scoping` },
      {
        p: `Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, or classes 
        to the top of their scope, prior to the execution of the code.  Hoisting allows functions to be safely used in code before they 
        are declared.  Variable and class declarations are also hoisted, so they can be referenced before they are declared, but this can
        cause weird errors.`,
      },
      {
        p: `Let and const variable declarations are only defined and accessible within (scoped to) the block of code (stuff between { } ) they are in.
      These have 'block scope'. Must be assigned before being accessed. While var has function scope and can be accessed from anywhere inside the function it is in as
      it is automatically assigned a default value of 'undefined' even before it is assigned! Usually best to use const/let.`,
      },
      {
        code: {
          language: `javascript`,
          code: `
console.log(varNum); // reference error

function myFunc() {
    console.log(letNum); // reference error thrown
    console.log(varNum); // undefined
    console.log(varNum2); // undefined
    var varNum = 3;
    if (true) {
        let letNum = 1;
        var varNum2 = 2;
        const constNum = 4;
        constNum = 2; // throws error
        console.log(letNum); // 1
        console.log(varNum2); // 2
    };
    console.log(letNum); // reference error thrown
    console.log(varNum2); // 2
    console.log(varNum); // 3
};

console.log(varNum); // reference error`,
        },
      },
      { link: `https://developer.mozilla.org/en-US/docs/Glossary/Hoisting` },
    ],
    [
      { h2: `Use Strict` },
      {
        p: `Useful for outputting to console if there are certain bugs like missing declarations. Though if using a framework like React, they will usually tell you anyway.
        NOTE: when using strict mode, 'this' is undefined for a standard function.`,
      },
      {
        code: {
          language: `javascript`,
          code: `'use strict'; // enables strict mode at top of file
          
function myFunc() {
    'use strict'; // enables strict mode for this function only
};`,
        },
      },
    ],
    [
      { h2: `Logging to Console` },
      {
        code: {
          language: `javascript`,
          code: `console.log('myText'); // outputs 'myText' to console
console.log('myText1', 'myText2'); // outputs both texts to console
console.error('My error text'); // outputs text in red to console
console.debug('Debug message'); // can be useful to distinguish debug output in console
console.table([[1,2], ['text1', 'text2']]); // logs table of 2D array to console
console.count('countKey'); // outputs an incrementing counter defined by a key to console
console.countReset('countKey'); // resets counter
console.time(); // starts timer;
console.timeLog(); // outputs time since start of timer, doesn't end it
console.timeEnd(); // ends time and outputs time value
console.trace(); // outputs the stack trace to show you what function you're in`,
        },
      },
    ],
    [
      { h2: `Equality and Type Coercion` },
      {
        p: `There are two different types of equality, loose and strict. Loose only compares values by implicitly converting the types
  (type coercion) and then comparing, while strict equality compares the type and values. Empty strings and arrays equate to false, 
  but not objects! Objects and arrays do not compare contents, they compare pointer to object/array so return false unless comparison 
  points to same object/array.`,
      },
      {
        code: {
          language: `javascript`,
          code: `console.log(5 == '5'); // 'loose' equality, true
console.log(5 === '5'); // 'strict equality, false

console.log(Number('1')); // explicit type coercion

console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number('words')); // NaN

console.log('' == false); true
console.log('a" == true); false

console.log(NaN == NaN) // false
console.log(NaN == false) // false
console.log(NaN == null) // false
console.log(NaN == undefined) / false

console.log(Boolean(0)) // false
console.log(Boolean(1)) // true
console.log(Boolean(10)) // true

console.log(null == undefined) // true
console.log(null === undefined) // false
console.log(x == null); // useful for checking for null and undefined at once!
console.log(null == 0) // false
console.log(null == true) // false
console.log(null == false) // false

const arr = [];
console.log(arr == []); // false
console.log(arr === []); // false
console.log(false == []); // true
console.log(false === []); // false

const obj = {};
console.log({} == {}); // false
console.log({} === {}); // false
console.log({} == obj); // false
console.log({} === obj); // false
console.log(obj == obj); // true
console.log(obj === obj); // true
console.log(false == {}); // false
console.log(false === {}); // false`,
        },
      },
    ],
    [
      { h2: `Functions` },
      {
        p: `Functions are mini programs that take inputs (parameters) and return a value. Under the hood they are considered objects. `,
      },
      {
        code: {
          language: `javascript`,
          code: `function myFunction(parameter) {
    return parameter + 1;
}; // Creating a function

myFunction = (parameter) => {
    return parameter + 1;
}; // Modern ES6 function creation

myFunction(5); // Calling (using) a function`,
        },
      },
      {
        p: `Functions are called anonymous functions when they are used in place and not given a name.`,
      },
      {
        code: {
          language: `javascript`,
          code: `myArray.forEach(function(value) {
    console.log(value);
});`,
        },
      },
    ],
    [
      { h2: `Loops` },
      {
        p: `Loops are used to repeatedly do something either a set number of times or while a condition is true.`,
      },
    ],
    [
      { h3: `For Loop` },
      { p: `Iterates a set Number of Times` },
      {
        code: {
          language: `javascript`,
          code: `for (let i=0; i < 10; i++) {
    console.log(i);
};`,
        },
      },
    ],
    [
      { h3: `While Loop` },
      { p: `Loops while some condition is true.` },
      {
        code: {
          language: `javascript`,
          code: `let i = 0;
while (i < 10) {
    console.log(i);
    i++;
};`,
        },
      },
    ],
    [
      { h3: `Do While Loop` },
      {
        p: `Like while loops but runs the code before checking the condition!`,
      },
      {
        code: {
          language: `javascript`,
          code: `let i = 0;
do {
    console.log(i);
    i++;
}
while (i < 10);`,
        },
      },
    ],
    [
      { h3: `Looping Over Iterable (For Of)` },
      { p: `Used to loop over an iterable like arrays or strings!` },
      {
        code: {
          language: `javascript`,
          code: `for (const value of [1,2,3]) {
    console.log(value);
};`,
        },
      },
    ],
    [
      { h3: `Looping Over Objects` },
      { p: `Used to loop over an iterable like arrays or strings!` },
      {
        code: {
          language: `javascript`,
          code: `for (const key in obj) {
    console.log(obj[key]);
};`,
        },
      },
    ],
    [
      { h3: `Breaking out of loops` },
      {
        p: `Sometimes it's necessary to leave a loop or got to the next iteration. Several ways to do this.`,
      },
      {
        code: {
          language: `javascript`,
          code: `for (let i=0; i < 10; i++) {
    if (i === 7) {
        continue; // skips this iteration and continues with next loop iteration
    } else if (i === 8) {
        break; // completely leaves loop
    } else if (i === 9) {
        return someValue; // will leave loop AND completely exit the function it is contained within
    };
};`,
        },
      },
    ],
    [
      { h2: `Conditionals` },
      {
        p: `Used to do something if a certain condition is true.`,
      },
    ],
    [
      { h3: `If / Else Statements` },
      {
        p: `Checks if condition is true, then does something. If not, can do something else.`,
      },
      {
        code: {
          language: `javascript`,
          code: `const value1 = 2;
const value2 = 3;

if (value1 === 3) return false;

if (value2 === 3) {
    console.log('okay');
} else {
    console.log('no okay!')
}

if (value1 + value2 === 5) {
    console.log('Math checks out!');
} else if (value1 + value2 === 6) {
    console.log('Nope, actually, the real sum is 6... Somebody must have changed somethign');
} else {
    console.log('Some message here');
}`,
        },
      },
    ],
    [
      { h3: `Switch/Case Statements` },
      {
        p: `Checks if value is a certain value and executes code and if not executes default code.`,
      },
      {
        code: {
          language: `javascript`,
          code: `switch(myValue) {
case 'One':
    console.log('One');
    break;
case 'Two':
    console.log('Two');
    break;
case 'Three':
case 'Four':
    console.log('Three OR Four');
    break;
default:
    console.log('Default case');
}`,
        },
      },
    ],
    [
      { h3: `Ternary Operator` },
      {
        p: `Shorthand for if/else.`,
      },
      {
        code: {
          language: `javascript`,
          code: `console.log(myNum > 10 ? 'Number > 10!!!' : 'Number is lower than 10. :(')`,
        },
      },
    ],
    [
      { h2: `Error Handling` },
      {
        p: `Gracefully handling errors is critical to a good user experience and helping developers know where they went wrong!`,
      },
      {
        code: {
          language: `javascript`,
          code: `try {
    // run some code here
    throw new Error('You broke it! :(') // disrupts program flow with an error
} catch {
    console.log(error);  // Error gets caught and reported without breaking program flow
}`,
        },
      },
    ],
    [
      { h2: `Debugger Access` },
      {
        p: `This will open up the debug console in Chrome Developer Tools. Supported differently by different browsers and may do nothing.`,
      },
      {
        code: {
          language: `javascript`,
          code: `function myFunction() {
    debugger; // opens up the debugger in the developer tools
    const a = 1;
    const b = '2';
    const added = a+b;
    return a + b;
}`,
        },
      },
    ],
  ],
}
