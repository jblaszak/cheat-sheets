export const pageData = {
  pageTitle: "Dom Manipulation",
  pageInfo: `Developers can use javascript to change the styles, structure or content of a page. This is called DOM manipulation.`,
  cheats: [
    [
      { h2: "Getting Elements" },
      {
        p: "Before you can change something on the page, you must first be able to target that element!",
      },
      {
        code: {
          language: `javascript`,
          code: `document.getElementById(id); // gets an element based on its 'id' attribute
document.querySelector(cssSelector); // gets first element matching CSS selector
document.querySelectorAll(cssSelector); // gets all elements matching CSS selector, returned as a NodeList, RECOMMENDED WAY
document.getElementsByTagName(tagName); // gets all elements using HTML tag, returned as HTMLCollection
document.getElementsByClassName(className); // get all elements using specific, returned as HTMLCollection`,
        },
      },
      {
        p: `NOTE: Not all standard array functions are available for NodeList (only has .forEach()) or HTMLCollection
      (doesn't have any). Can use other array type functions by converting them to an array!`,
      },
      {
        code: {
          language: `javascript`,
          code: `const items = document.querySelectorAll(cssSelector); // gets all elements matching CSS selector, returned as a NodeList
Array.from(items).map(item => console.log(item));`,
        },
      },
    ],
    [
      { h2: "Setting Elements" },
      {
        p: "Once you have elements that have been selected, you can change their properties!",
      },
      {
        code: {
          language: `javascript`,
          code: `const elements = document.querySelectorAll(cssSelector);
elements[0].style.color = 'blue';  // Sets a CSS property using inline styles, will only contain inline styles, not those set with CSS
element.setAttribute('attribute', 'value'); // Sets HTML attribute to specific value
element.textContent; // Text content of element, including any children
element.innerText; // Only the text that is rendered
element.innerHTML; // entire HTML code as a string
element.attribute; // alternative to setAttribute where you can directly set the value

element.classList; // Read-only, returns list of classes on element
element.classList.add(className, className2); // Adds class to class list
element.classList.remove(className); // Removes class from class list
element.classList.toggle(className); // Toggles class name (if there removes it, if not adds it)

element.className = className; // Not recommended since you remove all other classes, use above way instead`,
        },
      },
    ],
    [
      { h2: "Adding Elements" },
      {
        code: {
          language: `javascript`,
          code: `const p = document.createElement('p'); // Creates a new paragraph tag
const text = document.createTextNode('Some text'); // Creates a text node 
p.append(text);  // Then adds it to the end of the paragaph
/// OR
p.textContent = 'Some text';  // Does same things as two lines above

p.appendChild(text1); // Same but just for one element
p.append(text1, text2); // Adding multiple items to end of element
p.prepend(text1); // Adding multiple items to beginning of element

// Adding with loops
// NOT RECOMMENDED, extra stuff done every loop!
for (let i=0; i<3; i++) {
    const parent.document.querySelector('ol');
    const li = document.createElement('li');
    li.textContent = \`List item \${i}\`;
    parent.append(li);
}

// Using list
const parent.document.querySelector('ol');
const listItems = []
for (let i=0; i<3; i++) {
    const li = document.createElement('li');
    li.textContent = \`List item \${i}\`;
    listItems.push(li);
}
parent.append(...listItems);

// Using built-in functions (usually best option)
const parent.document.querySelector('ol');
const fragment = document.createDocumentFragment(); // Creates document fragment to put things in
for (let i=0; i<3; i++) {
    const li = document.createElement('li');
    li.textContent = \`List item \${i}\`;
    fragment.append(li);
}
parent.append(fragment);

p.remove(); // Removes the paragraph from the DOM
document.body.innerHTML = '';  // will remove everything from the body`,
        },
      },
    ],
    [
      { h2: "Removing Elements" },
      {
        code: {
          language: `javascript`,
          code: `p.remove(); // Removes the paragraph from the DOM
document.body.innerHTML = '';  // will remove everything from the body`,
        },
      },
    ],
    [
      { h2: "DOM Sizes" },
      {
        code: {
          language: `javascript`,
          code: `console.log(window.innerWidth); // gives the width of the window
console.log(window.innerHeight); // gives the height of the window

console.log(myElement.style.fontSize); // output nothing because font size isn't set
console.log(window.getComputedStyle(myElement.style.fontSize)); // outputs font size computer by browser

const scrollable = document.getElementById('scrollable'); // gets element with id of 'scrollable'
console.log(scrollable.clientHeight); // height of visible container plus padding
console.log(scrollable.offsetHeight); // height of visible container plus padding and border
console.log(scrollable.scrollHeight); // height of all content in container that can be scrolled through

console.log(scrollable.offsetTop); // distance from the top of next relatively positioned ancestor to top of scrollable element`,
        },
      },
    ],
    [
      { h2: "Scrolling" },
      {
        code: {
          language: `javascript`,
          code: `element.scrollIntoView(); // scrolls to put that element into view

// Smoothly scrolls to top of specific element within a scrollable element
// Note: smooth scrolling not supported by all browsers
element.scrollTo({
    top: element.querySelectorAll('p')[5].offSetTop,
    behaviour: 'smooth',
});`,
        },
      },
    ],
  ],
}
