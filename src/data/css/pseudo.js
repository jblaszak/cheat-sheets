export const pageData = {
  pageTitle: "Pseudo Classes and Elements",
  pageInfo: `Selectors are used to describe which elements a ruleset will target.`,
  cheats: [
    [
      {
        h2: "Pseudo Classes",
      },
      {
        p: `These are used to select based on the current state of an element.  All begin with ':' and then the state they select for.`,
      },
      {
        link: `https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes`,
      },
    ],
    [
      {
        h3: `Special`,
      },
      {
        p: `Not - selects elements which do not match certain criteria!`,
      },
      {
        code: {
          language: `css`,
          code: `.myInput:invalid:not(:focus) {}
body:not(div, p) {}
`,
        },
      },
    ],
    [
      {
        h3: `Links`,
      },
      {
        p: `Matching links that have not been visited, links that have been visited, and both!`,
      },
      {
        code: {
          language: `css`,
          code: `.mylink:link {}`,
        },
      },
      {
        p: `Matching links that have been visited`,
      },
      {
        code: {
          language: `css`,
          code: `.mylink:visited {}`,
        },
      },
      {
        p: `Matching either visited or non-visited links.`,
      },
      {
        code: {
          language: `css`,
          code: `.mylink:all-links {}`,
        },
      },
    ],
    [
      {
        h3: `User actions`,
      },
      {
        p: `These match elements that are interacted with the user by some way.`,
      },
      {
        p: `Selected when element is hovered over by the mouse.`,
      },
      {
        code: {
          language: `css`,
          code: `.myElement:hover {}`,
        },
      },
      {
        p: `Selected when element is actived by user, example clicked on.`,
      },
      {
        code: {
          language: `css`,
          code: `.myElement:active {}`,
        },
      },
      {
        p: `Selected when element is focused`,
      },
      {
        code: {
          language: `css`,
          code: `.myElement:focus {}`,
        },
      },
      {
        p: `Selected when element or any of its descendents is focused`,
      },
      {
        code: {
          language: `css`,
          code: `.myElement:focus-within {}`,
        },
      },
    ],
    [
      {
        h3: `Form Elements`,
      },
      {
        p: `Disabled`,
      },
      {
        code: {
          language: `css`,
          code: `.myElement:disabled {}`,
        },
      },
      {
        p: `Placeholder Shown`,
      },
      {
        code: {
          language: `css`,
          code: `.myElement:placeholder-shown {}`,
        },
      },
      {
        p: `Checked - For checkboxes and radio buttons toggled on.`,
      },
      {
        code: {
          language: `css`,
          code: `.myElement:checked {}`,
        },
      },
      {
        p: `Valid / Invalid `,
      },
      {
        code: {
          language: `css`,
          code: `.myElement:valid {}
.myElement:invalid {}`,
        },
      },
      {
        p: `Required `,
      },
      {
        code: {
          language: `css`,
          code: `.myElement:required {}`,
        },
      },
    ],
    [
      {
        h3: `Tree-Structural Elements`,
      },
      {
        p: `Root - represents an element that is at the root of the document.`,
      },
      {
        code: {
          language: `css`,
          code: `.myElement:root {}`,
        },
      },
      {
        p: `First Child`,
      },
      {
        code: {
          language: `css`,
          code: `.myElement:first-child {}`,
        },
      },
      {
        p: `Last Child`,
      },
      {
        code: {
          language: `css`,
          code: `.myElement:last-child {}`,
        },
      },
      {
        p: `Nth Child - uses An+B notation to select elements from a list of sibiling elements. First example selects
            all the evens, second example the odds, third example first three [=-0+3, -1+3, -2+3], fourth example 8th through 15th.`,
      },
      {
        code: {
          language: `css`,
          code: `.myElement:nth-child(even) {}
.myElement:nth-child(2n-1) {}
.myElement:nth-child(-n+3) {}
.myElement:nth-child(n+8):nth-child(-n+15) {}`,
        },
      },
      {
        p: `Nth of type - uses An+B notation to select elements from a list of sibiling elements that match the same type.`,
      },
      {
        code: {
          language: `css`,
          code: `.myElement:nth-of-type(even) {}`,
        },
      },
    ],
    [
      {
        h2: "Pseudo Elements",
      },
      {
        p: `These are used to select a specific part of the selected element.  All begin with '::' and then the state they select for.`,
      },
      {
        link: `https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements`,
      },
    ],
    [
      {
        h3: "Targetting Elements",
      },
      {
        p: `First Letter - targets first letter of first line of bock element, but only when not preceded by other content.`,
      },
      {
        code: {
          language: `css`,
          code: `.myElement::first-letter {}`,
        },
      },
      {
        p: `Marker - targets the marker for list elements`,
      },
      {
        code: {
          language: `css`,
          code: `.myElement::marker {}`,
        },
      },
      {
        p: `Placeholder - targets placeholder for input elements`,
      },
      {
        code: {
          language: `css`,
          code: `.myElement::placeholder {}`,
        },
      },
      {
        p: `Selection - targets what is selected by the user`,
      },
      {
        code: {
          language: `css`,
          code: `.myElement::selected {}`,
        },
      },
    ],
    [
      {
        h3: "Creation Elements",
      },
      {
        p: `Before - creates a pseudo element that is the first child of the selected element. It is often used to add cosmetic content to an element with the content property. It is inline by default.`,
      },
      {
        code: {
          language: `css`,
          code: `.local-link::before {
  content: url('myLogo.svg');
  display: inline-block;
  width: 15px;
  height: 15px;
  margin-right: 5px;
}`,
        },
      },
      {
        p: `After - creates a pseudo element that is the last child of the selected element. It is often used to add cosmetic content to an element with the content property. It is inline by default.`,
      },
      {
        code: {
          language: `css`,
          code: `.local-link::after {
  content: url('myLogo.svg');
  display: inline-block;
  width: 15px;
  height: 15px;
}`,
        },
      },
    ],
  ],
}
