export const pageData = {
  pageTitle: "Accessibility",
  pageInfo: ``,
  cheats: [
    [
      { h2: `Screen Readers Only` },
      {
        p: `Sometimes we want elements to only be visibile for screen readers, then we can use this css class. NOTE: using display: none
        or visibility: hidden will likely hide the content from all users so this class is necessary! `,
      },
      {
        code: {
          language: `css`,
          code: `.sr-only {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
}`,
        },
      },
    ],
  ],
}
