export const pageData = {
  pageTitle: "Time and Timers",
  pageInfo: ``,
  cheats: [
    [
      { h2: "Timeout" },
      { p: `Timeouts wait a set amount of time before executing the code.` },
      {
        code: {
          language: `javascript`,
          code: `const timeoutID = setTimeout(() => {
    console.log('timeout happened!');
}, 1000); // waits 1 second before running code block

clearTimout(timeoutID); // cancels the timeout`,
        },
      },
    ],
    [
      { h2: "Intervals" },
      { p: `Intervals execute code every set amount of time.` },
      {
        code: {
          language: `javascript`,
          code: `let timerID;
        
function startTime() {
    timerID = setInterval(() => {
        count.textContent++;
    }, 500); // runs the code block every 500ms
}

function stopTime() {
    clearInterval(timerID);  // stop the interval from running
}`,
        },
      },
    ],
    [
      { h2: "Animation Frames" },
      {
        p: `AnimationFrames are used to repaint the browser and create a new animation frame. Frame rate depends on browser and settings used. May or may not
      be 60 frames/sec, but that is the most common.`,
      },
      {
        code: {
          language: `javascript`,
          code: `let animationFrameID;
        
function startTime(timestamp) {
    console.log(timestamp); // uses automatically provided variable to output time when requestAnimationFrame started to execute callbacks
    count.textContent++;
    animationFrameID = requestAnimationFrame(startTime); // frabs the next animation frame
}

function stopTime() {
    cancelAnimationFrame(animationFrameID);  // cancels the request to generate the next animation frame
}`,
        },
      },
    ],
    [
      { h2: "Performance Timer" },
      {
        p: `Performance of functions can be measured to microsecond precision using a performance timer before and after
      the block of code.`,
      },
      {
        code: {
          language: `javascript`,
          code: `const t0 = performance.now();
doSomething();
const t1 = performance.now();
console.log(\`Call to doSomething took \${t1 - t0} milliseconds.\`);`,
        },
      },
    ],
    [
      { h2: "Dates" },
      {
        code: {
          language: `javascript`,
          code: `console.log(new Date(2025,0,11,10,12,12,20));
// outputs 'Fri Jan 11 10:12:12 GMT-0800 (Pacific Standard Time);
// note time zone is dependent on machine

console.log(new Date('January 25, 2025)); // works, but not in all browsers, best to use above!

date.getFullYear(); // gets year, ex. 2022
date.getMonth(); // gets month, NOTE: months are zero indexed...
date.getDate(); // gets the day of the month, 1-31
date.getDay(); // gets day of week, sun-sat as 0-6
date.getHours(); // gets the hours of the day
date.getSeconds(); // gets seconds of the day`,
        },
      },
    ],
  ],
}
