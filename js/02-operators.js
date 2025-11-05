// ============================================
// 02. OPERATORS
// ============================================

// ============================================
// ARITHMETIC OPERATORS
// ============================================

let a = 10;
let b = 3;

console.log("Addition (+):", a + b); // 13
console.log("Subtraction (-):", a - b); // 7
console.log("Multiplication (*):", a * b); // 30
console.log("Division (/):", a / b); // 3.333...
console.log("Modulus (%):", a % b); // 1 (remainder)
console.log("Exponentiation (**):", a ** b); // 1000 (10^3)
console.log("Increment (++):", ++a); // 11 (pre-increment)
console.log("Decrement (--):", --a); // 10 (pre-decrement)

let x = 5;
console.log("Post-increment:", x++); // 5 (returns then increments)
console.log("After increment:", x); // 6

// ============================================
// ASSIGNMENT OPERATORS
// ============================================

let num = 10;
num += 5; // num = num + 5 (15)
console.log("+= operator:", num);
num -= 3; // num = num - 3 (12)
console.log("-= operator:", num);
num *= 2; // num = num * 2 (24)
console.log("*= operator:", num);
num /= 4; // num = num / 4 (6)
console.log("/= operator:", num);
num %= 4; // num = num % 4 (2)
console.log("%= operator:", num);

// ============================================
// COMPARISON OPERATORS
// ============================================

let val1 = 5;
let val2 = "5";
let val3 = 10;

// Equality (==) - checks value only (type coercion)
console.log("val1 == val2:", val1 == val2); // true

// Strict Equality (===) - checks value and type
console.log("val1 === val2:", val1 === val2); // false

// Inequality (!=) - checks value only
console.log("val1 != val3:", val1 != val3); // true

// Strict Inequality (!==) - checks value and type
console.log("val1 !== val2:", val1 !== val2); // true

// Greater than (>)
console.log("val3 > val1:", val3 > val1); // true

// Less than (<)
console.log("val1 < val3:", val1 < val3); // true

// Greater than or equal (>=)
console.log("val1 >= 5:", val1 >= 5); // true

// Less than or equal (<=)
console.log("val1 <= 10:", val1 <= 10); // true

// ============================================
// LOGICAL OPERATORS
// ============================================

let isAdult = true;
let hasLicense = false;

// AND (&&) - returns true if both are true
console.log("AND:", isAdult && hasLicense); // false

// OR (||) - returns true if at least one is true
console.log("OR:", isAdult || hasLicense); // true

// NOT (!) - reverses boolean value
console.log("NOT:", !isAdult); // false
console.log("NOT:", !hasLicense); // true

// ============================================
// TERNARY OPERATOR (Conditional Operator)
// ============================================

let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log("Ternary result:", status); // "Adult"

// Nested ternary
let grade = 85;
let result = grade >= 90 ? "A" : grade >= 80 ? "B" : grade >= 70 ? "C" : "F";
console.log("Grade:", result); // "B"

// ============================================
// NULLISH COALESCING (??)
// ============================================

let userName = null;
let defaultName = "Guest";
let displayName = userName ?? defaultName; // "Guest"
console.log("Nullish coalescing:", displayName);

let count = 0;
let result2 = count ?? 10; // 0 (not null/undefined, so returns 0)
console.log("Nullish coalescing with 0:", result2);

// ============================================
// OPTIONAL CHAINING (?.)
// ============================================

let person = {
    name: "John",
    address: {
        city: "New York"
    }
};

console.log("Optional chaining:", person?.address?.city); // "New York"
console.log("Optional chaining (undefined):", person?.address?.zipCode); // undefined (no error)

// ============================================
// TYPE OPERATORS
// ============================================

console.log("Typeof:", typeof "hello"); // "string"
console.log("Instanceof:", [] instanceof Array); // true

