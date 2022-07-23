export const pageData = {
  pageTitle: "HTML Meta Tags",
  pageInfo: `Meta tags are used to provide extra data about a webpage, like how it should show up on search engines or
    social media sites!  They are placed within the <head></head> portion of an HTML document.`,
  cheats: [
    {
      title: "Charset",
      items: [
        {
          data: `Sets the character encoding for the page. UTF-8 is most common as it contains most characters in most languages.`,
        },
        {
          language: "html",
          data: `<meta charset="utf-8" />`,
        },
      ],
    },
    {
      title: "Viewport",
      items: [
        {
          data: `Allows for custom responsive CSS as opposed to the default scaling behaviour of small devices (pretends it's larger
          than it is and just shows everything super small).`,
        },
        {
          language: "html",
          data: `<meta name="viewport" content="width=device-width, initial-scale=1" />`,
        },
      ],
    },
    {
      title: "Page Author",
      items: [
        {
          data: `Set the author of the page.`,
        },
        {
          language: "html",
          data: `<meta name="author" content="My Name" />`,
        },
      ],
    },
    {
      title: "Page Description",
      items: [
        {
          data: `Set the description of the page (up to 155 characters) that will show on search engines.`,
        },
        {
          language: "html",
          data: `<meta name="description" content="My awesome site description that is super cool." />`,
        },
      ],
    },
    {
      title: "Social Meta Tags",
      items: [
        {
          data: `When you link to your site from social media, these tags define how those links look like!`,
        },
        {
          language: "html",
          data: `<!--  Essential META Tags -->
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
        {
          link: "https://css-tricks.com/essential-meta-tags-social-media/",
        },
      ],
    },
    {
      title: "Favicon",
      items: [
        {
          data: `An icon for your page that can be displayed in the browser tab and other places. Best practice
                to use multiple sizes like 16x16, 32x32 pixels.`,
        },
        {
          language: "html",
          data: `<link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png"/>
`,
        },
      ],
    },
  ],
}
