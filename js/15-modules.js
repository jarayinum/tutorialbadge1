// ============================================
// 15. MODULES (ES6)
// ============================================

// ============================================
// NAMED EXPORTS
// ============================================

// In a file (e.g., utils.js):
// export function add(a, b) { return a + b; }
// export function subtract(a, b) { return a - b; }
// export const PI = 3.14159;

// Importing:
// import { add, subtract, PI } from './utils.js';

// ============================================
// DEFAULT EXPORT
// ============================================

// In a file (e.g., Calculator.js):
// export default class Calculator { ... }

// Importing:
// import Calculator from './Calculator.js';

// ============================================
// MIXED EXPORTS
// ============================================

// In a file:
// export function helper() { ... }
// export default class MainClass { ... }

// Importing:
// import MainClass, { helper } from './file.js';

// ============================================
// RENAMING IMPORTS
// ============================================

// import { add as addNumbers } from './utils.js';
// import Calculator as Calc from './Calculator.js';

// ============================================
// NAMESPACE IMPORT
// ============================================

// import * as Utils from './utils.js';
// Utils.add(1, 2);

console.log("=== Module Examples ===");
console.log("Note: Modules require proper module setup");
console.log("Use type='module' in script tag or Node.js with .mjs extension");

