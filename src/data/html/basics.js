export const pageData = {
  pageTitle: "HTML Basics",
  pageInfo: `HTML stands for Hyper Text Markup Language!`,
  cheats: [
    {
      title: "Declare HTML Version",
      items: [
        {
          data: "Tell the browser which HTML version to use, defaults to latest version. Useful for older browsers.",
        },
        {
          language: "html",
          data: `<!DOCTYPE html>`,
        },
      ],
    },
    {
      title: "Tags",
      items: [
        {
          data: "HTML is structured by wrapping content with tags corresponding to that element.",
        },
        {
          language: "html",
          data: `<tagname>Content</tagname>`,
        },
      ],
    },
    {
      title: "Self Closing Tags",
      items: [
        {
          data: "Certain tags don't have content so they are considered self closing.",
        },
        {
          language: "html",
          data: `<hr>
or also (based on personal preference)
<hr />`,
        },
      ],
    },
    {
      title: "Attributes",
      items: [
        {
          data: `Tags also have attributes, with values between quotes.  Some attributes can be left without values and are considered to be "true".
          The two examples below are treated the same.`,
        },
        {
          language: "html",
          data: `<input type="text" required="true" />
<input type="text" required />`,
        },
      ],
    },
    {
      title: "Comments",
      items: [
        {
          data: `Creating comments in HTML.`,
        },
        {
          language: "html",
          data: `<!-- this is 
a comment  in HTML-->`,
        },
      ],
    },
    {
      title: "Basic HTML Page Structure",
      items: [
        {
          language: "html",
          data: `<html>
    <head>
        <title>Page Title</title>
    </head>
    <body>
        Page Content
    </body>
</html>`,
        },
      ],
    },
  ],
}
