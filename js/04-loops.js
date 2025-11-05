// ============================================
// 04. LOOPS
// ============================================

// ============================================
// FOR LOOP
// ============================================

console.log("=== FOR LOOP ===");
for (let i = 0; i < 5; i++) {
    console.log("Iteration:", i);
}

// Loop with step
console.log("=== FOR LOOP (step 2) ===");
for (let i = 0; i < 10; i += 2) {
    console.log("Even numbers:", i);
}

// Reverse loop
console.log("=== REVERSE FOR LOOP ===");
for (let i = 5; i > 0; i--) {
    console.log("Countdown:", i);
}

// ============================================
// WHILE LOOP
// ============================================

console.log("=== WHILE LOOP ===");
let counter = 0;
while (counter < 5) {
    console.log("Counter:", counter);
    counter++;
}

// Example: Continue until condition is met
let number = 1;
while (number <= 10) {
    if (number % 2 === 0) {
        console.log("Even:", number);
    }
    number++;
}

// ============================================
// DO-WHILE LOOP
// ============================================

console.log("=== DO-WHILE LOOP ===");
let x = 0;
do {
    console.log("Value:", x);
    x++;
} while (x < 3);

// Do-while executes at least once
let y = 10;
do {
    console.log("This runs once:", y);
} while (y < 5);

// ============================================
// FOR...OF LOOP (Arrays and Strings)
// ============================================

console.log("=== FOR...OF LOOP ===");
let fruits = ["apple", "banana", "orange"];

for (let fruit of fruits) {
    console.log("Fruit:", fruit);
}

// With strings
let text = "Hello";
for (let char of text) {
    console.log("Character:", char);
}

// ============================================
// FOR...IN LOOP (Objects)
// ============================================

console.log("=== FOR...IN LOOP ===");
let person = {
    name: "John",
    age: 30,
    city: "New York"
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// ============================================
// LOOP CONTROL - BREAK
// ============================================

console.log("=== BREAK STATEMENT ===");
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Exit the loop
    }
    console.log("Number:", i);
}

// ============================================
// LOOP CONTROL - CONTINUE
// ============================================

console.log("=== CONTINUE STATEMENT ===");
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // Skip to next iteration
    }
    console.log("Odd number:", i);
}

// ============================================
// NESTED LOOPS
// ============================================

console.log("=== NESTED LOOPS ===");
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`i=${i}, j=${j}`);
    }
}

// Multiplication table example
console.log("=== MULTIPLICATION TABLE ===");
for (let i = 1; i <= 3; i++) {
    let row = "";
    for (let j = 1; j <= 3; j++) {
        row += `${i * j}\t`;
    }
    console.log(row);
}

// ============================================
// ARRAY METHODS (Functional Looping)
// ============================================

let numbers = [1, 2, 3, 4, 5];

// forEach - executes function for each element
console.log("=== forEach ===");
numbers.forEach((num, index) => {
    console.log(`Index ${index}: ${num}`);
});

// map - creates new array with transformed values
console.log("=== map ===");
let doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled);

// filter - creates new array with filtered elements
console.log("=== filter ===");
let evens = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evens);

// reduce - reduces array to single value
console.log("=== reduce ===");
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum:", sum);

