export const pageData = {
  pageTitle: "State in React",
  pageInfo: `State is handled for each instance of a component. It is important to track state in a special way so that React knows when
    it needs to re-render.`,
  cheats: [
    [
      { h2: "Hooks" },
      {
        p: `Hooks are javascript functions that 'hook' into features in React like state and the overall component lifecycle. Hooks will always
        begin with 'use' and cannot be used within a conditional.  Must be used at the root level of a component.`,
      },
      {
        code: {
          language: `javascript`,
          code: `import { useState } from 'react';

export default function MyComponent() {
    const [count, setCount] = useState(0);

    // not allowed
    if (true) {
        const [other, setOther] = useState(0);
    }
}`,
        },
      },
    ],
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
    const [count2, setCount2] = useState(0);
    const [complex, setComplex] = useState(complexStateGenerator);

    return (
        <>
            <button onClick={() => setCount(count + 1)}>Increment!</button>
            <p>Count: {count}</p>
        </>
    );
}

function complexStateGenerator() {
    // do something complex
    return complexState;
}`,
        },
      },
    ],
    [
      { h2: "Using Previous State" },
      {
        p: `React will only update the state once the function calling the state has finished running. Can use function within
        the state setting function that updates the previous value if needing to alter state in a way that is dependent on that
        previous value.`,
      },
      {
        code: {
          language: `javascript`,
          code: `import { useState } from 'react';

export default function MyComponent() {
    const [count, setCount] = useState(0);

    // Only increases count by 1 because count variable only changed
    // after function calling it ends
    return (
        <>
            <button onClick={() => {
                setCount(count + 1);
                setCount(count + 1);
                setCount(count + 1);
            }}>
                Increment!
            </button>
            <p>Count: {count}</p>
        </>
    );

    // Increases count by 3
    return (
        <>
            <button onClick={() => {
                setCount(prevCount => prevCount + 1);
                setCount(prevCount => prevCount + 1);
                setCount(prevCount => prevCount + 1);
            }}>
                Increment!
            </button>
            <p>Count: {count}</p>
        </>
    );
}`,
        },
      },
    ],
    [
      { h2: "Setting State as Object or Array" },
      {
        p: `Since changing values in an array/object doesn't change the object itself, we have to pass a new object to
        setState.`,
      },
      {
        code: {
          language: `javascript`,
          code: `export default function MyComponent({startingCount = 0}) {
    const [count, setCount] = useState({num: startingCount});
    const [count2, setCount2] = useState([0,1,2,3]);

    setCount({...count, otherCount: 0});
    setCount2([...count2, 4, 5, 6]);

    return <p>{count} and {count2}</p>;
}`,
        },
      },
    ],
    [
      { h2: "Lifting State Up" },
      {
        p: `Lifting state is a term for when you move the state to the lowest common ancestor.  This means that multiple components can
        have access to the same value and setter functions.`,
      },
      {
        code: {
          language: `javascript`,
          code: `export default function App() {
    const [count, setCount] = useState(0);

    // NOTE: both of these will have the same value when count changes since that is what is passed to
    // the component!
    return (
        <>
            <MyComponent count={count} setCount={setCount} />
            <MyComponent count={count} setCount={setCount} />
        </>
    );
}
          
function MyComponent({count, setCount}) {
    return (
        <>
            <button onClick={setCount(count + 1)}>Increment!</button>
            <p>Count: {count}</p>
        </>
    );
}`,
        },
      },
    ],
    [
      { h2: "Controlled Component" },
      {
        p: `When using React state to control the state of an input instead of the native elements controlling themselves you have a
        controlled component. This is a common react pattern.`,
      },
      {
        code: {
          language: `javascript`,
          code: `export default function MyInput() {
    const [value, setValue] = useState('');

    return <input type='text' value={value} onChange={(event) => setValue(event.target.value)} />;
}`,
        },
      },
    ],
    [
      { h2: "Reducers" },
      {
        p: `If you have a complicated piece of state that needs to be changed in different ways, use a reducer. The useReducer hook
        is initialized with a callback to a reducer function and an initial state object and returns a state and a dispatch function. The dispatch function can
        used to pass values to the action portion of the reducer function that can be used to switch between various actions.`,
      },
      {
        code: {
          language: `javascript`,
          code: `import { useReducer } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return {count: state.count + action.num};
        case 'decrement':
            return {count: state.count - action.num};
        default:
            throw new Error('Unknown action type');
}

export default function MyInput() {
    const [state, dispatch] = useReducer(reducer, {
        count: 0,
    });

    return (
        <>
            <MyComponent 
                count={state.count} 
                setCount={() => dispatch({
                    type: 'increment',
                    num: 1,
                })}
            />
            <MyComponent 
                count={state.count} 
                setCount={() => dispatch({
                    type: 'increment',
                    num: 10,
                })}
            />
        </>
    );
}
          
function MyComponent({count, onClick}) {
    return (
        <>
            <button onClick={onClick}>Increment!</button>
            <p>Count: {count}</p>
        </>
    );
}`,
        },
      },
      { link: `https://reactjs.org/docs/hooks-reference.html#usereducer` },
    ],
  ],
}
