// Defining Our Own Functions
// For each exercise below, write the function according to the requirements.
// Call each method at least twice and store the return value in a variable.
// Use console.log() to see the return value in the console.

// 1: Write a function named greeting that returns a string with a general greeting.
function greeting() {
  var message = "Hello world";
  return message;
}
console.log(greeting());
console.log(greeting());

// 2: Write a function named customGreeting that returns a greeting WITH a specific name.
function customGreeting(name) {
  var message = `Hello ${name}`;
  return message;
}
console.log(customGreeting("Logan"));
console.log(customGreeting("Lily"));

// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.
function greetPerson(first, middle, last) {
  var message = `A warm welcome to ${first} ${middle} ${last}!`;
  return message;
}

console.log(greetPerson("Arlo", "Paul", "Matheny"));
console.log(greetPerson("John", "Paul", "Jones"));

// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function. -- I KNOW HOW TO DO THIS
function square(num) {
  return num ** 2;
}

console.log(square(3));
console.log(square(7));

// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.
function checkStock(inventory, item) {
  if (inventory > 3) {
    console.log(`${item} is stocked`);
  } else if (inventory === 0) {
    console.log(`${item} - OUT of stock!`);
  } else {
    console.log(`${item} - running LOW`);
  }
}
checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"
