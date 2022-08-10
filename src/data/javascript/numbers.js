export const pageData = {
  pageTitle: "Javascript Numbers and Math",
  pageInfo: ``,
  cheats: [
    [
      { h2: `Numbers` },
      {
        code: {
          language: `javascript`,
          code: `let number = 10;  // assigning integer
let number = 10.8;  // assigning float
let number = Infinity; // infinity representation
let number = BigInt(100); // creates a BigInt number
let number = 10 + 'a'; // NaN (not a number)
let number = 100n; // same as BigInt above

Number('10.8'); // Converting string to number
parseInt('10.5px'); // returns everything before the first non-number character (10)
parseFloat('2.5rem'); // same as above but returns the float number (2.5)`,
        },
      },
    ],
    [
      { h2: `Math Operators` },
      {
        code: {
          language: `javascript`,
          code: `number = number + 10; // addition
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
number === 10; // strict equality, value and type must match`,
        },
      },
    ],
    [
      { h2: `Math Functions` },
      {
        code: {
          language: `javascript`,
          code: `Math.round(number); // round to nearest whole number
Math.floor(number); // round to lower whole number
Math.ceiling(number); // round to upper whole number
Math.random(); // returns random number between 0 and 1
Math.pow(10) // exponent to power of 10`,
        },
      },
    ],
  ],
}
