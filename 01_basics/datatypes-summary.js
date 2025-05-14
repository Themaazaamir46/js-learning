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

// The End..