export const pageData = {
  pageTitle: "Javascript Strings",
  pageInfo: `Strings are just sequences of characters!`,
  cheats: [
    [
      { h2: `String Usage` },
      {
        code: {
          language: `javascript`,
          code: `let str = 'myString';  // assigning a string
str = str + 'moreString'; // concatenating strings
str = str + 10; // gives 'myString10'
str = 'mySpecialCharacter\\''; // special characters prefaced with '\\'
str = 'myString \\n'; // creates new line after text
str = \`\${myNumber + 22}\`; // template literal taking variable's value into string
str = \`Multi-line
template literal\`; // template literal doing multiple lines`,
        },
      },
    ],
    [
      { h2: `String Functions` },
      {
        code: {
          language: `javascript`,
          code: `str[0]; // gives first character of string
str.chartAt(0) // gives first character of string
str.includes('word'); // checks if string has substring
str.startsWith('a'); // checks if string starts with substring
str.endsWith('z'); // checks if string ends with substring
str.toUpperCase(); // converts string to uppercase
str.toLowerCase(); // converts string to lowercase
str.substr(1); // returns substring from index 1 to last index
str.substr(1, 2); // returns substring from index 1 to 2
str.slice(1, 3); // returns substring from index 1 to 2 (not a typo)
str.padStart(5, '-');  // puts '-' at start of string until string is 5 chars long
str.padEnd(5, '-'); // same as padStart but for end of string
str.trim(); // removes all white space from start and end
str.trimStart(); // removes all white space from start
str.trimEnd(); // removes all white space from end
str.split(',');  // returns an array of substrings split by ','`,
        },
      },
    ],
  ],
}
