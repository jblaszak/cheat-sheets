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
        p: `Can be used to dynamically change your CSS using javascript by pulling the value from the attribute on the element. Three options to use it: simple, with a type, and with a fallback!`,
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
    ],
  ],
}
