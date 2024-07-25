// Activity1:
// task1:
// Ans/
for(let i =1;i<=10;i++){
   console.log(i);
}
// task2:
// Ans/
for(let i=1;i<=10;i++){
    console.log(5*i);
}

// Activity2:
// task3:
// Ans/
let num = 1;
while(num<=10){
    console.log(num);
    num++;
}
// task4:
// Ans/
num =10;
while(num>=1){
    console.log(num);
    num--;
}
num =1;
// Activity3
// task5
// Ans/
do{
 console.log(num);
 num++;
}while(num<=5);

// task6
// Ans/

cnt = 1;
let factorial =1;
do{
    factorial *= cnt;
    cnt++
}while(cnt<=num);
console.log(factorial);

// Activity4
// task7
// Ans/
let rows = 5;
for (let i = 1; i <= rows; i++) {
    let stars = '';
    for (let j = 1; j <= i; j++) {
        stars += '*';
    }
    console.log(stars);
}

// or

for (let i = 1; i <= rows; i++) {
    let stars = '*'.repeat(i);
    console.log(stars);
}
// Activity5
// task8
// Ans/
num = 0;
while(num<10){
    num++;
    if(num == 5) continue;
    console.log(num);
}

// task9
// Ans/
num = 0;
while(num<10){
    console.log(num);
    if(num == 7) break;
    num++;
}