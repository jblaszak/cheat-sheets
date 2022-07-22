export const pageData = {
  pageTitle: "Markdown",
  pageInfo: ``,
  cheats: [
    {
      title: "Headings",
      items: [
        {
          language: "markdown",
          data: `# Heading 1
## Heading 2
...
###### Heading 6 (max)`,
        },
      ],
    },
    {
      title: "Italic Text",
      items: [
        {
          language: "markdown",
          data: `Text in _italic_!`,
        },
      ],
    },
    {
      title: "Bold Text",
      items: [
        {
          language: "markdown",
          data: `Text in **bold**!`,
        },
      ],
    },
    {
      title: "Inline Links",
      items: [
        {
          language: "markdown",
          data: `[Link text!](www.linktarget.com)`,
        },
      ],
    },
    {
      title: "Reference Links",
      items: [
        {
          language: "markdown",
          data: `Just some text. [Some link text].

[Some link text]: www.linktarget.com`,
        },
      ],
    },
    {
      title: "Images",
      items: [
        {
          language: "markdown",
          data: `![Image Alt Text](www.imagelocation.com)`,
        },
      ],
    },
    {
      title: "Image Reference w/ Alt Text (optional)",
      items: [
        {
          language: "markdown",
          data: `![Image Reference Name][Image Alt Text]

[Image Reference Name]: www.imagelocation.com`,
        },
      ],
    },
    {
      title: "Block Quotes",
      items: [
        {
          language: "markdown",
          data: `Just some text.

>Some block quoted text!

>Mutliple
>
>Block Quoted Lines
>
>Together`,
        },
      ],
    },
    {
      title: "Unordered List",
      items: [
        {
          language: "markdown",
          data: `* Unordered List Item 1
* Unordered List Item 2`,
        },
      ],
    },
    {
      title: "Ordered List",
      items: [
        {
          language: "markdown",
          data: `1. Ordered List Item 1
2. Ordered List Item 2`,
        },
      ],
    },
    {
      title: "Sub Lists",
      items: [
        {
          language: "markdown",
          data: `* Main List
 * Sub List`,
        },
      ],
    },
    {
      title: "Multiple Lines in List Section",
      items: [
        {
          data: `Try using soft breaks and hard breaks to change up positioning of text.`,
        },
        {
          language: "markdown",
          data: `* List Text
  Text here continues at end of line above.

  Text at same indentation at line below.`,
        },
      ],
    },
    {
      title: "Paragraphs",
      items: [
        {
          data: `Markdown handles spaces differently. Two types of line breaks, hard break and soft break.
                  Hard break creates a space between sections of text. Soft break puts text on next line.`,
        },
      ],
    },
    {
      title: "Hard Break",
      items: [
        {
          data: `Use empty line to create hard break.`,
        },
        {
          language: "markdown",
          data: `Some text on a line.

Some text now in a different paragraph.`,
        },
      ],
    },
    {
      title: "Soft Break",
      items: [
        {
          data: `Use two empty spaces '  ' to create soft break.`,
        },
        {
          language: "markdown",
          data: `Some text in a line.  
Some text now on line below.`,
        },
      ],
    },
    {
      title: "Code Snippet",
      items: [
        {
          language: "markdown",
          data: `${"```"}
<html>
</html>
${"```"}`,
        },
      ],
    },
    {
      title: "Heading IDs",
      items: [
        {
          data: `Part of extended markdown, may not work with all markdown processors.`,
        },
        {
          language: "markdown",
          data: `### Some heading {#heading-id}`,
        },
      ],
    },
    {
      title: "Linking to Heading ID",
      items: [
        {
          data: `Part of extended markdown, may not work with all markdown processors.`,
        },
        {
          language: "markdown",
          data: `[Heading ID Text](#heading-id)`,
        },
      ],
    },
  ],
}
