export const pageData = {
  pageTitle: "Performance",
  pageInfo: `React offers several tools to optimize performance in your react apps, like memoization and lazy or suspenseful loading.
  NOTE: These should be used sparingly as overusing them can cause performance issues. Use them when you notice that a specific component
  is slowing down your app.`,
  cheats: [
    [
      { h2: "useMemo" },
      {
        p: `React hook for memoizing a value. useMemo saves the return value of the last evaluation of the passed function, and will 
          only call the function again when an item in the dependency array changes. This helps reduce the amount of computations required.`,
      },
      {
        code: {
          language: "javascript",
          code: `import {useMemo} from 'react';
            
export default function App() {
    const [num, setNum] = useState(20);
    const fibValue = useMemo(() => {
        return fib(num);
    }, num);

    return (
        <>
            <input type="number" value={num} onChange={(e) => setNum(parseInt(e.target.value))} />
            <div>{num}th level of fib is {fibValue}</div>
        </>
    );
};`,
        },
      },
      { link: `https://reactjs.org/docs/hooks-reference.html#usememo` },
    ],
    [
      { h2: "useCallback" },
      {
        p: `Same as useMemo but instead of for values, it is used for to memoize function. Can be useful for when a callback is passed
          into a dependency array and is required to not change on every render.`,
      },
      {
        code: {
          language: "javascript",
          code: `const callback = useCallback(() => console.log(x, y), [x, y]);
// EQUIVALENT TO
const callback = useMemo(() => {
    return () => {
        console.log(x, y);
    };
}, [x, y]);`,
        },
      },
      { link: `https://reactjs.org/docs/hooks-reference.html#usecallback` },
    ],
    [
      { h2: "React.memo" },
      {
        p: `Used when you want to prevent a component from re-rendering on every cycle when the props haven't changed.`,
      },
      {
        code: {
          language: "javascript",
          code: `import { memo } from 'react';

export default memo(function (props) {
    return <button {...props} />;
};`,
        },
      },
      { link: `https://reactjs.org/docs/react-api.html#reactmemo` },
    ],
    [
      { h2: "React.lazy" },
      {
        p: `Use this to dynamically import a component only when it needs to be rendered. Good for when components are included that
        do not need to be loaded for the initial render. NOTE: you will need to add a fallback to be shown while that component is 
        importing/loading by using React.Suspense.`,
      },
      {
        code: {
          language: "javascript",
          code: `import { lazy, useState } from 'react';
const MyComponent = lazy(() => import('./MyComponent.js));

export default function App() {
    const [isShown, setIsShown] = useState(false);

    return (
        <>
            {isShown ? <MyComponent /> : null }
        </>
    );
};`,
        },
      },
      { link: `https://reactjs.org/docs/react-api.html#reactlazy` },
    ],
    [
      { h2: "React.Suspense" },
      {
        p: `Used to specify a fallback component for when a child component is preparing to render.`,
      },
      {
        code: {
          language: "javascript",
          code: `import { Suspense } from 'react';

export default function App() {
    return (
        <Suspense fallback={<LoadingIndicator />}>
            <LazyComponent />
        </Suspense>
    );
};`,
        },
      },
      { link: `https://reactjs.org/docs/react-api.html#reactsuspense` },
    ],
  ],
}
