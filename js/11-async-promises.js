// ============================================
// 11. ASYNCHRONOUS JAVASCRIPT - PROMISES
// ============================================

// ============================================
// CALLBACKS (Traditional Approach)
// ============================================

function fetchDataCallback(callback) {
    setTimeout(() => {
        callback("Data received!");
    }, 1000);
}

fetchDataCallback((data) => {
    console.log("Callback:", data);
});

// Callback hell example
function step1(callback) {
    setTimeout(() => callback("Step 1 done"), 500);
}

function step2(data, callback) {
    setTimeout(() => callback(data + " -> Step 2 done"), 500);
}

function step3(data, callback) {
    setTimeout(() => callback(data + " -> Step 3 done"), 500);
}

step1((result1) => {
    step2(result1, (result2) => {
        step3(result2, (result3) => {
            console.log("Callback chain:", result3);
        });
    });
});

// ============================================
// PROMISES - CREATION
// ============================================

// Promise constructor
let promise = new Promise((resolve, reject) => {
    let success = true;
    
    if (success) {
        resolve("Promise resolved!");
    } else {
        reject("Promise rejected!");
    }
});

// Promise with setTimeout
let delayedPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Delayed data");
    }, 1000);
});

// ============================================
// PROMISES - CONSUMING
// ============================================

// Using .then() and .catch()
promise
    .then((result) => {
        console.log("Success:", result);
        return "Processed: " + result;
    })
    .then((processed) => {
        console.log("Processed:", processed);
    })
    .catch((error) => {
        console.log("Error:", error);
    })
    .finally(() => {
        console.log("Promise completed");
    });

// ============================================
// PROMISE CHAINING
// ============================================

function fetchUser(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: userId, name: "John Doe" });
        }, 500);
    });
}

function fetchPosts(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([{ id: 1, title: "Post 1" }, { id: 2, title: "Post 2" }]);
        }, 500);
    });
}

fetchUser(1)
    .then((user) => {
        console.log("User:", user);
        return fetchPosts(user.id);
    })
    .then((posts) => {
        console.log("Posts:", posts);
    })
    .catch((error) => {
        console.log("Error:", error);
    });

// ============================================
// PROMISE.ALL() - Wait for all promises
// ============================================

let promise1 = Promise.resolve("First");
let promise2 = Promise.resolve("Second");
let promise3 = Promise.resolve("Third");

Promise.all([promise1, promise2, promise3])
    .then((results) => {
        console.log("All resolved:", results); // ["First", "Second", "Third"]
    })
    .catch((error) => {
        console.log("One failed:", error);
    });

// Example with async operations
function asyncOperation(name, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${name} completed`);
        }, delay);
    });
}

Promise.all([
    asyncOperation("Task 1", 1000),
    asyncOperation("Task 2", 2000),
    asyncOperation("Task 3", 1500)
])
    .then((results) => {
        console.log("All tasks completed:", results);
    });

// ============================================
// PROMISE.ALLSETTLED() - Wait for all (success or failure)
// ============================================

let successPromise = Promise.resolve("Success");
let failPromise = Promise.reject("Failed");

Promise.allSettled([successPromise, failPromise])
    .then((results) => {
        console.log("All settled:", results);
        // [
        //   { status: 'fulfilled', value: 'Success' },
        //   { status: 'rejected', reason: 'Failed' }
        // ]
    });

// ============================================
// PROMISE.RACE() - First to resolve/reject
// ============================================

let fastPromise = new Promise((resolve) => setTimeout(() => resolve("Fast"), 500));
let slowPromise = new Promise((resolve) => setTimeout(() => resolve("Slow"), 2000));

Promise.race([fastPromise, slowPromise])
    .then((result) => {
        console.log("Race winner:", result); // "Fast"
    });

// ============================================
// PROMISE.ANY() - First to resolve (ignore rejections)
// ============================================

let rejectPromise = Promise.reject("Error");
let successPromise2 = new Promise((resolve) => setTimeout(() => resolve("Success"), 1000));

Promise.any([rejectPromise, successPromise2])
    .then((result) => {
        console.log("Any success:", result); // "Success"
    })
    .catch((error) => {
        console.log("All failed:", error);
    });

// ============================================
// ASYNC/AWAIT - Modern Promise Syntax
// ============================================

// Async function always returns a Promise
async function fetchData() {
    return "Data from async function";
}

fetchData().then((data) => {
    console.log("Async function result:", data);
});

// Using await
async function fetchUserData() {
    try {
        let user = await fetchUser(1);
        console.log("User (await):", user);
        
        let posts = await fetchPosts(user.id);
        console.log("Posts (await):", posts);
        
        return { user, posts };
    } catch (error) {
        console.log("Error (await):", error);
    }
}

fetchUserData();

// ============================================
// ASYNC/AWAIT WITH ERROR HANDLING
// ============================================

async function riskyOperation() {
    try {
        let result = await new Promise((resolve, reject) => {
            setTimeout(() => {
                Math.random() > 0.5 ? resolve("Success!") : reject("Failed!");
            }, 1000);
        });
        console.log("Risky operation result:", result);
        return result;
    } catch (error) {
        console.log("Risky operation error:", error);
        throw error;
    }
}

riskyOperation();

// ============================================
// ASYNC/AWAIT WITH PARALLEL EXECUTION
// ============================================

async function parallelExecution() {
    // Sequential (slow)
    console.time("Sequential");
    let result1 = await asyncOperation("Task 1", 1000);
    let result2 = await asyncOperation("Task 2", 1000);
    console.timeEnd("Sequential");
    
    // Parallel (fast)
    console.time("Parallel");
    let [result3, result4] = await Promise.all([
        asyncOperation("Task 3", 1000),
        asyncOperation("Task 4", 1000)
    ]);
    console.timeEnd("Parallel");
    
    return { result1, result2, result3, result4 };
}

parallelExecution();

// ============================================
// FETCH API (Real-world example)
// ============================================

// Fetch returns a Promise
async function fetchUserFromAPI(userId) {
    try {
        // Note: This is a mock example. Real fetch would use a URL
        let response = await new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    ok: true,
                    json: () => Promise.resolve({ id: userId, name: "John Doe" })
                });
            }, 1000);
        });
        
        if (response.ok) {
            let user = await response.json();
            console.log("Fetched user:", user);
            return user;
        }
    } catch (error) {
        console.log("Fetch error:", error);
    }
}

fetchUserFromAPI(1);

// ============================================
// PROMISE UTILITIES
// ============================================

// Promise.resolve() - Create resolved promise
let resolved = Promise.resolve("Immediate resolve");
resolved.then((value) => console.log("Resolved:", value));

// Promise.reject() - Create rejected promise
let rejected = Promise.reject("Immediate reject");
rejected.catch((error) => console.log("Rejected:", error));

// Converting callback to Promise
function callbackToPromise(callbackFn) {
    return new Promise((resolve, reject) => {
        callbackFn((error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
}

