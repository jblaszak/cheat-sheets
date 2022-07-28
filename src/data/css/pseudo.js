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
      {
        blah: "test failure",
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
          code: `.mylink:link{}`,
        },
      },
      {
        p: `Matching links that have been visited`,
      },
      {
        code: {
          language: `css`,
          code: `.mylink:visited{}`,
        },
      },
      {
        p: `Matching either visited or non-visited links.`,
      },
      {
        code: {
          language: `css`,
          code: `.mylink:all-links{}`,
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
          code: `.myElement:hover{}`,
        },
      },
      {
        p: `Selected when element is actived by user, example clicked on.`,
      },
      {
        code: {
          language: `css`,
          code: `.myElement:active{}`,
        },
      },
      {
        p: `Selected when element is focused`,
      },
      {
        code: {
          language: `css`,
          code: `.myElement:focus{}`,
        },
      },
      {
        p: `Selected when element or any of its descendents is focused`,
      },
      {
        code: {
          language: `css`,
          code: `.myElement:focus-within{}`,
        },
      },
    ],
    [
      {
        h3: `Form Elements`,
      },
      {
        p: `Disabled - `,
      },
      {
        code: {
          language: `css`,
          code: `.myElement:focus-within{}`,
        },
      },
    ],
  ],
}
