export const pageData = {
  pageTitle: "Markdown",
  pageInfo: ``,
  cheats: [
    [
      { h2: "Headings" },
      {
        code: {
          language: "markdown",
          code: `# Heading 1
## Heading 2
...
###### Heading 6 (max)`,
        },
      },
    ],
    [
      { h2: "Italic Text" },
      {
        code: {
          language: "markdown",
          code: `Text in _italic_!`,
        },
      },
    ],
    [
      { h2: "Bold Text" },
      {
        code: {
          language: "markdown",
          code: `Text in **bold**!`,
        },
      },
    ],
    [
      { h2: "Inline Links" },
      {
        code: {
          language: "markdown",
          code: `[Link text!](www.linktarget.com)`,
        },
      },
    ],
    [
      { h2: "Reference Links" },
      {
        code: {
          language: "markdown",
          code: `Just some text. [Some link text].

[Some link text]: www.linktarget.com`,
        },
      },
    ],
    [
      { h2: "Images" },
      {
        code: {
          language: "markdown",
          code: `![Image Alt Text](www.imagelocation.com)`,
        },
      },
    ],
    [
      { h2: "Image Reference w/ Alt Text (optional)" },
      {
        code: {
          language: "markdown",
          code: `![Image Reference Name][Image Alt Text]

[Image Reference Name]: www.imagelocation.com`,
        },
      },
    ],
    [
      { h2: "Block Quotes" },
      {
        code: {
          language: "markdown",
          code: `Just some text.

>Some block quoted text!

>Mutliple
>
>Block Quoted Lines
>
>Together`,
        },
      },
    ],
    [
      { h2: "Unordered List" },
      {
        code: {
          language: "markdown",
          code: `* Unordered List Item 1
* Unordered List Item 2`,
        },
      },
    ],
    [
      { h2: "Ordered List" },
      {
        code: {
          language: "markdown",
          code: `1. Ordered List Item 1
2. Ordered List Item 2`,
        },
      },
    ],
    [
      { h2: "Sub Lists" },
      {
        code: {
          language: "markdown",
          code: `* Main List
 * Sub List`,
        },
      },
    ],
    [
      { h2: "Multiple Lines in List Section" },
      {
        p: `Try using soft breaks and hard breaks to change up positioning of text.`,
      },
      {
        code: {
          language: "markdown",
          code: `* List Text
  Text here continues at end of line above.

  Text at same indentation at line below.`,
        },
      },
    ],
    [
      { h2: "Paragraphs" },
      {
        p: `Markdown handles spaces differently. Two types of line breaks, hard break and soft break. Hard break creates a space between sections of text. Soft break puts text on next line.`,
      },
      { h3: "Hard Break" },
      { p: `Use empty line to create hard break.` },
      {
        code: {
          language: "markdown",
          code: `Some text on a line.
  
Some text now in a different paragraph.`,
        },
      },
      { h3: "Soft Break" },
      { p: `Use two empty spaces '  ' to create soft break.` },
      {
        code: {
          language: "markdown",
          code: `Some text in a line.  
Some text now on line below.`,
        },
      },
    ],
    [
      { h2: "Code Snippet" },
      {
        code: {
          language: "markdown",
          code: `${"```"}
<html>
</html>
${"```"}`,
        },
      },
    ],
    [
      { h2: "Heading IDs" },
      {
        p: `Part of extended markdown, may not work with all markdown processors.`,
      },
      {
        code: {
          language: "markdown",
          code: `### Some heading {#heading-id}`,
        },
      },
    ],
    [
      { h2: "Linking to Heading ID" },
      {
        p: `Part of extended markdown, may not work with all markdown processors.`,
      },
      {
        code: {
          language: "markdown",
          code: `[Heading ID Text](#heading-id)`,
        },
      },
    ],
  ],
}
