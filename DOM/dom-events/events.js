"use strict";

// addEventListener(event, callback_function)
// event: the type of event you want to listen
// callback_function: once the event is captured, execute the function, passing the *event object* to the callback
const button = document.getElementById("button");
button.addEventListener("mousedown", (event) => {
  document.body.style.backgroundColor = "red";
  console.log(event); // logs the node that triggered the event
});
button.addEventListener("mouseup", (event) => {
  document.body.style.backgroundColor = "white";
});
// use NodeList.forEach() method to add event listener to a group of nodes
const buttonGroup = document.querySelectorAll(".button-group");
buttonGroup.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.id);
  });
});
// !! It is preferred to use static, named function for the callback inside addEventListener,
// otherwise a new function instanc will be created whenever addEventListner is called and
// may cause bugs (multiple identical event listeners attached to an element) and memory issues
// Details: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#memory_issues
//Full list of events: https://developer.mozilla.org/en-US/docs/Web/Events

// Nested elements: when event is triggered, all the event listeners will be looked into in two phases:
// first capturing (top-down), default false
// then bubbling (propagation, bottom-up), default true
document.querySelector("#div1").addEventListener("click", () => {
  console.log("div clicked");
});
document.querySelector("#nested-button1").addEventListener("click", () => {
  console.log("nested-button clicked");
}); // The button event listener is triggered , then it bubbles and the containing div's listener is also triggered
// Activate capturing so that the top listener is triggered first
document.querySelector("#div2").addEventListener("click", () => {
  console.log("div clicked");
});
document.querySelector("#nested-button2").addEventListener(
  "click",
  () => {
    console.log("nested-button clicked");
  },
  { capture: true }
); // now the div listener is triggered first, then the button
// prevent bubbling: use event.stopPropagation()
document.querySelector("#div3").addEventListener("click", () => {
  console.log("div clicked");
});
document.querySelector("#nested-button3").addEventListener(
  "click",
  // need to pass the event
  (event) => {
    console.log("nested-button clicked");
    event.stopPropagation(); // in the callback
  }
); // now only the button is triggered
// !! not ALL events propagates, e.g. mouseenter
