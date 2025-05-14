let score = 33

console.log(typeof score); // => number

// what if its a string
score = "33"
console.log(typeof score); // => string

// converting it into number
let scoreNum = Number(score)
console.log(typeof scoreNum); // => number
console.log(scoreNum); // => 33

// what if
score = "33abc"
scoreNum = Number(score);
console.log(typeof scoreNum); // => number
console.log(scoreNum); // => NaN **

// true => 1 ; false => 0 ;

// String to Boolean
value = "maaz"
boolValue = Boolean(value);
console.log(typeof boolValue); // => Boolean
console.log(boolValue); // => true

// 1 => true; 2 => false;
// "" => false;
// "maaz" => true;

// To String
let someNum = 33
let stringNum = String(someNum)
console.log(typeof stringNum); // => string
console.log(stringNum); // => '33'






