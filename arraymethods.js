//toString() Method
//Strings Seperated by commas in result
const fruits = ["Banana", "Orange", "Apple", "Mango","Grape"];
 console.log(fruits.toString());

 //join() Method
 //same as tostring() Method but in this we can specify the seperator.
 var fruits1= ["Banana", "Orange", "Apple", "Mango","Grape"];
 console.log(fruits1.join("$"));

 //pop() Method
//The pop() method removes the last element from an array.
var fruits1= ["Banana", "Orange", "Apple", "Mango","Grape"];
console.log(fruits1.pop());

//push() Method
//The push() method adds a new element to an array (at the end).
var fruits1= ["Banana", "Orange", "Apple", "Mango","Grape"];
var pushfruit=fruits1.push("Kiwi");
console.log(fruits1);

//shift() method
//The shift() method removes the first array element and "shifts" all other elements to a lower index.
var fruits1= ["Banana", "Orange", "Apple", "Mango","Grape"];
console.log(fruits1.shift());
console.log(fruits1);

//unshift() method
//The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements
var fruits1= ["Banana", "Orange", "Apple", "Mango","Grape"];
console.log(fruits1.unshift("Lemon"));
console.log(fruits1);

//delete method
//JavaScript arrays are objects,elements can be deleted by using the JavaScript operator delete:
var fruits2=["Banana", "Orange", "Apple", "Mango"];
var x=delete fruits2[0];
console.log(fruits2);

//splice() method added elements
//The splice() method can be used to add new items to an array using index values
var fruits2=["Banana", "Orange", "Apple", "Mango"];
let y=console.log(fruits2.splice(2, 0, "Lemon", "Kiwi"));
console.log(fruits2);

//slice() remove elements
var fruits2=["Banana", "Orange", "Apple", "Mango"];
let z=console.log(fruits2.splice(0,2));
console.log(fruits2);

//concat() method
//The concat() method does not change the existing arrays. It always returns a new array.
//concate new array with allready existing array
const girls = ["Pravali", "Mouni"];
const boys = ["Raj", "Satya", "Mani"];
const students=girls.concat(boys);
console.log(students);

//merge with two arrays
const girls1 = ["Alekhya","PLP","Pushpa"];
const boys1 = ["Prasad","Mani","Pavan"];
const teacher1 = ["Santhoshi","shiva"];
const colg =girls1.concat(boys1,teacher1); 
console.log(colg);