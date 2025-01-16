/**
 *
 *  1. Inventory Array
 * We create an array of objects where each object represents an item in the inventory. Each object contains an `i
 * (unique identifier), `name` (name of the item), and `quantity` (number of items available).
 */
const gadget = [
  { id: 1, name: 'Headset', quantity: 50 },
  { id: 2, name: 'HP Laptop', quantity: 30 },
  { id: 3, name: 'Dell', quantity: 20 },
];

console.log(gadget[0])

/*This structure is useful for managing data about items.

*2a. Favorite Fruits
*We create an array of favorite fruits and access specific elements using their indices.
*/
const favoriteFruits = ['Mango', 'Apple', 'Banana', 'Grapes', 'Orange'];
console.log(favoriteFruits[0], favoriteFruits[2], favoriteFruits[favoriteFruits.length - 1]);
/*
* Access the first fruit using `favoriteFruits[0]`.
* Access the third fruit using `favoriteFruits[2]`.
* Access the last fruit using `favoriteFruits[favoriteFruits.length - 1]`.

### 2b. Numbers in Reverse
We create an array of numbers and reverse its order using `.reverse()`.
*/
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers.reverse());

/*
The `.reverse()` method modifies the original array.

### 2c. Replace Second Element
We replace the second element in an array by directly assigning a new value to the second index.
javascript*/


let array = [1, 2, 3, 4];
array[1] = 99;
console.log(array);

/*
This changes the second element (index 1) to `99`.

### 2d. Modify Array
We add elements to the beginning and remove an element from the end of the array using `.unshift()` and `.pop()`.
*/

array.unshift('A', 'B'); // Adds 'A' and 'B' to the start.
array.pop(); // Removes the last element.
console.log(array);

/* These methods modify the array directly.

 3a. Print Elements
 We use a `for` loop to iterate through an array and print each element.
*/
function printArray(arr) {
  for (const element of arr) {
    console.log(element);
  }
}

/* The `for...of` loop makes it easy to access each element in the array.

 ### 3b. Sum of Array
 We calculate the sum of all elements in an array using `.reduce()`.
*/
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

/* `.reduce()` iterates through the array and accumulates the result.

 ### 4a. Filter Ages
 We filter an array to find all elements greater than 18 using `.filter()`.
*/
const ages = [15, 22, 18, 25, 30];
const adults = ages.filter(age => age > 18);
console.log(adults);

/* The `.filter()` method returns a new array with elements that satisfy the condition.

 ### 4b. Sort Names
 We sort an array of strings alphabetically using `.sort()`.
*/
const names = ['John', 'Alex', 'Emma', 'Zara'];
names.sort();
console.log(names);

/* By default, `.sort()` sorts strings in ascending order.

 ### 4c. Find First Greater than 10
 We use `.find()` to locate the first element greater than 10 in an array.
*/
const nums = [5, 8, 12, 3, 9];
const firstGreaterThan10 = nums.find(num => num > 10);
console.log(firstGreaterThan10);

/* `.find()` returns the first element that satisfies the condition.

 ### 4d. Check Includes
 We use `.includes()` to check if an array contains a specific value.
*/
console.log(nums.includes(12));

/* This method returns `true` if the value exists and `false` otherwise.

 ### 5. Remove Duplicates
 We use a `Set` to remove duplicate elements from an array.
*/
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

/* `Set` automatically eliminates duplicate values, and we convert it back to an array using spread syntax.

 ### 6. Student Grades
 We calculate the average, highest, and lowest grades in an array.
*/
const grades = [50, 75, 80, 100];
const averageGrade = sumArray(grades) / grades.length;
const highestGrade = Math.max(...grades);
const lowestGrade = Math.min(...grades);
console.log({ averageGrade, highestGrade, lowestGrade });

// We use `Math.max()` and `Math.min()` to find the highest and lowest values.

// ### 7. To-Do List
// We implement functions to manage a to-do list:

let toDoList = [];
function addTask(task) {
  toDoList.push(task);
}
function markTaskCompleted(task) {
  toDoList = toDoList.filter(t => t !== task);
}
function viewTasks() {
  console.log(toDoList);
}

// These functions use array methods to add, remove, and display tasks.

// ### 8. Person Object
// We create an object to represent a person and add a new property.

const person = { name: 'Alex', age: 25, hobby: 'painting' };
console.log(person.name, person.hobby);
person.isStudent = true;

// Objects are key-value pairs, and properties can be added dynamically.

// ### 9. Greet and Square Functions
// Simple functions to greet a user and calculate a square:

const greet = name => console.log(`Hello, ${name}!`);
const square = num => num ** 2;


// ### 10. Add Numbers and Check Even
// Functions to add two numbers and check if a number is even:

function addNumbers(a, b) {
  return a + b;
}
function isEven(num) {
  return num % 2 === 0;
}


// ### 11. Arrow Functions
// We rewrite functions as arrow functions:

const addNumbersArrow = (a, b) => a + b;
const sumNumbersArrow = arr => arr.reduce((sum, num) => sum + num, 0);


// ### 12. Introduce Function
// A function that creates an introduction sentence:

function introduce(name, age, hobby) {
  return `Hi, I'm ${name}. I'm ${age} years old, and I love ${hobby}.`;
}


// ### 13. Find Max and Filter Odd Numbers
// Functions to find the largest number and filter odd numbers:

function findMax(arr) {
  return Math.max(...arr); // Spread Operator (...):
}
function filterOddNumbers(arr) {
  return arr.filter(num => num % 2 !== 0);
}


// ### 14. Convert Temperature
// A function to convert between Celsius and Fahrenheit:

function convertTemperature(temp, type) {
  return type === 'C'
    ? (temp * 9) / 5 + 32
    : (temp - 32) * (5 / 9);
}

console.log(convertTemperature())


// ### 15. Calculate Tip
// A function to calculate the total amount with a tip:

function calculateTip(bill, tipPercentage) {
  return bill + bill * (tipPercentage / 100);
}

// ### 16. Check Prime
// A function to determine if a number is prime:

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < Math.sqrt(num) + 1; i++) {
    if (num % i === 0) return false;
  }
  return true;
}


// ### 17. Calculate BMI
// A function to calculate BMI and return a health message:

function calculateBMI(weight, height) {
  const bmi = weight / (height ** 2);
  if (bmi < 18.5) return { bmi, message: 'Underweight' };
  if (bmi < 24.9) return { bmi, message: 'Normal' };
  return { bmi, message: 'Overweight' };
}


// ### 18. Validate Password
// A function to check if a password meets certain criteria:

function validatePassword(password) {
  const hasLength = password.length >= 8;
  const hasLetters = /[a-zA-Z]/.test(password);
  const hasNumbers = /\d/.test(password);
  return hasLength && hasLetters && hasNumbers;
}
