export const pageData = {
  pageTitle: "CSS Fonts",
  pageInfo: `Fonts and typography are a great way to add customization to your design.`,
  cheats: [
    [{ h2: "Font Properties" }],
    [
      { h3: "Font Family" },
      {
        p: `Describes the font family name to use in prioritized order. If selected font is not available will select the next one.  Good idea to
          add some browser supported ones to default back onto if using custom fonts.`,
      },
      {
        code: {
          language: `css`,
          code: `font-family: "Roboto", sans-serif;`,
        },
      },
    ],
    [
      { h3: "Font Style" },
      {
        p: `Sets whether a font should be styled with a normal, italic, or oblique face from its font-family.  Oblique lets you set an angle between -90 and 90 for how slanted the text is.`,
      },
      {
        code: {
          language: `css`,
          code: `font-style: normal;
font-style: italic;
font-style: oblique 40deg;`,
        },
      },
    ],
    [
      { h3: "Font Weight" },
      {
        p: `Sets how 'thick' the text appears, i.e. how 'bold' it is.`,
      },
      {
        code: {
          language: `css`,
          code: `/* Keyword values */
font-weight: normal;
font-weight: bold;

/* Keyword values relative to the parent */
font-weight: lighter;
font-weight: bolder;

/* Numeric keyword values */
font-weight: 100;
font-weight: 200;
font-weight: 300;
font-weight: 400;// normal
font-weight: 500;
font-weight: 600;
font-weight: 700;// bold
font-weight: 800;
font-weight: 900;`,
        },
      },
    ],
    [
      { h3: "Font Size" },
      {
        p: `Sets the size of the font.`,
      },
      {
        code: {
          language: `css`,
          code: `font-size: 16px;
font-size: 1 rem;`,
        },
      },
    ],
    [
      { h3: "Line Height" },
      {
        p: `Sets the height of the line box. Used to set the vertical distance between text.`,
      },
      {
        code: {
          language: `css`,
          code: `line-height: 32px;`,
        },
      },
    ],
    [{ h2: "Custom Fonts" }],
    [
      { h3: "Loading Custom Fonts" },
      {
        p: `First make sure the font is loaded in your HTML.`,
      },
      {
        code: {
          language: `html`,
          code: `<link rel="preload" href="myFont.woff2" as="font" type="font/woff2" crossorigin="anonymous">`,
        },
      },
      {
        p: `Then load in and define it in the CSS.`,
      },
      {
        code: {
          language: `css`,
          code: `@font-face {
    font-family: 'myFontName';
    src: url('myfont.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
}`,
        },
      },
    ],
    [
      { h3: "More Efficient Loading" },
      {
        p: `Fonts include lots of extra characters that you're likely not displaying. If you're not interested in internationalization, only include the characters you actually need!
          Note: will need to use a font editing tool to remove the fonts. Example in the link below!`,
      },
      {
        link: `https://css-tricks.com/three-techniques-performant-custom-font-usage/`,
      },
      {
        code: {
          language: `css`,
          code: `unicode-range: U+0020-007F; /* bare minimum english */
unicode-range: U+00A0-00FF, U+0100-017F; /* additional glyphs */`,
        },
      },
    ],
    [
      { h3: "Swapping After Loading" },
      {
        p: `Can change the swapping behaviour if font takes a long time to load.`,
      },
      {
        code: {
          language: `css`,
          code: `font-display: block; /* hides text until font loaded */
font-display: swap; /* uses fallback style until loaded, then swaps */
font-display: fallback; /* hides text for 100ms, then uses fallback, if before 3s and font is loaded will swap to new font but not after! */`,
        },
      },
    ],
  ],
}
