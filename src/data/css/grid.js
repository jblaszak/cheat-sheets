export const pageData = {
  pageTitle: "CSS Grid",
  pageInfo: `The CSS Grid is similar to the flexbox but is used more for mutliple rows and columns. It's great for fine-grained control of placement of elements.`,
  cheats: [
    [
      {
        link: `https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout`,
      },
      {
        link: `https://css-tricks.com/snippets/css/complete-guide-grid/`,
      },
      { h2: "Creating a Grid Container" },
      {
        p: `To create a flex container and make all items inside the container into grid cells.`,
      },
      {
        code: {
          language: `css`,
          code: `display: grid;`,
        },
      },
    ],
    [
      { h2: "Grid Term Definitions" },
      {
        definitionList: [
          {
            title: `Grid Area`,
            definition: `A rectangular subsection of the grid.`,
          },
          {
            title: `Grid Lines`,
            definition: `The dividers between each row or column.`,
          },
          {
            title: `Tracks`,
            definition: `Refers to either a column or a row.`,
          },
        ],
      },
    ],
    [{ h2: "Grid Container Properties" }],
    [
      { h3: "Grid Template Columns" },
      {
        p: `Used to set the number of columns and their sizes. Can use 'fr' which means 'fraction' of the space.
    Can also use min-max() function to constrain the size to make sure something shows up even on smaller devices. Repeat columns with repeat(num, size);
    Another option is to name columns so targetting them on the individual grid items makes more sense!`,
      },
      {
        code: {
          language: `css`,
          code: `grid-template-columns: 200px 400px 200px;
grid-template-columns: 1fr 2fr 1fr;
grid-template-columns: minmax(100px, 1fr) 2fr 1fr;
grid-template-columns: repeat(4, 1fr);
grid-template-columns: [left] 1fr [middle] 1fr [right];`,
        },
      },
    ],
    [
      { h3: "Grid Template Rows" },
      { p: `Same as grid-template-columns but for rows!` },
      {
        code: {
          language: `css`,
          code: `grid-template-rows: 200px 400px 200px;`,
        },
      },
    ],
    [
      { h3: "Grid Template Areas" },
      {
        p: `Defines all areas of the grid upfront, if an area should span more than one column/row, just repeat it!`,
      },
      {
        code: {
          language: `css`,
          code: `grid-template-areas:
"header header"
"main aside"
"footer footer";`,
        },
      },
    ],
    [
      { h3: "Gap" },
      { p: `Set the gap between cells of the grid.` },
      {
        code: {
          language: `css`,
          code: `gap: 10px;
row-gap: 10px;
column-gap: 10px;`,
        },
      },
    ],
    [
      { h3: "Justify Items" },
      {
        p: `Sets the alignment for grid items within their ROWS. NOTE: also makes the item fit the size of the content.`,
      },
      {
        code: {
          language: `css`,
          code: `justify-items: start;
justify-items: end;
justify-items: center;
justify-items: stretch;`,
        },
      },
    ],
    [
      { h3: "Align Items" },
      {
        p: `Sets the alignment for grid items within their COLUMNS. NOTE: also makes the item fit the size of the content. Same properties availble as justify-items.`,
      },
      {
        code: {
          language: `css`,
          code: `align-items: start;`,
        },
      },
    ],
    [
      { h3: "Place Items" },
      { p: `Shorthand for justify-items and align-items.` },
      {
        code: {
          language: `css`,
          code: `place-items: center;`,
        },
      },
    ],
    [
      { h3: "Align Items" },
      {
        p: `Sets the alignment for grid items within their COLUMNS. NOTE: also makes the item fit the size of the content. Same properties availble as justify-items.`,
      },
      {
        code: {
          language: `css`,
          code: `align-items: start;`,
        },
      },
    ],
    [{ h2: "Grid Item Properties" }],
    [
      { h3: "Grid Column" },
      {
        p: `Used on an item within the grid. Can use grid-column tag to describe how many columns the grid item should span. Several options shown below.`,
      },
      {
        code: {
          language: `css`,
          code: `grid-column-start: 1;
grid-column-end: 3;

grid-column: 1 / 3;

grid-column-start: span 2;

grid-column: left middle;`,
        },
      },
    ],
    [
      { h3: "Grid Row" },
      {
        p: `Used on an item within the grid. Same as column but describes row instead.`,
      },
      {
        code: {
          language: `css`,
          code: `grid-column-start: 1;
grid-column-end: 3;

grid-column: 1 / 3;

grid-column-start: span 2;`,
        },
      },
    ],
    [
      { h3: "Grid Area" },
      {
        p: `Used on an item within the grid. Just set the name for the area (declared in grid-template-areas) you want to assign the item to!`,
      },
      {
        code: {
          language: `css`,
          code: `grid-area: footer;`,
        },
      },
    ],
    [
      { h3: "Justify/Align/Place Self" },
      {
        p: `Same as justify-items, etc. but for the individual item, not all items in the grid.!`,
      },
      {
        code: {
          language: `css`,
          code: `justify-self: center;
align-self: end;
place-self: start;`,
        },
      },
    ],
  ],
}
