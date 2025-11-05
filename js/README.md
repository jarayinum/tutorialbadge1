# JavaScript Concepts Tutorial

This folder contains comprehensive JavaScript examples covering all fundamental concepts. Each file focuses on a specific topic with practical examples.

## File Structure

### 01-variables-and-data-types.js
- Variable declarations (var, let, const)
- Primitive data types (String, Number, Boolean, Undefined, Null, Symbol, BigInt)
- Type checking and conversion
- Type coercion

### 02-operators.js
- Arithmetic operators (+, -, *, /, %, **)
- Assignment operators (=, +=, -=, etc.)
- Comparison operators (==, ===, !=, !==, >, <, >=, <=)
- Logical operators (&&, ||, !)
- Ternary operator
- Nullish coalescing (??)
- Optional chaining (?.)

### 03-control-flow.js
- if/else statements
- if-else if-else chains
- switch statements
- Nested conditionals
- Truthy and falsy values
- Short-circuit evaluation

### 04-loops.js
- for loops
- while loops
- do-while loops
- for...of loops (arrays, strings)
- for...in loops (objects)
- break and continue statements
- Nested loops
- Array iteration methods (forEach, map, filter, reduce)

### 05-functions.js
- Function declarations
- Function expressions
- Arrow functions
- Default parameters
- Rest parameters
- Spread operator
- Higher-order functions
- Callback functions
- Closures
- Recursive functions
- IIFE (Immediately Invoked Function Expressions)
- Function hoisting

### 06-arrays.js
- Creating arrays
- Accessing array elements
- Array methods (push, pop, shift, unshift)
- Array searching (indexOf, includes, find, findIndex)
- Array iteration (forEach, map, filter, reduce)
- Array transformation (reverse, sort, slice, splice)
- Array checking (every, some)
- Combining arrays (concat, spread)
- Multi-dimensional arrays
- Array destructuring

### 07-objects.js
- Creating objects (literals, constructors)
- Accessing properties (dot notation, bracket notation)
- Modifying objects
- Object methods
- Nested objects
- Object iteration (for...in, Object.keys, Object.values, Object.entries)
- Object destructuring
- Spread operator with objects
- this keyword
- Object constructors and classes

### 08-classes.js
- Class syntax
- Constructors
- Methods
- Inheritance (extends, super)
- Static methods and properties
- Getters and setters
- Private fields
- Method overriding
- Abstract class patterns

### 09-scope-and-closures.js
- Global scope
- Function scope
- Block scope
- Lexical scope
- Closures
- Private variables with closures
- Function factories
- Closure pitfalls and solutions
- Hoisting (var, let, const)

### 10-destructuring.js
- Array destructuring
- Object destructuring
- Destructuring in function parameters
- Nested destructuring
- Default values
- Renaming variables
- Rest operator in destructuring
- Spread operator
- Practical examples

### 11-async-promises.js
- Callbacks (traditional approach)
- Promise creation and consumption
- Promise chaining
- Promise.all()
- Promise.allSettled()
- Promise.race()
- Promise.any()
- async/await syntax
- Error handling with async/await
- Parallel vs sequential execution
- Fetch API examples

### 12-error-handling.js
- try-catch-finally blocks
- Throwing errors
- Error types (TypeError, ReferenceError, SyntaxError)
- Custom error classes
- Error handling in async functions
- Error handling with promises
- Error propagation
- Best practices
- Global error handling
- Error recovery strategies

### 13-dom-manipulation.js
- Selecting elements (getElementById, querySelector, etc.)
- Creating elements
- Modifying elements
- Appending/removing elements
- DOM traversal
- Class manipulation
- Event listeners
- Common event types
- Form manipulation
- Dynamic content updates
- Timeouts and intervals

### 14-template-literals.js
- Basic template literals
- Multiline strings
- Expressions in template literals
- Tagged template literals
- String methods

### 15-modules.js
- Named exports
- Default exports
- Mixed exports
- Import/export syntax
- Renaming imports
- Namespace imports

## How to Use

1. **In Browser Console**: Open any file and copy the code to browser console
2. **In HTML File**: Include scripts in HTML:
   ```html
   <script src="js/01-variables-and-data-types.js"></script>
   ```
3. **In Node.js**: Run with:
   ```bash
   node js/01-variables-and-data-types.js
   ```
4. **As Modules**: Use ES6 modules with proper setup:
   ```html
   <script type="module" src="js/15-modules.js"></script>
   ```

## Learning Path

Recommended order for beginners:
1. Variables and Data Types
2. Operators
3. Control Flow
4. Loops
5. Functions
6. Arrays
7. Objects
8. Scope and Closures
9. Classes
10. Destructuring
11. Template Literals
12. Async/Promises
13. Error Handling
14. DOM Manipulation
15. Modules

## Notes

- All examples are self-contained and can run independently
- Some examples (like DOM manipulation) require an HTML environment
- Comments explain each concept clearly
- Practical examples are included throughout

