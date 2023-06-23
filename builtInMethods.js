// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
console.log("Hello World".toLowerCase());
// The string method .toLowerCase() is converting all uppercase letters in the given string to lowercase ones.

console.log("Hello World".includes("Hello"));
// The string method .includes() is checking the given string to determine if there is an exact match for the string argument passed to it - in this case "Hello", which returns true. If the argument was instead "hello" it would return false.
console.log("Hello World".endsWith("Hello"));
// The string method .endsWith() checks to see if the last characters of a given string match those passed as an argument. In this case the string tested does not match the "Hello" argument - and thus the result returns false.

console.log("Hello World".endsWith("rld"));
// Similar to the example above, but in this case the string tested does in fact ennd with the characters "rld" and thus returns true.

// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
var firstName = "Logan";
var lastName = "Matheny";

// Call a different built-in JavaScript method on each of your variables.
// The .toLowerCase() string method converts all the characters within a given string to lowercase letters.
console.log(firstName.toLowerCase());
// The .toUpperCase() string method converts all characters within a given string to uppercase letters.
console.log(lastName.toUpperCase());

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff".
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
var firstName = "Jeff";
console.log(firstName.startsWith("J"));

// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
var arr1 = [17, 22, 1, 14, 7, 9];
var arr2 = ["Logan", "Jaycee", "Jonathan", "Theo", "Johann"];

// Call a different built-in JavaScript method on each of your variables.
// Created a lucky number variable and then using the .includes array method I tested the array object of arr1 using an argument of luckynumber - in this case my lucky number is 14.
var luckyNumber = 14;
console.log(arr1.includes(luckyNumber));

// Using the push array method, I 'pushed' or added the string "Hanna" to arr2 modifying the original array.
arr2.push("Hanna");
console.log(arr2);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.
