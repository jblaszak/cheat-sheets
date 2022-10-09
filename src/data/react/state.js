export const pageData = {
  pageTitle: "State in React",
  pageInfo: `State is handled for each instance of a component. It is important to track state in a special way so that React knows when
    it needs to re-render.`,
  cheats: [
    [
      { h2: "Creating/Storing State" },
      {
        p: `useState gets destructured into two parts, a getter and a setter. It is important to always use the setter to alter the value of
          the state as it is what tells React that the DOM must re-render.`,
      },
      {
        code: {
          language: `javascript`,
          code: `import { useState } from 'react';

export default function MyComponent() {
    const [count, setCount] = useState(0);

    return (
        <>
            <button onClick={() => setCount(count + 1)}>Increment!</button>
            <p>Count: {count}</p>
        </>
    );
}`,
        },
      },
    ],
  ],
}
