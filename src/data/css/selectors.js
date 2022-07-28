export const pageData = {
  pageTitle: "Selectors",
  pageInfo: `Selectors are used to describe which elements a ruleset will target.`,
  cheats: [
    [
      { h2: `Specificity` },
      {
        p: `Specificity defines which declaration of a property value is used if two or more declarations for the same
      property value exist.  It is done by calculating the weight of three categories - ID, CLASS, TYPE. Then, starting the ID
      category, values are compared and the one with the higher value is chosen.  If they are tied the CLASS category and then
      the TYPE category are compared.  If there is still a tie, the declaration that was declared last (further down) in the stylesheet
      is chosen. Some exceptions are inline styles and special overrides.
      `,
      },
      { h3: `ID` },
      {
        p: `Includes only ID selectors such as #example. For each matching selector, add 1-0-0 to the weight value.`,
      },
      { h3: `CLASS` },
      {
        p: `Includes class selectors such as .myClass, attribute selectors [type='radio'] and pseudo-classes :hover. For each matching selector, add 0-1-0 to the weight value.`,
      },
      { h3: `TYPE` },
      {
        p: `Includes type selectors such as h1, body, etc. and pseudo elements like ::before.  For each matching selector, add 0-0-1 to the weight value.`,
      },
      { h3: `Inline Styles` },
      {
        p: `These styles overwrite any normal styles in stylesheets and are essentially consisdered 1-0-0-0`,
      },
      { h3: `Override Styles` },
      {
        p: `One may override styles by using !important, but it is considered a bad practice and not recommended.`,
      },
      {
        code: {
          language: `css`,
          code: `h1 {
  property: value !important;
}`,
        },
      },
      { link: `https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity` },
    ],
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
      { h3: "Descendent Combinator" },
      {
        p: `Selects all elements matching the second selector that are descendents
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
      { h3: "Child Combinator" },
      {
        p: `Selects all elements matching the second selector that are direct children of the previous selector.`,
      },
      {
        code: {
          language: `css`,
          code: `selector1 > selector2 {
  property: value;
}`,
        },
      },
      { h3: "Sibling Combinator" },
      {
        p: `Selects all elements matching the second selector that are siblings (sharing the same parent) of the first selector and appear AFTER the first instance of the first selector.`,
      },
      {
        code: {
          language: `css`,
          code: `selector1 ~ selector2 {
  property: value;
}`,
        },
      },
      { h3: "Adjacent Sibling Combinator" },
      {
        p: `Selects all elements matching the second selector and have the first selector directly before them in the DOM.`,
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
