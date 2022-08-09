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
    ],
    [
      { h2: `Use Strict` },
      {
        p: `Useful for outputting to console if there are certain bugs like missing declarations. Though if using a framework like React, they will usually tell you anyway.`,
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
      { h2: `Numbers and Math` },
      {
        code: {
          language: `javascript`,
          code: `let number = 10;  // assigning integer
let number = 10.8;  // assigning float
let number = Infinity // infinity representation
let number = BigInt(100) // 
let number = 10 + 'a' // NaN (not a number)
let number = 100n // same as BigInt above

Number('10.8'); // Converting string to number
parseInt('10.5px') // returns everything before the first non-number character (10)
parseFloat('2.5rem') // same as above but returns the float number (2.5)

// Math //
number = number + 10; // addition
number += 10 // addition shorthand
number = number - 10; // subtraction
number -= 10 // subtraction shorthand
number = number * 10; // mutliplication
number *= 10 // multiplication shorthand
number = number / 10; // division
number /= 10 // division shorthand
number = number % 10; // remainder
number %= 10; // remainder shorthand

number < 10; // less than
number <= 10; // less than or equal to
number > 10; // greater than
number >= 10; // greater than or equal to
number == 10; // loose equality check, doesn't check type (i.e. string '10.0' matches number 10)
number === 10; // strict equality, value and type must match 

Math.round(number); // round to nearest whole number
Math.floor(number); // round to lower whole number
Math.ceiling(number); // round to upper whole number
Math.random(); // returns random number between 0 and 1
Math.pow(10) // exponent to power of 10`,
        },
      },
    ],
    [
      { h2: `Arrays` },
      {
        p: `Arrays are lists of values in a specific order. Note: under the hood, arrays are javascript objects.`,
      },
      {
        code: {
          language: `javascript`,
          code: `const arr = [1, 2, 3];  // assigning array
arr[0]; // accessing 1st element of array
arr.push(4); // adds element to end of array`,
        },
      },
    ],
    [{ h2: `Strings` }, { p: `Strings are just sequences of characters!` }],
    [
      { h3: `String Usage` },
      {
        code: {
          language: `javascript`,
          code: `let str = 'myString';  // assigning a string
str = str + 'moreString'; // concatenating strings
str = str + 10; // gives 'myString10'
str = 'mySpecialCharacter\\''; // special characters prefaced with '\\'
str = 'myString \\n'; // creates new line after text
str = \`\${myNumber + 22}\`; // template literal taking variable's value into string
str = \`Multi-line
template literal\`; // template literal doing multiple lines`,
        },
      },
    ],
    [
      { h3: `String Functions` },
      {
        code: {
          language: `javascript`,
          code: `str[0]; // gives first character of string
str.chartAt(0) // gives first character of string
str.includes('word'); // checks if string has substring
str.startsWith('a'); // checks if string starts with substring
str.endsWith('z'); // checks if string ends with substring
str.toUpperCase(); // converts string to uppercase
str.toLowerCase(); // converts string to lowercase
str.substr(1); // returns substring from index 1 to last index
str.substr(1, 2); // returns substring from index 1 to 2
str.slice(1, 3); // returns substring from index 1 to 2 (not a typo)
str.padStart(5, '-');  // puts '-' at start of string until string is 5 chars long
str.padEnd(5, '-'); // same as padStart but for end of string
str.trim(); // removes all white space from start and end
str.trimStart(); // removes all white space from start
str.trimEnd(); // removes all white space from end
str.split(',');  // returns an array of substrings split by ','`,
        },
      },
    ],
    [
      { h2: `Objects` },
      {
        p: `Objects are containers for key value pairs to make things easy to look up. Values can be of any type but keys
      must be strings not starting with a number.`,
      },
    ],
    [
      { h3: `Object Usage` },
      {
        code: {
          language: `javascript`,
          code: `const person = {
    name: 'Bob',
    age: 10,
}; // assigning an object

const thisPersonsAge = person[age]; // accessing objects values by key
const thisPersonsAge = person.age; // accessing object values by key
person.age = 15; // changing values in object`,
        },
      },
    ],
    [
      { h3: `Object Functions` },
      {
        code: {
          language: `javascript`,
          code: `JSON.stringify(person); // converts object to string
JSON.parse(myString); // converts valid string into Javascript Object Notation (JSON) format`,
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
  ],
}
