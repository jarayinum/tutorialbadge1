// ============================================
// 12. ERROR HANDLING
// ============================================

// ============================================
// TRY-CATCH-FINALLY
// ============================================

try {
    let result = 10 / 0;
    console.log("Result:", result); // Infinity (not an error)
    
    // Throw custom error
    throw new Error("Something went wrong!");
} catch (error) {
    console.log("Caught error:", error.message);
} finally {
    console.log("This always executes");
}

// ============================================
// THROWING ERRORS
// ============================================

function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
}

try {
    let result = divide(10, 0);
    console.log("Result:", result);
} catch (error) {
    console.log("Error:", error.message);
}

// ============================================
// ERROR TYPES
// ============================================

// TypeError
try {
    let obj = null;
    console.log(obj.property); // TypeError: Cannot read property of null
} catch (error) {
    if (error instanceof TypeError) {
        console.log("TypeError caught:", error.message);
    }
}

// ReferenceError
try {
    console.log(undefinedVariable); // ReferenceError
} catch (error) {
    if (error instanceof ReferenceError) {
        console.log("ReferenceError caught:", error.message);
    }
}

// SyntaxError (usually caught at parse time)
try {
    // eval("let x = ;"); // SyntaxError - commented out to avoid breaking script
} catch (error) {
    console.log("SyntaxError caught:", error.message);
}

// ============================================
// CUSTOM ERROR CLASSES
// ============================================

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

class NetworkError extends Error {
    constructor(message) {
        super(message);
        this.name = "NetworkError";
    }
}

function validateEmail(email) {
    if (!email.includes("@")) {
        throw new ValidationError("Invalid email format");
    }
    return true;
}

try {
    validateEmail("invalid-email");
} catch (error) {
    if (error instanceof ValidationError) {
        console.log("Validation error:", error.message);
    } else {
        console.log("Other error:", error.message);
    }
}

// ============================================
// ERROR HANDLING IN ASYNC FUNCTIONS
// ============================================

async function asyncOperation() {
    try {
        let result = await new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(new Error("Async operation failed"));
            }, 1000);
        });
        return result;
    } catch (error) {
        console.log("Async error caught:", error.message);
        throw error; // Re-throw if needed
    }
}

asyncOperation().catch((error) => {
    console.log("Caught in promise chain:", error.message);
});

// ============================================
// ERROR HANDLING WITH PROMISES
// ============================================

function riskyPromise() {
    return new Promise((resolve, reject) => {
        if (Math.random() > 0.5) {
            resolve("Success!");
        } else {
            reject(new Error("Random failure"));
        }
    });
}

riskyPromise()
    .then((result) => {
        console.log("Promise success:", result);
    })
    .catch((error) => {
        console.log("Promise error:", error.message);
    })
    .finally(() => {
        console.log("Promise completed");
    });

// ============================================
// MULTIPLE ERROR HANDLING
// ============================================

try {
    let data = JSON.parse('{"invalid": json}'); // This will fail
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log("JSON parse error:", error.message);
    } else if (error instanceof TypeError) {
        console.log("Type error:", error.message);
    } else {
        console.log("Unknown error:", error.message);
    }
}

// ============================================
// ERROR PROPAGATION
// ============================================

function level1() {
    try {
        level2();
    } catch (error) {
        console.log("Level 1 caught:", error.message);
        throw error; // Propagate error
    }
}

function level2() {
    try {
        level3();
    } catch (error) {
        console.log("Level 2 caught:", error.message);
        throw error; // Propagate error
    }
}

function level3() {
    throw new Error("Error from level 3");
}

try {
    level1();
} catch (error) {
    console.log("Final catch:", error.message);
}

// ============================================
// ERROR HANDLING BEST PRACTICES
// ============================================

// 1. Always handle errors appropriately
function safeOperation(data) {
    try {
        if (!data) {
            throw new Error("Data is required");
        }
        // Process data
        return data.toUpperCase();
    } catch (error) {
        console.error("Operation failed:", error.message);
        return null; // Return safe default
    }
}

console.log("Safe operation:", safeOperation("hello"));
console.log("Safe operation (null):", safeOperation(null));

// 2. Provide meaningful error messages
function calculateAge(birthYear) {
    if (!birthYear) {
        throw new Error("Birth year is required");
    }
    if (birthYear > new Date().getFullYear()) {
        throw new Error("Birth year cannot be in the future");
    }
    if (birthYear < 1900) {
        throw new Error("Birth year seems unrealistic");
    }
    return new Date().getFullYear() - birthYear;
}

try {
    console.log("Age:", calculateAge(1990));
    console.log("Age:", calculateAge(2050)); // Error
} catch (error) {
    console.log("Age calculation error:", error.message);
}

// 3. Log errors for debugging
function logError(error, context) {
    console.error("Error occurred in:", context);
    console.error("Error message:", error.message);
    console.error("Error stack:", error.stack);
}

try {
    throw new Error("Test error");
} catch (error) {
    logError(error, "test function");
}

// ============================================
// GLOBAL ERROR HANDLING
// ============================================

// Unhandled promise rejection
process.on("unhandledRejection", (error) => {
    console.error("Unhandled promise rejection:", error);
});

// Global error handler (browser)
if (typeof window !== "undefined") {
    window.onerror = function(message, source, lineno, colno, error) {
        console.error("Global error:", message, error);
        return true; // Prevent default error handling
    };
}

// ============================================
// ERROR RECOVERY
// ============================================

function fetchWithRetry(url, maxRetries = 3) {
    let attempts = 0;
    
    async function attempt() {
        try {
            attempts++;
            // Simulate fetch
            let response = await new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (Math.random() > 0.3) {
                        resolve({ ok: true, data: "Success" });
                    } else {
                        reject(new Error("Network error"));
                    }
                }, 500);
            });
            return response;
        } catch (error) {
            if (attempts < maxRetries) {
                console.log(`Retry attempt ${attempts}/${maxRetries}`);
                return attempt();
            } else {
                throw new Error(`Failed after ${maxRetries} attempts: ${error.message}`);
            }
        }
    }
    
    return attempt();
}

fetchWithRetry("api/data")
    .then((result) => console.log("Fetch success:", result))
    .catch((error) => console.log("Fetch failed:", error.message));

