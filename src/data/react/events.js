export const pageData = {
  pageTitle: "Events in React",
  pageInfo: `Events in React should be handled differently because React takes care of the DOM manipulation for us.`,
  cheats: [
    [
      { h2: "Handling Events" },
      {
        p: `Note, it's slighlty more performant to move the function outside of the component so it doesn't have to be re-created every time the
      component is rendered.`,
      },
      {
        code: {
          language: `javascript`,
          code: `export default function MyComponent() {
    const handleClick = () => {
        console.log("clicked");
    };

    return <button onClick={handleClick}>I am button! Click me!</button>;
}`,
        },
      },
      {
        p: `React uses Synthetic Events under the hood rather than the native browser events to ensure consistency accross browsers.`,
      },
    ],
    [
      { h2: "Events on Components" },
      {
        p: `Events can't simply be called on a component as that specific event has to exist somewhere within an element within that component.
      Can use '{...props}' to simplify adding of multiple props, including the children props.`,
      },
      {
        code: {
          language: `javascript`,
          code: `export default function MyComponent() {
    return <MyComponent onClick={handleClick}>I am button! Click me!</MyComponent>;
}

function handleClick() {
    console.log("clicked");
};

function MyComponent(props) {
    return <button onClick={props.onClick}>{props.children}</button>;
    // OR
    return <button {...props} />;
}`,
        },
      },
    ],
  ],
}
