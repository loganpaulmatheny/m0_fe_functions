// Each example below has at least one opportunity for improvement.

// YOUR TASK:
// Modify the code to make that improvement(s)
// write a JS comment to explain what you changed, and why
// make sure the code you submit WORKS - you can run this entire file
// using `node cleanUp.js` or copy and paste into a replit

// EX 1:
// DO - Changed the structure of the function to return a value rather than try and console.log a value within the function, and console.log outside of the function.
// WHY - Function did not work or print results previously.
function askForName() {
  return "Hello, what is your name?";
}

console.log(askForName());

// EX 2:
// DO - Added console.log statements to the function calls to see results.
// WHY - Could not see printed results
function addThreeNums(first, second, third) {
  var sum = first + second + third;
  return sum;
}

console.log(addThreeNums(1, 2, 3));
console.log(addThreeNums(4, 2, 7));

// EX 3:
// DO - I removed the console.log statements and instead made the various steps into variables. I then created an array with the variables listed in the order they are to be executed in. Lastly I created a for loop that more easily display the steps of making the pesto.
// WHY - If there are more steps to be added later or reused you will have to fully type them out again versus calling a variable.
var purchaseIngrediants =
  "Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper";

var basilAndPineNuts = "Pulse basil and pine nuts";
var garlic = "Add garlic and cheeses";
var pour = "Slowly pour in oil";
var season = "Season";

var prep = [purchaseIngrediants, basilAndPineNuts, garlic, pour, season];
function makeFreshPesto() {
  for (i = 0; i < prep.length; i++) {
    console.log(`Step ${i + 1}. ${prep[i]}`);
  }
}

makeFreshPesto();

//  EX 4:
// DO - Created a fundtion that accepts an array instead of numbers and finds the average of those numbers. First you run a for loop to add all of the numbers after which you can divide by the number of items in the array using the length property of the array to get the average. Return the average.
// WHY - The function does not show it's result and it only accepts two values
function average(arr) {
  var sum = 0;
  for (i = 0; i <= arr.length; i++) {
    sum = sum + i;
  }
  var average = sum / arr.length;
  return average;
}

var array = [1, 2, 3, 4, 5];
console.log(average(array));
