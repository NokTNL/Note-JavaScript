/**
 * Primitives: string, number, boolean
 */
// Choosing type in variable declarations: simply add `: <type>` after the var name
let age: number;
let userName: string;
let isInstructor: boolean;
// Subsequent assignment will not allow values that do not match the type

/**
 * Arrays
 */
// The syntax is `<type>[]`
let hobbies: string[];
hobbies = ["Sports", "Cookies"]; // <-- legal assignment

/**
 * Type inference
 */
// TS tries to get a type of a variable for you as much as possible
// If you initialise a variable with a primitive value IMMEDIATELY after declaration, it will BIND THAT TYPE for you without declaring a type explicitly
let myVar = 15; // <-- automatically inferred as "number" type
// myVar = "Hey"; <-- cannot assign a string afterwards
// !!! Use type inference whenever possible to reduce the amount of code and improve clarity

/**
 * `any` type
 */
// A variable can also have a type of `any`. It basically means TS will NOT check types for any operations done on the variable
let anyType: any = 3;
anyType = "Hi"; // <--- possible!
// If no types are given to a variable, TS compiler will default it to an `any` type IMPLICITLY
let implicitAny; // This will have `any` type implicitly
implicitAny = 3; // <-- assigning a primitive type afterwards will NOT change its type to `number`
implicitAny = "Hi"; // <-- still possible!
// !!! Implicit `any` is NOT recommended; turn implicit `any` off in the config by stating `noImplicitAny`
