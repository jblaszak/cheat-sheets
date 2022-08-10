export const pageData = {
  pageTitle: "Modern Javascript",
  pageInfo: `Modern Javascript includes a lot of 'syntactic sugar' which allows the coder to do more complex things with simplified notation!`,
  cheats: [
    [
      { h2: "Arrow Functions" },
      {
        p: `Arrow functions are a more concise way of declaring functions, especially anonymous functions. NOTE: they do not have their own 'this'
        binding and cannot be used as constructors or generators.`,
      },
      {
        code: {
          language: `javascript`,
          code: `// Creating new function
const myFunction = (param1, param2) => {
    return param1 + param2;
};

// Creating anonymous function
[1,2,3,4].map((num) => num + 2);
[1,2,3,4].map(num => num + 2);`,
        },
      },
    ],
    [
      { h2: "Rest and Spread Operators" },
      {
        p: `Same syntax, but main difference between rest and spread is the rest operator puts the rest of some specific user-supplied values
        into a javascript array, but the spread syntax expands iterables into individual elements.`,
      },
      {
        code: {
          language: `javascript`,
          code: `const arr = [1,2,3,4];
const add(x, y) {
    console.log(x + y);
};
add(...arr); // will only give first two elements to function

const newArray = [0, ...arr, 5, 6]; // [0,1,2,3,4,5,6]

const logParams = (x, ...rest) => {
    console.log(x);
    console.log(rest);
};
logParams(1,2,3,4);  // 1 [2,3,4]`,
        },
      },
    ],
    [
      { h2: "Destructuring" },
      {
        p: `Can assign mutliple variables at once with this syntax.`,
      },
      {
        code: {
          language: `javascript`,
          code: `const arr = [1,2,3,4];
const [first, second, ...rest] = arr;
console.log(first, second, rest); // 1 2 [3,4]

const person = {
    name: 'Bob',
    age: '24',
};
const {name, age} = person;
console.log(name, age); // Bob 24

const {name: firstName, ...rest} = person;
console.log(firstName, rest); // Bob { age: 24 }

// Using default/fallback values if key doesn't exist
const {name: firstName, job='Developer', ...rest} = person;
console.log(job); // Developer

// Destructuring in Functions
const printName = ({name}) => {
    console.log(name);
}
printName(person);`,
        },
      },
    ],
    [
      { h2: "Template Literals" },
      {
        p: `Makes adding variables/calculations to strings easier and simpler to read! Can extends over multiple lines!`,
      },
      {
        code: {
          language: `javascript`,
          code: `const name = 'Bob';

console.log('Hello ' + name);
console.log(\`Hello \${name}\`);

console.log(\`Your math result: \${1 * 3}\`);
console.log(\`Your words
            span multiple
lines! (note, white space included!)\`);`,
        },
      },
    ],
    [
      { h2: "Nullish Coalescing" },
      {
        p: `Makes adding default values in case of null/undefined simpler!`,
      },
      {
        code: {
          language: `javascript`,
          code: `// If name null or undefined, use default
const defaultName = name != null ? name : 'Default Name';
const defaultName = name ?? 'Default Name';`,
        },
      },
    ],
    [
      { h2: "Optional Chaining" },
      {
        p: `Makes adding default values in case of null/undefined simpler!  Super useful for when getting values from an API.`,
      },
      {
        code: {
          language: `javascript`,
          code: `const person = {
    job: {
        salary: 100000,
    },
};
console.log(person.job.salary) // 100000

const person = {};
console.log(person.job.salary) // ERROR!!!
console.log(person?.job?.salary) // undefined
console.log(person?.job?.salary ?? 'Person has no job or salary info'); // 'Person has no...'`,
        },
      },
    ],
    [
      { h2: "Short Circuit Evaluation" },
      {
        p: `Shorthand for executing code only if previous condition is true.  Since javascript evaluates from left to right, if 
        condition is false, it won't execute second part!`,
      },
      {
        code: {
          language: `javascript`,
          code: `const condition = true;
condition && myFunct(param1, param2);`,
        },
      },
    ],
  ],
}
