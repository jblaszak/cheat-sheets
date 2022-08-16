export const pageData = {
  pageTitle: "Progamming Theory",
  pageInfo: `Some theory and terms used in programming.`,
  cheats: [
    [
      { h2: `Functions` },
      {
        p: `Functions take arguments as inputs and use them to return a result. There are several different kinds of functions.`,
      },
      {
        definitionList: [
          {
            title: `Pure Functions`,
            definition: `Always has same output for a given set of arguments and never produces side-effects.`,
          },
          {
            title: `Functions with Side Effects`,
            definition: `Functions that read or write something outside the function and its arguments, like a database, file, global variable, or console.`,
          },
          {
            title: `First Class Functions`,
            definition: `NOTE: Only supported by certain languages.  It is when functions are treated like any other variable, i.e. stored in a variable, passed to a function, and returned by another function.`,
          },
          {
            title: `Higher Order Functions`,
            definition: `NOTE: Only supported by certain languages. When a function takes a function as an argument or returns a function.`,
          },
        ],
      },
    ],
    [
      { h2: "Paradigms" },
      {
        p: "Programming paradigms are styles of programming. Usually certain languages follow certain patterns.",
      },
      {
        definitionList: [
          {
            title: `Declarative`,
            definition: `Programs written by describing the output with implicit control flow. Usually done with functional programming like the forEach function to loop over an array instead of a for loop.`,
          },
          {
            title: `Event Driven`,
            definition: `When functions can respond to events like a user click.`,
          },
          {
            title: `Functional`,
            definition: `When functions are written as 'pure functions' and don't have side-effects.`,
          },
          {
            title: `Imperative`,
            definition: `When explicitly describing the control flow, as with loops and conditionals.`,
          },
          {
            title: `Object Oriented`,
            definition: `Objects can be created as custom data stores and made to inherit one another.`,
          },
        ],
      },
    ],
    [
      { h2: "Frameworks vs Libraries" },
      {
        definitionList: [
          {
            title: `Library`,
            definition: `A collection of reusable function, "unopinionated". Your code calls the library.`,
          },
          {
            title: `Framework`,
            definition: `A provided structure for your code, "opinionated". The framework calls your code.`,
          },
        ],
      },
    ],
    [
      { h2: "Opionionated vs Un-Opinionated" },
      {
        p: `An opinionated framework only allows access to their data structures, is limiting and encourages the designer into 
        doing this their way.`,
      },
    ],
  ],
}
