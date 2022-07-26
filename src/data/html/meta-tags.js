export const pageData = {
  pageTitle: "HTML Meta Tags",
  pageInfo: `Meta tags are used to provide extra data about a webpage, like how it should show up on search engines or
    social media sites!  They are placed within the <head></head> portion of an HTML document.`,
  cheats: [
    [
      { h2: "Charset" },
      {
        p: `Sets the character encoding for the page. UTF-8 is most common as it contains most characters in most languages.`,
      },
      {
        code: {
          language: "html",
          code: `<meta charset="utf-8" />`,
        },
      },
    ],
    [
      { h2: "Viewport" },
      {
        p: `Allows for custom responsive CSS as opposed to the default scaling behaviour of small devices (pretends it's larger than it is and just shows everything super small).`,
      },
      {
        code: {
          language: "html",
          code: `<meta name="viewport" content="width=device-width, initial-scale=1" />`,
        },
      },
    ],
    [
      { h2: "Page Author" },
      { p: `Set the author of the page.` },
      {
        code: {
          language: "html",
          code: `<meta name="author" content="My Name" />`,
        },
      },
    ],
    [
      { h2: "Page Description" },
      {
        p: `Set the description of the page (up to 155 characters) that will show on search engines.`,
      },
      {
        code: {
          language: "html",
          code: `<meta name="description" content="My awesome site description that is super cool." />`,
        },
      },
    ],
    [
      { h2: "Social Meta Tags" },
      {
        p: `When you link to your site from social media, these tags define how those links look like!`,
      },
      {
        code: {
          language: "html",
          code: `<!--  Essential META Tags -->
<meta property="og:title" content="My Awesome Site" />
<meta property="og:type" content="website" />
<meta property="og:image" content="og.png" />
<meta property="og:url" content="https://www.myawesomesite.com" />
<meta name="twitter:card" content="summary" />

<!--  Non-Essential, But Recommended -->
<meta property="og:description" content="My awesome website description!" />
<meta property="og:sitename" content="My website's name!" />
<meta name="twitter:image:alt" content="Alt text for image">

<!--  Non-Essential, But Required for Analytics -->
<meta property="fb:app_id" content="your_app_id" />
<meta name="twitter:site" content="@MyTwitterHandle" />`,
        },
      },
      { link: "https://css-tricks.com/essential-meta-tags-social-media/" },
    ],
    [
      { h2: "Favicon" },
      {
        p: `An icon for your page that can be displayed in the browser tab and other places. Best practice to use multiple sizes like 16x16, 32x32 pixels.`,
      },
      {
        code: {
          language: "html",
          code: `<link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png"/>
`,
        },
      },
    ],
  ],
}
