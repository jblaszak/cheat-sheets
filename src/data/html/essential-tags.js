export const pageData = {
  pageTitle: "HTML Essential Tags",
  // pageInfo: "",
  cheats: [
    [
      { h2: "Paragraph" },
      {
        code: {
          language: "html",
          code: `<p>Some paragraph text!<p>`,
        },
      },
    ],
    [
      { h2: "Heading Tags" },
      {
        p: "h1 is top level while h2 is a subheading, etc.  Not meant to choose font-size but rather semantic structure.",
      },
      {
        code: {
          language: "html",
          code: `<h1>Main Heading</h1>
<h2>Secondary heading</h2>
<!-- ... -->
<h6>Lowest possible subheading</h6>`,
        },
      },
    ],
    [
      { h2: "Images" },
      {
        p: `Has two required tags, src and alt.  Src is for path to the image and alt is for the alternative text thatgets displayed when using screen readers or if the image cannot be displayed.`,
      },
      {
        code: {
          language: "html",
          code: `<img src="myImage.jpg" alt="image alt text" />`,
        },
      },
    ],
    [
      { h2: "List Item" },
      {
        p: `Note: must be between tags for unordered or ordered list (see below). Often used to contain navigation links with modified list styling.`,
      },
      {
        code: {
          language: "html",
          code: `<li>My list item</li>`,
        },
      },
    ],
    [
      { h2: "Unordered List" },
      { p: `Used for when the list order does not matter.` },
      {
        code: {
          language: "html",
          code: `<ul>
  <li>Unordered List Item #1</li>
  <li>Unordered List Item #2</li>
</ul>`,
        },
      },
    ],
    [
      { h2: "Ordered List" },
      {
        p: `Used for when list order DOES matter, items are numbered/lettered depending on the type set.`,
      },
      {
        code: {
          language: "html",
          code: `<ol>
  <li>Unordered List Item #1</li>
  <li>Unordered List Item #2</li>
</ol>`,
        },
      },
    ],
    [
      { h2: "Nested Lists" },
      {
        code: {
          language: "html",
          code: `<ol>
  <li>Unordered List Item #1</li>
  <li>Unordered List Item #2</li>
  <ul>
    <li>Unordered List Item #1</li>
    <li>Unordered List Item #2</li>
  </ul>
</ol>`,
        },
      },
    ],
    [
      { h2: "Preformatted Text" },
      {
        p: `Used when it is necessary to preserve whitespaces. Note: HTML default is to ignore more than one consecutive white space.`,
      },
      {
        code: {
          language: "html",
          code: `<pre>
   /\\_/\\
  ( o.o )
   > ^ <
</pre>`,
        },
      },
    ],
    [
      { h2: "Line Break" },
      {
        p: `Creates a semantic break in the flow of text. Should not be used for spacing of text. Use CSS for that.`,
      },
      {
        code: {
          language: "html",
          code: `<p> Some text, <br>
  and now some text on a new line!
</p>`,
        },
      },
    ],
    [
      { h2: "Horizontal Rule" },
      {
        p: `Creates a horizontal line across the container.  Used to create a break between content.`,
      },
      {
        code: {
          language: "html",
          code: `<p>First part of content</p>
<hr>
<p>Second part of content</p>`,
        },
      },
    ],
    [
      { h2: "Anchor Tag (Link)" },
      {
        p: `Used to link to other documents/pages on the web or server.  Requires an href attribute to store the path to the page being linked to. Optional (target attribute), can be set to "_blank" to open in new tab/window.`,
      },
      {
        code: {
          language: "html",
          code: `<a href="https://www.mycoolpage.com" target="_blank">My Cool Page</a>`,
        },
      },
    ],
    [
      { h2: "Italics (Emphasis)" },
      { p: `Use this for better semantics.` },
      {
        code: {
          language: "html",
          code: `<p>My <em>fancy</em> text!</p>`,
        },
      },
    ],
    [
      { h2: "Bold (Strong)" },
      { p: `Use this for better semantics.` },
      {
        code: {
          language: "html",
          code: `<p>My <strong>BOLD</strong> text!</p>`,
        },
      },
    ],
    [
      { h2: "Link Tag" },
      {
        p: `Specifies the relationship between the current document and an external resource like a favicon, stylesheet, or custom font.`,
      },
      {
        code: {
          language: "html",
          code: `<link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png"/>
<link rel="stylesheet" href="myStyles.css"/>
<link rel="preload" href="myFont.woff2" as="font" type="font/woff2" crossorigin="anonymous">`,
        },
      },
    ],
  ],
}
