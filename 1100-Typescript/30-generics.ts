/**
 * Generics in functions
 */
// https://www.typescriptlang.org/docs/handbook/2/functions.html#generic-functions
// Generics can be used to make a function reusable for different types of input but still preserves the type information
// E.g.
function identity(value: number) {
  return value;
}
// This function seems to be usable for any data type. Imagine in a strong-typed language without an `any` type and no function overloading, there is NO WAY you can do this (will throw error when input type does not match expected types)
// With `any`, you can do this:
function identity2(value: any) {
  return value;
}
// The problem is now there is NO type checking possible at COMPILATION TIME on the value we receive from this function. The type info is LOST when we allow return `any`.
// For example, TS can't catch this error:
const myString2: string = identity2(300); // <-- accidentally input a number to it but expected string
myString2.split(" "); // <-- `split` is a method for Strings only, but TS thinks it is of type `any` so won't check it at all! This will only throw error at runtime

// One way of working around this is to use GENERICS, which is a `wildcard` for types:
//                 v This is the GENERIC type that we can use throughout the function;
//                 v Put the generic before the parameters, syntax: `<generic>(params)`
//                 v `T` stands for type; typically `T` is used but you can name it whatever you want
function identity3<T>(value: T) {
  return value;
}

// To do that in arrow functions:
const arrowFuncWithGenerics = <T>(value: T) => {
  return value;
}

const myString3 = identity3(300); // Now TS can infer T is the NUMBER type
myString3.split(" "); // This gives TS error as `split` is not a method for a number

/**
 * Explicitly state types in generic functions
 */
// Usually TS can infer the type from the parameters, but it does not always work
function combine<Type>(arr1: Type[], arr2: Type[]){
  return arr1.concat(arr2);
}

// Now we try to combine a string[] and number[] (the inferred T should be `string | number`), but it does not work:
const arr = combine([1, 2, 3], ["hello", "bye"]); // TS got the inference from the first parameter (number[]) so cannot accept string[]
// Just explicitly state the union type with the syntax `combine<T>` (at EXECUTION, not at declaration!):
const arr2 = combine<string | number>([1, 2, 3], ["hello", "bye"]); // TS got the inference from the first parameter
// the return type will be `(string | number)[]`
