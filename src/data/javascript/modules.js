export const pageData = {
  pageTitle: "Javascript Modules",
  pageInfo: `Javascript modules are files where the javascript code runs in isolation and does not pollute the global namespace.
  That is, they are scoped to their block of code and their variables/functions do not clash with those from other sources.`,
  cheats: [
    [
      { h2: "Immediately Invoked Function Expressions (IIFE's)" },
      {
        p: `A function that is called immediately after it is defined, usually an anonymous function. By doing this, we can create
        a function scope to isolate code. Isolates the code, but doesn't make it reachable to other files/modules. Need another solution.`,
      },
      {
        code: {
          language: `javascript`,
          code: `(function() {
    console.log('This function is isolated');
})(); // wrapping it in () causes it to be evaluated as an expression`,
        },
      },
    ],
    [
      { h2: "Adding a Module to HTML" },
      {
        p: `Using the module attribute on script tags does a few things: identifiers at the top level are scroped to the file rather than
        globally, the file will be in strict mode by default, the 'await' keyword can be used at the top level. The script will have deferred
        loading by default.`,
      },
      {
        code: {
          language: `html`,
          code: `<script src="myModule.js" type="module" defer ></script>`,
        },
      },
    ],
    [
      { h2: "Import / Exporting" },
      {
        code: {
          language: `javascript`,
          code: `import * as helpers from './helpers.js'; // importing all from module
import { function1, function 2} from './otherFunctions.js'; // import multiple named exports
import { Person } from './Person.js';
import { function3 as functionThree } from './moreFunction.js'; // changing name of imported function
import myDefaultFunc from './yetMoreFunctions.js'; // import default function

helpers.myHelperFunction();
function1();
function2();

const bob = new Person('bob');
bob.speak();

// exports function by name
export function myFunc() {
    console.log('I am myFunc');
}

// exports the default function, note: can only have one default export
export default function myDefaultFunc() {
    console.log('I am the default!');
}

// any ONE of these can be used at end of file to export
export { myFunc, myFunc2 as myFuncTwo};
export { myDefaultFunc as default }; // exporting default at end of file
export default myDefaultFunc; // exporting default at end of file`,
        },
      },
    ],
    [
      { h2: "Dynamic Imports" },
      {
        code: {
          language: `javascript`,
          code: `const shouldImportModule = true;

if (shouldImportModule) {
    const { myFunction } = await import('./helpers.js');
    myFunction();
}`,
        },
      },
    ],
    [
      { h2: "Support for Old Browsers (no modules)" },
      {
        p: `If using an older browser that doesn't support modules, it will ignore the module script tags and only load the nomodule script tag.
      Will need to make a separate javascript file that has polluted namespace.`,
      },
      {
        code: {
          language: `html`,
          code: `<script src='noModuleVersion.js' nomodule></script>`,
        },
      },
    ],
  ],
}
