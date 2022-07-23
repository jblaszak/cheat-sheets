export const pageData = {
  pageTitle: "HTML Semantic Tags",
  pageInfo: `Semantic HTML uses tags that describe the meaning of the content of the tag. 
  This can help web crawlers better determine what's important on a page and improves
  accessibility!`,
  cheats: [
    {
      title: "Navigation",
      items: [
        {
          data: `Used to group navigation links.`,
        },
        {
          language: "html",
          data: `<nav>Some links here.</nav>`,
        },
      ],
    },
    {
      title: "Main",
      items: [
        {
          data: `The main content of the page, limited to one per page.`,
        },
        {
          language: "html",
          data: `<main>Main content here.</main>`,
        },
      ],
    },
    {
      title: "Header",
      items: [
        {
          data: `Used to introduce content. Does not need to be at top of page and can be within different areas of the page.`,
        },
        {
          language: "html",
          data: `<header>Some info about what's below</header>`,
        },
      ],
    },
    {
      title: "Article",
      items: [
        {
          data: `A self contained piece of content that would make sense on its own.`,
        },
        {
          language: "html",
          data: `<article>My awesome article</article>`,
        },
      ],
    },
    {
      title: "Section",
      items: [
        {
          data: `Content that can be grouped together with other sections and would not make sense on its own.`,
        },
        {
          language: "html",
          data: `<section>Section of subsection!</section>`,
        },
      ],
    },
    {
      title: "Aside",
      items: [
        {
          data: `Supplemental content indireclty related to the main content but isn't required to understand the main content.`,
        },
        {
          language: "html",
          data: `<aside>Supplemental info here.</aside>`,
        },
      ],
    },
    {
      title: "Figure and Figcaption",
      items: [
        {
          data: `Used to contain an image, diagram or code snippet and group it with the description of that
            content.`,
        },
        {
          language: "html",
          data: `<figure>
    <img src="image.jpg">
    <figcaption>A caption describing the above image.</figcaption>
</figure>`,
        },
      ],
    },
    {
      title: "Footer",
      items: [
        {
          data: `At the bottom of the page/area.  If used at bottom of page often has some navigation links or copyright information..`,
        },
        {
          language: "html",
          data: `<footer>Cool footer here. Look at me! Copyright - Me!</footer>`,
        },
      ],
    },
    {
      title: "Media",
      items: [
        {
          data: `These describe the media content, though embed can be used for any media.`,
        },
        {
          language: "html",
          data: `<video src="my-video.mp4">Text for when video not supported</video>
<audio src="koreanhiphop.mp3"></audio>
<embed src="babyyoda.gif"/>`,
        },
      ],
    },
  ],
}
