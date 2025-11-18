// ============================================
// 03. CONTROL FLOW - CONDITIONALS
// ============================================

// ============================================
// IF STATEMENT
// ============================================

let temperature = 25;

if (temperature > 30) {
    console.log("It's hot outside!");
}

// ============================================
// IF-ELSE STATEMENT
// ============================================

let age = 18;

if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}

// ============================================
// IF-ELSE IF-ELSE STATEMENT
// ============================================

let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}

// ============================================
// SWITCH STATEMENT
// ============================================

let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of the work week");
        break;
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
        console.log("Mid week");
        break;
    case "Friday":
        console.log("TGIF!");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Weekend!");
        break;
    default:
        console.log("Invalid day");
}

// Switch with expressions
let num = 5;

switch (true) {
    case num > 0:
        console.log("Positive number");
        break;
    case num < 0:
        console.log("Negative number");
        break;
    default:
        console.log("Zero");
}

// ============================================
// NESTED CONDITIONALS
// ============================================

let isRaining = true;
let hasUmbrella = false;

if (isRaining) {
    if (hasUmbrella) {
        console.log("You're safe!");
    } else {
        console.log("You'll get wet!");
    }
} else {
    console.log("Enjoy the weather!");
}

// ============================================
// TRUTHY AND FALSY VALUES
// ============================================

// Falsy values: false, 0, "", null, undefined, NaN
// Everything else is truthy

let value = "";

if (value) {
    console.log("Truthy");
} else {
    console.log("Falsy"); // This will execute
}

// Check for specific falsy values
let userInput = null;

if (userInput === null || userInput === undefined) {
    console.log("No input provided");
}

// Better way using nullish coalescing
let result = userInput ?? "No input";
console.log(result);

// ============================================
// SHORT-CIRCUIT EVALUATION
// ============================================

let user = {
    name: "John",
    email: "john@example.com"
};

// If user exists, use user.name, otherwise use "Guest"
let displayName = user && user.name || "Guest";
console.log("Display name:", displayName);

// Modern way with optional chaining
let displayName2 = user?.name ?? "Guest";
console.log("Display name (modern):", displayName2);

