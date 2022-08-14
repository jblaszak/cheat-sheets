export const pageData = {
  pageTitle: "Generators",
  pageInfo: `Generators are iterable objects created by using a generator function.`,
  cheats: [
    [
      { h2: "Basic Example" },
      {
        p: "Note: Arrow functions do not work with generators.",
      },
      {
        code: {
          language: `javascript`,
          code: `function* genNumbers() {
    yield 1;
    yield 2;
    return 3;
    yield 4;
}

const generator = genNumbers();

console.log(generator.next()); // outputs { value: 1, done: false };
console.log(generator.next()); // outputs { value: 2, done: false };
console.log(generator.next()); // outputs { value: 3, done: true };
console.log(generator.next()); // outputs { value: undefined, done: true };`,
        },
      },
    ],
    [
      { h2: "Using Loops" },
      { p: `Note: 'for of' loops ignore return statements!` },
      {
        code: {
          language: `javascript`,
          code: `function* genNumbers() {
    for (let i=0; i<count; i++) {
        yield i;
    }
    return 4;
}

const generator = genNumbers(3);

for (value of generator) {
    console.log(value);  // outputs 1,2,3
}`,
        },
      },
    ],
    [
      { h2: "Passing Values to Next" },
      {
        code: {
          language: `javascript`,
          code: `function* genNumbers() {
    const value = yield 0;
    yield value + 3;
}

const generator = genNumbers(3);

console.log(generator.next()); // outputs {value: 0, done: false}
console.log(generator.next(5)); // outputs {value: 8, done: false}, value of 5 gets passed into the generator`,
        },
      },
    ],
    [
      { h2: "Returning a Value" },
      {
        code: {
          language: `javascript`,
          code: `function* genNumbers() {
    const value = yield 0;
    yield value + 3;
}

const generator = genNumbers(3);

console.log(generator.next()); // outputs {value: 0, done: false}
console.log(generator.return(5)); // outputs {value: 5, done: true}
//// instead of line above
console.log(generator.return()); // outputs {value: undefined, done: true}
////
console.log(generator.next()); // outputs {value: undefined, done: true}`,
        },
      },
    ],
    [
      { h2: "Throwing Errors" },
      {
        code: {
          language: `javascript`,
          code: `console.log(generator.throw(new Error('error message here'));`,
        },
      },
    ],
    [
      { h2: "Yielding To Generators" },
      {
        code: {
          language: `javascript`,
          code: `function* gen1() {
    yield 1;
    yield 2;
}

function* gen2() {
    yield 3;
    yield 4;
}

function* genNumbers() {
    yield* gen1();
    yield 2.5;
    yield* gen2();
}

// logging will output
// { value: 1, done: false }
// { value: 2, done: false }
// { value: 2.5, done: false }
// { value: 3, done: false }
// { value: 4, done: false }
// { value: undefined, done: true }`,
        },
      },
    ],
  ],
}
