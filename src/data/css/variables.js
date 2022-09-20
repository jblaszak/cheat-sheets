export const pageData = {
  pageTitle: "CSS Variables",
  pageInfo: `Used so you can access values through different parts of the website.`,
  cheats: [
    [
      { h2: "Setting Custom Properties" },
      {
        p: `Super useful for creating design systems where you only need to change one value and can affect many elements.
          Usually set in the root element so they're accessible to everywhere.`,
      },
      {
        code: {
          language: `css`,
          code: `:root {
    --large-font: 1.5rem;
}`,
        },
      },
    ],
    [
      { h2: "Using Custom Properties" },
      {
        code: {
          language: `css`,
          code: `h1 {
    font-size: var(--large-font);
}`,
        },
      },
    ],
    [
      { h2: "Accessing Element Attribute Values" },
      {
        p: `Can be used to dynamically change your CSS using javascript by pulling the value from the attribute on the element. Note: may be easier to just use something like SCSS or SASS for this. Three options to use it: simple, with a type, and with a fallback!`,
      },
      {
        p: `NOTE: only works for 'content' property at the moment.`,
      },
      {
        code: {
          language: `css`,
          code: `blockquote::after {
            display: block;
      content: ' (source: ' attr(cite) ') ';
      color: hotpink;
    }`,
        },
      },
      {
        p: `Expected future use...`,
      },
      {
        code: {
          language: `html`,
          code: `<p data-color="blue">My text here!</p>`,
        },
      },
      {
        code: {
          language: `css`,
          code: `p[data-color] {
    color: attr(data-color);
    color: attr(data-color color);
    color: attr(data-color color, red);
}`,
        },
      },
      { link: `https://developer.mozilla.org/en-US/docs/Web/CSS/attr` },
    ],
    [
      { h2: "Counters" },
      {
        p: `Used to count number of elements. Can be useful for styling things based on the number of total elements or styling custom lists.`,
      },
      {
        code: {
          language: `css`,
          code: `counter-reset: myCounter; /* initializes counter */
counter-increment: myCounter; /* increases counter */
content: counter(myCounter); /* uses counter */`,
        },
      },
    ],
  ],
}
