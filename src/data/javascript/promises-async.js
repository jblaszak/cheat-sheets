export const pageData = {
  pageTitle: "Promises and Async/Await",
  pageInfo: `Promises and Async/Await functions are used when you have to wait some time to get a return from a function (like 
    accessing a database or fetching API data) and don't want to block the rest of your script from running.`,
  cheats: [
    [
      { h2: "Promises" },
      {
        p: `Promises have three possible states: pending, fulfilled and rejected. Meaning they are either waiting for a result, have
        succeeded or failed with some error.`,
      },
    ],
    [
      { h3: "Basic Promise Setup" },
      {
        code: {
          language: `javascript`,
          code: `const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(2), 1000);
    if (condition) {
        reject(new Error('An error occured!'))
    }
});

promise.then(value => {
    console.log(value)
}, error => {
    console.log(error)
}); // waits for promise to resolve, then logs value or returns error message if failed

promise.then(console.log).catch(error => console.log(error)); // shorter way to write before

const promise = Promise.resolve(5); // resolves promise immediately
promise.then(val => val*2)
    .then(val => val/3)  // chaining promises
    .then(console.log)
    .catch(error => console.log(error)) // catches errors up to this point
    .then(console.log('End of stuff naaa')) 
    .finally(() => console.log('DOOOONE!')); // executes after everything, even if error`,
        },
      },
    ],
    [
      { h3: "Chaining Promises" },
      {
        code: {
          language: `javascript`,
          code: `const promise = Promise.resolve(5); // resolves promise immediately
promise.then(val => val*2)
        .then(val => val/3)  // chaining promises
        .then(console.log)
        .catch(error => console.log(error)) // catches errors up to this point
        .then(console.log('End of stuff naaa')) // can still be done after catch`,
        },
      },
    ],
    [
      { h3: "Wrapping Up Promises (finally)" },
      {
        p: `Sometimes we want to execute code afterwards, even if we get an error, like executing teardown functions for a
      database or socket connection.`,
      },
      {
        code: {
          language: `javascript`,
          code: `promise.then(val => val*2)
    .catch(error => console.log(error)) // catches errors up to this point
    .finally(() => console.log('DOOOONE!')); // executes after everything, even if error occurs`,
        },
      },
    ],
    [
      { h3: "Other Promise Functions" },
      {
        code: {
          language: `javascript`,
          code: `promise.all([
    Promise.resolve(3),
    Promise.resolve(2),
]).then(console.log).catch(error => console.log(error)); // waits for all promises to finish before continuing
// if any one throws error, immediately goes into catch block

promise.race([
    new Promise((res,rej) => setTimeout(() => res(5), 1000)),
    new Promise((res,rej) => setTimeout(() => res(10), 2000)),
]).then(console.log); // first promise to resolve OR reject wins, '5' in this case

promise.any([
    new Promise((res,rej) => setTimeout(() => res(5), 2000)),
    new Promise((res,rej) => setTimeout(() => rej(10), 1000)),
]).then(console.log); // first promise to resolve, '5' in this case`,
        },
      },
    ],
    [{ h2: "Async / Await" }],
    [
      { h3: `Basic Usage` },
      {
        p: `Async can be used on functions to make them implicitly return a promise. Within an async function you can
      use the await key to wait for another promise. Note: You can also use await at the uppermost module level.`,
      },
      {
        code: {
          language: `javascript`,
          code: `async function myFunc() {
    const value = await new Promise((res, rej) => setTimeout(() => res(3), 1000));
    console.log(value);
}
myFunct();`,
        },
      },
    ],
    [
      { h3: `Catching Errors` },
      {
        code: {
          language: `javascript`,
          code: `// Using Try/Catch Blocks
async function myFunc() {
    try {
        const value = await new Promise((res, rej) => setTimeout(() => res(3), 1000));
        console.log(value);
    } catch (error) {
        console.log(error);
    }
}
myFunct();

// Using a mix of syntaxes
async function myFunc() {
    return await new Promise((res, rej) => setTimeout(() => res(3), 1000));
}
myFunct().then(console.log).catch(error => console.log(error));`,
        },
      },
    ],
  ],
}
