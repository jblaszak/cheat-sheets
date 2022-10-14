export const pageData = {
  pageTitle: "Imperative React",
  pageInfo: ``,
  cheats: [
    [
      { h2: "useImperativeHandle" },
      {
        p: `Gives you control over the value that is returned by the ref, and allows you to replace native functions (such as blur, focus, etc.)
          with your own, allowing side-effects to the normal behaviour or different behaviour altogether.  Only really used for corner cases and
          should always be used within React.forwardRef.  Could also be used to allow one function to reset multiple components.`,
      },
      {
        code: {
          language: "javascript",
          code: `forwardRef(function (props, ref) {
    const [count, setCount] = useState(0);

    useImperativeHandle(ref, () => {
        return {
            reset: () => setCount(0),
        };
    });

    return (
        <button onClick={() => setCount(count + 1)}>
            Increment
        </button>
    );
})`,
        },
      },
      {
        code: {
          language: "javascript",
          code: `const counterRef = useRef();
const customInputRef = useRef();
return (
    <>
        <Counter ref={counterRef} />
        <CustomInput ref={customInputRef} placeholder='Type stuff here!' />
        <button onClick={() => {
            counterRef.current.reset();
            customInputRef.current.reset();
        }>
            Reset
        </button>
    </>
)`,
        },
      },
    ],
  ],
}
