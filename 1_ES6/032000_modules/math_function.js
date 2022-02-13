// Export
const add = (x, y) => x + y;
export { add }; // can only be imported into other files when 'export' is present
// {} after "export" keyword must be present
// or shorter:
export const subtract = (x, y) => x - y;
// !! Variables can't be exported twice
// export { add } // SyntaxError: Duplicate export of 'add'

// multiple export:
const foo = "FOO";
const bar = "BAR";
export { foo, bar };

// Default export: what to export if the importing file doesn't specify what to import
// !! Only one value can be passed to export default.
// !! Having another export default statement below will show error.
export default function (x) {
  // this function can also be named, but will be ignored
  return x;
}
// !!'export default' followed by var, let, const is not allowed:
// export default let test = 5; // error
// However this will work:
// let test = 5;
// export default test;

const whee = "whee";
// The only code that will output something in this file
console.log("WHEE");
