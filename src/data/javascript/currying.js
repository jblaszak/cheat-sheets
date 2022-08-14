export const pageData = {
  pageTitle: "Currying",
  pageInfo: `When functions are transformed to treat its parameters as a sequence of individual function calls that each take one parameter. 
  Useful for when you need to call something with the same parameters often or have some expensive function call that would need to be done for every function call.`,
  cheats: [
    [
      { h2: "Basic Example" },
      {
        code: {
          language: `javascript`,
          code: `function sum(a,b,c) {
    return a + b + c;
}

function curry(func) {
    // return function(a) {
    //     return function(b) {
    //         return function(c) {
    //             return func(a,b,c);
    //         }
    //     }
    // }
    return (a) => (b) => (c) => func(a,b,c);
}

console.log(sum(1,3,5)); // 8
const curriedSum = curry(sum);
console.log(curriedSum(1)(3)(5)); // 8

const addFive = curriedSum(5);
console.log(addFive(3)(5)); // 15`,
        },
      },
    ],
    [
      { h2: "Example Use Case" },
      {
        code: {
          language: `javascript`,
          code: `///////// NORMAL WAY /////////////
const createURL = (baseURL, path) => {
const protocol = "https";
return \`\${protocol}://\${baseURL}/\${path}\`;
};

// create URLs for our main site
const homeURL = createURL("mysite.com", "");
const loginURL = createURL("mysite.com", "login");
const productsURL = createURL("mysite.com", "products");
const contactURL = createURL("mysite.com", "contact-us");

// create URLs for our careers site
const careersHomeURL = createURL("mysite-careers.com", "");
const careersLoginURL = createURL("mysite-careers.com", "login");          

/////////////// WITH CURRYING //////////////////
const createURL = baseURL => {
    const protocol = "https";

    // we now return a function, that accepts a 'path' as an argument
    return path => {
    return \`\${protocol}://\${baseURL}/\${path}\`;
    };
};

// we create a new functions with the baseURL value in it's closure scope
const createSiteURL = createURL("mysite.com");
const createCareersURL = createURL("mysite-careers.com");

// create URLs for our main site
const homeURL = createSiteURL("");
const loginURL = createSiteURL("login");
const productsURL = createSiteURL("products");
const contactURL = createSiteURL("contact-us");

// create URLs for our career site
const careersHomeURL = createCareersURL("");
const careersLoginURL = createCareersURL("login");`,
        },
      },
    ],
  ],
}
