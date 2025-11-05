// ============================================
// 01. VARIABLES AND DATA TYPES
// ============================================

// VAR - Function scoped (older way)
var oldVariable = "I'm using var";
console.log(oldVariable);

// LET - Block scoped (can be reassigned)
let changeableVariable = "I can change";
changeableVariable = "I changed!";
console.log(changeableVariable);

// CONST - Block scoped (cannot be reassigned)
const constantVariable = "I cannot change";
// constantVariable = "Error!"; // This would cause an error
console.log(constantVariable);

// ============================================
// DATA TYPES
// ============================================

// 1. PRIMITIVE TYPES

// String
let name = "John Doe";
let greeting = 'Hello World';
let template = `Hello ${name}`; // Template literal
console.log("String:", name, greeting, template);

// Number
let integer = 42;
let decimal = 3.14;
let negative = -10;
console.log("Numbers:", integer, decimal, negative);

// Boolean
let isTrue = true;
let isFalse = false;
console.log("Booleans:", isTrue, isFalse);

// Undefined
let undefinedVar;
console.log("Undefined:", undefinedVar);

// Null
let nullVar = null;
console.log("Null:", nullVar);

// Symbol (ES6)
let uniqueId = Symbol("id");
console.log("Symbol:", uniqueId);

// BigInt (ES2020)
let bigNumber = 9007199254740991n;
console.log("BigInt:", bigNumber);

// ============================================
// TYPE CHECKING
// ============================================

console.log("Type of name:", typeof name); // "string"
console.log("Type of integer:", typeof integer); // "number"
console.log("Type of isTrue:", typeof isTrue); // "boolean"
console.log("Type of undefinedVar:", typeof undefinedVar); // "undefined"
console.log("Type of nullVar:", typeof nullVar); // "object" (this is a JavaScript quirk!)

// ============================================
// TYPE CONVERSION
// ============================================

// String to Number
let stringNumber = "123";
let convertedNumber = Number(stringNumber);
let parsedNumber = parseInt("123");
let parsedFloat = parseFloat("123.45");
console.log("String to Number:", convertedNumber, parsedNumber, parsedFloat);

// Number to String
let num = 456;
let stringFromNum = String(num);
let stringFromNum2 = num.toString();
console.log("Number to String:", stringFromNum, stringFromNum2);

// Boolean conversion
let truthy = Boolean(1); // true
let falsy = Boolean(0); // false
let truthyString = Boolean("hello"); // true
let falsyString = Boolean(""); // false
console.log("Boolean conversion:", truthy, falsy, truthyString, falsyString);

