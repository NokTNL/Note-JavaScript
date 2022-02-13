// Changing node's content
//.textContent: changes the text
let item1 = document.querySelector("#item1");
item1.textContent = "I changed it using querySelector()"; // Changed the item text content
// changing an element in a NodeList:
let liList = document.querySelectorAll("li");
liList[1].textContent = "I changed it using querySelectorAll()";
//.innerHTML: changes the whole tag     !!! use with care, can inject code into the page and creates security risks
liList[2].innerHTML =
  "<a href='#'>injected a link into the &lt;li&gt; using .innerHTML</a>";

// Add elements
const newLi = document.createElement("li");
// Note! 1. you must call this method from the document object
// 2. It only creates a new element, not injected into the HTML yet
// 3. if you don't assign the new element to a variable, it will get discarded
const ul = document.querySelector("ul"); // Sotre a node that has children
ul.appendChild(newLi); // now it is added at the end of the ul
// if adding from the top: prependChild()
// in appendChild() the node is passed by reference too, so:
newLi.textContent = "I am appended using appendChild()"; // You can also do this step BEFORE appending
// .before, .after, .replaceWith
const newLi2 = document.createElement("li");
newLi2.textContent = "I am inserted using before()";
const item5 = ul.querySelector("#item5"); // need to select the element you want to add/before next to
item5.before(newLi2);
newLi2.textContent = "I replaced item5 with this using replaceWith()";
item5.replaceWith(newLi2);
// !! If you try to add an element that is already in the DOM, old one will be removed and added to the new
// Alternative for before() and after() for better browser support: insertAdjacentElement()

// Removing element
newLi2.nextElementSibling.remove(); // Note that now newLi2 is at the original item5 posistion, so item6 is removed
// Alternatively, for better browser support, use removeChild()
const item7 = ul.removeChild(ul.querySelector("#item7")); // removeChild() returns the reference of the deleted node. Storing it in a variable prevents it from being dumped.
console.dir(item7); // item7 is still in the memory

// Attribute (in HTML tags) and Properties (in the DOM object) are live-synced ususally, WITH SOME EXCEPTION
// e.g. <input value=''> --> input.value is 1-way sync. only (so that you don't erase user input)
// The other possible way to do reverse-sync is to use setAttribute() method of the node (but for input.value it only resets the DEFAULT value, not the user input)
