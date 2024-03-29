export const pageData = {
  pageTitle: "React Basics",
  pageInfo: `React is component based framework for creating interfaces with a declarative (describe
        what the UI should look like without all the implementation details) approach. Data flow is
        uni-directional.`,
  cheats: [
    [
      { h2: "Create New App" },
      {
        code: {
          language: `bash`,
          code: `npx create-react-app myAppName`,
        },
      },
    ],
    [
      { h2: "JSX - Javascript XML" },
      {
        p: "A Javascript syntax extension for inlining HTML",
      },
      {
        code: {
          language: `javascript`,
          code: `const element = (
    <p id="my-paragraph">
        Hey <em>there!</em>
    </p>
);`,
        },
      },
      { p: `Gets turned into...` },
      {
        code: {
          language: `javascript`,
          code: `// React.createElement(type, [props], ...children)
var element = React.createElement(
    'p',
    { id = 'my-paragraph' },
    'Hey ',
    React.createElement('em', null, 'there!')
);`,
        },
      },
      {
        p: `NOTE: JSX tags that are self closing must use the following syntax:`,
      },
      {
        code: {
          language: `javascript`,
          code: `<br />`,
        },
      },
    ],
    [
      { h2: "React DOM" },
      { p: `Package for inserting React elements into the DOM` },
      {
        code: {
          language: `javascript`,
          code: `ReactDOM.render(element, DOMContainer);`,
        },
      },
    ],
    [
      { h2: "Function Components" },
      {
        p: `Functions that return a react element (JSX). Uses Pascal Casing for function name.`,
      },
      {
        code: {
          language: `javascript`,
          code: `function MyComponent() {
    return (
        <p id="my-paragraph">
            Hey <em>there!</em>
        </p>
    );
}`,
        },
      },
    ],
    [
      { h2: "Multiple Elements" },
      {
        p: `When returning mutliple elements, you need to wrap them in a fragment.`,
      },
      {
        code: {
          language: `javascript`,
          code: `return (
    <React.Fragment>
        <h1>Title</h1>
        <p>Stuff</p>
    </React.Fragment>
);

// OR

return (
    <>
        <h1>Title</h1>
        <p>Stuff</p>
    </>
);`,
        },
      },
    ],
    [
      { h2: "Variables" },
      {
        p: `Can use variable within curly braces to include information from variables. If used like below
        they are automatically escaped (made safe from potential malicious inputs).`,
      },
      {
        code: {
          language: `javascript`,
          code: `export default function myElement() {
    const myValue = 'stuff';
    return <p>Saying some {stuff}</p>;
}`,
        },
      },
    ],
    [
      { h2: "Conditional Rendering" },
      {
        p: `Can use variable within curly braces to include information from variables. If used like below
        they are automatically escaped (made safe from potential malicious inputs).`,
      },
      {
        code: {
          language: `javascript`,
          code: `export default function myElement() {
    const error = true;

    return error ? <p>Error!</p> : <p>Success!</p>;

    // OR
    return (
        <>
            {error ? <p>Error!</p> : null}
            {!error? <p>Success!</p> : null}
        </>
    );

    // OR
    return (
        <>
            {error && <p>Error!</p>}
            {!error && <p>Success!</p>}
        </>
    );

    // OR
    return (
        <>
            {error && <p>Error!</p>}
            {error || <p>Success!</p>}
        </>
    );

    // OR
    return <p>{error ? 'Error!' : 'Success'</p>};
}`,
        },
      },
    ],
    [
      { h2: "Attributes" },
      {
        p: `Attributes can be used the same way JSX as in HTML, with a few caveats. Some attributes had to be renamed
        because they are reserved attribute names in HTML ('htmlFor' instead of 'for', 'className' instead of 'class') 
        and attributes will use Camel Casing.`,
      },
      {
        code: {
          language: `javascript`,
          code: `export default function myElement() {
    const type = 'text';
    const props = {
        id: 'input',
        type: 'text',
        maxLength: '3',
    };

    return (
        <>
            <label htmlFor="input" className="label">Input: </label>
            <input id="input" type={text} maxLength="3"/>
            <input {...props} placeHolder="myUser" />
        </>
    );
}`,
        },
      },
    ],
    [
      { h2: "Inline Styles" },
      {
        code: {
          language: `javascript`,
          code: `export default function myElement() {
    return <p style={{
        color: 'red',
        textAlign: 'center',
        fontSize: '100px',
    }}>Words and stuff!</p>;
}`,
        },
      },
    ],
    [
      { h2: "Props" },
      {
        p: "Props are used to assign properties to components and transfer data from the parent component to the child component.",
      },
    ],
    [
      { h3: `Assigning/Reading Props` },
      {
        code: {
          language: `javascript`,
          code: `export default function myApp() {
    return (
        <>
        <MyComponent name="Foo" />
        <MyComponent name="Bar" />
        <MyComponent />
        </>
    )
}

function MyComponent(props) {
    return <p>{props.name}</p>;
},

// OR, using destructuring
function MyComponent({name = 'Bob'}) {
    return <p>{name}</p>;
}

// OR (uncommonly)
MyComponent.defaultProps = {
    name: 'Bob',
};`,
        },
      },
    ],
    [
      { h3: `Passing Children to Props` },
      {
        p: `Anything between the open/closing tags of the component will get passed to the children props of the component.`,
      },
      {
        code: {
          language: `javascript`,
          code: `export default function App() {
    return (
        <MyComponent name="Foo">
            <p>Stuff in here!</p>
            <p>More stuff here!</p>
        </MyComponent>
    );
}

function MyComponent({name, children}) {
    return (
        <div>
            <p>{name}</p>
            {children}
        <div>
    );
}`,
        },
      },
    ],
  ],
}
