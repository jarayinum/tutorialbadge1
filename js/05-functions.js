// ============================================
// 05. FUNCTIONS
// ============================================

// ============================================
// FUNCTION DECLARATION
// ============================================

function calculator(firstValue, secondValue, operation) {
  let c = 0;
  if (operation == "addition") {
    c = firstValue + secondValue;
    console.log(`Result:${c}`);
  } else if (operation == "multiple") {
    c = firstValue * secondValue;
    console.log(`Result:${c}`);
  } else if (operation == "subtraction") {
    c = firstValue - secondValue;
    console.log(`Result:${c}`);
  } else if (operation == "division") {
    c = firstValue / secondValue;
    console.log(`Result:${c}`);
  } else {
    console.log(`Invalid Operationn`);
  }
  return c;
}

let total = calculator(10, 2, "multiple");

function greet(name) {
  return `Hello, ${name}!`;
}
let result = greet("Muni");

console.log(greet("John")); // "Hello, John!"

// Function with multiple parameters
function add(a, b) {
  return a + b;
}

console.log("Sum:", add(5, 3)); // 8

// Function with default parameters
function greetWithDefault(name = "Guest") {
  return `Hello, ${name}!`;
}

console.log(greetWithDefault()); // "Hello, Guest!"
console.log(greetWithDefault("Alice")); // "Hello, Alice!"

// ============================================
// FUNCTION EXPRESSION
// ============================================

const subtract = function (a, b) {
  return a - b;
};

console.log("Difference:", subtract(10, 4)); // 6

// ============================================
// ARROW FUNCTIONS (ES6)
// ============================================

// Basic arrow function
const multiply = (a, b) => {
  return a * b;
};

console.log("Product:", multiply(4, 5)); // 20

// Arrow function with single expression (implicit return)
const divide = (a, b) => a / b;

console.log("Quotient:", divide(20, 4)); // 5

// Arrow function with single parameter (no parentheses needed)
const square = (x) => x * x;

console.log("Square:", square(5)); // 25

// Arrow function with no parameters
const sayHello = () => "Hello!";

console.log(sayHello());

// ============================================
// REST PARAMETERS
// ============================================

function sumAll(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}

console.log("Sum all:", sumAll(1, 2, 3, 4, 5)); // 15

// ============================================
// SPREAD OPERATOR
// ============================================

const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
const combined = [...numbers1, ...numbers2];

console.log("Combined:", combined); // [1, 2, 3, 4, 5, 6]

// ============================================
// HIGHER-ORDER FUNCTIONS
// ============================================

// Function that takes another function as parameter
function operate(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

let results = operate(2, 4, add);

const result1 = operate(10, 5, (x, y) => x + y);
const result2 = operate(10, 5, (x, y) => x * y);

console.log("Operation result 1:", result1); // 15
console.log("Operation result 2:", result2); // 50

// ============================================
// CALLBACK FUNCTIONS
// ============================================

function processData(a, b, callback) {
  console.log("Processing data:", a + b);
  c = a + b;
  callback(c);
}

processData(2, 4, (result) => {
  console.log("Callback executed with:", result * 10);
});

// ============================================
// FUNCTION RETURNING FUNCTION
// ============================================

function createMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log("Double:", double(5)); // 10
console.log("Triple:", triple(5)); // 15

// ============================================
// IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)
// ============================================

(function () {
  console.log("IIFE executed immediately!");
})();

// IIFE with parameters
(function (name) {
  console.log(`Hello from IIFE, ${name}!`);
})("John");

// ============================================
// RECURSIVE FUNCTIONS
// ============================================

function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log("Factorial of 5:", factorial(5)); // 120

// Fibonacci sequence
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("Fibonacci(6):", fibonacci(6)); // 8

// ============================================
// FUNCTION HOISTING
// ============================================

// Function declarations are hoisted
sayHi(); // This works!

function sayHi() {
  console.log("Hi!");
}

// Function expressions are NOT hoisted
// sayBye(); // This would cause an error

const sayBye = function () {
  console.log("Bye!");
};

sayBye(); // This works here
