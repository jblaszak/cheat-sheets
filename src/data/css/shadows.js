export const pageData = {
  pageTitle: "CSS Shadows",
  pageInfo: `Shadows can be a great way to add depth to an image and really make elements pop. Beware of performance issues if over using though!`,
  cheats: [
    [
      {
        link: `https://css-tricks.com/getting-deep-into-shadows/`,
      },
      { h2: "Box Shadow" },
      {
        p: `Basic shadow, best performance. Can use mutliple for better effects. For multiple shadows, the first one in the list is on top.
        Shadows with a large blur radius need to look at many more pixels when blending colors so they are slower. Box-shadow follows the border.`,
      },
      {
        code: {
          language: `css`,
          code: `/* offset-x | offset-y | color */
box-shadow: 60px -16px teal;

/* offset-x | offset-y | blur-radius | color */
box-shadow: 10px 5px 5px black;

/* offset-x | offset-y | blur-radius | spread-radius | color */
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

/* inset | offset-x | offset-y | color */
box-shadow: inset 5em 1em gold;
        
/* mutliple shadows */
box-shadow: 0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 100px 80px rgba(0, 0, 0, 0.12);`,
        },
      },
    ],
    [
      { h2: "Text Shadow" },
      {
        p: `Used specifically for text, can use this 'hack' to make an inner text shadow!`,
      },
      {
        code: {
          language: `css`,
          code: `.text-inner-shadow {
    background-color: black;
    color: transparent;
    text-shadow: 0px 2px 3px lightgrey;
    -webkit-background-clip: text;
    background-clip: text;
}`,
        },
      },
      {
        link: `https://codepen.io/robjoeol/pen/LYRXdjG`,
      },
    ],
    [
      { h2: "Filter: Drop Shadow" },
      {
        p: `Drop shadow respects transparency and follows the shape of the content, including pseudo elements!`,
      },
      {
        code: {
          language: `html`,
          code: `<div class="group">
    <div class="rounded-rectangle"></div>
    <img src="https://cdn.imgpaste.net/2021/01/12/U0oK2.png"/>
</div>`,
        },
      },
      {
        code: {
          language: `css`,
          code: `.group {
    filter: drop-shadow(20px 10px 1px rgba(0, 0, 0, 0.432));
}`,
        },
      },
      {
        p: `NOTE: Multiple drop shadows are separated with a space, not a comma.  Also the number of required renders increases by 2^n-1, where
      n is the number of chained drop shadows.`,
      },
      {
        code: {
          language: `css`,
          code: `.one-render {
    filter: drop-shadow(20px 20px 0 grey);
}

.three-renders {
    filter: drop-shadow(20px 20px 0 grey) drop-shadow(40px 0 0 yellow);
}

.seven-renders {
    filter: drop-shadow(20px 20px 0 grey) drop-shadow(40px 0 0 yellow) drop-shadow(80px 0 0 red);
}`,
        },
      },
    ],
    [
      { h2: `Shadow Examples` },
      {
        link: `https://codepen.io/robjoeol/pen/qBaMQEN`,
      },
      {
        link: `https://codepen.io/boltaway/pen/DKXpZq`,
      },
      {
        link: `https://codepen.io/myacode/pen/PoqQQNM`,
      },
    ],
    [
      { h2: `Animating Shadows` },
      {
        p: `Animating drop-shadow is more performant than animating box-shadow. Best performance is obtained through making a pseudo-element 
      with a shadow and animating the opacity.`,
      },
      { link: `https://codepen.io/robjoeol/pen/JjRwmJZ` },
    ],
  ],
}
