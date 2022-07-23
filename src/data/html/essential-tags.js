export const pageData = {
  pageTitle: "HTML Essential Tags",
  cheats: [
    {
      title: "Paragraph",
      items: [
        {
          language: "html",
          data: `<p>Some paragraph text!<p>`,
        },
      ],
    },
    {
      title: "Heading Tags",
      items: [
        {
          data: "h1 is top level while h2 is a subheading, etc.  Not meant to choose font-size but rather semantic structure.",
        },
        {
          language: "html",
          data: `<h1>Main Heading</h1>
<h2>Secondary heading</h2>
<!-- ... -->
<h6>Lowest possible subheading</h6>`,
        },
      ],
    },
    {
      title: "Images",
      items: [
        {
          data: `Has two required tags, src and alt.  Src is for path to the image and alt is for the alternative text that
            gets displayed when using screen readers or if the image cannot be displayed.`,
        },
        {
          language: "html",
          data: `<img src="myImage.jpg" alt="image alt text" />`,
        },
      ],
    },
    {
      title: "List Item",
      items: [
        {
          data: `Note: must be between tags for unordered or ordered list (see below). Often used to contain navigation links 
            with modified list styling.`,
        },
        {
          language: "html",
          data: `<li>My list item</li>`,
        },
      ],
    },
    {
      title: "Unordered List",
      items: [
        {
          data: `Used for when the list order does not matter.`,
        },
        {
          language: "html",
          data: `<ul>
    <li>Unordered List Item #1</li>
    <li>Unordered List Item #2</li>
</ul>`,
        },
      ],
    },
    {
      title: "Ordered List",
      items: [
        {
          data: `Used for when list order DOES matter, items are numbered/lettered depending on the type set.`,
        },
        {
          language: "html",
          data: `<ol>
    <li>Unordered List Item #1</li>
    <li>Unordered List Item #2</li>
</ol>`,
        },
      ],
    },
    {
      title: "Nested Lists",
      items: [
        {
          language: "html",
          data: `<ol>
    <li>Unordered List Item #1</li>
    <li>Unordered List Item #2</li>
    <ul>
        <li>Unordered List Item #1</li>
        <li>Unordered List Item #2</li>
    </ul>
</ol>`,
        },
      ],
    },
    {
      title: "Preformatted Text",
      items: [
        {
          data: `Used when it is necessary to preserve whitespaces. Note: HTML default is to ignore more than one consecutive white space.`,
        },
        {
          language: "html",
          data: `<pre>
   /\\_/\\
  ( o.o )
   > ^ <
</pre>`,
        },
      ],
    },
    {
      title: "Line Break",
      items: [
        {
          data: `Creates a semantic break in the flow of text. Should not be used for spacing of text. Use CSS for that.`,
        },
        {
          language: "html",
          data: `<p> Some text, <br>
    and now some text on a new line!
</p>`,
        },
      ],
    },
    {
      title: "Horizontal Rule",
      items: [
        {
          data: `Creates a horizontal line across the container.  Used to create a break between content.`,
        },
        {
          language: "html",
          data: `<p>First part of content</p>
<hr>
<p>Second part of content</p>`,
        },
      ],
    },
    {
      title: "Anchor Tag (Link)",
      items: [
        {
          data: `Used to link to other documents/pages on the web or server.  Requires an href attribute to store the path
                  to the page being linked to. Optional (target attribute), can be set to "_blank" to open in new tab/window.`,
        },
        {
          language: "html",
          data: `<a href="https://www.mycoolpage.com" target="_blank">My Cool Page</a>`,
        },
      ],
    },
    {
      title: "Italics (Emphasis)",
      items: [
        {
          data: `Use this for better semantics.`,
        },
        {
          language: "html",
          data: `<p>My <em>fancy</em> text!</p>`,
        },
      ],
    },
    {
      title: "Bold (Strong)",
      items: [
        {
          data: `Use this for better semantics.`,
        },
        {
          language: "html",
          data: `<p>My <strong>BOLD</strong> text!</p>`,
        },
      ],
    },
  ],
}
