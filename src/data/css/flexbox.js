export const pageData = {
  pageTitle: "Flexbox",
  pageInfo: `Flexbox - a useuful layout model for building making row or column based layouts in a responsive way.`,
  cheats: [
    [
      {
        link: `https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout`,
      },
      { h2: "Creating a Flex Container" },
      {
        p: `To create a flex container and make all items inside the container into flex items and change how they are laid out on the page.`,
      },
      {
        code: {
          language: `css`,
          code: `display: flex;`,
        },
      },
    ],
    [{ h2: `Properties For The Flex Container` }],
    [
      { h3: "Flex Direction" },
      {
        p: `Flex direction describes the main-axis for the content. Items can be placed next to each other in either a row or column, or in reversed order. Row is the default behaviour.`,
      },
      {
        code: {
          language: `css`,
          code: `flex-direction: row;
flex-direction: column;
flex-direction: row-reverse;
flex-direction: column-reverse;`,
        },
      },
    ],
    [
      { h3: "Justify Content" },
      {
        p: `Justify Content describes how the elements are positioned/spaced along the main-axis. Note: start/end get reversed as well if flex-direction is reversed!`,
      },
      {
        code: {
          language: `css`,
          code: `justify-content: flex-start;
justify-content: flex-end;
justify-content: center;
justify-content: space-between;
justify-content: space-evenly;
justify-content: space-around;`,
        },
      },
    ],
    [
      { h3: "Align Items" },
      {
        p: `Align Items describes how the elements are positioned/spaced along the cross-axis (the axis perpendicular to the flex-direction's main axis). Stretch makes the items stretch to fill the container along the cross axis, while baseline aligns the baseline (of the text) of all elements.`,
      },
      {
        code: {
          language: `css`,
          code: `align-items: flex-start;
align-items: flex-end;
align-items: center;
align-items: baseline;
align-items: stretch;`,
        },
      },
    ],
    [
      { h3: "Align Content" },
      {
        p: `Aligns content along the cross axis when there is wrapping over mutliple lines.`,
      },
      {
        code: {
          language: `css`,
          code: `align-content: flex-start;
align-content: flex-end;
align-content: center;
align-content: space-between;
align-content: space-evenly;
align-content: space-around,`,
        },
      },
    ],
    [
      { h3: "Spacing Items" },
      {
        p: `Flex items can be spaced from one another by set amounts using the gap property.`,
      },
      {
        code: {
          language: `css`,
          code: `gap: 10px;
gap: 10px 10px;
row-gap: 10px;
column-gap: 10px;`,
        },
      },
    ],
    [
      { h3: "Wrapping Items" },
      {
        p: `Default behaviour is to not have any wrapping so things will overflow. Setting wrapping puts things onto a new row/column when container size is exceeded.`,
      },
      {
        code: {
          language: `css`,
          code: `flex-wrap: wrap;
flex-wrap: nowrap;
flex-wrap: wrap-reverse;`,
        },
      },
    ],
    [
      { h3: "Flex Direction and Wrap Combo" },
      {
        p: `Shorthand for combining flex-direction and flex-wrap.`,
      },
      {
        code: {
          language: `css`,
          code: `flex-flow: row wrap;`,
        },
      },
    ],
    [{ h2: "Properties For The Flex Items" }],
    [
      { h3: "Align Self" },
      {
        p: `Overrides the alignment of items on the flex container for just the one element.`,
      },
      {
        code: {
          language: `css`,
          code: `align-self: flex-start;`,
        },
      },
    ],
    [
      { h3: "Order" },
      {
        p: `Default value is 0. Lower valued flex items are displayed first on the main axis, negative values okay!`,
      },
      {
        code: {
          language: `css`,
          code: `order: 1;`,
        },
      },
    ],
    [
      { h3: "Flex Grow" },
      {
        p: `Used to make an element take up extra space on the main axis. If only element on that row with flex-grow, will take up the remaining space. With other elements, 
        grow determines the portion or remaining space based on the ratio between all elements with grow.`,
      },
      {
        code: {
          language: `css`,
          code: `flex-grow: 1;`,
        },
      },
    ],
    [
      { h3: "Flex Shrink" },
      {
        p: `Used to make an element shrink to the size of the flex container if the element is too large by using a shrink value of 1.  Default is 0, which means flex item will expand past flex container's size.`,
      },
      {
        code: {
          language: `css`,
          code: `flex-shrink: 1;`,
        },
      },
    ],
    [
      { h3: "Flex Basis" },
      {
        p: `Sets the initial size of the elements along the main axis. Note: these can still grow/shrink based on the flex-grow/shrink properties.`,
      },
      {
        code: {
          language: `css`,
          code: `flex-basis: 300px;`,
        },
      },
    ],
    [
      { h3: "Flex Grow/Shrink/Basis Shorthand" },
      {
        p: `Shorthand for flex-grow, flex-shrink, flex-basis.  In that order.`,
      },
      {
        code: {
          language: `css`,
          code: `flex: 1 0 300px;`,
        },
      },
    ],
  ],
}
