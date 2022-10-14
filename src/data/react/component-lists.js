export const pageData = {
  pageTitle: "Lists of Components",
  pageInfo: `Sometimes we want to dynamically create a list of components in react, this is how!`,
  cheats: [
    [
      { h2: "Creating a List of Components" },
      {
        p: `Given an array of values, iterates over it and returns a list of components. NOTE: the topmost element MUST have a unique key prop.
          This is so that react knows which element is which when it makes updates to the virtual DOM. As a last resort, can use index, but this may cause issues in certain scenarios.  `,
      },
      {
        code: {
          language: "javascript",
          code: `const myList = ['bill', 'bob', 'billy', 'bobby'];

return (
    <>
        <ul>
            {myList.map((item, index) => {
                return <li key={index}>{item}</li> // NOTE: use index as key as last resort!
            })};
        </ul>
    </>
);

// OR Multiple elements, using Fragment
return (
    <>
        <ul>
            {myList.map((item, index) => {
                return (
                    <Fragment key={index}> // NOTE: use index as key as last resort!
                        <li>{item}</li>
                        <li>{index}</li>
                    </Fragment>
                );
            })};
        </ul>
    </>
);`,
        },
      },
    ],
  ],
}
