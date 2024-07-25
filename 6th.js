//arrays
// Activity1
// ans/
array = [1,2,3,4,5];
console.log(array);
// task2
console.log(array[0],array[array.length-1]);

// Activity2
// task3
// ans
array.push(6);
console.log(array);
// task4
// ans
array.pop();
console.log(array);
console.log(array.pop());
// task5
// ans
array.shift();
console.log(array);
console.log(array.shift());
// task6
// ans
array.unshift(1);
console.log(array);
console.log(array.unshift(6));
console.log(array);

// activity3
// task7
// ans
let double = array.map((num)=>{
    return num*2;
})
console.log(double)

array.push(1);
// task8
// ans
let even = array.filter((num)=>{
    return num%2 == 0;
});
console.log(even);

// task9
// ans
// Example: Summing all elements of an array
let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(sum);  

// Activity 4
// task10
// ans/

for(let i = 0;i<array.length;i++){
    console.log(array[i]);
}

// task11
// ans/

array.forEach(element => {
    console.log(element);
});

// Activity5
// task12
// ans/
array2D = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];
console.log(array2D)

// task12
// ans/
console.log(array2D[1][2]);