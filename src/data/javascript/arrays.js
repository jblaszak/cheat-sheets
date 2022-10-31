export const pageData = {
  pageTitle: "Javascript Arrays",
  pageInfo: `Arrays are lists of values in a specific order. Note: under the hood, arrays are javascript objects.`,
  cheats: [
    [
      { h2: `Creating Arrays and Accessing Arrays` },
      {
        code: {
          language: `javascript`,
          code: `const arr = []; // creates empty array
const arr = [1, 'myString', myFunc, myObject];  // assigning array, can store all types
const arr = new Array(5); // creates array of 5 empty items
const arr = new Array(5).fill(0); // creates array and fills with '0's
arr[0]; // accessing 1st element of array`,
        },
      },
    ],
    [
      { h2: `Adding/Removing Elements` },
      {
        code: {
          language: `javascript`,
          code: `arr.push(5); // adds '5' to end
arr.push(4,5,6); // adds multiple values
arr.pop(); // removes and returns last element of array
arr.unshift(1,2,3); // adds to beginning, is very unefficient though (0^n)
arr.shift(); // removes and returns first element of array, also inefficient (0^n)`,
        },
      },
    ],
    [
      { h2: `Checking for Elements in Array` },
      {
        code: {
          language: `javascript`,
          code: `arr.includes(10); // returns true if array includes value
arr.indexOf(3); // returns index of first element in array that matches, otherwise returns -1
arr.lastIndexOf(3); // same as above but from last element`,
        },
      },
    ],
    [
      { h2: `Checking if Variable is Array` },
      {
        code: {
          language: `javascript`,
          code: `typeof arr; // returns object, no good!
Array.isArray(arr); // returns true if an array
arr instanceof Array; // returns true if an array`,
        },
      },
    ],
    [
      { h2: `Deleting and Replacing Elements` },
      {
        code: {
          language: `javascript`,
          code: `arr.splice(1,3); // will remove 2nd and 3rd item
arr.splice(1,3, '4', '5'); /* will remove 2nd and 3rd items but replace them with '4' and '5'
can be used to add values into the middle of the array */
arr.slice(1,3); // returns new array of 2nd and 3rd items
arr.concat(['my second', 'array']); // adds second array to end of first array
arr.reverse(); // reverses order of original array in place
arr.join(', '); // returns a string with ', ' between each array element`,
        },
      },
    ],
    [
      { h2: `Iterating Through Arrays` },
      {
        code: {
          language: `javascript`,
          code: `// Only has access to value
for (const value of arr) {
    console.log(value);
};

// Has access to value and index
arr.forEach(function(value, index, array) {
    console.log(value, this); // this refers to the something object added at the end
}, {something: 'here'});

// Creates a new array 
const mappedArray = arr.map(function(value, index) {
    return value + index;
}, {something: 'here'});`,
        },
      },
    ],
    [
      { h2: `Reducers` },
      {
        p: `Used to combine values in array and output the result. If no starting value, it uses the sets accumulator to
        the first element of the array.  'reduceRight' does same thing but starts from end of array and goes in reverse.`,
      },
      {
        code: {
          language: `javascript`,
          code: `const startingValue = 0;
const sum = arr.reduce(function(accumulator, currentValue, index, array) {
    return accumulator + currentValue;
}, startingValue);

// Same as above but starts from right and goes in reverse
const sum = arr.reduce(function(accumulator, currentValue, index, array) {
    return accumulator - currentValue;
});`,
        },
      },
    ],
    [
      { h2: `Sorting` },
      {
        p: `Used to sort elements in an array IN PLACE based on some criteria. Default function is to convert elements into strings and then
          sort alphabetically. If returned value of the function passed to the sorting function is positive, it will sort the second value before
          the first value.`,
      },
      {
        code: {
          language: `javascript`,
          code: `arr.sort();  // First converts elements to strings, then sorts alphabetically. Will incorrectly sort numbers.
  
// Sort Ascending
arr.sort(function(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
});

// Sort Descending
arr.sort(function(firstNumber, secondNumber) {
    return secondNumber - firstNumber;
});`,
        },
      },
    ],

    [
      { h2: `Other Array Methods` },
      {
        code: {
          language: `javascript`,
          code: `// Returns array of items that meet condition
const filteredArray = arr.filter(function(value, index, array) {
    return value === '5';
});

// Returns true once first value matching condition found
const isFound = arr.find(function(value, index, array) {
    return value === '5';
});

// Returns index of first element matching condition, -1 if not found
const foundIndex = arr.findIndex(function(value, index, array) {
    return value === '5';
});

// Returns true if every item in array matches condition
const allPass = arr.every(function(value, index, array) {
    return value === '5';
});
  
// Returns true if any item in array matches condition
const somePass = arr.some(function(value, index, array) {
    return value === '5';
});`,
        },
      },
    ],
  ],
}
