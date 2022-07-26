export const pageData = {
  pageTitle: "Pseudo Classes and Elements",
  pageInfo: `Selectors are used to describe which elements a ruleset will target.`,
  cheats: [
    {
      title: "Pseudo Classes",
      items: [
        {
          data: `These are used to select based on the current state of an element.  All begin with ':' 
            and then the state they select for.`,
        },
        {
          link: `https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes`,
        },
        {
          data: `Links`,
        },
        {
          data: `Matching links that have not been visited, links that have been visited, and both!`,
        },
        {
          language: `css`,
          data: `.mylink:link{}`,
        },
        {
          data: `Matching links that have been visited`,
        },
        {
          language: `css`,
          data: `.mylink:visited{}`,
        },
        {
          data: `Matching either visited or non-visited links.`,
        },
        {
          language: `css`,
          data: `.mylink:all-links{}`,
        },
        {
          data: `User actions - matching elements that are interacted with the user by some way. `,
        },
        {
          data: `Selected when element is hovered over by the mouse `,
        },
        {
          language: `css`,
          data: `.myElement:hover{}`,
        },
      ],
    },
  ],
}
