// Activity1:
// task1:
// Ans
let number = 2;
if (number < 0) console.log("negative");
else if (number > 0) console.log("positive");
else console.log("zero");
// task2
// Ans
let Age = 19;
if (Age >= 18) console.log("eligible");
else console.log("not eligible");
// Activity:3
// task3
// Ans
let num1 = 3;
let num2 = 1;
let num3 = 8;
if (num1 >= num2) {
    if (num1 >= num3) {
        console.log(num1);
    }
    else {
        console.log(num3);
    }
}
else {
    if (num2 >= num3) {
        console.log(num2);
    }
    else {
        console.log(num3);
    }
}
// Activity3
//task4
// Ans:
let day = 7;
switch(day){
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
            
    case 4:
        console.log("thusday");
        break;
    case 5:
        console.log("fridY");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;

}
// task5
// Ans
const marks = 75;
let grade;

switch (true) {
    case marks >= 90:
        grade = 'A';
        break;
    case marks >= 80:
        grade = 'B';
        break;
    case marks >= 70:
        grade = 'C';
        break;
    case marks >= 60:
        grade = 'D';
        break;
    case marks >= 50:
        grade = 'E';
        break;
    case marks < 50:
        grade = 'F';
        break;
    default:
        grade = 'Invalid marks';
}

console.log(`Your grade is: ${grade}`);
// Activity4
// task6
// Ans
let num = 1;
(!(num&1))?console.log("even"):console.log("odd");
// Activity5:
// task7
let year = 2021;
if(year%4 == 0){
    if(year%100==0){
        if(year%400==0){
            console.log("leap year");
        }
        else{
            console.log("not a leap year")
        }
    }
    else{
        console.log("leap year")
    }
}
else{
    console.log("not a leap year");
}
