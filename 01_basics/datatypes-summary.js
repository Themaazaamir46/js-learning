// primitive and non-primitive

// Primitive - call by value
// 7 types - number, bigint, string, symbol, null, undefined, boolean

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId); // => false

// Non Primiitive - call by reference

// arrays, functions, objects

const arrayEx = ["Maaz", "Aamir", "Mohammed"]

const objectEx = {
    name : "Maaz",
    age : 22
}

const functionEx = function(){
    console.log("Hello JS");
    
}

// The End.. (Picture Abhi Baki hai Mere Dost)

// Stack VS Heap Memory

// Primitive Stored in Stack (Call by value)
// Reference Stored in Heap (Call by Reference)

let userName = "Azeem Basha"
let secondUser = userName // here we only copied the value, didnt change the original value
secondUser = "Khavi Basha"

console.log(userName);
console.log(secondUser);
// both will print different names

let personOne = {
    email : "azeem@google.com",
    upi : "azeembasha01@google.com"
}

let personTwo = personOne
personTwo.email = "khavi@google.com"

console.log(personTwo.email);
console.log(personOne.email);
// both will print same value => both were pointing to the same object in heap **

// The End()