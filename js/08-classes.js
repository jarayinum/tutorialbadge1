// ============================================
// 08. CLASSES (ES6)
// ============================================

// ============================================
// BASIC CLASS
// ============================================

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    introduce() {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    }
    
    haveBirthday() {
        this.age++;
        return `Happy birthday! Now I'm ${this.age}.`;
    }
}

let person1 = new Person("Alice", 25);
console.log(person1.introduce());
console.log(person1.haveBirthday());

// ============================================
// CLASS WITH METHODS
// ============================================

class Calculator {
    constructor() {
        this.result = 0;
    }
    
    add(num) {
        this.result += num;
        return this;
    }
    
    subtract(num) {
        this.result -= num;
        return this;
    }
    
    multiply(num) {
        this.result *= num;
        return this;
    }
    
    divide(num) {
        if (num !== 0) {
            this.result /= num;
        }
        return this;
    }
    
    getResult() {
        return this.result;
    }
    
    reset() {
        this.result = 0;
        return this;
    }
}

let calc = new Calculator();
let result = calc.add(10).multiply(2).subtract(5).getResult();
console.log("Calculator result:", result); // 15

// ============================================
// INHERITANCE
// ============================================

class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    
    speak() {
        return `${this.name} makes a sound.`;
    }
    
    move() {
        return `${this.name} moves.`;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name, "Dog"); // Call parent constructor
        this.breed = breed;
    }
    
    // Override parent method
    speak() {
        return `${this.name} barks: Woof! Woof!`;
    }
    
    // New method specific to Dog
    fetch() {
        return `${this.name} fetches the ball!`;
    }
}

let dog = new Dog("Buddy", "Golden Retriever");
console.log(dog.speak()); // "Buddy barks: Woof! Woof!"
console.log(dog.move()); // "Buddy moves." (inherited)
console.log(dog.fetch()); // "Buddy fetches the ball!"

// ============================================
// STATIC METHODS
// ============================================

class MathHelper {
    static add(a, b) {
        return a + b;
    }
    
    static multiply(a, b) {
        return a * b;
    }
    
    static PI = 3.14159; // Static property (ES2022)
}

// Call static methods without creating instance
console.log("Static add:", MathHelper.add(5, 3)); // 8
console.log("Static multiply:", MathHelper.multiply(4, 7)); // 28
console.log("PI:", MathHelper.PI);

// ============================================
// GETTERS AND SETTERS
// ============================================

class Circle {
    constructor(radius) {
        this._radius = radius; // Convention: _ means private
    }
    
    get radius() {
        return this._radius;
    }
    
    set radius(value) {
        if (value > 0) {
            this._radius = value;
        } else {
            console.log("Radius must be positive");
        }
    }
    
    get area() {
        return Math.PI * this._radius * this._radius;
    }
    
    get circumference() {
        return 2 * Math.PI * this._radius;
    }
}

let circle = new Circle(5);
console.log("Radius:", circle.radius); // 5
console.log("Area:", circle.area); // ~78.54
console.log("Circumference:", circle.circumference); // ~31.42

circle.radius = 10; // Uses setter
console.log("New area:", circle.area); // ~314.16

// ============================================
// PRIVATE FIELDS (ES2022)
// ============================================

class BankAccount {
    #balance = 0; // Private field
    
    constructor(initialBalance = 0) {
        this.#balance = initialBalance;
    }
    
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            return this.#balance;
        }
        return "Invalid amount";
    }
    
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            return this.#balance;
        }
        return "Insufficient funds";
    }
    
    getBalance() {
        return this.#balance;
    }
}

let account = new BankAccount(100);
console.log("Balance:", account.getBalance()); // 100
account.deposit(50);
console.log("Balance after deposit:", account.getBalance()); // 150
// console.log(account.#balance); // Error! Private field

// ============================================
// METHOD OVERRIDING AND SUPER
// ============================================

class Shape {
    constructor(color) {
        this.color = color;
    }
    
    getArea() {
        return "Area calculation not implemented";
    }
    
    describe() {
        return `I am a ${this.color} shape.`;
    }
}

class Rectangle extends Shape {
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }
    
    getArea() {
        return this.width * this.height;
    }
    
    describe() {
        return super.describe() + ` My area is ${this.getArea()}.`;
    }
}

let rect = new Rectangle("blue", 5, 10);
console.log(rect.describe()); // "I am a blue shape. My area is 50."
console.log("Area:", rect.getArea()); // 50

// ============================================
// ABSTRACT CLASS PATTERN (using errors)
// ============================================

class AbstractVehicle {
    constructor(brand) {
        if (this.constructor === AbstractVehicle) {
            throw new Error("Cannot instantiate abstract class");
        }
        this.brand = brand;
    }
    
    start() {
        throw new Error("Method 'start()' must be implemented");
    }
    
    stop() {
        throw new Error("Method 'stop()' must be implemented");
    }
}

class Car extends AbstractVehicle {
    constructor(brand, model) {
        super(brand);
        this.model = model;
    }
    
    start() {
        return `${this.brand} ${this.model} engine started!`;
    }
    
    stop() {
        return `${this.brand} ${this.model} engine stopped!`;
    }
}

let myCar = new Car("Toyota", "Camry");
console.log(myCar.start()); // "Toyota Camry engine started!"
console.log(myCar.stop()); // "Toyota Camry engine stopped!"

