export const pageData = {
  pageTitle: "Responsive Designs",
  pageInfo: `Responsive designs ensure that the layout of the page works on multiple screen sizes.`,
  cheats: [
    [
      { h2: "Responsive HTML Meta Tag" },
      {
        p: `The default behaviour of the browser is to pretend like it's a big screen and show everything small by zooming out.  We need to change that 
          default to allow our responsive CSS to work.`,
      },
      {
        code: {
          language: "html",
          code: `<meta name="viewport" content="width=device-width, initial-scale=1" />`,
        },
      },
    ],
    [
      { h2: "Media Queries" },
      {
        p: `Set certain behaviour for given selectors when the media matches certain criteria.`,
      },
      {
        code: {
          language: "css",
          code: `@media (max-width: 800px) {}
@media (min-width: 800px) {}
@media (min-width: 30em) and (orientation: landscape) {}`,
        },
      },
      {
        link: `https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries`,
      },
    ],
    [
      { h2: "Clamp" },
      {
        p: `Super useful tool to set scaling propreties when parent container size changes. Defines the minimum, the preferred, 
          and the maximum values for the property.  Can use calculations to achieve the right kind of scaling.`,
      },
      {
        code: {
          language: "css",
          code: `width: clamp(300, 50%, 800px);`,
        },
      },
      {
        link: `https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/`,
      },
    ],
    [
      { h2: "Mobile First Design" },
      {
        p: `The internet is getting increasingly viewed by mobile phones (at least 50% of all web traffic is mobile), so 
          designing pages with mobile first in mind is a good start.  Most mobile elements scale well to larger screen sizes.`,
      },
    ],
  ],
}
