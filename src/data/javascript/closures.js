export const pageData = {
  pageTitle: "Closures",
  pageInfo: `Closures mean that the inner function has access to the outer function's variables. The inner function will look
  to the local scope first for the variable, if not will go to next level up.`,
  cheats: [
    [
      { h2: "Example 1" },
      {
        code: {
          language: `javascript`,
          code: `let globalNum = 5;
function logNum() {
    const localNum = 1;
    console.log(globalNum + localNum);
}
globalNum = 10;
logNum();  // outputs 11`,
        },
      },
    ],
    [
      { h2: "Example 2" },
      {
        code: {
          language: `javascript`,
          code: `function example() {
    const num = 5;
    function logNum(num) {
        console.log(num);
    };
    logNum(10);
}
example(); // outputs 10;`,
        },
      },
    ],
    [
      { h2: "Example 3" },
      {
        code: {
          language: `javascript`,
          code: `function example() {
    const num = 5;

    return function() {
        console.log(num);
    };
}
const innerFunction = example();
innerFunction(); // outputs 5`,
        },
      },
    ],
    [
      { h2: "Example 4 - Private Variable Creation" },
      {
        p: `This one gets more complex and shows that when makeFunction is called it creates its own lexical environment
      that stores references to its own variables and functions. So successive calls will create separate lexical environments
      that can be referenced.`,
      },
      {
        code: {
          language: `javascript`,
          code: `function makeFunction() {
let privateNum = 0;

function privateIncrement() {
    privateNum++;
}
return {
    logNum: () => console.log(privateNum),
    increment: () => {
        privateIncrement();
        console.log('Incremented');
    };
}
}
const (logNum, increment) = makeFunctions();
const (logNum2, increment2) = makeFunctions();
logNum(); // ouputs 0
console.log(privateNum); // throws error, since no access to variable!
increment(); // increments number in first lexical environment
logNum(); // outputs 1
logNum2(); // outputs 0
increment2(); // increments number in second lexical environment
logNum2(); // outputs 1`,
        },
      },
    ],
    [
      { h2: "Issues with Var vs Let/Const" },
      {
        p: `Note: In this example, in the first loop let is block scoped a new variable is created for each loop and the timeout function
        recieves the expected value. In the second loop, var is hoisted outside the for loop since it is function scoped and each iteration
         of the loop gets referenced to the same variable and when the loop executes it goes through all of the values and end at 3, telling
         the loop to end. Then after 500ms the logs execute all referencing the same variable that has been changed to 3.`,
      },
      {
        code: {
          language: `javascript`,
          code: `for (let i=0; i<3; i++) {
    setTimeout(() => console.log(i), 500); // outputs 0, 1, 2
}
console.log(i); // throws error

for (var j=0; j<3; j++) {
    setTimeout(() => console.log(j), 500); // ouputs 3, 3, 3
}
console.log(j); // outputs 3`,
        },
      },
    ],
  ],
}
