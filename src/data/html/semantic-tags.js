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
          language: "html",
          data: `<nav>Used to group navigation links.</nav>`,
        },
      ],
    },
    {
      title: "Main",
      items: [
        {
          language: "html",
          data: `<main>The main content of the page, limited to one per page.</main>`,
        },
      ],
    },
    {
      title: "Header",
      items: [
        {
          language: "html",
          data: `<header>Used to introduce content. Does not need to be at top of page and can be within different areas of the page.</header>`,
        },
      ],
    },
    {
      title: "Article",
      items: [
        {
          language: "html",
          data: `<article>A self contained piece of content that would make sense on its own</article>`,
        },
      ],
    },
    {
      title: "Section",
      items: [
        {
          language: "html",
          data: `<section>Content that can be grouped together with other sections and would not make sense on its own.</section>`,
        },
      ],
    },
    {
      title: "Aside",
      items: [
        {
          language: "html",
          data: `<aside>Supplemental content indireclty related to the main content but isn't required to understand the main content.</aside>`,
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
          language: "html",
          data: `<footer>At the bottom of the page/area.  If used at bottom of page often has some navigation links or copyright information.</footer>`,
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
