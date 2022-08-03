/**
 * Object Type & Type aliases
 */
// You can define the SHAPE of an object using an OBJECT TYPE (like an "object literal" but for defining types)
//        v `:` here for type declaration, not `=` !!
let person: {
  name: string; // <-- `;` here, not `,`!
  age: number;
};
// The subsequent assignement must have ALL property fields with the correct type:
person = {
  name: "Ben",
  age: 30,
};
// !! This will throw TS error for unmatched types:
person = {
  name: 55,
};

// Type inference also works here:
const person2 = {
  name: "Hi",
  age: 50,
};
// !! Since a type is defined for `person2` already, you CAN'T add new properties like you do for JS!
person2.newString = "Not allowed";

// You can make certain properties OPTIONAL using `?:`
type optionalable = {
  name: string;
  extra?: {
    color?: string;
    dateOfCreation: number;
  }
}

// TYPE ALIASES allows you to define & reuse the same object type (or ANY TS types in general!)
// syntax: `type <alias> = <type>`
type Person = {
  name: string;
  age: number;
};
// Use the type:
const person3: Person = {
  name: "May",
  age: 50,
};

/**
 * Array of object type
 */
// Using object types:
//                type definition         an array of such object type
//        v-----------------------------v v
let people: { name: string; age: number }[];
// Using type aliases:
let people2: Person[];

/**
 * Union types
 */
// You can create UNION TYPES that accept MORE THAN ONE types of values
// Syntax: `<type> | <type>`
type Primitive = string | number | boolean;
let primitive: Primitive = "Hi";

/**
 * Function: parameter & return types
 */
// You can define types for a function's parameters
// For the RETURN type, TS can infer it for us so usually no need explicit declaration
function add(a: number, b: number) {
  //         ^------------------^ We have defined the types of parameters
  return a + b; // So the return type can be inferred ("number")
}
// If you want to explicitly state the return type (usually unnecessary):
function add2(a: number, b: number): string {
  return (a + b).toString();
}
// A funciton that DOES NOT return has the `void` type

/**
 * Object types in parameters
 */
// You can define a type for the parameter:
type sayMsgData = {
  message: string;
  id: number;
}
function sayMsg(data: sayMsgData) {
  return data.message;
}
// You can do object type definition inline as well, but may not be the cleanest way to do so:
function sayMsg2(data: {
  message: string;
  id: number;
}) {
  return data.message;
}
// You can even destructuring:
function sayMsg3({ message }: sayMsgData) {
  return message;
}
