// ============================================
// 13. DOM MANIPULATION
// ============================================
// Note: These examples require an HTML page to run properly
// Run this in a browser console or HTML page

// ============================================
// SELECTING ELEMENTS
// ============================================

// getElementById
let elementById = document.getElementById("myId");

// getElementsByClassName (returns HTMLCollection)
let elementsByClass = document.getElementsByClassName("myClass");

// getElementsByTagName (returns HTMLCollection)
let elementsByTag = document.getElementsByTagName("div");

// querySelector (returns first matching element)
let firstElement = document.querySelector(".myClass");
let firstDiv = document.querySelector("div");

// querySelectorAll (returns NodeList)
let allElements = document.querySelectorAll(".myClass");
let allDivs = document.querySelectorAll("div");

console.log("=== DOM Selection Examples ===");
console.log("Note: These require an HTML page to work");

// ============================================
// CREATING ELEMENTS
// ============================================

// Create new element
let newDiv = document.createElement("div");
let newParagraph = document.createElement("p");
let newButton = document.createElement("button");

// Create text node
let textNode = document.createTextNode("Hello World");

// ============================================
// MODIFYING ELEMENTS
// ============================================

// Set text content
newDiv.textContent = "This is a div";
newDiv.innerHTML = "<strong>Bold text</strong>";

// Set attributes
newDiv.setAttribute("id", "myDiv");
newDiv.setAttribute("class", "container");
newDiv.id = "myDiv"; // Alternative way
newDiv.className = "container"; // Alternative way

// Get attributes
let divId = newDiv.getAttribute("id");
let hasClass = newDiv.hasAttribute("class");
newDiv.removeAttribute("class");

// Style manipulation
newDiv.style.color = "red";
newDiv.style.backgroundColor = "blue";
newDiv.style.fontSize = "20px";
newDiv.style.display = "none"; // Hide element
newDiv.style.display = "block"; // Show element

// ============================================
// APPENDING ELEMENTS
// ============================================

// Append child
let parent = document.createElement("div");
let child = document.createElement("p");
parent.appendChild(child);

// Append multiple
let child1 = document.createElement("span");
let child2 = document.createElement("span");
parent.appendChild(child1);
parent.appendChild(child2);

// insertBefore
let newChild = document.createElement("div");
parent.insertBefore(newChild, child);

// ============================================
// REMOVING ELEMENTS
// ============================================

// Remove child
parent.removeChild(child);

// Remove element (modern way)
child.remove();

// ============================================
// TRAVERSING THE DOM
// ============================================

function demonstrateTraversal(element) {
    // Parent
    let parent = element.parentElement;
    let parentNode = element.parentNode;
    
    // Children
    let children = element.children; // HTMLCollection
    let childNodes = element.childNodes; // NodeList (includes text nodes)
    let firstChild = element.firstChild;
    let lastChild = element.lastChild;
    let firstElementChild = element.firstElementChild;
    let lastElementChild = element.lastElementChild;
    
    // Siblings
    let nextSibling = element.nextSibling;
    let previousSibling = element.previousSibling;
    let nextElementSibling = element.nextElementSibling;
    let previousElementSibling = element.previousElementSibling;
}

// ============================================
// CLASS MANIPULATION
// ============================================

let element = document.createElement("div");

// Add class
element.classList.add("active");
element.classList.add("highlight");

// Remove class
element.classList.remove("active");

// Toggle class
element.classList.toggle("active"); // Add if not present, remove if present

// Check if class exists
let hasActive = element.classList.contains("active");

// Replace class
element.classList.replace("highlight", "new-class");

// ============================================
// EVENT LISTENERS
// ============================================

let button = document.createElement("button");
button.textContent = "Click Me";

// Add event listener
button.addEventListener("click", function(event) {
    console.log("Button clicked!");
    console.log("Event:", event);
});

// Multiple listeners
button.addEventListener("click", function() {
    console.log("Second listener");
});

// Remove event listener
function handleClick() {
    console.log("This handler can be removed");
}

button.addEventListener("click", handleClick);
button.removeEventListener("click", handleClick);

// Event object properties
button.addEventListener("click", function(event) {
    console.log("Target:", event.target);
    console.log("Current target:", event.currentTarget);
    console.log("Type:", event.type);
    event.preventDefault(); // Prevent default behavior
    event.stopPropagation(); // Stop event bubbling
});

// ============================================
// COMMON EVENT TYPES
// ============================================

let input = document.createElement("input");

// Mouse events
input.addEventListener("click", () => console.log("clicked"));
input.addEventListener("dblclick", () => console.log("double clicked"));
input.addEventListener("mousedown", () => console.log("mouse down"));
input.addEventListener("mouseup", () => console.log("mouse up"));
input.addEventListener("mouseenter", () => console.log("mouse enter"));
input.addEventListener("mouseleave", () => console.log("mouse leave"));
input.addEventListener("mousemove", () => console.log("mouse move"));

// Keyboard events
input.addEventListener("keydown", (e) => console.log("key down:", e.key));
input.addEventListener("keyup", (e) => console.log("key up:", e.key));
input.addEventListener("keypress", (e) => console.log("key press:", e.key));

// Form events
input.addEventListener("focus", () => console.log("focused"));
input.addEventListener("blur", () => console.log("blurred"));
input.addEventListener("change", () => console.log("changed"));
input.addEventListener("input", () => console.log("input changed"));
input.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("form submitted");
});

// ============================================
// FORM MANIPULATION
// ============================================

let form = document.createElement("form");
let nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.name = "username";
nameInput.value = "John Doe";

let emailInput = document.createElement("input");
emailInput.type = "email";
emailInput.name = "email";
emailInput.value = "john@example.com";

form.appendChild(nameInput);
form.appendChild(emailInput);

// Get form data
let formData = new FormData(form);
let username = formData.get("username");
let email = formData.get("email");

// ============================================
// DYNAMIC CONTENT UPDATES
// ============================================

function updateContent() {
    let element = document.querySelector("#content");
    
    // Update text
    element.textContent = "New text content";
    
    // Update HTML
    element.innerHTML = "<h1>New HTML</h1><p>Paragraph</p>";
    
    // Append content
    element.innerHTML += "<p>More content</p>";
}

// ============================================
// TIMEOUTS AND INTERVALS
// ============================================

// setTimeout - execute once after delay
setTimeout(() => {
    console.log("This runs after 1 second");
}, 1000);

// setInterval - execute repeatedly
let intervalId = setInterval(() => {
    console.log("This runs every second");
}, 1000);

// Clear interval
setTimeout(() => {
    clearInterval(intervalId);
    console.log("Interval cleared");
}, 5000);

// ============================================
// PRACTICAL EXAMPLE
// ============================================

function createTodoApp() {
    // This is a conceptual example
    let todoList = document.createElement("ul");
    let input = document.createElement("input");
    let button = document.createElement("button");
    button.textContent = "Add Todo";
    
    button.addEventListener("click", () => {
        let todoText = input.value;
        if (todoText.trim()) {
            let li = document.createElement("li");
            li.textContent = todoText;
            li.addEventListener("click", () => {
                li.style.textDecoration = "line-through";
            });
            todoList.appendChild(li);
            input.value = "";
        }
    });
    
    return { todoList, input, button };
}

// Note: To use this, you would need to append to document.body
// let app = createTodoApp();
// document.body.appendChild(app.input);
// document.body.appendChild(app.button);
// document.body.appendChild(app.todoList);

console.log("=== DOM Manipulation Examples ===");
console.log("Note: These examples demonstrate concepts. To use them,");
console.log("create an HTML page and include this script.");

