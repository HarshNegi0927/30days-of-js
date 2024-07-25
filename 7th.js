// objects
// Activity1
const Book = {
    Title : "Js",
    author:"anyone",
    year:2005,
}
console.log(Book)
console.log(Book["Title"])
console.log(Book["author"]);

// Activity2
Book.TitleAndAuthor = function(){
    console.log(`${this.Title} is written by ${this.author}`);
}

console.log(Book.TitleAndAuthor());

Book.UpdateYear = function(obj){
    obj.year = 2010;
}
console.log(Book.UpdateYear(Book));
console.log(Book);

const liberary = {
     property1:{
        name:"i",
        books:[1,2,3,4]
     },
     property2:{
        name:"ii",
        books:[11,21,31,41]
     },
     property3:{
        name:"iii",
        books:[12,22,32,42]
     },
     property4:{
        name:"iiii",
        books:[13,24,34,43]
     },
}

console.log(liberary.property1.name);
console.log(liberary.property1.books);

Book.newMethod = function(){
    console.log(`The Books Name is ${this.Title} and the year is ${this.year}`);
}

console.log(Book.newMethod());

// Activity5
// ans/

for (const key in Book) {
       console.log(key);
       console.log(Book[key]);
}

console.log(Object.keys(Book));
console.log(Object.values(Book));
console.log(Object.entries(Book));  