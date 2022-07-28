export const pageData = {
  pageTitle: "CSS Basics",
  pageInfo: `CSS - Cascading Style Sheets.  Used to add styling and layout to HTML documents, like adding colors, spacing, and sizing.`,
  cheats: [
    [
      { h2: "Cascading" },
      {
        p: `Three types of style sheets.  User agent stylesheets - these contain the browser defaults and are the first
          to be overridden.  User stylesheets - these contain the user's preferences in the browser and override the user 
          agent stylesheets.  Author stylesheets - these are the styles we package with our webpage.  Note: we can assign
          a property a value with a '!' at the beginning and that will override every other style for that element, though
          it is not recommended to use this unless absolutely necessary!`,
      },
    ],
    [
      { h2: "Declaring a rule/declaration" },
      {
        p: `A declaration or ruleset has two main components, a selector which describes which elements to target with ruleset and a declaration block which describes the rules those elements should follow.`,
      },
      {
        code: {
          language: `css`,
          code: `element1, element2 {
  property: value;
  property: value;
}`,
        },
      },
      {
        p: `Basic example, creates red colored 30px tall text for h1 and paragraph elements.`,
      },
      {
        code: {
          language: `css`,
          code: `h1, p {
  color: red;
  font-size: 30px;
}`,
        },
      },
    ],
    [
      { h2: "Comments" },
      {
        code: {
          language: `css`,
          code: `/*
this is a multiline comment
*/`,
        },
      },
    ],
    [
      { h2: "Linking to HTML" },
      {
        code: {
          language: `html`,
          code: `<link rel="stylesheet" href="myStyles.css" />`,
        },
      },
    ],
  ],
}
