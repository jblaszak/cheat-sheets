export const pageData = {
  pageTitle: "CSS Animations",
  pageInfo: `CSS Animations and Transitions can be used to create awesome, interactive, and eye-catching designs!`,
  cheats: [
    [
      { h2: "Transitions" },
      {
        p: `Used to smoothly transition between values when a value is changed. Note: not all properties can be transitioned!`,
      },
      {
        link: `https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions`,
      },
    ],
    [
      { h3: "Transition Property" },
      {
        p: `Sets the CSS property to transition.`,
      },
      {
        code: {
          language: `css`,
          code: `transition-property: width;`,
        },
      },
    ],
    [
      { h3: "Transition Duration" },
      {
        p: `Sets how long the transition should take.`,
      },
      {
        code: {
          language: `css`,
          code: `transition-duration: 1s;`,
        },
      },
    ],
    [
      { h3: "Transition Timing Function" },
      {
        p: `Sets how quickly the transition progresses from beginning to end, i.e. the acceleration curve. Can be used to create all kinds of awesome effects like bouncing in, etc.`,
      },
      {
        code: {
          language: `css`,
          code: `transition-timing-function: ease;
transition-timing-function: ease-in;
transition-timing-function: ease-out;
transition-timing-function: ease-in-out;
transition-timing-function: linear;
transition-timing-function: step-start;
transition-timing-function: step-end;
transition-timing-function: steps(6, end);
transition-timing-function: cubic-bezier(.29, 1.01, 1, -0.68);
/* Multiple timing functions */
transition-timing-function: ease, step-start, cubic-bezier(0.1, 0.7, 1.0, 0.1);`,
        },
      },
      {
        link: `https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function`,
      },
      { link: `https://cubic-bezier.com/` },
    ],
    [
      { h3: "Transition Delay" },
      {
        p: `Sets a time to wait for transition to start.`,
      },
      {
        code: {
          language: `css`,
          code: `transition-delay: 1s;

/* Multiple values */
transition-delay: 1s, 250ms;
transition-property: margin-right, color;`,
        },
      },
    ],
    [
      { h3: "Transition Shorthand" },
      {
        p: `Useful for combing lots of properties in one!`,
      },
      {
        code: {
          language: `css`,
          code: `/* property name | duration */
            transition: margin-right 4s;
            
/* property name | duration | delay */
transition: margin-right 4s 1s;

/* property name | duration | easing function */
transition: margin-right 4s ease-in-out;

/* property name | duration | easing function | delay */
transition: margin-right 4s ease-in-out 1s;

/* Apply to 2 properties */
transition: margin-right 4s, color 1s;

/* Apply to all changed properties */
transition: all 0.5s ease-out;`,
        },
      },
    ],
    [
      { h2: "Animations" },
      {
        p: `Used when more complicated animations are needed! Done by setting values at certain keyframes `,
      },
      {
        link: `https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions`,
      },
    ],
  ],
}
