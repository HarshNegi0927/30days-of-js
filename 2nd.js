// Day:2
// Activity 1: arthimetic operations
// task1
// write a program to add two numbers and log in the console
// task2
// write a program to substract two numbers and log in the console
// task3
// write a program to multiply two numbers and log in the console
// task4
// write a program to divide two numbers and log in the console
// task5
// write a program to find the remainder of two numbers and log in the console

// ans:

let num1 = 4;
let num2 = 2;

let addition = num1 + num2;
console.log(addition);

let substraction = num1-num2;
console.log(substraction);

let multiplication = num1*num2;
console.log(multiplication);
 
let division = num1/num2;
console.log(division);

let remainder = num1%num2;
console.log(remainder);

// Activity2:assingment operator
// task6: use += operator to add a number to a variable and console the value
// task7: use -= operator to substract a number to a variable and console the value

// Ans

let variable = 7; 

variable += 3;
console.log(variable);  

variable -= 7;
console.log(variable);


// Activity:3: comparison operator
// task8: write a program to compare two numbers using < ans > operators
// Ans
let number1 = 3;
let number2 = 9;
console.log(number1>number2);
console.log(number1<number2);

// Activity:3: comparison operator
// task9: write a program to compare two numbers using <= ans >= operators
// Ans
number1 = 6;
number2 = 6;
console.log(number1>=number2);
console.log(number1<=number2);

// Activity:3: comparison operator
// task10: write a program to compare two numbers using == ans === operators
// Ans

number1 = 7;
let string1 = "7";
console.log(number1 == string1);
console.log(number1 === string1);

// Activity4:logical operator
// task11:write a programe for && to combine two conditons and console log the result
// Ans
let condition1 = 1>2;
let condition2 = 2>1;
console.log(condition1 && condition2);

// task12:write a programe for || to combine two conditons and console log the result
// Ans

console.log(condition1 || condition2);

// task13:write a programe for ! to neagte the conditons and console log the result
// Ans
console.log(!condition1);

// activity:5: ternary operator
// task14:write a program in ternary operator ans check wheather a number is negative or positive
// Ans
let Num = 2;
(!(Num&1))?console.log("even"):console.log("odd");