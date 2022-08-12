export const pageData = {
  pageTitle: "Sending and Recieving Requests",
  pageInfo: `In order to connect to the rest of the web, it is important to be able to interact with servers by sending and recieving requests!`,
  cheats: [
    [
      { h2: "URL Query Parameters" },
      {
        p: `The URL can contain query parameters to tell the server what to do. These come after the normal URL and start with a '?'.
        Then the parameter name and '=' and parameter value. Key value pairs are separated by '&'. These can be created more legibly with
        the URL object.`,
      },
      {
        code: {
          language: `javascript`,
          code: `const url = 'http://www.mysite.com/?firstParam=one&secondParam=two';
          
const url = URL('http://www.mysite.com/');
url.searchParams.set('firstParam', 'one');
url.searchParams.set('secondParam', 'two');`,
        },
      },
    ],
    [
      { h2: "Old (Legacy) Data Fetching" },
      {
        code: {
          language: `javascript`,
          code: `const request = new XMLHttpRequest();
request.addEventListener('load', function() {
    console.log(this.responseText);
});
request.addEventListener('error', function() {
    console.log(this.responseText);
});
request.open('GET', 'http://www.mysite.com');
request.send();`,
        },
      },
    ],
    [
      { h2: "Fetch Function" },
      {
        p: "When you send a request you are typically fetching data.",
      },
      {
        code: {
          language: `javascript`,
          code: `const data = {
    myData: 'isHere'
};

const headers = new Headers();
headers.append('Content-Type': 'application/json; charset=utf-8'};
          
const options = {
    method: 'POST', // request method to use
    body: JSON.stringify(data), // json data to send to server
    headers, // sets the headers to use for the 
    signal: abortSignal, // aborts the request when the signal's abort function is called
}

// Using promises
fetch(url, options)
    .then(res => res.text())
    .then(console.log)
    .catch(error => console.error);
    
// Using async/await
async function myFunc() {
    try {
        const response = await fetch(url);
        const text = await response.text();
        console.log(text);
    } catch (error) {
        console.log(error);
    }
};
myFunc();`,
        },
      },
    ],
    [
      { h2: "Request Methods" },
      {
        definitionList: [
          { title: `GET`, definition: `Used to get data from server` },
          {
            title: `POST`,
            definition: `Used to send data to server to create a resource`,
          },
          {
            title: `PUT`,
            definition: `Used to send data to server that updates/replaces an existing resource`,
          },
          {
            title: `PATCH`,
            definition: `Used to modify changes to resource on server`,
          },
          {
            title: `DELETE`,
            definition: `Used to tell server to delete a resource`,
          },
        ],
      },
    ],
    [
      { h2: "Response Properties and Methods" },
      {
        code: {
          language: `javascript`,
          code: `response.text(); // returns a promise with the text representation of the response body
response.json(); // returns a promise with the object representation of the reponse body
response.blob(); // returns a promise with a blob (useful when getting images from an API)
response.status; // the response status code. 200-299 means successful request
response.ok; // gives true if response is between 200-299, otherwise false
response.headers; // a headers object including the headers of the reponse
response.headers.get('content-type'); // gets a specific header by name`,
        },
      },
    ],
    [
      { h2: "Sending Data From Form" },
      {
        code: {
          language: `javascript`,
          code: `const form = document.querySelector('form');
form.addEventListener('submit', onSubmit);

async function onSubmit(event) {
    event.preventDefault();

    const options = {
        method: 'POST',
        body: new FormData(form), // note: this sends form data format, not JSON! make sure API can handle this!
        headers: 
    }

    try {
        const response = await fetch('http://www.mysite.com/', options);
        const text = await response.text();
        console.log(text);
    } catch (error) {
        console.log(error);
    };
}`,
        },
      },
    ],
    [
      { h2: "Aborting Requests" },
      {
        code: {
          language: `javascript`,
          code: `async function myFunc() {
    const abortController = new AbortController();
    setTimeout(() => abortController.abort(), 2000); // aborts after 2 seconds
    
    try {
        const response = await fetch(url, {
            signal: abortController.signal,
        });
        const text = await response.text();
        console.log(text);
    } catch (error) {
        console.log(error);
    }
};
myFunc();`,
        },
      },
    ],
  ],
}
