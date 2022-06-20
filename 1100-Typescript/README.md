## Installation

- To install typescript locally in a project:
  `npm install typescript`

- JS engines can't run TS files directly and you must compile it into plain JS first
- To compile a specific typescript file:
  `npx tsc <filename.ts>`
- This will compile to a `.js` file with exactly the same name

## Why we need TS?

- Most languages (especially the strong-typed and compiled ones) will check if you have passed invalid data types to a varaible or function, or accessing non-existing object properties. It won't even allow you to run the code if such errors are caught (typically at _compilation time_)
- JS, on the other hand, is very permissive, e.g. it does a lot of type coercion. A lot of errors associated with such permissive nature are only caught at _run-time_
- TS add expicit type declarations to JS and an extra step of compilation that check for such error. This can catch a lot of errors _when writing code_ and _before running your code_.

- **Erased types:** Note that after compilation, TS will yield plain JS and will have **no type information** in the compiled code. It only checks for errors when compiling.
