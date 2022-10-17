export const pageData = {
  pageTitle: "Debugging in React",
  pageInfo: ``,
  cheats: [
    [
      { h2: "React.StrictMode" },
      {
        p: `Used in the main entry file for React.  Provides warnings when using deprecated functions or lifecycle methods.  This also
          makes react double invoke some functions like functional components to make it obvious when there are bugs related to side-effects.
          These do not run twice in production. In older versions of react, console logs only show up once, though in React 18 and after they
          show up twice.`,
      },
      {
        code: {
          language: `javascript`,
          code: `ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);`,
        },
      },
    ],
    [
      { h2: "React.Profiler" },
      {
        p: `Used to help track how often a component renders, does so on the commit phase (immediately after rendering).`,
      },
      {
        code: {
          language: `javascript`,
          code: `import { Profiler } from 'react';
export default function App() {
    return (
        <Profiler id="App" onRender={() => console.log('did a render!');}>
            <MyComponent />
        </Profiler>
    );
}`,
        },
      },
      { link: `https://reactjs.org/docs/profiler.html` },
    ],
    [
      { h2: "React Dev Tools" },
      {
        p: `A browser extension for React that extends the dev tools to behave in a similar way for React instead of just native JS.
          Can navigate the React DOM tree, see the current state of elements, hooks (including custom hooks), what rendered the component, etc.`,
      },
    ],
    [
      { h3: "Use Debug Value" },
      {
        p: `For custom hooks, you can use a debug value to set a certain state.`,
      },
      {
        code: {
          language: `javascript`,
          code: `import { useDebugValue } from 'react';
function useMyState(initialValue = 0) {
    useDebugValue('my debug value');
    return useState(initialValue);
}`,
        },
      },
    ],
    [
      { h3: "Profiler" },
      {
        p: `Super useful for finding which components are slow to render.`,
      },
    ],
  ],
}
