// Activity 1:
// task 1:
// declare variables using var,assing it a number and log the value
// Ans
var firstVariable = 1;
console.log(firstVariable);
// task 2:
// declare variables using var,assing it a string and log the value
// Ans
let secondVariable = "Harsh Negi";
console.log(secondVariable);
// Activity 3 
// task 3:
// declare variables using const,assing it a boolean and log the value
// Ans
const thirdVariable = false;
console.log(thirdVariable);
// Activity 3:datatypes
// task4:declare the variables using defirent datatypes and console their types using typeof function
// ans
let var1 = 1;
let var2 = 1.1;
let var3 = "Harsh Negi";
let var4 = true;
let var5 = {
    name:"harsh negi",
    age:4,
    profession: "student",
}
let var6 = [1,3,5,6,7];
console.log(typeof(var1));
console.log(typeof(var2));
console.log(typeof(var3));
console.log(typeof(var4));
console.log(typeof(var5));
console.log(typeof(var6));

// Activity4:reassingning variables
// task5:declare a value using let assing its initial value then reassing its value console log booth the values
// ans
let variable1 = 1;
console.log(variable1);
variable1 = true;
console.log(variable1);

// Activity5:understandin const
// task6:task5:declare a value using const assing its initial value then try to reassing the value and observe the error
// ans
const variable2 = 44;
console.log(variable2);
// variable2 = 55;
// console.log(variable2);


// todays learning

// var

// Scope: Function-scoped. Variables declared with var are accessible within the entire function where they are defined, or globally if declared outside any function.
// Hoisting: var declarations are hoisted, meaning they can be referenced before their declaration (but will be undefined until assigned).
// Re-declaration: You can re-declare a variable declared with var in the same scope.

// let

// Scope: Block-scoped. Variables declared with let are only accessible within the block (e.g., inside {}) where they are defined.
// Hoisting: let declarations are also hoisted, but you cannot access them before their declaration (this results in a "Temporal Dead Zone" error).
// Re-declaration: You cannot re-declare a variable declared with let in the same scope.

// const

// Scope: Block-scoped, like let.
// Hoisting: Similar to let, const declarations are hoisted but cannot be accessed before their declaration.
// Re-declaration: You cannot re-declare a variable declared with const in the same scope.
// Assignment: A const variable must be initialized at the time of declaration and cannot be reassigned. However, if it holds an object or array, the contents can be modified.
