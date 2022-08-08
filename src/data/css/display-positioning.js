export const pageData = {
  pageTitle: "Display, Position, Float Properties",
  pageInfo: `The display, position and float properties can be changed to describe how an element relates to the document and elements around it.`,
  cheats: [
    [
      { h2: "Display" },
      {
        p: `Depending on the tag, the display property can change how an element relates to its surrounding elements or how the 
          elements within it are handled.`,
      },
    ],
    [
      { h3: "Block" },
      {
        p: `Block elements start on new lines and span the entire width of their parent by default. Mostly used for container style elements.`,
      },
      {
        code: {
          language: `css`,
          code: `display: block;`,
        },
      },
    ],
    [
      { h3: "Inline" },
      {
        p: `Inline elements start on the same line, immediately after the element before them. They span the width of their content and the width and height properties do not work on them.
        Generally used for small pieces of content that are meant to flow together.`,
      },
      {
        code: {
          language: `css`,
          code: `display: inline;`,
        },
      },
    ],
    [
      { h3: "Inline-Block" },
      {
        p: `Inline-block elements are the same as inline, but width and height properties work on them. Useful for images.`,
      },
      {
        code: {
          language: `css`,
          code: `display: inline-block;`,
        },
      },
    ],
    [
      { h3: "Flexbox" },
      {
        p: `Used to make the children of the element into flex items (see flexbox section).`,
      },
      {
        code: {
          language: `css`,
          code: `display: flex;`,
        },
      },
    ],
    [
      { h3: "Grid" },
      {
        p: `Used to make the children of the element into grid items (see grid section).`,
      },
      {
        code: {
          language: `css`,
          code: `display: grid;`,
        },
      },
    ],
    [
      { h2: "Position" },
      {
        p: `The position property determines how the element should be positioned in the document.`,
      },
    ],
    [
      { h3: "Static" },
      {
        p: `This is the default value for position where the element will use the normal flow of the document.`,
      },
      {
        code: {
          language: `css`,
          code: `display: static;`,
        },
      },
    ],
    [
      { h3: "Absolute" },
      {
        p: `The element is removed from the normal flow of the document. The element is positioned (using top, left, right and bottom propreties)
        relative to the document by default.  If there is an element above it in the DOM tree, that has a value other than static for its position then 
        the element will be positioned relative to the nearest non-static ancestor.`,
      },
      {
        code: {
          language: `css`,
          code: `display: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;`,
        },
      },
    ],
    [
      { h3: "Fixed" },
      {
        p: `The element is removed from the normal flow of the document and is positioned relative to the viewport using top, left, right, and bottom properties. Tempting to use for navigation bar but since
        it is taken out of the normal flow of the document you will end up covering stuff below it.`,
      },
      {
        code: {
          language: `css`,
          code: `display: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;`,
        },
      },
    ],
    [
      { h3: "Relative" },
      {
        p: `The element stays where it normally would but can now use top, left, right, and bottom properties.`,
      },
      {
        code: {
          language: `css`,
          code: `display: relative;
top: 0;
left: 0;
right: 0;
bottom: 0;`,
        },
      },
    ],
    [
      { h3: "Sticky" },
      {
        p: `Acts like a relatively positioned element, but once it starts to go off screen due to scrolling it stays on the screen. Very useful for navigation bar/menu.`,
      },
      {
        code: {
          language: `css`,
          code: `display: sticky;
top: 0;
left: 0;
right: 0;
bottom: 0;`,
        },
      },
    ],
    [
      { h2: "Float" },
      {
        p: `Used to take an element out of the normal flow of the document and then shift it until it touches the edge of its
        containing box or another floated element. Useful to wrap images in text.`,
      },
      {
        code: {
          language: `css`,
          code: `float: left;
float: right;
float: both;`,
        },
      },
      {
        p: `Ignoring or clearing a float from an element above on a specific element can be done with the clear property.`,
      },
      {
        code: {
          language: `css`,
          code: `clear: left;`,
        },
      },
    ],
    [
      { h2: "Stacking Context" },
      {
        p: `The stacking context is a 3D conceptualization of elements along an imaginary z-axis relative to the user, who is
        assumed to be facing the viewport (webpage). New stacking contexts are created by certain properties being set to certain values
        check the docs for a full list or properties.  Also a good visual aid to see what is meant. Within a stacking context, elements are arranged with items having a higher z-index on top. Stacking
        contexts can be contained within other stacking contexts and form a hierarchy.`,
      },
      {
        code: {
          language: `css`,
          code: `position: fixed;
position: sticky;

h1 {
  position: absolute;
  position: relative;
  z-index: 5;
}`,
        },
      },
      {
        link: `https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context`,
      },
    ],
    [
      { h2: "Transforms" },
      {
        p: `Modifies the coordinate space to change the shape and position of content without disrupting the document flow.`,
      },
      {
        link: `https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms`,
      },
    ],
    [
      { h3: "Transform Origin" },
      {
        p: `Sets the position of the origin of the coordinate space.  Default is center of element.`,
      },
      {
        code: {
          language: `css`,
          code: `transform-origin: bottom;
transform-origin: center;

/* x-offset-keyword | y-offset | z-offset */
transform-origin: left 5px -3px;`,
        },
      },
    ],
    [
      { h3: "Transform" },
      {
        p: `Defines the transformation to apply: rotate, scale, skew, or translate. NOTE: For multiple transforms, since these transforms are
        matrix transforms, when multiplied left to right, they are effectively applied in order from right to left!`,
      },
      {
        code: {
          language: `css`,
          code: `transform: perspective(17px);
transform: rotate(0.5turn);
transform: rotate3d(1, 2.0, 3.0, 10deg);
transform: rotateX(10deg);
transform: rotateY(10deg);
transform: rotateZ(10deg);
transform: translate(12px, 50%);
transform: translate3d(12px, 50%, 3em);
transform: translateX(2em);
transform: translateY(3in);
transform: translateZ(2px);
transform: scale(2, 0.5);
transform: scale3d(2.5, 1.2, 0.3);
transform: scaleX(2);
transform: scaleY(0.5);
transform: scaleZ(0.3);
transform: skew(30deg, 20deg);
transform: skewX(30deg);
transform: skewY(1.07rad);

/* Multiple function values */
transform: translateX(10px) rotate(10deg) translateY(5px);
transform: perspective(500px) translate(10px, 0, 20px) rotateY(3deg);`,
        },
      },
    ],
    [
      { h3: "Perspective" },
      {
        p: `When defining things in 3D, you need to add perspective. The perspective property determines the distance between
        the z=0 plane and the user to give a 3D element some perspective.`,
      },
      {
        code: {
          language: `css`,
          code: `perspective: none;
perspective: 80px;`,
        },
      },
    ],
  ],
}
