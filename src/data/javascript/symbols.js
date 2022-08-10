export const pageData = {
  pageTitle: "Javascript Symbols",
  pageInfo: `Symbols are primitive values in javascrpt that are used for unique values. They are hidden from most iteration functions,
  which is a great feature!`,
  cheats: [
    [
      { h2: "Creating a Symbol" },
      {
        code: {
          language: `javascript`,
          code: `const id = Symbol('id');
const id5 = Symbol.for('id5'); // creates symbol that can be used again
const id6 = Symbol.for('id5'); // will have same value as id5`,
        },
      },
    ],
    [
      { h2: "Comparing a Symbols" },
      {
        code: {
          language: `javascript`,
          code: `const id = Symbol('id');
const id2 = Symbol('id');
console.log(id == id2); // false
console.log(id === id2); // false

const id5 = Symbol.for('id5');
const id6 = Symbol.for('id5');
console.log(id5 == id6); // true
console.log(id5 === id6); // true`,
        },
      },
    ],
    [
      { h2: "Use Cases" },
      {
        p: `Useful for when you are getting something back from an API and want to add key-value pairs to the data but you don't want to
        accidentally override existing key-value pairs.  Also, it doesn't show up when you iterate over an iterable containing it.`,
      },
    ],
  ],
}
