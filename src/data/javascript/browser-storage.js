export const pageData = {
  pageTitle: "Browser Storage",
  pageInfo: ``,
  cheats: [
    [
      { h2: "Cookies" },
      {
        p: `Cookies expire once the session ends by default.`,
      },
      {
        code: {
          language: `javascript`,
          code: `document.cookie = 'myName=bob' // calls the setter function of document.cookie to add a key-value pair
document.cookie = 'myJob=developer' // adds another key-value pair
console.log(document.cookie); // outputs myName=bob; myJob=developer
document.cookie = 'myName=bill' // overwrites the original myName value

document.cookie = \`user=bob; expires=\${new Date().toUTCstring()}\`; // sets the expiration of the cookie now, deleting the cookie
document.cookie = \`user=bob; max-age=0\`; // this works to delete the cookie too

document.cookie = 'user=bob; path=/mydirectory'; // sets the path to store the cookie in
document.cookie = 'user=bob; secure; samesite=strict'; // only works over HTTPS, and cookie will not be shared cross-origin

// have to manually manipulate the string to get out the cookie values, but there are libraries that can help
const job = document.cookie.split('; ').find(cookie => cookie.startsWith('myJob=')).split('=')[1];`,
        },
      },
    ],
    [
      { h2: "Local Storage" },
      {
        p: `Part of the web storage API that stores information in the browser without an expiry date.`,
      },
      {
        code: {
          language: `javascript`,
          code: `localStorage.setItem('user', 'bob'); // adds key value pair to localstorage
localStorage.setItem('job', 'developer'); // same as above
console.log(localStorage.getItem('user')); // reads key-value pair form localstorage
localStorage.removeItem('user'); // removes an item from localstorage
console.log(localStorage.getItem('user')); // no more user so returns null
localStorage.clear(); // deletes all of localstorage`,
        },
      },
    ],
    [
      { h2: "Session Storage" },
      {
        p: `Same as localstorage but data expires at the end of a session.`,
      },
      {
        code: {
          language: `javascript`,
          code: `sessionStorage.setItem('user', 'bob'); // adds key value pair to sessionStorage
sessionStorage.setItem('job', 'developer'); // same as above
console.log(sessionStorage.getItem('user')); // reads key-value pair form sessionStorage
sessionStorage.removeItem('user'); // removes an item from sessionStorage
console.log(sessionStorage.getItem('user')); // no more user so returns null
sessionStorage.clear(); // deletes all of sessionStorage`,
        },
      },
    ],
    [
      { h2: "Indexed DB" },
      {
        p: `An object store database, which means can even store files, etc. Has a much larger potential storage 
        space than cookies/localstorage/session storage. There are libraries that can help make the process of
         interacting with the API easier.`,
      },
      {
        code: {
          language: `javascript`,
          code: `const request = indexedDB.open('myDatabase', 1); // creates database with name and version number

// fired whenever created a new database or updated the version of database
request.addEventListener('upgradeneeded', event => {
    const database = event.target.result; 
    const store = database.createObjectStore('users', {keyPath: 'id'}); // creates the data store with a primary key of id
    store.createIndex('name', 'name');  // name, keypath
    store.add({
        id: 0,
        name: 'bob',
        job: 'developer',
    });  // adds data to the data store
});

// fired whenever we connect to a database and is successful
request.addEventListener('success', event => {  
    const database = event.target.result;

    // Adding to datastore
    database.transaction(['users'], 'readwrite')
        .objectStore('users')
        .add({
            id: 1,
            name: 'bill',
            job: 'developer',
        });

    // Adding to datastore
    database.transaction(['users'], 'readwrite')
        .objectStore('users')
        .delete(1);  // deleting works based on primary key value ('id')

    // Getting data from datastore by primary key
    const req = database.transaction(['users'], 'readwrite')
        .objectStore('users')
        .get(0);  // gets data from datastore
    req.addEventListener('success', event => {
        console.log(event.target.result.name); // outputs the result from the get call above
    });

    // Getting data from datastore by index and value
    const req = database.transaction(['users'], 'readwrite')
        .objectStore('users')
        .index('name')
        .get('bob');  // gets data from datastore
    req.addEventListener('success', event => {
        console.log(event.target.result.name); // outputs the result from the get call above
    });
});`,
        },
      },
    ],
  ],
}
