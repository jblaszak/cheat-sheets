export const pageData = {
  pageTitle: "Class Based Components in React",
  pageInfo: `Class based components were the standard in the early days of React, however now they are typically only seen in legacy code.
    Cannot use any hooks within class based components.`,
  cheats: [
    [
      { h2: "Class Based Components" },
      {
        p: `Typical Functional Component`,
      },
      {
        code: {
          language: "javascript",
          code: `import { useState } from 'react';
                  
export default function App() {
    return (
        <>
            <Counter startingCount={10}>
            <Counter />
        </>
    );
};
    
function Counter({ startingCount = 0 }) {
    const [count, setCount] = useState(startingCount);
    return (
        <>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <p>Count: {count}</p>
        </>
    )
};`,
        },
      },
      {
        p: `The previous Functional Component converted into a Class Based Component`,
      },
      {
        code: {
          language: "javascript",
          code: `import { Component } from 'react';
                  
export default function App() {
    return (
        <>
            <Counter startingCount={10}>
            <Counter />
        </>
    );
};
    
class Counter extends Component {
    state = {
        count: this.props.startingCount ?? 0,
    }

    // OR
    constructor(props) {
        super(props);
        this.state = {
            count: props.startingCount ?? 0,
        };
    }


    render() {
        return (
            <>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    });
                }}>Increment</button>
                <p>Count: {this.state.count}</p>
            </>
        );
    }
};`,
        },
      },
    ],
    [
      { h2: "Life Cycle Methods" },
      {
        p: `The previous Functional Component converted into a Class Based Component.  NOTE: shouldComponentUpdate is similar
        to the useMemo hook in the sense that it will render the component only if the function returns true. However, if the
        componentDidUpdate updates the state but shouldComponentUpdate is false, the state will still be updated and may cause
        unexpected behaviour if shouldComponentUpdate becomes true again later. `,
      },
      {
        code: {
          language: "javascript",
          code: `import { Component, useState } from 'react';
                  
export default function App() {
    const [shouldRender, setShouldRender] = useState(true);
    return (
        <>
            { shouldRender && <Counter /> }
            <button onClick={() => setShouldRender(!shouldRender)}>
                Toggle Counter
            </button>
        </>
    );
};
    
class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: props.startingCount ?? 0,
        };
    }

    componentDidMount() {
        console.log('mounted');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps, prevState);
    }

    componentWillUnmount() {
        console.log('unmounted');
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.count < 3;
    }

    render() {
        return (
            <>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    });
                }}>Increment</button>
                <p>Count: {this.state.count}</p>
            </>
        );
    }
};`,
        },
      },
    ],
    [
      { h2: "Refs" },
      {
        code: {
          language: "javascript",
          code: `import { Component, createRef } from 'react';
                  
export default function App() {
    return <Counter />;
};
    
class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: props.startingCount ?? 0,
        };
        this.elementRef = createRef();
    }

    componentDidMount() {
        console.log('mounted');
        console.log(this.elementRef);
    }

    render() {
        return (
            <>
                <button ref={this.elementRef} onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    });
                }}>Increment</button>
                <p>Count: {this.state.count}</p>
            </>
        );
    };
};`,
        },
      },
    ],
    [
      { h2: "Context" },
      {
        p: `Have to use createContext and a provider/consumer on that context.`,
      },
      {
        code: {
          language: "javascript",
          code: `import { Component, useState, createContext } from 'react';

const Theme = createContext({
    mode: 'dark',
});
                  
export default function App() {
    const [shouldRender, setShouldRender] = useState(true);
    return (
        <Theme.Provider value={{mode: 'dark'}}>
            { shouldRender && <Counter /> }
            <button onClick={() => setShouldRender(!shouldRender)}>
                Toggle Counter
            </button>
        </Theme.Provider>
    );
};
    
class Counter extends Component {
    static contextType = Theme;

    constructor(props) {
        super(props);
        this.state = {
            count: props.startingCount ?? 0,
        };
    }

    componentDidMount() {
        console.log(this.context);
    }

    render() {
        return (
            <>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    });
                }}>Increment</button>
                <p>Count: {this.state.count}</p>
                <Theme.Consumer>
                    {
                        context => <p>Theme: {context.mode}</p>
                    }
                </Theme.Consumer>
            </>
        );
    }
    const [count, setCount] = useState(startingCount);
};`,
        },
      },
    ],
  ],
}
