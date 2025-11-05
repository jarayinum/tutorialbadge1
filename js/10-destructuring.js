// ============================================
// 10. DESTRUCTURING
// ============================================

// ============================================
// ARRAY DESTRUCTURING
// ============================================

let colors = ["red", "green", "blue"];

// Basic destructuring
let [first, second, third] = colors;
console.log("First:", first); // "red"
console.log("Second:", second); // "green"
console.log("Third:", third); // "blue"

// Skip elements
let [primary, , tertiary] = colors;
console.log("Primary:", primary); // "red"
console.log("Tertiary:", tertiary); // "blue"

// Default values
let numbers = [1, 2];
let [a, b, c = 3] = numbers;
console.log("C (default):", c); // 3

// Rest operator
let [firstColor, ...otherColors] = colors;
console.log("First:", firstColor); // "red"
console.log("Others:", otherColors); // ["green", "blue"]

// Swap variables
let x = 10;
let y = 20;
[x, y] = [y, x];
console.log("X:", x, "Y:", y); // X: 20, Y: 10

// ============================================
// OBJECT DESTRUCTURING
// ============================================

let person = {
    name: "John",
    age: 30,
    city: "New York",
    email: "john@example.com"
};

// Basic destructuring
let { name, age } = person;
console.log("Name:", name); // "John"
console.log("Age:", age); // 30

// Rename variables
let { name: personName, age: personAge } = person;
console.log("Person name:", personName); // "John"

// Default values
let { name: userName, country = "USA" } = person;
console.log("Country:", country); // "USA" (default)

// Nested destructuring
let employee = {
    name: "Alice",
    address: {
        street: "123 Main St",
        city: "Boston",
        zipCode: "02101"
    }
};

let { address: { city, zipCode } } = employee;
console.log("City:", city); // "Boston"
console.log("Zip:", zipCode); // "02101"

// Destructure with rest
let { name: empName, ...rest } = employee;
console.log("Name:", empName);
console.log("Rest:", rest); // { address: {...} }

// ============================================
// DESTRUCTURING IN FUNCTION PARAMETERS
// ============================================

// Array parameters
function sum([a, b, c = 0]) {
    return a + b + c;
}

console.log("Sum:", sum([1, 2, 3])); // 6
console.log("Sum with default:", sum([1, 2])); // 3

// Object parameters
function greet({ name, age = 0, city = "Unknown" }) {
    return `Hello, ${name}! You are ${age} years old from ${city}.`;
}

console.log(greet({ name: "Bob", age: 25, city: "Seattle" }));
console.log(greet({ name: "Alice" })); // Uses defaults

// ============================================
// DESTRUCTURING WITH SPREAD OPERATOR
// ============================================

// Array spreading
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2];
console.log("Combined:", combined); // [1, 2, 3, 4, 5, 6]

// Copy array
let original = [1, 2, 3];
let copy = [...original];
copy.push(4);
console.log("Original:", original); // [1, 2, 3]
console.log("Copy:", copy); // [1, 2, 3, 4]

// Object spreading
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let merged = { ...obj1, ...obj2 };
console.log("Merged:", merged); // { a: 1, b: 2, c: 3, d: 4 }

// Override properties
let base = { x: 1, y: 2 };
let override = { y: 3, z: 4 };
let result = { ...base, ...override };
console.log("Result:", result); // { x: 1, y: 3, z: 4 }

// Copy object
let originalObj = { name: "John", age: 30 };
let copyObj = { ...originalObj };
copyObj.age = 31;
console.log("Original:", originalObj); // { name: "John", age: 30 }
console.log("Copy:", copyObj); // { name: "John", age: 31 }

// ============================================
// DESTRUCTURING IN LOOPS
// ============================================

let users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];

// Destructure in for...of loop
for (let { name, age } of users) {
    console.log(`${name} is ${age} years old`);
}

// Destructure Object.entries()
let personData = {
    name: "John",
    age: 30,
    city: "NYC"
};

for (let [key, value] of Object.entries(personData)) {
    console.log(`${key}: ${value}`);
}

// ============================================
// COMPLEX DESTRUCTURING EXAMPLES
// ============================================

// Destructure from function return
function getCoordinates() {
    return [10, 20, 30];
}

let [x1, y1, z1] = getCoordinates();
console.log("Coordinates:", x1, y1, z1);

// Destructure nested arrays
let matrix = [
    [1, 2],
    [3, 4],
    [5, 6]
];

let [[a1, b1], [c1, d1]] = matrix;
console.log("Matrix destructured:", a1, b1, c1, d1);

// Destructure with computed property names
let prop = "name";
let { [prop]: value } = { name: "John" };
console.log("Computed property:", value); // "John"

// ============================================
// PRACTICAL EXAMPLES
// ============================================

// React/API response handling
let apiResponse = {
    status: "success",
    data: {
        users: [
            { id: 1, name: "Alice" },
            { id: 2, name: "Bob" }
        ],
        total: 2
    }
};

let { data: { users, total } } = apiResponse;
console.log("Users:", users);
console.log("Total:", total);

// Function with multiple return values
function getStats(numbers) {
    return {
        min: Math.min(...numbers),
        max: Math.max(...numbers),
        sum: numbers.reduce((a, b) => a + b, 0),
        avg: numbers.reduce((a, b) => a + b, 0) / numbers.length
    };
}

let stats = getStats([1, 2, 3, 4, 5]);
let { min, max, sum, avg } = stats;
console.log("Min:", min, "Max:", max, "Sum:", sum, "Avg:", avg);

// Extract specific properties
let product = {
    id: 1,
    name: "Laptop",
    price: 999,
    category: "Electronics",
    description: "A great laptop"
};

// Only extract what we need
let { name: productName, price } = product;
console.log("Product:", productName, "Price:", price);

