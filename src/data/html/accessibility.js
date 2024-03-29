export const pageData = {
  pageTitle: "Accessibility",
  pageInfo: `Means making sure the site can be used by assitive technologies like screen readers. This can be done by
    using descriptive content, labels and alt attributes. Use semantic HTML tags in appropriate spots and test
    keyboard controls. Use WAI-ARIA to add extra information to the accessibilty tree. Ensure browser compatability,
    good visibility via CSS, and internationalization support.`,
  cheats: [
    [
      {
        p: `Websites are considered places of public accommodations and are legally required to be accessible for people with disabilities.`,
      },
      {
        p: `8.2% have difficulty lifting or grasping. This could, for example impact their use of a mouse or keyboard.`,
      },
      {
        p: `3.3% have a vision impairment. These people might rely on a screen magnifier or a screen reader, or might have a form of color blindness.`,
      },
      {
        p: `3.1% have a hearing impairment. They might rely on transcripts and / or captions for audio and video media.`,
      },
    ],
    [
      { h2: "Browser Compatability" },
      {
        p: `Different browsers display certain tags differently and depending on the version may not support certain tags. Try to get
            as broad a coverage as you can by using appropriate tags and polyfills where necessary, note: most newer frameworks implement polyfills
            as part of their bundling.  When in doubt, test! Try to avoid using the latest language features.`,
      },
      { link: `https://caniuse.com/` },
    ],
    [
      { h2: "Mobile Users" },
      {
        p: `About 50% of all web traffic is mobile. Ensure your site displays as expected on various screen sizes. Clicks (screen touches) 
        are handled differntly in mobile. Make sure to test!`,
      },
      { link: `https://caniuse.com/` },
    ],
    [
      { h2: "Internationalization" },
      {
        p: `Does your site support different languages?  Different languages can be read right to left and top to bottom, have different
        spacing and alter your layouts (ex. Hebrew, Arabic, Japanese, Chinese).  Do your components display correctly with different languages?`,
      },
      { link: `https://www.i18next.com/` },
    ],
    [
      { h2: "Visibility" },
      {
        p: `Does your site use enough contrast? Are the fonts big enough to read? Is it clear that links or interactive elements are interactive? Could somebody that's color blind effectively navigate your site?`,
      },
      { link: `https://webaim.org/resources/contrastchecker/` },
      { link: `https://webaim.org/articles/contrast/` },
    ],
    [
      { h2: "Roles" },
      {
        p: `Describe what an element does.  Semantic tags automatically have their corresponding roles assigned to them, one of the benefits of using them.`,
      },
      { h3: "Landmark Roles" },
      {
        p: `Used for major content areas that are usually navigated to first. I.e. banners, navigation, main.`,
      },
      {
        code: {
          language: "html",
          code: `<div role="banner">
    <h1>My Accessible Banner</h1>
</div>`,
        },
      },
      { link: `https://www.w3.org/TR/wai-aria-1.1/#landmark_roles` },
      { h3: "Structural Roles" },
      {
        p: `Used for smaller pieces of information that help define structure. I.e. tooltips, lists, tables, images.`,
      },
      {
        code: {
          language: "html",
          code: `<section role="list">
  <div role="listitem">First item</div>
  <div role="listitem">Second item</div>
  <div role="listitem">Third item</div>
</section>`,
        },
      },
      {
        link: `https://www.w3.org/TR/wai-aria-1.1/#document_structure_roles`,
      },
      { h3: "Widget Roles" },
      {
        p: `Used for interactive elements. I.e. tabs, search boxes, buttons, form elements.`,
      },
      {
        code: {
          language: "html",
          code: `<div role="button">
  Click here!
</div>`,
        },
      },
      { link: `https://www.w3.org/TR/wai-aria-1.1/#widget_roles` },
      { h3: "Window Roles" },
      {
        p: `Used for sub-windows in the browser, like modals or alert popups.`,
      },
      {
        code: {
          language: "html",
          code: `<div role="dialog" aria-labelledby="title">
  <h1 id="title">This is a modal!</h1>
  <button>Go away modal!</button>
</div>`,
        },
      },
      { link: `https://www.w3.org/TR/wai-aria-1.1/#window_roles` },
      { h3: "Live Region Roles" },
      {
        p: `Used for dynamic content that updates periodically. Depending on the role set, the accessibility tools will
                            also periodically inform the user of changes to these regions.  I.e. timers, logs, alerts.  Aria-live attribute 
                            describes how often the user should be notified of changes to the live region.  Three settings: off (don't announce changes),
                            polite (announce when idle), assertive (announce ASAP).`,
      },
      {
        code: {
          language: "html",
          code: `<ul role="log" aria-live="polite">
  <li>First log message</li>
  <li>Second log message</li>
</ul>`,
        },
      },
      { link: `https://www.w3.org/TR/wai-aria-1.1/#live_region_roles` },
      { link: `https://www.w3.org/TR/wai-aria-1.1/#aria-live` },
    ],
    [
      { h2: "Properties" },
      { p: `Provide extra meaning for an accessible element.` },
      { p: `aria-label - when the label is not visible in the UI` },
      {
        code: {
          language: "html",
          code: `<img role="img" aria-label="An image!" src="image.png" />`,
        },
      },
      {
        p: `aria-labelledby - uses another element as the label (via id attribute)`,
      },
      {
        code: {
          language: "html",
          code: `<div role="dialog" aria-labelledby="title">
  <h1 id="title">Descriptive title!</h1>
  <button>Close</button>
</div>`,
        },
      },
      { p: `aria-description - for more detailed info than labels` },
      {
        code: {
          language: "html",
          code: `<img role="img" aria-description="A super cool drawing of a cat. This cat is my best friend!" src="cat.png" />`,
        },
      },
      {
        p: `aria-describedby - uses another element for detailed info (via id attribute) `,
      },
      {
        code: {
          language: "html",
          code: `<figure>
  <img role="img" aria-describedby="myCaption" src="cat.png" />
  <figcaption id="myCaption">A super cool drawing of a cat. This cat is my best friend!</figcaption>
</figure>`,
        },
      },
      { link: "https://www.w3.org/TR/wai-aria-1.1/#global_states" },
    ],
    [
      { h2: "States" },
      {
        p: `Similar to properties but used to describe attributes that are likely to change through the
        app's life-cycle, which may change frequently due to user interaction.  A couple examples are below, check
        the docs for an exhaustive list.`,
      },
      { p: `aria-checked - checkbox state` },
      { p: `aria-disabled - element is disabled` },
      { p: `aria-expanded - expanded or collapsed element (like spoilers)` },
      { p: `aria-hidden - for elements not visible to the page` },
      { p: `aria-pressed - for elements currently pressed, like buttons` },
      {
        p: `aria-selected - for elements currently selected, like links/buttons`,
      },
      { link: `https://www.w3.org/TR/wai-aria-1.1/#global_states` },
    ],
  ],
}
