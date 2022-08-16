export const pageData = {
  pageTitle: "Web Workers",
  pageInfo: `Web workers are a browser API for running scripts in separate threads than the main execution thread.`,
  cheats: [
    [
      { h2: `Basic Example of Dedicated Worker` },
      {
        p: `Note: web worker doesn't have access to the DOM tree.  Here, main.js runs the main code and spawns a web worker 
      to run a slow task.`,
      },
      {
        code: {
          language: `javascript`,
          code: `// main.js
function slowOperation() {
    const work = new Worker('worker.js');  // creates web worker that runs the code in worker.js
}

function sayHello() {
    console.log('sup');
}`,
        },
      },
      {
        code: {
          language: `javascript`,
          code: `// worker.js
self.addEventListener('message', event => {
    console.log(event.data);  
})  // listens for messages 

addEventListner()
for (let i=0; i < 3000000000; i++) {
    1 + 2;
    console.log('slow operation finished');
}`,
        },
      },
    ],
    [
      { h2: `Messaging Between Main and Workers` },
      {
        code: {
          language: `javascript`,
          code: `// main.js
function slowOperation() {
    const work = new Worker('worker.js');  // creates web worker that runs the code in worker.js
    worker.postMessage(10); // send a message to the web worker
    worker.addEventListener('message', event => {  // listens for messages from the web worker
        console.log(event.data);
    }
}

function sayHello() {
    console.log('sup');
}`,
        },
      },
      {
        code: {
          language: `javascript`,
          code: `// worker.js
// Option 1 to listen to messages
self.addEventListener('message', event => {
    console.log(event.data);
    self.postMessage(event.data + 10);
})  // listens for messages 

// Option 2 to listen to messages
addEventListener('message', event => {
    console.log(event.data);  
    postMessage(event.data + 10);
})

// Option 3 to listen to messages
onmessage = function(event) {
    console.log(event.data);
    postMessage(event.data + 10);
}`,
        },
      },
    ],
    [
      { h2: `Terminating a Worker` },
      {
        code: {
          language: `javascript`,
          code: `worker.terminate();`,
        },
      },
    ],
    [
      { h2: `Shared Workers` },
      {
        p: `Used to share workers between different tabs of the same domain or iFrames. Note: poor browser support currenlty but may get
      more support in the future. May or may not see console logs from shared workers.`,
      },
      {
        code: {
          language: `javascript`,
          code: `// main.js
function slowOperation() {
    const worker = new SharedWorker('worker.js');
    worker.port.postMessage(10);

    worker.port.onmessage = function(event) {
        console.log(event.data);
    }
};`,
        },
      },
      {
        code: {
          language: `javascript`,
          code: `// worker.js
addEventListener('connect', event => {
    const port = event.ports[0];

    port.onmessage = function(event) {
        port.postMessage(event.data + 10);
    };
});`,
        },
      },
    ],
  ],
}
