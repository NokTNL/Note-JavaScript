// Changing style: HTMLElement.style
const h1 = document.querySelector("h1");
h1.style.color = "white";
h1.style.backgroundColor = "cyan"; // all CSS properties changed to camel case

// Changing several styles
h1.style.cssText = "color: white; background-color: cyan"; // does the same thing as above
h1.setAttribute("style", "color: white; background-color: cyan"); // same

// Changing the class: .className, .classList
const section = document.querySelector("section");
section.className = "red-bg blue-text"; // makes text blue too
// .classList: .add, .remove, .replace
section.classList.remove("blue-text"); // text turns back to black
// .classList.toggle: add if not present, remove if present (like check/unckecking boxes)
section.classList.toggle("big-text"); // enables 50px font size
