/* structure of a browser DOM:
window {   <--- the "global object"
    ...
    document: {  <--- the browser created this object that conatins the HTML elements so that you interact with it
        ...
        body: {  <--- the 'body' element is created for you to acess the <body> tag
            ...
        }
        ...
    }
    ...
}
*/

console.log(window.document); // shows the HTML structure; console.log() stringifies the "document" object
console.log(document); // same, because calling the global obejct's properties by default when none is specified
// other functions you can call, like alert(), is also a child function of "window"

console.dir(document); // shows the real structure of the "document" object

// Selecting nodes
/* Single elements -
    - querySelector(): select element by CSS selectors, return FIRST matched element
    - getElementById(): select element by #ID only
    ** remember they are passed by REFERENCE (address)
  Collection of elements - returns an array-like object (a NodeList)
    - querySelectorAll() --> CSS selector. returns a static list (Individual element nodes still passed by reference, but won't refelct changes in the DOM strucutre)
    (- getElementsByTagName(), getElementsByClassName --> HTML tag / class. live node, updates when DOM changes ; harder to handle)
*/

console.log(document.getElementById("main-title")); // <h1 id="main-title">This is h1</h1>
// Note that you don't use '#' in this one as that will be a CSS selector, not needed here
console.dir(document.getElementById("main-title")); // returns the element node object

// Storing node in a variable
let h1 = document.getElementById("main-title"); // passed the element by reference
console.log(h1.querySelector("#link")); // <a id="link" href="#">this is a link</a>; the child node also has the querySelector method
// So the children elements of an element can also be selected by those methods
// Beware that getElementById() is not available in the children elements
let liList = document.querySelectorAll("li");
console.dir(liList); // returns a NodeList of li's

// Traversing the DOM:
// 1. children
const ul = document.querySelector("ul");
// child elements nodes
console.dir(ul.children); // returns an array-like object called HTMLcollection showing all its children ELEMENTS nodes
console.log(ul.children[2].textContent); // prints item3's text WIHOUT the help from class/id
//selecting the first child element node
console.log(ul.firstElementChild.textContent); // "I changed it using querySelector()" : first Element Child
// also .lastElementCild

// both child element & text nodes
console.dir(ul.childNodes); // returns a NodeList containing both its child ELEMENTS and TEXT nodes
console.log(ul.firstChild.textContent); // '\n      My list:\n      ': firs child, any type of node (here it is a text node)
// also .lastChild

// 2. parent
/* Note:
- each element can only have ONE parent
- parentNode & parentElement are the same most of the time bc. only element node can have child.
*/
console.dir(ul.closest("body")); // trace parent and its parents (ancestors) until hitting the target (in CSS selector)
// here it returns the <body> element node.

// 3. sibling
// .previousElementSibling, .nextElementSibling
// also have node version (.previousSibling) but that will include text node
