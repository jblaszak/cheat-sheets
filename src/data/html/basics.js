export const pageData = {
  pageTitle: "HTML Basics",
  pageInfo: `HTML stands for Hyper Text Markup Language!`,
  cheats: [
    [
      { h2: "Declare HTML Version" },
      {
        p: "Tell the browser which HTML version to use, defaults to latest version. Useful for older browsers.",
      },
      {
        code: {
          language: "html",
          code: `<!DOCTYPE html>`,
        },
      },
    ],
    [
      { h2: "Tags" },
      {
        p: "HTML is structured by wrapping content with tags corresponding to that element.",
      },
      {
        code: {
          language: "html",
          code: `<tagname>Content</tagname>`,
        },
      },
    ],
    [
      { h2: "Self Closing Tags" },
      {
        p: "Certain tags don't have content so they are considered self closing.",
      },
      {
        code: {
          language: "html",
          code: `<hr>
    or also (based on personal preference)
    <hr />`,
        },
      },
    ],
    [
      { h2: "Attributes" },
      {
        p: `Tags also have attributes, with values between quotes.  Some attributes can be left without values and are considered to be "true". The two examples below are treated the same.`,
      },
      {
        code: {
          language: "html",
          code: `<input type="text" required="true" />
<input type="text" required />`,
        },
      },
    ],
    [
      { h2: "Comments" },
      { p: `Creating comments in HTML.` },
      {
        code: {
          language: "html",
          code: `<!-- this is 
a comment  in HTML-->`,
        },
      },
    ],
    [
      { h2: "Basic HTML Page Structure" },
      {
        code: {
          language: "html",
          code: `<html>
<head>
  <title>Page Title</title>
</head>
<body>
  Page Content
</body>
</html>`,
        },
      },
    ],
  ],
}
