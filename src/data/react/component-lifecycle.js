export const pageData = {
  pageTitle: "Component Lifecycle in React",
  pageInfo: ``,
  cheats: [
    [
      { h2: "Lifecycle Stages" },
      {
        p: `The lifecycle of a component has three main stages: mounting, updating, and unmounting.`,
      },
      {
        definitionList: [
          {
            title: `Mounting`,
            definition: `When the component renders for the first time.`,
          },
          {
            title: `Updating`,
            definition: `Whenever the state changes or the props get updated by the parent component, the component will
            re-render. This can happen many times.`,
          },
          {
            title: `Unmounting`,
            definition: `When the component gets removed from the DOM. The component cannot be updated again, but a new 
            instance of the component can be mounted.`,
          },
        ],
      },
    ],
    [
      { h2: "useEffect" },
      {
        p: `A special hook that lets you perform side effects at specific stages of a component's life cycle. You can use multiple
        useEffect hooks to do different tasks and run at different stages of the component lifecycle.`,
      },
      { link: `https://reactjs.org/docs/hooks-effect.html` },
    ],
    [
      { h3: "useEffect - Every Render" },
      {
        p: `useEffect with no dependency array will run the callback provided on every re-render of the component.`,
      },
      {
        code: {
          language: `javascript`,
          code: `useEffect(() => {
    console.log('I changed!');
})`,
        },
      },
    ],
    [
      { h3: "useEffect - First Render Only" },
      {
        p: `useEffect with empty dependency array will run the callback provided only on the first render of the component.`,
      },
      {
        code: {
          language: `javascript`,
          code: `useEffect(() => {
    console.log('I changed!');
}, [])`,
        },
      },
    ],
    [
      { h3: "useEffect - When Dependency Changed" },
      {
        p: `useEffect with empty dependency array will run the callback provided whenever the dependency in the array changes.  NOTE:
        if there is an object in the array, you must enter an entirely new object.  To avoid bugs related to stale values from previous
        renders, include all values that the callback uses that could change between renders into the dependency array.`,
      },
      {
        code: {
          language: `javascript`,
          code: `useEffect(() => {
    console.log('I changed!');
}, [myValue, {key: value}])`,
        },
      },
    ],
    [
      { h3: "useEffect - Cleaning Up (unmount)" },
      {
        p: `When a function is returned in the useEffect function, it will run when a component unmounts and before the main effect function
        runs on any re-renders.`,
      },
      {
        code: {
          language: `javascript`,
          code: `useEffect(() => {
    console.log('I changed!');

    return () => {
      console.log('I cleaned up!');
    };
}, [myValue, {key: value}])`,
        },
      },
    ],
    [
      { h2: "useLayoutEffect" },
      {
        p: `This will run the function passed to the hook synchronously. This means things will run slower so it's best to avoid it unless
        you really need to. In this case, it will NOT quickly flash '2' before going to '3'. If there is a longer process taking place using
        the regular useEffect behaviour of this flashing will be more obvious as it runs asynchronously.`,
      },
      {
        code: {
          language: `javascript`,
          code: `useLayoutEffect(() => {
    if (count === 2) {
      setCount(3);
    }
}, [count])`,
        },
      },
    ],
  ],
}
