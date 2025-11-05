// ============================================
// 07. OBJECTS
// ============================================

// ============================================
// CREATING OBJECTS
// ============================================

// Object literal
let person = {
    name: "John Doe",
    age: 30,
    city: "New York"
};

console.log("Person:", person);

// Object constructor
let car = new Object();
car.make = "Toyota";
car.model = "Camry";
car.year = 2020;

console.log("Car:", car);

// ============================================
// ACCESSING OBJECT PROPERTIES
// ============================================

let student = {
    name: "Alice",
    age: 20,
    grade: "A"
};

// Dot notation
console.log("Name:", student.name);
console.log("Age:", student.age);

// Bracket notation
console.log("Name:", student["name"]);
console.log("Grade:", student["grade"]);

// Dynamic property access
let propertyName = "age";
console.log("Dynamic access:", student[propertyName]);

// ============================================
// MODIFYING OBJECT PROPERTIES
// ============================================

let book = {
    title: "JavaScript Guide",
    author: "John Smith"
};

// Add property
book.pages = 300;
book["isbn"] = "123-456-789";

console.log("Book:", book);

// Modify property
book.title = "Advanced JavaScript";
console.log("Updated book:", book);

// Delete property
delete book.isbn;
console.log("After delete:", book);

// ============================================
// OBJECT METHODS
// ============================================

let calculator = {
    num1: 10,
    num2: 5,
    
    // Method
    add: function() {
        return this.num1 + this.num2;
    },
    
    // Shorthand method (ES6)
    subtract() {
        return this.num1 - this.num2;
    },
    
    // Arrow function (be careful with 'this')
    multiply: () => {
        // Arrow functions don't have their own 'this'
        // This would refer to the outer scope
        return calculator.num1 * calculator.num2;
    }
};

console.log("Add:", calculator.add()); // 15
console.log("Subtract:", calculator.subtract()); // 5
console.log("Multiply:", calculator.multiply()); // 50

// ============================================
// NESTED OBJECTS
// ============================================

let employee = {
    name: "Bob",
    age: 35,
    address: {
        street: "123 Main St",
        city: "Boston",
        zipCode: "02101"
    },
    hobbies: ["reading", "coding", "traveling"]
};

console.log("Employee city:", employee.address.city);
console.log("First hobby:", employee.hobbies[0]);

// ============================================
// OBJECT METHODS - ITERATION
// ============================================

let user = {
    name: "Charlie",
    email: "charlie@example.com",
    role: "admin"
};

// for...in loop
console.log("=== for...in ===");
for (let key in user) {
    console.log(`${key}: ${user[key]}`);
}

// Object.keys() - get all keys
console.log("=== Object.keys() ===");
let keys = Object.keys(user);
console.log("Keys:", keys);

// Object.values() - get all values
console.log("=== Object.values() ===");
let values = Object.values(user);
console.log("Values:", values);

// Object.entries() - get key-value pairs
console.log("=== Object.entries() ===");
let entries = Object.entries(user);
console.log("Entries:", entries);

entries.forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});

// ============================================
// OBJECT DESTRUCTURING
// ============================================

let product = {
    name: "Laptop",
    price: 999,
    brand: "TechCorp"
};

// Basic destructuring
let { name, price } = product;
console.log("Name:", name, "Price:", price);

// Renaming variables
let { name: productName, price: productPrice } = product;
console.log("Product name:", productName);

// Default values
let { name: itemName, stock = 0 } = product;
console.log("Stock:", stock); // 0 (default)

// Nested destructuring
let company = {
    name: "Acme Corp",
    location: {
        city: "Seattle",
        country: "USA"
    }
};

let { location: { city, country } } = company;
console.log("City:", city, "Country:", country);

// ============================================
// SPREAD OPERATOR WITH OBJECTS
// ============================================

let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };

// Combine objects
let combined = { ...obj1, ...obj2 };
console.log("Combined:", combined);

// Override properties
let obj3 = { a: 1, b: 2 };
let obj4 = { b: 3, c: 4 };
let merged = { ...obj3, ...obj4 };
console.log("Merged:", merged); // { a: 1, b: 3, c: 4 }

// ============================================
// OBJECT METHODS - CHECKING
// ============================================

let testObj = { x: 1, y: 2 };

// hasOwnProperty - check if property exists
console.log("Has x:", testObj.hasOwnProperty("x")); // true
console.log("Has z:", testObj.hasOwnProperty("z")); // false

// 'in' operator
console.log("'x' in object:", "x" in testObj); // true

// Object.hasOwn() - modern way (ES2022)
console.log("Object.hasOwn():", Object.hasOwn(testObj, "x")); // true

// ============================================
// THIS KEYWORD
// ============================================

let person2 = {
    firstName: "Jane",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

console.log("Full name:", person2.fullName()); // "Jane Doe"

// 'this' context can change
let person3 = {
    name: "Alice",
    greet: function() {
        console.log("Hello, " + this.name);
    }
};

person3.greet(); // "Hello, Alice"

let greetFunc = person3.greet;
// greetFunc(); // Would print "Hello, undefined" (lost context)

// Bind to preserve context
let boundGreet = person3.greet.bind(person3);
boundGreet(); // "Hello, Alice"

// ============================================
// OBJECT CONSTRUCTOR AND CLASSES
// ============================================

// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.introduce = function() {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    };
}

let person1 = new Person("Bob", 25);
console.log(person1.introduce());

// ES6 Class
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    
    speak() {
        return `${this.name} makes a sound.`;
    }
}

let dog = new Animal("Buddy", "Dog");
console.log(dog.speak()); // "Buddy makes a sound."

