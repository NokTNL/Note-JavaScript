/**
 * Generic functions (Generics)
 */
// https://www.typescriptlang.org/docs/handbook/2/functions.html#generic-functions
// Generics are functions that are reusable for different TYPES
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

// One way of working around this is to use TYPE VARIABLES, which is a `wildcard` for types:
//                 v You can use the type variable throughout the function;
//                 v Put it before the parameters, syntax: `<generic>(params)`
//                 v `T` stands for type; typically `T` is used but you can name it whatever you want
function identity3<T>(value: T) {
  return value;
}

// To do that in arrow functions:
const arrowFuncGeneric = <T>(value: T) => {
  return value;
};

// Note that TS can usually INFER <T> <--FROM-- ARGUMENTS in actual function call:
const myString3 = identity3(300); // TS can infer that T is the NUMBER type
myString3.split(" "); // This gives TS error as `split` is not a method for a number

// Example of MULTIPLE type inference:
function map<Input, Output>(arr: Input[], func: (arg: Input) => Output) {
  return arr.map(func);
}
const parsed = map(["1", "2", "3"], (n) => parseInt(n));
//                                         ^ <Ouput> inferred as number
//                     /-------------^ <Input> inferred already, so = string as well
//                 ^ <Input> = string
//

/**
 * Explicitlt defining <Type> at execution
 */
// Type inference for generics do not always work as expected
const combine = <Type>(arr1: Type[], arr2: Type[]) => {
  return arr1.concat(arr2);
};
// Now we try to combine a string[] and number[] (the inferred T should be `string | number`), but it does not work:
const arr = combine([1, 2, 3], ["hello", "bye"]); // TS got the inference from the FIRST parameter (number[]) so cannot accept string[]
// Just explicitly state the union type with the syntax `combine<T>` (at EXECUTION, not at declaration!):
const arr2 = combine<string | number>([1, 2, 3], ["hello", "bye"]); // TS got the inference from the first parameter
// the return type will be `(string | number)[]`

/**
 * Generic function types
 */
// A function type can be made generic as well. Declaration is similar to generic arrow functions.
type GenericFunc = <T>(value: T) => T;
let myGenericFunc: GenericFunc;
// Interface version: (using call signature)
interface GenericInterface {
  <T>(value: T): T;
}
