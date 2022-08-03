export const pageData = {
  pageTitle: "Inheritance",
  pageInfo: `An importance concept where certain properties will take the value of the parent's or grandparent's value.`,
  cheats: [
    [
      { h2: "Inheritance Values" },
      {
        p: `Only some properties are inherited by default as it does not make sense to inherit something like a border for example.
          If encountering issues, try looking at developer tools and see if the user agent stylesheet is overriding something.`,
      },
      {
        definitionList: [
          {
            title: "initial",
            definition: `set value to value defined in CSS specification, whcih may differ from browser default.`,
          },
          {
            title: "inherit",
            definition: `inherit from parent, even if property isn't normally inherited.`,
          },
          {
            title: "unset",
            definition: `changes value to 'inherit' if it is normally an inherited property, or 'initial' if non-inherited. Good for resetting browser defaults.`,
          },
          {
            title: "revert",
            definition: `uses the value from the next stylesheet in the cascase. Basically takes away the developer's declaration but keeps the browser/client stylesheets.`,
          },
        ],
      },
      { p: `List of inherited properties below:` },
      { link: `https://www.w3.org/TR/CSS22/propidx.html` },
    ],
  ],
}
