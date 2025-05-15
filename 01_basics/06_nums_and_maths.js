// Numbers

const num1 = 33
// Now, this num1 can be number or string, we dont know.

// If we want a complete number,
const numConfident = new Number(100);
console.log(num1); // => 33
console.log(numConfident); // => [Number : 100] => Object

// Number Methods
console.log(numConfident.toString());

let num2 = 100.4563278645
let num2_ = num2.toFixed(3);
console.log(num2.toFixed(3)); // doesnt round off ; gives 3 digits after decimal

console.log(num2.toPrecision(5)); // rounds off ; givees 5 digits overall

let num3 = 1000000000
console.log(num3.toLocaleString());
console.log(num3.toLocaleString('en-IN'));

//Now, imp **
console.log(typeof num2_); // => Its a string ; 
// All methods (prolly) on Numbers, return a string; not a number **


// Maths

let x1 = 100.3456734
console.log(Math.round(x1)); // 100
console.log(Math.abs(x1)); // 100.3456734
console.log(Math.floor(x1)); // 100
console.log(Math.ceil(x1)); // 101
console.log(Math.min(3,4,5,1.5)); // 1.5
console.log(Math.sin(Math.PI/2)); // 1
console.log(Math.tan(0)); // 0

// Math.pow
console.log(Math.pow(2, 3));   // 8 (2^3)
console.log(Math.pow(5, 2));   // 25 (5^2)
console.log(Math.pow(3, 0));   // 1

// Math.sin
console.log(Math.sin(0));              // 0
console.log(Math.sin(Math.PI / 2));    // 1
console.log(Math.sin(Math.PI));        // ~0 (small number due to floating-point precision)

// random
console.log(Math.random()); // btw 0 and 1

// random between x and y
function randomGenerator(min, max){
    return Math.floor(Math.random()*(max-min)) + 1
}
console.log(randomGenerator(1,10));
















