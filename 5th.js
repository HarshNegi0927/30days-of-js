// Activity1:
// task1
// Ans/
let IsOdd = function(num) {
    if ((num & 1) === 0) { 
        console.log("even");
    } else {
        console.log("odd");
    }
};

IsOdd(8);

// task2
// Ans/
let square = (num)=>{
    console.log(num*num);
}
square(9);

// Activity2:
// task3
// ans/
let max = (num1,num2)=>{
    return num1>num2?num1:num2;
}
console.log(max(9,8));

// task4
// ans/
let concatinate = (string1,string2)=>{
    return string1+" "+ string2;
}
console.log(concatinate("Harsh","Negi"));
// Activity3:
// task5
// ans/
const addNum = (number1,number2) =>{
    return number1 + number2;
}
// task6
// ans/
console.log(addNum(2,5));
const findChar = (string1,character)=>{
    for(let i=0;i<string1.length;i++){
        if(string1[i] == character){
            return true;
        }
    }
}
let string1 = "Harsh Negi";
console.log(findChar(string1,'r'));

// Activity4:
// task7
// ans/

let product = (number1,number2 = 9) =>{
    return number1*number2;
}
console.log(product(9,10));

// task8
// ans/
let greeting = (name,age = 18) =>{
    console.log(`congrats ${name} for ${age} years`)
}
greeting("hasrh",100);

// Activity5:
// task9
// ans/

const higherOrderfunc = (any,number) =>{
      for(let i=0;i<number;i++){
        any("harsh",19)
      }
}
higherOrderfunc(greeting,4)

// task9
// ans/
const function1 = (num) =>{
    return num+1;
}

const function2 = (num) =>{
    return num+10;
}

const callFunc = (function1,function2,value)=>{
    let result = function1(value);
    console.log(result);
    console.log(function2(result));
}
callFunc(function1,function2,9);