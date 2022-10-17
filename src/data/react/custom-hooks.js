export const pageData = {
  pageTitle: "Custom Hooks in React",
  pageInfo: ``,
  cheats: [
    [
      { h2: "Custom Hooks" },
      {
        p: `Useful for when you have actions that you need to repeat more often or long functions inside useEffect so that the code
          can be organized more cleanly. Custom hooks should begin with 'use'.`,
      },
      {
        code: {
          language: "javascript",
          code: `import { useState, useRef, useEffect } from 'react';
              
export default function App() {
    const [count, setCount] = useState(10);
    const prevCount = usePrevious(count);

    return (
        <>
            <button onClick={() => setCount(count - 1)}>Increment</button>
            <p>Count: {count}</p>
            <p>Previous Count: {prevCount}</p>
        </>
    );
};
  
function usePrevious(value) {
    const prevRef = useRef();
    useEffect(() => {
        prevRef.current = value;
    }, [value]);
    return prevRef.current;
}`,
        },
      },
      { link: `https://reactjs.org/docs/hooks-custom.html` },
    ],
  ],
}
