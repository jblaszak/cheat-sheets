export const pageData = {
  pageTitle: "Strings",
  pageInfo: `Strings are a special type of array that maps to ASCII numbers. NOTE: In most languages they are immutable, except for C++. 
  This means they cannot be changed in anyway and must be copied before being altered.`,
  cheats: [
    [
      { h2: `Time Complexity` },
      {
        p: `Used to compare one algorithm to another to determine which one is better. Usually written in Big O notation.`,
      },
      {
        definitionList: [
          {
            title: `Traversing a string`,
            definition: `O(N)`,
          },
          {
            title: `Copying a string`,
            definition: `O(N)`,
          },
          {
            title: `Getting/reading an index of the string`,
            definition: `O(1)`,
          },
          {
            title: `Adding value at end of string`,
            definition: `O(N) for languages where strings are immutable, O(1) for languages where they are mutable (C++)`,
          },
        ],
      },
    ],
    [
      { h2: `String Character Values` },
      {
        p: `Each character in a string is given a numeric code based as part of the American Standard Code for Information Interchange (ASCII).`,
      },
      {
        definitionList: [
          {
            title: `Capital Letters (English)`,
            definition: `Codes: 65-90`,
          },
          {
            title: `Lowercase Letters (English)`,
            definition: `Codes: 97-122`,
          },
          {
            title: `Numbers`,
            definition: `Codes: 48-57`,
          },
        ],
      },
      { link: `https://www.rapidtables.com/code/text/ascii-table.html` },
    ],
  ],
}
