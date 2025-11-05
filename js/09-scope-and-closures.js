// ============================================
// 09. SCOPE AND CLOSURES
// ============================================

// ============================================
// GLOBAL SCOPE
// ============================================

let globalVar = "I'm global";

function testGlobalScope() {
    console.log("Global var:", globalVar); // Can access global
}

testGlobalScope();

// ============================================
// FUNCTION SCOPE
// ============================================

function functionScopeExample() {
    let functionVar = "I'm in function scope";
    console.log("Function var:", functionVar);
    
    // Inner function can access outer function's variables
    function innerFunction() {
        console.log("Accessing function var:", functionVar);
    }
    
    innerFunction();
}

functionScopeExample();
// console.log(functionVar); // Error! functionVar is not accessible here

// ============================================
// BLOCK SCOPE
// ============================================

function blockScopeExample() {
    if (true) {
        let blockVar = "I'm in block scope";
        const blockConst = "I'm also in block scope";
        var functionScopedVar = "I'm function scoped";
        
        console.log("Block var:", blockVar);
        console.log("Block const:", blockConst);
        console.log("Function scoped var:", functionScopedVar);
    }
    
    // console.log(blockVar); // Error! blockVar is not accessible
    // console.log(blockConst); // Error! blockConst is not accessible
    console.log("Function scoped var (outside block):", functionScopedVar); // Works!
}

blockScopeExample();

// ============================================
// LEXICAL SCOPE
// ============================================

let outerVar = "I'm outer";

function outerFunction() {
    let middleVar = "I'm middle";
    
    function innerFunction() {
        let innerVar = "I'm inner";
        
        // Can access all outer scopes
        console.log("Inner accessing:", outerVar);
        console.log("Inner accessing:", middleVar);
        console.log("Inner accessing:", innerVar);
    }
    
    innerFunction();
    // console.log(innerVar); // Error! innerVar is not accessible
}

outerFunction();

// ============================================
// CLOSURES
// ============================================

// Closure: A function that has access to variables from its outer scope
// even after the outer function has returned

function outerFunction2() {
    let count = 0;
    
    // Inner function forms a closure
    return function() {
        count++;
        return count;
    };
}

const counter = outerFunction2();
console.log("Counter 1:", counter()); // 1
console.log("Counter 2:", counter()); // 2
console.log("Counter 3:", counter()); // 3

// Each closure has its own independent state
const counter2 = outerFunction2();
console.log("Counter2 1:", counter2()); // 1 (independent)
console.log("Counter 1:", counter()); // 4 (first counter continues)

// ============================================
// CLOSURE EXAMPLE - PRIVATE VARIABLES
// ============================================

function createBankAccount(initialBalance) {
    let balance = initialBalance; // Private variable
    
    return {
        deposit: function(amount) {
            balance += amount;
            return balance;
        },
        withdraw: function(amount) {
            if (amount <= balance) {
                balance -= amount;
                return balance;
            }
            return "Insufficient funds";
        },
        getBalance: function() {
            return balance;
        }
    };
}

let account = createBankAccount(100);
console.log("Initial balance:", account.getBalance()); // 100
console.log("After deposit:", account.deposit(50)); // 150
console.log("After withdraw:", account.withdraw(30)); // 120
// console.log(balance); // Error! balance is not accessible

// ============================================
// CLOSURE EXAMPLE - FUNCTION FACTORY
// ============================================

function createMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);
const quadruple = createMultiplier(4);

console.log("Double 5:", double(5)); // 10
console.log("Triple 5:", triple(5)); // 15
console.log("Quadruple 5:", quadruple(5)); // 20

// ============================================
// CLOSURE IN LOOPS - COMMON PITFALL
// ============================================

// Problem: All functions reference the same variable
console.log("=== CLOSURE PITFALL ===");
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log("Var i:", i); // Prints 3, 3, 3
    }, 100);
}

// Solution 1: Use let instead of var
for (let j = 0; j < 3; j++) {
    setTimeout(function() {
        console.log("Let j:", j); // Prints 0, 1, 2
    }, 200);
}

// Solution 2: Use IIFE (Immediately Invoked Function Expression)
for (var k = 0; k < 3; k++) {
    (function(index) {
        setTimeout(function() {
            console.log("IIFE k:", index); // Prints 0, 1, 2
        }, 300);
    })(k);
}

// Solution 3: Use bind
for (var l = 0; l < 3; l++) {
    setTimeout(function(index) {
        console.log("Bind l:", index); // Prints 0, 1, 2
    }.bind(null, l), 400);
}

// ============================================
// HOISTING
// ============================================

console.log("=== HOISTING ===");

// Variable hoisting with var
console.log("Before declaration:", hoistedVar); // undefined (not error)
var hoistedVar = "I'm hoisted";
console.log("After declaration:", hoistedVar);

// Function declaration hoisting
hoistedFunction(); // Works! Function is hoisted

function hoistedFunction() {
    console.log("I'm hoisted!");
}

// Let and const are hoisted but not initialized (Temporal Dead Zone)
// console.log(hoistedLet); // Error! Cannot access before initialization
let hoistedLet = "I'm let";
console.log(hoistedLet); // Works here

// ============================================
// CLOSURE EXAMPLE - MEMOIZATION
// ============================================

function memoize(func) {
    let cache = {}; // Closure variable
    
    return function(...args) {
        let key = JSON.stringify(args);
        
        if (cache[key]) {
            console.log("Cache hit!");
            return cache[key];
        }
        
        console.log("Computing...");
        let result = func(...args);
        cache[key] = result;
        return result;
    };
}

function slowFunction(n) {
    // Simulate slow computation
    return n * 2;
}

const memoizedSlow = memoize(slowFunction);

console.log("First call:", memoizedSlow(5)); // Computing... 10
console.log("Second call:", memoizedSlow(5)); // Cache hit! 10
console.log("Third call:", memoizedSlow(10)); // Computing... 20

