export const pageData = {
  pageTitle: "Selectors",
  pageInfo: `Selectors are used to describe which elements a ruleset will target.`,
  cheats: [
    [
      { h2: "Select Everything" },
      {
        p: `Selects every html element. Not recommended unless being used for CSS resets of browser defaults.`,
      },
      {
        code: {
          language: `css`,
          code: `* {
  property: value;
}`,
        },
      },
    ],
    [
      { h2: "Type Selector" },
      {
        p: `Selects all elements for a specific HTML tag, example all <h1> tags.`,
      },
      {
        code: {
          language: `css`,
          code: `h1 {
  property: value; 
}`,
        },
      },
    ],
    [
      { h2: "Class Selector" },
      { p: `Selects all elements with a specific class.` },
      {
        code: {
          language: `css`,
          code: `.myClassName {
  property: value;
}`,
        },
      },
    ],
    [
      { h2: "ID Selector" },
      { p: `Selects all elements with a specific html ID attribute.` },
      {
        code: {
          language: `css`,
          code: `#myID {
  property: value;
}`,
        },
      },
    ],
    [
      { h2: "Attribute Selector" },
      {
        p: `Selects all elements with a specific html attribute set to a specific value.`,
      },
      {
        code: {
          language: `css`,
          code: `a[href='mycoolsite.com'] {
  property: value;
}`,
        },
      },
      {
        p: `Selects all elements with a specific html attribute with a specific substring at the beginning of the value.`,
      },
      {
        code: {
          language: `css`,
          code: `a[href^='mycoolsite.com'] {
  property: value;
}`,
        },
      },
      {
        p: `Selects all elements with a specific html attribute with a specific substring at the end of the value.`,
      },
      {
        code: {
          language: `css`,
          code: `a[href$='mycoolsite.com'] {
  property: value;
}`,
        },
      },
      {
        p: `Selects all elements with a specific html attribute with a specific substring anywhere in the value.`,
      },
      {
        code: {
          language: `css`,
          code: `a[href*='mycoolsite.com'] {
  property: value;
}`,
        },
      },
    ],
    [
      { h2: "Combining Selectors" },
      {
        p: `Selectors can be combined to select elements based on their location in the DOM.`,
      },
      {
        p: `Descendent Combinator - Selects all elements matching the second selector that are descendents
          of the previous selector, does not necessarily have be a direct child but can be many layers of 
          inheritance down.`,
      },
      {
        code: {
          language: `css`,
          code: `selector1 selector2 {
  property: value;
}`,
        },
      },
      {
        p: `Child Combinator - Selects all elements matching the second selector that are direct children of the previous selector.`,
      },
      {
        code: {
          language: `css`,
          code: `selector1 > selector2 {
  property: value;
}`,
        },
      },
      {
        p: `Sibling Combinator - Selects all elements matching the second selector that are siblings (sharing the same parent) of the first selector and appear AFTER the first instance of the first selector.`,
      },
      {
        code: {
          language: `css`,
          code: `selector1 ~ selector2 {
  property: value;
}`,
        },
      },
      {
        p: `Adjacent Sibling Combinator - Selects all elements matching the second selector and have the first selector directly before them in the DOM.`,
      },
      {
        code: {
          language: `css`,
          code: `selector1 + selector2 {
  property: value;
}`,
        },
      },
    ],
  ],
}
