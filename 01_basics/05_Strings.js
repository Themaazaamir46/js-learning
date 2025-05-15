const s1 = "Maaz Aamir"
const s2 = "Hyderabad"

//String Interpolation, using backticks
console.log(`My name is ${s1} and I live in ${s2}`);

// Second way of declaring a String
let s3 = new String('Bengaluru') // as an object

console.log(s3.length);
console.log(s3[0]);

console.log(s3.__proto__);

console.log(s2.charAt(3));
console.log(s2.indexOf('b'))
console.log(s3.toUpperCase());

let substr1 = s1.substring(0,5);
console.log(substr1);

console.log(s1.slice(0,7))
// substring omits the last char, but slice doesnt **
// slice can take negative values as well

// trim
let s4 = "    Maaz Aamir   "
console.log(s4.trimEnd());
console.log(s4.trimStart());
console.log(s4.trim());

// replace and includes
let url = "https://maazaamir20%portfolio.com";
console.log(url.replace("20%", "-"));

console.log(url.includes("maaa"));

// split
let s5 = "Maaz-Aamir-is-a-good-boy";
console.log(s5.split("-")); // you get an array of words based on split
console.log(s5.split("-")[4]); // accessing words in the array














