export const pageData = {
  pageTitle: "React Context",
  pageInfo: `Context is used to pass value down the component tree without requiring passing the props through every component.
    Super useful for global state management, like .`,
  cheats: [
    [
      { h2: "Creating Context" },
      {
        p: `Context must be created in its own context file. The provider allows every child element to access the state from that specific context.`,
      },
      {
        code: {
          language: "javascript",
          code: `import { createContext, useState } from 'react';
            
export const UserContext = createContext({
    toggleUser: null,
    user: {
        name: null,
        age: null,
    },
});

const user1 = {
    name: 'Bob',
    age: 22,
}

const user2 = {
    name: 'Bill',
    age: 25,
}

export default function UserContextProvider({children}) {
    const [user, setUser] = useState(user1);

    const toggleUser = () => {
        if (user === user1) {
            setUser(user2);
        } else {
            setUser(user1);
        }
    }

    return (
        <UserContext.Provider value={{
            user,
            toggleUser,
        }}>
            {children}
        </UserContext.Provider>
    );
}`,
        },
      },
    ],
    [
      { h2: "Providing Context" },
      {
        p: `The provider allows every child element to access the state from that specific context, but accessing the context at the same
        level as the provider wrapper requires a helper function.`,
      },
      {
        code: {
          language: "javascript",
          code: `import { UserContext, UserContextProvider } from './UserContext.js';
import { useContext } from 'react';
            
export default function App() {
    return (
        <main>
            <UserContextProvider>
                <AppInternal />
            </UserContextProvider>
        </main>
    );
}

function AppInternal() {
    const { toggleUser } = useContext(UserContext);
    return (
        <>
            <Person />
            <button onClick={toggleUser}>Toggle User</button>
        </>
    )
}`,
        },
      },
    ],
    [
      { h2: `Access Context Within Children` },
      {
        p: `The useContext hook allows access to the first context of that type above it in the tree.`,
      },
      {
        code: {
          language: "javascript",
          code: `import { UserContext } from './UserContext.js';
import { useContext } from 'react';
            
export default function Person() {
    const { user } = useContext(UserContext);
    return <div>{user.name} is {user.age} years old!</div>;
}`,
        },
      },
    ],
  ],
}
