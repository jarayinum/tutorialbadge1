// ============================================
// 06. ARRAYS
// ============================================

// ============================================
// CREATING ARRAYS
// ============================================

// Array literal
let fruits = ["apple", "banana", "orange"];
console.log("Fruits:", fruits);

// Array constructor
let numberss = new Array(1, 2, 3, 4, 5);
console.log("Numbers:", numberss);

// Empty array
let empty = [];
console.log("Empty array:", empty);

// Array with mixed types
let mixed = [1, "hello", true, null, { name: "John" }];
console.log("Mixed array:", mixed);

// ============================================
// ACCESSING ARRAY ELEMENTS
// ============================================

let arr = ["a", "b", "c", "d", "e"];

console.log("First element:", arr[0]); // "a"
console.log("Last element:", arr[arr.length - 1]); // "e"
console.log("Array length:", arr.length); // 5

// ============================================
// ARRAY METHODS - ADDING/REMOVING ELEMENTS
// ============================================

let items = [1, 2, 3];

// push - add to end
items.push(4);
console.log("After push:", items); // [1, 2, 3, 4]

// pop - remove from end
let last = items.pop();
console.log("Popped:", last); // 4
console.log("After pop:", items); // [1, 2, 3]

// unshift - add to beginning
items.unshift(0);
console.log("After unshift:", items); // [0, 1, 2, 3]

// shift - remove from beginning
let firsts = items.shift();
console.log("Shifted:", firsts); // 0
console.log("After shift:", items); // [1, 2, 3]

// ============================================
// ARRAY METHODS - SEARCHING
// ============================================

let names = ["Alice", "Bob", "Charlie", "David"];

// indexOf - find index of element
console.log("Index of Bob:", names.indexOf("Bob")); // 1
console.log("Index of Eve:", names.indexOf("Eve")); // -1 (not found)

// includes - check if element exists
console.log("Includes Charlie:", names.includes("Charlie")); // true
console.log("Includes Eve:", names.includes("Eve")); // false

// find - find first element matching condition
let numbers = [1, 2, 3, 4, 5, 6];
let found = numbers.find(num => num > 3);
console.log("Found:", found); // 4

// findIndex - find index of first matching element
let index = numbers.findIndex(num => num > 3);
console.log("Found index:", index); // 3

// ============================================
// ARRAY METHODS - ITERATION
// ============================================

let nums = [1, 2, 3, 4, 5];

// forEach - execute function for each element
console.log("=== forEach ===");
nums.forEach((num, index) => {
    console.log(`Index ${index}: ${num}`);
});

// map - create new array with transformed values
console.log("=== map ===");
let doubled = nums.map(num => num * 2);
console.log("Doubled:", doubled); // [2, 4, 6, 8, 10]

// filter - create new array with filtered elements
console.log("=== filter ===");
let evens = nums.filter(num => num % 2 === 0);
console.log("Evens:", evens); // [2, 4]

// reduce - reduce array to single value
console.log("=== reduce ===");
let sum = nums.reduce((acc, num) => acc + num, 0);
console.log("Sum:", sum); // 15

// reduceRight - reduce from right to left
let product = nums.reduceRight((acc, num) => acc * num, 1);
console.log("Product:", product); // 120

// ============================================
// ARRAY METHODS - TRANSFORMATION
// ============================================

let arr1 = [1, 2, 3];

// reverse - reverse array (modifies original)
let reversed = arr1.slice().reverse(); // Use slice() to avoid modifying original
console.log("Reversed:", reversed); // [3, 2, 1]

// sort - sort array (modifies original)
let unsorted = [3, 1, 4, 1, 5, 9, 2, 6];
let sorted = [...unsorted].sort(); // Spread to avoid modifying original
console.log("Sorted:", sorted); // [1, 1, 2, 3, 4, 5, 6, 9]

// Custom sort
let sortedDesc = [...unsorted].sort((a, b) => b - a);
console.log("Sorted descending:", sortedDesc); // [9, 6, 5, 4, 3, 2, 1, 1]

// slice - extract portion of array (doesn't modify original)
let original = [1, 2, 3, 4, 5];
let sliced = original.slice(1, 4);
console.log("Sliced:", sliced); // [2, 3, 4]
console.log("Original:", original); // [1, 2, 3, 4, 5] (unchanged)

// splice - add/remove elements (modifies original)
let arr2 = [1, 2, 3, 4, 5];
let removed = arr2.splice(2, 2, "a", "b"); // Remove 2 elements starting at index 2, add "a" and "b"
console.log("Removed:", removed); // [3, 4]
console.log("After splice:", arr2); // [1, 2, "a", "b", 5]

// ============================================
// ARRAY METHODS - CHECKING
// ============================================

let testArr = [1, 2, 3, 4, 5];

// every - check if all elements pass test
let allPositive = testArr.every(num => num > 0);
console.log("All positive:", allPositive); // true

// some - check if any element passes test
let hasEven = testArr.some(num => num % 2 === 0);
console.log("Has even:", hasEven); // true

// ============================================
// ARRAY METHODS - COMBINING
// ============================================

let arr3 = [1, 2, 3];
let arr4 = [4, 5, 6];

// concat - combine arrays
let combined = arr3.concat(arr4);
console.log("Combined:", combined); // [1, 2, 3, 4, 5, 6]

// Spread operator (modern way)
let combined2 = [...arr3, ...arr4];
console.log("Combined (spread):", combined2); // [1, 2, 3, 4, 5, 6]

// join - convert array to string
let words = ["Hello", "World", "JavaScript"];
let sentence = words.join(" ");
console.log("Joined:", sentence); // "Hello World JavaScript"

// ============================================
// MULTI-DIMENSIONAL ARRAYS
// ============================================

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("Matrix element [1][2]:", matrix[1][2]); // 6

// Accessing all elements
matrix.forEach((row, i) => {
    row.forEach((cell, j) => {
        console.log(`Matrix[${i}][${j}] = ${cell}`);
    });
});

// ============================================
// DESTRUCTURING ARRAYS
// ============================================

let colors = ["red", "green", "blue"];

// Basic destructuring
let [firstColor, secondColor] = colors;
console.log("First:", firstColor, "Second:", secondColor);

// Skip elements
let [first, , third] = colors;
console.log("First:", first, "Third:", third);

// Rest operator
let [primary, ...others] = colors;
console.log("Primary:", primary, "Others:", others);

// Default values
let [color1, color2, color3, color4 = "yellow"] = colors;
console.log("Color4:", color4); // "yellow"

