// ============================================
// 14. TEMPLATE LITERALS
// ============================================

// ============================================
// BASIC TEMPLATE LITERALS
// ============================================

let name = "John";
let age = 30;

// Old way (string concatenation)
let oldWay = "Hello, " + name + "! You are " + age + " years old.";

// Template literal (modern way)
let newWay = `Hello, ${name}! You are ${age} years old.`;

console.log("Old way:", oldWay);
console.log("New way:", newWay);

// ============================================
// MULTILINE STRINGS
// ============================================

// Old way
let oldMultiline = "Line 1\n" +
                   "Line 2\n" +
                   "Line 3";

// Template literal
let newMultiline = `Line 1
Line 2
Line 3`;

console.log("Multiline:", newMultiline);

// ============================================
// EXPRESSIONS IN TEMPLATE LITERALS
// ============================================

let a = 5;
let b = 10;

let calculation = `Sum: ${a + b}`;
let comparison = `${a} is ${a > b ? "greater" : "less"} than ${b}`;

console.log("Calculation:", calculation);
console.log("Comparison:", comparison);

// ============================================
// TAGGED TEMPLATE LITERALS
// ============================================

function highlight(strings, ...values) {
    return strings.reduce((result, string, i) => {
        return result + string + (values[i] ? `<mark>${values[i]}</mark>` : "");
    }, "");
}

let name2 = "Alice";
let score = 95;

let highlighted = highlight`Student ${name2} scored ${score} points.`;
console.log("Highlighted:", highlighted);

// ============================================
// STRING METHODS WITH TEMPLATE LITERALS
// ============================================

let text = `Hello World`;

console.log("StartsWith:", text.startsWith("Hello")); // true
console.log("EndsWith:", text.endsWith("World")); // true
console.log("Includes:", text.includes("lo")); // true
console.log("Repeat:", text.repeat(3)); // "Hello WorldHello WorldHello World"

