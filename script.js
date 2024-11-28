// Part 1: JavaScript Basics

// Variables and Data Types
let name = "John Travis"; // string
let age = 25; // number
let isStudent = true; // boolean
let favoriteColors = ["blue", "green", "red"]; // array
let person = { name: "John", age: 25, isStudent: true }; // object

// Logging values and types to the console
console.log(`Name: ${name} (Type: ${typeof name})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is student: ${isStudent} (Type: ${typeof isStudent})`);
console.log(`Favorite Colors: ${favoriteColors} (Type: ${typeof favoriteColors})`);
console.log(`Person: ${JSON.stringify(person)} (Type: ${typeof person})`);

// Operators (Simple Calculator Function)
function calculator() {
    let num1 = prompt("Enter the first number:");
    let num2 = prompt("Enter the second number:");
    let operation = prompt("Choose an operation (+, -, *, /):");

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return;
    }

    let result;

    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                alert("Cannot divide by zero.");
                return;
            }
            result = num1 / num2;
            break;
        default:
            alert("Invalid operation.");
            return;
    }

    alert(`Result: ${result}`);
}

// Functions (greetUser)
function greetUser(name) {
    const greetingMessage = `Hello, ${name}! Welcome to the JavaScript Assignment.`;
    document.body.insertAdjacentHTML("beforeend", `<p>${greetingMessage}</p>`);
}

// Part 2: JavaScript Control Structures

// If Statements (Voting Eligibility)
function checkVotingEligibility() {
    let age = prompt("Please enter your age:");
    age = parseInt(age);

    const message = age >= 18 ? "You are eligible to vote." : "You are not eligible to vote yet.";
    document.getElementById("voting-message").innerText = message;
}

// Loops (Display numbers from 1 to 10)
function displayNumbers() {
    const numberList = document.getElementById("number-list");
    
    for (let i = 1; i <= 10; i++) {
        let listItem = document.createElement("li");
        listItem.textContent = i;
        numberList.appendChild(listItem);
    }
}

// Part 3: Introduction to the DOM

// Selecting and Modifying HTML Elements
document.querySelector("h1").textContent = "JavaScript in Action!";

// Dynamically adding content to the 'dynamic-content' div
const dynamicContentDiv = document.getElementById("dynamic-content");
dynamicContentDiv.innerHTML = "<p>This content was added dynamically using JavaScript.</p>";

// Calling the functions to demonstrate the functionality
checkVotingEligibility();
displayNumbers();
