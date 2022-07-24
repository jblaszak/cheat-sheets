export const pageData = {
  pageTitle: "CSS Basics",
  pageInfo: `CSS - Cascading Style Sheets.  Used to add styling and layout to HTML documents, like adding colors, spacing, and sizing.`,
  cheats: [
    {
      title: "Cascading",
      items: [
        {
          data: `Three types of style sheets.  User agent stylesheets - these contain the browser defaults and are the first
            to be overridden.  User stylesheets - these contain the user's preferences in the browser and override the user 
            agent stylesheets.  Author stylesheets - these are the styles we package with our webpage.  Note: we can assign
            a property a value with a '!' at the beginning and that will override every other style for that element, though
            it is not recommended to use this unless absolutely necessary!`,
        },
      ],
    },
    {
      title: "Declaring a rule/declaration",
      items: [
        {
          data: `A declaration or ruleset has two main components, a selector which describes which elements to target with
            ruleset and a declaration block which describes the rules those elements should follow.`,
        },
        {
          language: `css`,
          data: `element1, element2 {
    property: value;
    property: value;
}`,
        },
        {
          data: `Basic example, creates red colored 30px tall text for h1 and paragraph elements.`,
        },
        {
          language: `css`,
          data: `h1, p {
    color: red;
    font-size: 30px;
}`,
        },
      ],
    },
    {
      title: "Comments",
      items: [
        {
          language: `css`,
          data: `/*
this is a multiline comment
*/
}`,
        },
      ],
    },
    {
      title: "Linking to HTML",
      items: [
        {
          language: `html`,
          data: `<link rel="stylesheet" href="myStyles.css" />`,
        },
      ],
    },
  ],
}
