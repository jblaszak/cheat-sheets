export const pageData = {
  pageTitle: "Error Handling in React",
  pageInfo: `Events in React should be handled differently because React takes care of the DOM manipulation for us.`,
  cheats: [
    [
      { h2: "Error Boundary" },
      {
        p: `These are used to catch errors without blocking rendering of the rest of the components. Normally if an error is thrown,
          you won't see anything on the page.  With an error boundary, you can update the state with the getDerivedStateFromError lifecycle
          method, handle side-effects in the componentDidCatch method, and return either a fallback component or the expected component.
          Note: this will only work for components that are wrapped by the error boundary.`,
      },
      {
        code: {
          language: `javascript`,
          code: `import { Component } from 'react';

export default function App() {
    return (
        <>
            <ErrorBoundary fallback={<h1>There was an error</h1>}>
                <BuggyComponent />
            </ErrorBoundary>
        </>
    );
}

function BuggyComponent() {
    throw newErrror('oh no!');
    return <h1>Some buggy text here!</h1>;
}

class ErrorBoundary extends Component {
    state = { hasError: false };

    // Should not take care of any side-effects in this life cycle
    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    // Use for side-effects
    componentDidCatch(error, errorInfo) {
        logErrorToServer(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback;
        }
        return this.props.children;
    }
}`,
        },
      },
      {
        link: `https://reactjs.org/docs/error-boundaries.html`,
      },
    ],
  ],
}
