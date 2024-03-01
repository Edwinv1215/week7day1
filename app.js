// Testing javascript link through web console
console.log('testing');
// Multi-line Comment

// Declaring a variable using var (the old way)
var firstName = 'Edwin'
console.log(firstName);

// Reassigning values
firstName = 'Sarah'
console.log(firstName);
// Use semicolons at the end of your JS code (Or not...)

// Use the typeof operator to see a data type
var students = ['tommy', 'tez', 'sarah']



// strings in js
console.log(`Hi my name is ${firstName}`);
console.log(students);
// Arrays AKA Python Lists

// Objects AKA Python Dicts
var bio = {
    firstName: 'Edwin',
    lastName: 'Valentin',
    location: 'New York'
}
console.log(bio)

// Hoisting

var tezNumber = 7;
console.log(tezNumber)
/* 
- NOTE: Instead of using VAR to define variables, use LET and CONST (Modern Way)
- Not only because of var hoisting behaviors can be tricky, but so you don't
accidentally re-declare a variable that already exists.
- LET and CONST are also variable declarations using the ES6 Syntax but do allow
for re-declaration.

- LET vs CONST
- let: allows for reassignment of values (Just like Python)
- const: does NOT allow for reassignment of values 
*/

// let
let favSuperHero = 'Spiderman'
console.log(favSuperHero)
favSuperHero = 'Mary'
console.log(favSuperHero)

// const
const birthday = 'June 25th'
console.log(birthday)
// ------------------------ Math Operations ----------------------------

let num = 0
// Addition

// Incrementing

// Increment by 1
console.log(num+=2)
console.log(num++)
console.log(num)

// Subtraction

// Decrement by 1

// Decrementing
console.log(num-=2)
console.log(num--)
console.log(num++)
// Multiplication
console.log(num*=5)
// Division
console.log(num/=2)
// Exponents
console.log(num**2)
// ---------- Math is a built-in for javascript ---------------

// Math.floor()
console.log(Math.floor(3.14))
// Math.ceil()
console.log(Math.ceil(3.14))
// Watch out for these behaviors when adding number and strings
console.log(8 + '3') 
// the string connnection to the 3 is 83 because 8 is a number and 3 is a string 
// -------------- Javascript Functions ----------------------
// Function Declaration, Function Expression, Arrow Function (ES6)
// NOTE: Indentation does NOT matter in JS, but its good practice.
// We use curly braces to keep track of scope instead.

// Function Declaration
// Very similar to Python
// function goatPlayer(name) {
//     console.log(name)
// }
// goatPlayer('michael jordan')

// Function Expression
// // const goatPlayer = function(name) {
//     return name
// }
// console.log(goatPlayer('kobe bryant'))
// // Arrow Function (ES6)
// // const goatPlayer = (name) => {
//     return name
// }
// console.log(goatPlayer('labron james'))
// // -------------------- if, else if, else conditional statements -----------------------
// // syntax: if (condition) { code block ran if true }

const checkTemp = (temp) => {
    if (temp < 65){
        return 'its cold outside'
    }
    else if (temp < 85){
        return 'its a beautiful day'
    }
    else {
        return 'its pretty steamy outside'
    }
}

console.log(checkTemp(85))

// ------------------------- Ternary Operators -------------------------
// Python: (run_this_code_on_true) if (condition) else (run_this_code_on_false)
// JS: (Condition) ? (run_this_code_on_true) : (run_this_code_on_false)
let grade = 75
console.log(grade > 80)

// ------------------------- JS Loops --------------------------------
// ----- For Loops -----

// loop through an array

// loop through an array with for-of loop (values) (ES6)

// loop through an array with for-in loop (indices) (ES6)

// ----- While Loops -----

// Do-While
// Syntax: do {code block} while (condition)
// NOTE: It is guaranteed to run once

// -------------------- More JS Array Practice & Methods -----------------------
let artists = ['Kendrick Lamar', 'Bruno Mars', 'Chris Brown']

// index
console.log(artists[1])
// indexing from the end

// object.toString() method returns a string representing the object
// NOTE: This is an object method, which means you can you use this on different data types

// joining an array with a seperator
// syntax: array.join(seperator)

// slice method (Out of place algo), does NOT effect the original Array
// syntax: array.slice(start, end)
console.log(artists.slice())
console.log(artists)

// splice method (in place algo), does effect the original Array
// syntax: array.splice(start, end)


// -----------Homework ------------- 
//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
`Matched ${dog_name}` if name is in the string, if its not a match console.log "No Match"
*/


const findWords = () => {
    for (let dog_name of dog_names) {
        if (dog_string.toLowerCase().includes(dog_name.toLowerCase())) {
            console.log(`Matched ${dog_name}`);
        } else {
            console.log(`No Match`);
        }
    }
}

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
let dog_names = ["Max", "HAS", "PuRple", "dog"];

findWords(); // Call the function directly without logging it, as the function itself handles logging.


//Call method here with parameters

//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

// Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

// function replaceEvens(arr){
//     //code goes here
// }

// //Expected output
// //Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
// //Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


function replaceEvens(arr) {
    for (let i = 0; i < arr.length; i += 2) {
        arr[i] = "even index";
    }
    return arr;
}

let arr = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"];
console.log("Given arr =", arr);
console.log("Output arr =", replaceEvens(arr));


// console.log(artists.slice())
// console.log(artists)


// Code wars ___!!!!!! JAVASCRIPT

// (8kyu)ReturnNegative

// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12

// Solution.



function makeNegative(num) {
  if (num < 0) {
    return num
  } else {
    return -num
  }
}

console.log(makeNegative(1))
console.log(makeNegative(-5))
console.log(makeNegative(0))
console.log(makeNegative(0.12))



// 8 kyu
// Multiply the number


// Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

// multiply(3) == 15 # 3 * 5¹
// multiply(10) == 250 # 10 * 5²
// multiply(200) == 25000 # 200 * 5³
// multiply(0) == 0 # 0 * 5¹
// multiply(-3) == -15 # -3 * 5¹

// solution.


function multiply(number) {
  if (number === 0) return 0;
  const numDigits = Math.abs(number).toString().length;
  return number * Math.pow(5, numDigits);
}


console.log(multiply(3));   
console.log(multiply(10));  
console.log(multiply(200)); 
console.log(multiply(0));
console.log(multiply(-3));