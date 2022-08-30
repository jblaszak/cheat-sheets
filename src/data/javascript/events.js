export const pageData = {
  pageTitle: "Javascript Events",
  pageInfo: `Events are used initiate blocks of code though event-driven programming!`,
  cheats: [
    [
      { h2: "Listening For Events" },
      {
        code: {
          language: `javascript`,
          code: `element.addEventListener(eventName, callback, useCapture);`,
        },
      },
      {
        p: `To listen to an event we use the addEventListener method, which has a few parameters. By default, third parameter is
      set fire event in the bubbling phase (false), can be set to true for capturing phase or object with the following values:`,
      },
      {
        definitionList: [
          {
            title: "capture",
            definition: "true for capturing, false for bubbling.",
          },
          {
            title: "once",
            definition:
              "automatically removes the event listener after the event fires once if set to true.",
          },
          {
            title: "passive",
            definition: `helps performance by telling the browser that event.preventDefault() will not be used. Useful for mobile scrolling 
    events like touchstart and touchmove. Set to true.`,
          },
          {
            title: "signal",
            definition: `an AbortSignal sent from an AbortController.  Will remove the event listener if the signal's abort method is called.`,
          },
        ],
      },
      {
        code: {
          language: `javascript`,
          code: `const button = document.querySelector('button'); // select button element
button.addEventListener('click', onClick); // waits for a click event on button element and runs onClick function

document.body.addEventListener('click', onClick); // waits for click on body and runs onClick

function onClick(event) {
    console.log(event); // outputs info on the event that occured (lots of available properties)
    console.log(event.type); // tells type of info
    console.log(event.target); // returns the uppermost element that was clicked on, not necessarily the button!
    console.log(this); / refers to the element 
    console.log('Button was clicked!');
}

const abortContoller = new AbortController(); // sets something so we can remotely controller when to remove event listener
button.addEventListener('click', onClick, {
    capture: true,
    once: true,
    passive: true,
    signal: abortController.signal,
});

abortController.abort(); // will remove event listener`,
        },
      },
    ],
    [
      { h2: "Removing Event Listener" },
      {
        p: `Other than the ways above with an abort controller or 'once' set to true, we can remove the event listner at any time with:`,
      },
      {
        code: {
          language: `javascript`,
          code: `button.removeEventListener('click', onClick);`,
        },
      },
    ],
    [
      { h2: "Preventing Default Behaviour" },
      {
        code: {
          language: `javascript`,
          code: `event.preventDefault(); // used on the event inside the callback function`,
        },
      },
    ],
    [
      { h2: "Event Propagation" },
      {
        p: `Event propagation is when an event travels through the DOM to call event listeners on nested elements. This is done in 3 phases.
      First: Capturing - where the event travels down from the root of the document to the event target.  Second: Target - when the event fires
      on the event target.  Third: Bubbling - when the event travels up from the event target to the root of the document.`,
      },
      {
        p: `The event listener may call event.stopPropagation() at any time to stop the propagation process. NOTE: Not all events propagate.`,
      },
    ],
    [
      { h2: "Event Types" },
      {
        code: {
          language: `javascript`,
          code: `element.addEventListener('click', onClick); // fires when clicked
element.addEventListener('dblclick', onClick); // fires when double clicked
element.addEventListener('mousedown', onClick); // fires when mouse button is pressed down
element.addEventListener('mouseup', onClick); // fires when mouse button is released

window.addEventListener('keydown', event => {
    console.log(event.code);
}); // when a key is pressed, output which key to console

window.addEventListener('keyup', event => {
    console.log(event.code);
}); // when a key is released, output which key to console

const scrollable = document.getElementById('scrollable');
scrollable.addEventListener('scroll', event => {
    console.log(event.target.scrollTop);
}); // when scrolling, output how far scrolled from top of element

scrollable.addEventListener('mouseenter', event => {
    console.log(event.pageX, event.pageY);
}); // when mouse first hovers over element, output X and Y mouse position

scrollable.addEventListener('mousemove', event => {
    console.log(event.pageX, event.pageY);
}); // when mouse moves over element, output X and Y mouse position

scrollable.addEventListener('mouseleave', event => {
    console.log(event.pageX, event.pageY);
}); // when mouse leaves element, output X and Y mouse position

// NOTE: in order to use this HTML element must have attribute draggable=true
button.addEventListener('dragStart', event => {
    console.log(event);
}); // will drag element and log drag event

scrollable.addEventListener('drop', event => {
    scrollable.prepend(button);
}); // will move button to beginning of scrollable container when mouse released

scrollable.addEventListener('dragover', event => {
    event.preventDefault();
}); // allows above function to work properly by disabling default behaviour of dragover`,
        },
      },
    ],
    [
      { h2: "Event Delegation" },
      {
        p: `Optimizes the number of event listeners needed in large applications by having the parent use the listeners and then delegating
          function calls based on which element was clicked on.`,
      },
      {
        code: {
          language: `javascript`,
          code: `scrollable.addEventListener('click', function (event) {
    if (event.target !== this) {
        event.target.textContent = 'Clicked';
    };
});`,
        },
      },
    ],
  ],
}
