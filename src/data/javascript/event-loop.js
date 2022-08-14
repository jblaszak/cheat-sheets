export const pageData = {
  pageTitle: "Javascript Event Loop",
  pageInfo: ``,
  cheats: [
    [
      { h2: "Javascript Engine" },
      {
        p: `This is a program used to execute the javascript code.  Each browser has their own version with their own implementation.
        For example Chrome uses Google's V8 Engine.`,
      },
      {
        p: `The engine has two man components. A 'Heap' which is used for memory to store objects and a 'Call Stack' that keeps track of
      the currently running function.  Each function pushes a stack from onto the stack and contains information like the function and its
      local variables. When a function finishes running it is taken off the stack. The stack is empty when no more code is running.`,
      },
    ],
    [
      { h2: "Javascript Runtime Environment" },
      {
        p: `This is larger environment that javascript is executed in.  It provides access to web APIs like timers, HTTP requests, DOM
        manipulation and more!`,
      },
    ],
    [
      { h2: "Event Loop" },
      {
        p: `A constanty running loop in the browser with one thread. It removes one task from the task queue, then executes
        code until the call stack is empty, then executes microtasks one at a time until the microtask queue is empty, then renders
        any changes to the DOM and repeats everything all over again.`,
      },
    ],
    [
      { h2: "Task Queue" },
      {
        p: `A queue data structure that stores asynchronous callbacks that will later be added to the call stack.  Can also be referred to
        as 'Macrotask Queue', 'Callback Queue', or 'Message Queue'.  Callbacks are moved into the task qeue by web APIs and wait there until
        the callback is empty and then get executed.`,
      },
    ],
    [
      { h2: "Microtask Queue" },
      {
        p: `Same sort of thing like task qeue but used for storing microtasks. Sometimes referred to as 'job qeueue'.  These are generally 
        used for promises or async/await callbacks.  They can also be queued using 'queueMicrotask()'.  They are considered to be higher 
        priority than standard tasks since the entire microtask queue must be empty before the browser will execute the next task.`,
      },
    ],
    [
      { h2: "Example Output with Promises" },
      {
        code: {
          language: `javascript`,
          code: `function logOne() {
    console.log('1');  // L0
}

function main() { // L1
    setTimeout(logOne, 0);  // L2
    Promise.resolve(2)  // L3
        .then(val => val * 2) // L4
        .then(console.log);  // L5
        superSlowFunction(); // L6
        console.log('3'); // L7
}
    
main(); 

// output
// 3
// 4
// 1`,
        },
      },
      {
        p: `PROCESS FLOW: main() gets put onto call stack, then L2 goes on call stack and executes and puts L0 gets put into web API, then L0 gets
        put into task queue, L3 goes onto call stack and gets executed, 
        L4 goes into callstack and puts (val => val * 2) into the microtask queue, L5 goes onto callstack, executes and gets scheduled 
        to put console.log into the microtask queue once previous promises in the chain resolve, L6 gets put into call stack and executes, 
        L7 gets put onto call stack and executes, main() then finishes and gets put off of callstack microtask queue then executes,
        now L4 promise is resolved and L5 can beput into microtask queue and execute, all callstack and microtask queue are empty so 
        L0 can finally execute.`,
      },
    ],
    [
      { h2: "Key Takeaways" },
      {
        p: `Timers are not exact.  Promise callbacks can be delayed.  Slow tasks can be completely blocking.`,
      },
    ],
    [
      { h2: "Chunking" },
      {
        p: `Large tasks can be broken up into smaller chunks to execute a little bit and to let other tasks in the task and microtask queues
    finish first.`,
      },
      {
        code: {
          language: `javascript`,
          code: `function chunkedSlowFunction() {
    setTimeout(processChunk, 0, 0);
}

function processChunk(start) {
    const end = start + 100000;
    for (let i = start; i < end; i++) {
        doCalculations(i);
    }
    if (end < 100000000) {
        setTimeout(processChunk, 0, i + 1);
    }
}`,
        },
      },
    ],
  ],
}
