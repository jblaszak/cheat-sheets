export const pageData = {
  pageTitle: "This",
  pageInfo: `This references the context in which the current code is running. The value of 'this' is determined at runtime.`,
  cheats: [
    [
      { h2: "Without Strict Mode" },
      {
        code: {
          language: `javascript`,
          code: `console.log(this);  // outputs window information
function logThis() {
    console.log(this);  // outputs window information
};

const obj = {
    logThis,
}
obj.logThis(); // outputs the object

const button = document.querySelector('button');
button.addEventListener('click', logThis);  // will log the button when running the logThis func`,
        },
      },
    ],
    [
      { h2: "With Strict Mode" },
      {
        code: {
          language: `javascript`,
          code: `'use-strict'
console.log(this);  // outputs window information
function logThis() {
    console.log(this);  // outputs undefined
}`,
        },
      },
    ],
    [
      { h2: "Arrow Functions" },
      { p: `Arrow functions do not have their own 'this' binding.` },
      {
        code: {
          language: `javascript`,
          code: `const logThis = () => {
    console.log(this);  // outputs window information
};

const button = document.querySelector('button');
button.addEventListener('click', logThis);  // will log the window when running the logThis func, since arrow func doesn't have this binding`,
        },
      },
    ],
    [
      { h2: "Binding 'This'" },
      {
        code: {
          language: `javascript`,
          code: `function logThis() {
    console.log(this);
};

const obj = {
    num: 10,
};
counst boundLogThis = logThis.bind(obj); // binds object to the 'this' context
boundLogThis(); // outputs the object

function logThis2(x,y) {
    console.log(this);
    console.log(x, y);
};

counst boundLogThis2 = logThis2.bind(obj); // binds object to the 'this' context
boundLogThis2(5, 10); // outputs the object, plus 5 10

counst boundLogThis3 = logThis2.bind(obj, 5, 10); // binds object to the 'this' context
boundLogThis3(); // outputs the object, plus 5 10 but 5 and 10 will be fixed to what was originally passed to bind

logThis2.call(obj, 5, 10); // immediately runs the logThis2 function after binding
logThis2.apply(obj, [5, 10]); // same as call but gets passed an array instead of individual parameters`,
        },
      },
    ],
    [
      { h2: "Binding 'this' To Array Functions" },
      {
        code: {
          language: `javascript`,
          code: `[1,2,3].forEach(function(num) {
    console.log(this);
    console.log(num);
}, { num: 10 });  // second parameter to forEach binds the 'this' to the object { num: 10 } for the scope of forEach

[1,2,3].forEach((num) => {
    console.log(this);
    console.log(num);
}, { num: 10 });  // arrow functions still don't have this binding! aaaargh!`,
        },
      },
    ],
    [
      { h2: "Classes Using 'this'" },
      {
        p: `In a class, the 'this' keyword refers to the context of the instance of the class.`,
      },
      {
        code: {
          language: `javascript`,
          code: `'use-strict'
          
class Person {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name);
    }
}

const newPerson = new Person('myName');
newPerson.speak(); // outputs 'myName'`,
        },
      },
    ],
  ],
}
