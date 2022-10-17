export const pageData = {
  pageTitle: "React Portals",
  pageInfo: ``,
  cheats: [
    [
      { h2: "Portal" },
      {
        p: `Most things get rendered within the parent React tree.  However, one can tell React elements to render a DOM node outside
          of the main parent tree.  This can be useful for when needing to compare to other stacking contexts like with modals and tooltips.
          NOTE: the element still behaves as if it were at the same spot in the DOM tree meaning events will bubble up, the element can still
          read from context providers and can still take props.`,
      },
      {
        code: {
          language: "javascript",
          code: `import { useState } from 'react';
import { createPortal } from 'react-dom';
                
export default function App() {
    const [isHidden, setIsHidden] = useState(true);

    return (
        <>
            <div className="container" onClick=(() => {
                console.log('clicked container');
            })>
                <button onClick={() => setIsHidden(!isHidden)}>
                    {isHidden ? 'Show Modal' : 'Hide Modal'}
                </button>
                { isHidden || <Modal />}
            </div>
        </>
    );
};
    
function Modal() {
    return createPortal(
        <p className="modal">Modal</p>,
        document.getElementById('modal-root'),
    )
}`,
        },
      },
      {
        p: `Need to put an element in the main react html file in public folder for the portal to target.`,
      },
      {
        code: {
          language: "html",
          code: `<div id="modal-root"></div>`,
        },
      },
      { link: `https://reactjs.org/docs/portals.html` },
    ],
  ],
}
