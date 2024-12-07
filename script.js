// script.js

// Let's explore this code step by step.

// 1. Array of quotes
// An array is a complex type of object that stores multiple values.
// Each value in the array is called an "element" and has an index (a number that represents its position in the array).
// We can access elements by their index. For example, the first element has an index of 0, the second has an index of 1, and so on.

const quotes = [
    "The best way to predict the future is to create it.",
    "Do not wait to strike till the iron is hot; but make it hot by striking.",
    "Whether you think you can or you think you can’t, you’re right.",
    "Act as if what you do makes a difference. It does.",
    "Success usually comes to those who are too busy to be looking for it."
];
console.log(quotes[0]); // Output: The best way to predict the future is to create it. (the first quote)
console.log(quotes[2]); // Output: Whether you think you can or you think you can’t, you’re right. (the third quote)

// 2. Get DOM elements
// Here, we are using JavaScript to find specific elements on the webpage.
// The `document.getElementById` function lets us find an element by its unique ID.
// In this case, we find the element where the quote will be displayed (`quoteElement`)
// and the button that will be clicked to get a new quote (`newQuoteButton`).

const quoteElement = document.getElementById('quote'); // This is the place where the quote will appear.
const newQuoteButton = document.getElementById('new-quote'); // This is the button the user will click.

// 3. Function to get a random quote
// A function is a block of code that performs a specific task. 
// Functions are like "recipes" that wait to be called to do their job.
// In this case, the `getRandomQuote` function generates a random quote from the `quotes` array.

// `Math.random()` is a built-in JavaScript function that generates a random number between 0 and 1.
// We multiply this number by the length of the array (`quotes.length`) to ensure the random number corresponds to an index in the array.
// `Math.floor()` rounds the number down to the nearest whole number, ensuring it's a valid index.

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length); // Get a random index
    return quotes[randomIndex]; // Return the quote at that index
}
console.log(getRandomQuote()); // Example: Output a random quote to the console

// 4. Event listener for the button
// An event listener is a way to "listen" for something to happen on the webpage (like a button click).
// In this case, we are listening for the "click" event on the `newQuoteButton`.
// When the button is clicked, the function inside the listener is executed.

// Inside the listener:
// - We call `getRandomQuote()` to get a random quote.
// - We then assign the returned quote to `quoteElement.textContent` to update the displayed text on the webpage.

newQuoteButton.addEventListener('click', () => {
    const randomQuote = getRandomQuote(); // Call the function to get a random quote
    quoteElement.textContent = randomQuote; // Update the text on the webpage
});


// ------------------------------------------------------------------------

// Let's learn about variables in JavaScript: const, let, and var.

// Example 1: Using `const`
// `const` variables must be declared and initialized at the same time.
const myName = "Alice"; // Declaring and initializing
console.log(myName); // Output: Alice

// Uncommenting the next line will cause an error because `const` cannot be reassigned.
// myName = "Bob"; // ❌ Error: Assignment to constant variable

// Example 2: Using `let`
// `let` variables can be declared without a value and initialized later.
let age; // Declaring a variable without a value
console.log(age); // Output: undefined
age = 25; // Initializing the variable
console.log(age); // Output: 25

// `let` variables can be reassigned.
age = 30; // Reassigning
console.log(age); // Output: 30

// Example 3: Using `var`
// `var` variables can also be declared without a value and initialized later.
var city; // Declaring a variable without a value
console.log(city); // Output: undefined
city = "New York"; // Initializing the variable
console.log(city); // Output: New York

// Scope of `const` and `let` (block scope)
{
    let blockLet = "I am inside a block";
    const blockConst = "I am also inside a block";
    console.log(blockLet); // Output: I am inside a block
    console.log(blockConst); // Output: I am also inside a block
    let age = "40"
    console.log(age)
}
// Uncommenting the next two lines will cause an error because `blockLet` and `blockConst` are not accessible outside the block.
// console.log(blockLet); // ❌ Error
// console.log(blockConst); // ❌ Error

// Scope of `var` (function or global scope)
{
    var blockVar = "I am inside a block";
    console.log(blockVar); // Output: I am inside a block
}
console.log(blockVar); // Output: I am inside a block (accessible outside the block!)

// ------------------------------------------------------------------------


// In JavaScript, there are 8 data types.

// 1. Primitive types (simple values):
// - string
// - number
// - bigint
// - boolean
// - undefined
// - null
// - symbol

// 2. Complex type:
// - object (which includes arrays, functions, and more)

// Let's explore these types with examples and use `typeof` to see the type of each value.

// Example 1: String (text)
const greeting = "Hello, world!";
console.log(greeting); // Output: Hello, world!
console.log(typeof greeting); // Output: string

// Example 2: Number (number values)
// const age = 30;
// console.log(age); // Output: 30
// console.log(typeof age); // Output: number

// Special number values:
console.log(Infinity); // Output: Infinity
console.log(typeof Infinity); // Output: number
console.log(-Infinity); // Output: -Infinity
console.log(typeof -Infinity); // Output: number
console.log(NaN); // Output: NaN (Not a Number)
console.log(typeof NaN); // Output: number

// Example 3: BigInt (very large numbers)
const bigNumber = 1234567890123456789012345678901234567890n; // Note the 'n' at the end
console.log(bigNumber); // Output: 1234567890123456789012345678901234567890n
console.log(typeof bigNumber); // Output: bigint

// Example 4: Boolean (true or false)
const isJavaScriptFun = true;
console.log(isJavaScriptFun); // Output: true
console.log(typeof isJavaScriptFun); // Output: boolean

// Example 5: Undefined (a variable that is declared but not initialized)
let notAssigned;
console.log(notAssigned); // Output: undefined
console.log(typeof notAssigned); // Output: undefined

// Example 6: Null (intentional absence of value)
const emptyValue = null;
console.log(emptyValue); // Output: null
console.log(typeof emptyValue); // Output: object (this is a historical bug in JavaScript)

// Example 7: Symbol (unique identifier)
const uniqueId = Symbol("id");
console.log(uniqueId); // Output: Symbol(id)
console.log(typeof uniqueId); // Output: symbol

// Example 8: Object (complex data type)
// An object can store multiple key-value pairs.
const user = {
    name: "Alice",
    age: 25,
    isStudent: true
};
console.log(user); // Output: { name: 'Alice', age: 25, isStudent: true }
console.log(typeof user); // Output: object

// Accessing object properties:
console.log(user.name); // Output: Alice
console.log(user.age); // Output: 25

// Objects can also be arrays, which store lists of values.
const colors = ["red", "green", "blue"];
console.log(colors); // Output: ["red", "green", "blue"]
console.log(typeof colors); // Output: object
console.log(colors[0]); // Output: red (first element in the array)


// ------------------------------------------------------------------------



// Let's learn about two important tools in JavaScript: console.log and typeof.

// 1. What is console.log?
// - console.log is a command in JavaScript that lets you display information in the browser's console.
// - The console is a tool that developers use to check their code and find problems (debugging).
// - Everything you write inside console.log will appear in the console, but it won't be shown on the webpage.

// How to open the console:
// 1. Press F12 or right-click and choose "Inspect" in the browser.
// 2. Go to the "Console" tab.

// Example of console.log:
console.log("Hello, world!"); // This will display "Hello, world!" in the console.

// const age = 25;
// console.log("The age is:", age); // This will display "The age is: 25" in the console.

// 2. What is typeof?
// - typeof is a special operator in JavaScript that tells you the type of a variable or a value.
// - It helps you understand what kind of data is stored in a variable.

// Example of typeof:
const name = "Alice";
console.log(typeof name); // Output: string (because the value is text)

const number = 42;
console.log(typeof number); // Output: number (because the value is a number)

const isStudent = true;
console.log(typeof isStudent); // Output: boolean (because the value is true or false)

// typeof also works with special values:
console.log(typeof undefined); // Output: undefined (no value assigned)
console.log(typeof null); // Output: object (this is a historical bug in JavaScript)

// Combining console.log and typeof:
// You can use both together to see the value and its type.
// const city = "New York";
// console.log("Value:", city, "| Type:", typeof city); // Output: Value: New York | Type: string
