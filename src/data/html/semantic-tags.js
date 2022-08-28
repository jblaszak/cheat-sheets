export const pageData = {
  pageTitle: "HTML Semantic Tags",
  pageInfo: `Semantic HTML uses tags that describe the meaning of the content of the tag. 
  This can help web crawlers better determine what's important on a page and improves
  accessibility!`,
  cheats: [
    [
      { h2: "Navigation" },
      { p: `Used to group navigation links.` },
      {
        code: {
          language: "html",
          code: `<nav>Some links here.</nav>`,
        },
      },
    ],
    [
      { h2: "Main" },
      { p: `The main content of the page, limited to one per page.` },
      {
        code: {
          language: "html",
          code: `<main>Main content here.</main>`,
        },
      },
    ],
    [
      { h2: "Header" },
      {
        p: `Used to introduce content. Does not need to be at top of page and can be within different areas of the page.`,
      },
      {
        code: {
          language: "html",
          code: `<header>Some info about what's below</header>`,
        },
      },
    ],
    [
      { h2: "Article" },
      {
        p: `A self contained piece of content that would make sense on its own.`,
      },
      {
        code: {
          language: "html",
          code: `<article>My awesome article</article>`,
        },
      },
    ],
    [
      { h2: "Section" },
      {
        p: `Content that can be grouped together with other sections and would not make sense on its own.`,
      },
      {
        code: {
          language: "html",
          code: `<section>Section of subsection!</section>`,
        },
      },
    ],
    [
      { h2: "Aside" },
      {
        p: `Supplemental content indireclty related to the main content but isn't required to understand the main content.`,
      },
      {
        code: {
          language: "html",
          code: `<aside>Supplemental info here.</aside>`,
        },
      },
    ],
    [
      { h2: "Figure and Figcaption" },
      {
        p: `Used to contain an image, diagram or code snippet and group it with the description of that content.`,
      },
      {
        code: {
          language: "html",
          code: `<figure>
  <img src="image.jpg">
  <figcaption>A caption describing the above image.</figcaption>
</figure>`,
        },
      },
    ],
    [
      { h2: "Picture" },
      {
        p: `Used to contain an image. Can be used to conditionally render content for different screen sizes!`,
      },
      {
        code: {
          language: "html",
          code: `<picture>
  <source media="(max-width: 609px)" srcset="./images/image-product-mobile.jpg" />
  <source media="(min-width: 610px)" srcset="./images/image-product-desktop.jpg" />
  <img class="card-image" alt="Gabrielle Essence Eau De Parfum" />
</picture>`,
        },
      },
      {
        p: `Note: picture tag has a small whitespace below that can be removed with a CSS reset.`,
      },
      {
        code: {
          language: "css",
          code: `img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}`,
        },
      },
    ],
    [
      { h2: "Footer" },
      {
        p: `At the bottom of the page/area.  If used at bottom of page often has some navigation links or copyright information..`,
      },
      {
        code: {
          language: "html",
          code: `<footer>Cool footer here. Look at me! Copyright - Me!</footer>`,
        },
      },
    ],
    [
      { h2: "Media" },
      {
        p: `These describe the media content, though embed can be used for any media.`,
      },
      {
        code: {
          language: "html",
          code: `<video src="my-video.mp4">Text for when video not supported</video>
<audio src="koreanhiphop.mp3"></audio>
<embed src="babyyoda.gif"/>`,
        },
      },
    ],
  ],
}
