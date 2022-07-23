export const pageData = {
  pageTitle: "Website Theory",
  pageInfo: `A collection of terms and concepts involving websites.`,
  cheats: [
    {
      title: "Document Object Model (DOM)",
      items: [
        {
          data: `The document object model is a programming API for HTML and XML documents.  It defines the logical structure (a tree data structure) of the elements on the page and
             the way the document is accessed and manipulated.`,
        },
        {
          link: `https://www.w3.org/TR/WD-DOM/introduction.html#:~:text=The%20Document%20Object%20Model%20(DOM,document%20is%20accessed%20and%20manipulated.`,
        },
      ],
    },
    {
      title: "Accessibility",
      items: [
        {
          data: `Means using semantic HTML and making sure the site can be used by assitive technologies like screen readers.`,
        },
      ],
    },
    {
      title: "Accessibility Tree",
      items: [
        {
          data: `A tree that is created from the DOM tree and is interacted with by assitive technologies like screen readers.
          Each node contains information such as name, description, role, and state.  You can view the accessibility tree inside
          of Chrome Developer tools!`,
        },
        {
          link: `https://developer.mozilla.org/en-US/docs/Glossary/Accessibility_tree`,
        },
      ],
    },
    {
      title: "WAI-ARIA",
      items: [
        {
          data: `Stands for "Web Accessibility Initiative - Accessible Rich Internet Applications" and describes HTML attributes
          that add extra information to the accessibility tree.  Contains mostly three types of attributes - roles (to describe 
          what an element does), properties (to provide extra meaning such as labels) and states (to provide the current state such 
          as disabled). Check HTML accessibility section for more detailed info.`,
        },
        {
          link: `https://developer.mozilla.org/en-US/docs/Learn/Accessibility/WAI-ARIA_basics`,
        },
      ],
    },
  ],
}
