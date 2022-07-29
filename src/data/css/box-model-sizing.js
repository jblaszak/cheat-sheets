export const pageData = {
  pageTitle: "Box Model and Box Sizing",
  pageInfo: `The box model and box sizing play an important role in sizing and spacing your elements with one another.`,
  cheats: [
    [
      { h2: "Box Model" },
      {
        p: `The box model of an element consists of a number of components: content, padding, border, margin. Each of these is a layer around the other (like an onion) with the content at its core.`,
      },
    ],
    [
      { h3: "Padding" },
      {
        p: `Used to create extra space on the inside of the element between the content and the border.`,
      },
      {
        code: {
          language: `css`,
          code: `/* Apply to all four sides */
padding: 10px;

/* vertical | horizontal */
padding: 10px 20px;

/* top | horizontal | bottom */
padding: 10px 20px 5px;

/* top | right | bottom | left */
padding: 5px 10px 10px 20px;

padding-top: 5px;
padding-right: 10px;
padding-bottom: 10px;
padding-left: 20px;`,
        },
      },
    ],
    [
      { h3: "Border" },
      {
        p: `Used to create a border around the padding and content of the element. Has four main properties, though only three in the condensed version. The border width (thickness), style and color.  The fourth type is the border radius used for making rounded corners.`,
      },
      {
        code: {
          language: `css`,
          code: `border: 1px solid black;
border-width: 1px;
border-style: solid;
border-color: black;
border-radius: 5px;

border-top: 1px;
border-right: 1px;
border-bottom: 1px;
border-left: 1px;`,
        },
      },
    ],
    [
      { h3: "Margin" },
      {
        p: `Used to for extra space around the element. Takes same values as padding. Can also use 'auto' value to extend the spacing to fill the rest of the parent container.`,
      },
      { p: `NOTE: Vertical margins have no effect on inline elements.` },
      {
        code: {
          language: `css`,
          code: `margin: 5px 10px 10px 20px;
                
margin-top: 5px;
margin-right: 10px;
margin-bottom: 10px;
margin-left: 20px;

margin: auto;`,
        },
      },
      {
        h3: `Margin Collapsing`,
      },
      {
        p: `A special property of margins, if with two vertical margins from elements between one another are above/below one another, only the larger of the two margins is used.  They do not add up.`,
      },
    ],
    [
      { h2: "Box Sizing" },
      {
        p: `Used to describe how the height and width of the element are calculated. The default value is 'content-box' which only considers the content 
        when the element height and width are calculated.  This means most things likely won't display and position themselves the way you think. It is
        common practice to use reset ALL elements to use 'border-box' as the box sizing value so that the border and padding are also considered.`,
      },
      {
        code: {
          language: `css`,
          code: `html {
  box-sizing: border-box;
}
*, *::before, *::after {
  box-sizing: inherit;
}`,
        },
      },
    ],
  ],
}
