// Activity1
// task1
// ans/
nameof = "harsh negi";
age = 90;
console.log(`my name is ${nameof} and i am ${age} years old`);
// task2
// ans/
console.log(`harsh negi is 
the king of any place
he is something and and and `);
// Activity2
// task3
// ans/
array = [1,2,3,5,7];
let [a,b] = array;
console.log(a,b);

// task4
// ans/

Book ={
    title:"the fairy tale",
    author:"harsh negi"
}

let {title,author} = Book
console.log(author);
console.log(title);

// speread and rest operators
// task5
// ans/

array1 = [2,2,4,5,6,6,7,886];
array2 = [...array1,5,6,8,9,0,6,8];
console.log(array2);

// task6
// ans/

let sum = (...array)=>{
    return array.reduce((total,current) => total + current,0);
}
console.log(sum(2,5,6,7));

// tak7
// ans/
let sum2 = (first,second=1)=>{
      return first * second;
}

console.log(sum2(13,3));
console.log(sum2(13));

// Activity5
// task8 and task9
// ans/
property1 = "nothing"
obj = {
    name:"harsh",
    [property1]:"k",
    sayhello(){
        console.log("hello")
    }
}
console.log(obj);