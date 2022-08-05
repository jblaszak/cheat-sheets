export const pageData = {
  pageTitle: "CSS Units, Colors & Gradients",
  pageInfo: `CSS Units are used to describe the sizing of elements relative to certain properties. Colors and gradients can be represented in a number of ways.`,
  cheats: [
    [{ h2: "Units" }],
    [
      { h3: "Unit Definitions" },
      {
        definitionList: [
          { title: `px`, definition: `pixels` },
          {
            title: `em`,
            definition: `relative to font size of current container, parent's container if using to set font size`,
          },
          { title: `rem`, definition: `relative to root element font size` },
          { title: `%`, definition: `1% of the parent element` },
          { title: `vw`, definition: `1% of the viewport width` },
          { title: `vh`, definition: `1% of the viewport height` },
          { title: `ch`, definition: `width of the '0' character` },
        ],
      },
    ],
    [
      { h3: `When to Use` },
      {
        p: `Users may change their default font-size to better view content for accessibility reasons. This will change the
            way things fit into your elements.  To provide a more consistent viewing experience, it is recommended to use 
            rem units for margin, padding, and font sizes. Borders and shadows should use px for smaller
            values but rem/em may work for larger values but scale poorly. For paragraphs, 50-70 character provides a good
            legibility and can use the ch sizing. Other widths and heights can use %, vw, vh or rem.`,
      },
    ],
    [
      { h2: "Colors" },
      {
        p: `Colors can contain both a color value and an optional transparency value known as the alpha channel. If used, the alpha channel is the fourth piece if information defining the color.`,
      },
    ],
    [
      { h3: `Keyword Values` },
      {
        p: `Takes its value from the current value of the 'color' property set on that element. Here, currentcolor will resolve to blue.`,
      },
      {
        code: {
          language: "CSS",
          code: `color: blue; 
border: 1px dashed currentcolor;`,
        },
      },
    ],
    [
      { h3: `Named Color Values` },
      { p: `Predefined colors based on name.` },
      {
        code: {
          language: "CSS",
          code: `color: blue; 
color: red;
color: orange;
color: tan;
color: rebeccapurple;`,
        },
      },
      { link: `https://www.w3.org/wiki/CSS/Properties/color/keywords` },
    ],
    [
      { h3: `Hexadecimal Color Values` },
      {
        p: `Uses hexadecimal representation of each RGB color value, so 0 is 00 and 255 is FF.`,
      },
      {
        code: {
          language: "CSS",
          code: `color: #090;
color: #009900;
color: #090a;
color: #009900aa;`,
        },
      },
    ],
    [
      { h3: `RGB Color Values` },
      {
        p: `Uses values between 0 and 255 to describe the Red, Green and Blue channels. 0 to 1 or 0% to 100% for alpha channel.`,
      },
      {
        code: {
          language: "CSS",
          code: `color: rgb(34, 12, 64, 0.6);
color: rgba(34, 12, 64, 0.6);
color: rgb(34 12 64 / 0.6);
color: rgba(34 12 64 / 0.3);
color: rgb(34.0 12 64 / 60%);
color: rgba(34.6 12 64 / 30%);`,
        },
      },
    ],
    [
      { h3: `Hexadecimal Color Values` },
      {
        p: `Uses hexadecimal representation of each RGB color value, so 0 is 00 and 255 is FF.`,
      },
      {
        code: {
          language: "CSS",
          code: `color: #090;
color: #009900;
color: #090a;
color: #009900aa;`,
        },
      },
    ],
    [
      { h3: `HSL Color Values` },
      {
        p: `Uses Hue, Saturation and Lightness for each color value. Hue is the degree on the color wheel, 0 to 360.
             Saturation and lightness are 0 to 100%.`,
      },
      {
        code: {
          language: "CSS",
          code: `color: hsl(30, 100%, 50%, 0.6);
color: hsla(30, 100%, 50%, 0.6);
color: hsl(30 100% 50% / 0.6);
color: hsla(30 100% 50% / 0.6);
color: hsl(30.0 100% 50% / 60%);
color: hsla(30.2 100% 50% / 60%);`,
        },
      },
    ],
    [
      { h2: `Gradients` },
      {
        p: `Gradients are used to create smooth transitions between two or more colors.`,
      },
      { link: `https://cssgradient.io/` },
    ],
    [
      { h3: `Linear Gradients` },
      {
        p: `Creates a gradual transition between colors from top to bottom if no angle set (default angle 180 degrees). Can change the angle of the gradient and number/position of the colors.
      Can also repeat gradient after a given amount.`,
      },
      {
        code: {
          language: "CSS",
          code: `background: linear-gradient(angle, color start-percentage, color start-percentage, color start-percentage);
background: linear-gradient(255deg, rgba(0,170,255,1) 0%, rgba(0,186,255,1) 40%, rgba(0,211,255,1) 100%);
background: repeating-linear-gradient(red, green 50x);`,
        },
      },
      {
        link: `https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient`,
      },
    ],
    ,
    [
      { h3: `Radial Gradients` },
      {
        p: `Creates a gradual transition between colors from the central point. Can declare size and position of circle/ellipse.
      Like linear gradients, can also be repeating`,
      },
      {
        code: {
          language: "CSS",
          code: `background: radial-gradient(farthest-corner at 40px 40px, #f35 0%, #43e 100%);
background: radial-gradient(circle at 40px 40px, #3f87a6, #ebf8e1, #f69d3c);
background: radial-gradient(circle 40px, #3f87a6, #ebf8e1, #f69d3c);
background: radial-gradient(ellipse at top, #e66465, transparent),
background: radial-gradient(circle at bottom, #4d9f0c, transparent);
background: repeating-radial-gradient(circle at 40px 40px, #3f87a6, #ebf8e1, #f69d3c 50px);`,
        },
      },
      {
        link: `https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/radial-gradient`,
      },
    ],
  ],
}
