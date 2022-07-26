export const pageData = {
  pageTitle: "Selectors",
  pageInfo: `Selectors are used to describe which elements a ruleset will target.`,
  cheats: [
    {
      title: "Select Everything",
      items: [
        {
          data: `Selects every html element. Not recommended unless being used for CSS resets of browser defaults.`,
        },
        {
          language: `css`,
          data: `* {
    property: value;
}`,
        },
      ],
    },
    {
      title: "Type Selector",
      items: [
        {
          data: `Selects all elements for a specific HTML tag, example all <h1> tags.`,
        },
        {
          language: `css`,
          data: `h1 {
    property: value;
}`,
        },
      ],
    },
    {
      title: "Class Selector",
      items: [
        {
          data: `Selects all elements with a specific class.`,
        },
        {
          language: `css`,
          data: `.myClassName {
    property: value;
}`,
        },
      ],
    },
    {
      title: "ID Selector",
      items: [
        {
          data: `Selects all elements with a specific html ID attribute.`,
        },
        {
          language: `css`,
          data: `#myID {
    property: value;
}`,
        },
      ],
    },
    {
      title: "Attribute Selector",
      items: [
        {
          data: `Selects all elements with a specific html attribute set to a specific value.`,
        },
        {
          language: `css`,
          data: `a[href='mycoolsite.com'] {
    property: value;
}`,
        },
        {
          data: `Selects all elements with a specific html attribute with a specific substring at the beginning of the value.`,
        },
        {
          language: `css`,
          data: `a[href^='mycoolsite.com'] {
    property: value;
}`,
        },
        {
          data: `Selects all elements with a specific html attribute with a specific substring at the end of the value.`,
        },
        {
          language: `css`,
          data: `a[href$='mycoolsite.com'] {
    property: value;
}`,
        },
        {
          data: `Selects all elements with a specific html attribute with a specific substring anywhere in the value.`,
        },
        {
          language: `css`,
          data: `a[href*='mycoolsite.com'] {
    property: value;
}`,
        },
      ],
    },
    {
      title: "Combining Selectors",
      items: [
        {
          data: `Selectors can be combined to select elements based on their location in the DOM.`,
        },
        {
          data: `Descendent Combinator - Selects all elements matching the second selector that are descendents
            of the previous selector, does not necessarily have be a direct child but can be many layers of 
            inheritance down.`,
        },
        {
          language: `css`,
          data: `selector1 selector2 {
    property: value;
}`,
        },
        {
          data: `Child Combinator - Selects all elements matching the second selector that are direct children
            of the previous selector.`,
        },
        {
          language: `css`,
          data: `selector1 > selector2 {
    property: value;
}`,
        },
        {
          data: `Sibling Combinator - Selects all elements matching the second selector that are siblings (sharing the same
            parent) of the first selector and appear AFTER the first instance of the first selector.`,
        },
        {
          language: `css`,
          data: `selector1 ~ selector2 {
    property: value;
}`,
        },
        {
          data: `Adjacent Sibling Combinator - Selects all elements matching the second selector and have the first selector
          directly before them in the DOM.`,
        },
        {
          language: `css`,
          data: `selector1 + selector2 {
    property: value;
}`,
        },
      ],
    },
  ],
}
