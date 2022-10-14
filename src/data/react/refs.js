export const pageData = {
  pageTitle: "Refs in React",
  pageInfo: ``,
  cheats: [
    [
      { h2: "Refs and useRef" },
      {
        p: `A ref is value that is for a react component that will persist between renders of that component, but will not cause a re-render
          when it is changed. It is similar to creating an object with a current property that changes. Refs can be created by using the useRef 
          hook and assigned to an element with the ref attribute.  Refs are most useful for, handling timers, managing focus, text selection, or 
          media playback, triggering imperative animations, or integrating with third party DOM libraries. Avoid refs for anything that can be done declaratively!`,
      },
      {
        code: {
          language: "javascript",
          code: `const [seconds, setSeconds] = useState(0);
const timerID = useRef(null);
// OR
const [timerID, setTimerID] = useState({
    current: null,
});

const startTimer = () => {
    timerID.current = setInterval(() => {
        setSeconds(currSeconds => currSeconds +1);
    }, 2000);
}

const stopTimer = () => {
    clearInterval(timerID.current);
};`,
        },
      },
      {
        code: {
          language: "javascript",
          code: `const divRef = useRef(null);
return <div ref={divRef}>This div has a ref!</div>;`,
        },
      },
      { link: `https://reactjs.org/docs/refs-and-the-dom.html` },
    ],
    [
      { h2: "Selecting DOM Nodes With Ref" },
      {
        p: `With vanilla javascript, one typically uses document.querySelector('someQuery') and other such things to select a
        DOM node.  In React, we use refs!`,
      },
      {
        code: {
          language: "javascript",
          code: `function App() {
    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
    }
    return (
        <>
            <input ref={inputRef} />
            <button onClick={focusInput}>Focus</button>
        </>
    );
}`,
        },
      },
    ],
    [
      { h2: "React.forwardRef" },
      {
        p: `NOTE: you may not use the ref attribute on function components because they don't have instances, use forwardRef and assign the
        ref to an attribute somewhere inside that component.`,
      },
      {
        code: {
          language: "javascript",
          code: `function App() {
    const ref = useRef(null);
    return <MyComponent ref={ref} >My component text</MyComponent>;
}

const MyComponent = forwardRef(function (props, ref) {
    return <div ref={ref} {...props} />;
});`,
        },
      },
      { link: `https://reactjs.org/docs/refs-and-the-dom.html` },
    ],
    [
      { h2: "Callback Refs" },
      {
        p: `Can create your own callback that will run on the initial mount.  Will also run on unmount but have be passed null.`,
      },
      {
        code: {
          language: "javascript",
          code: `function App() {
    return <MyComponent ref={handleRef} />;
}

function handleRef(domNode) {
    console.log(domNode);
}

const MyComponent = forwardRef(function (props, ref) {
    return <div ref={ref} {...props} />;
});`,
        },
      },
      { link: `https://reactjs.org/docs/refs-and-the-dom.html` },
    ],
  ],
}
