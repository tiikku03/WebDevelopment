//Bracket notation [] for strings
let greeting = "hello";
console.log(greeting[0]);
//-----------------------------
//break a string accros multiple lines and to insert

console.log("the house is a \n beautiful place to live");
console.log('the house that my grandpa "bouhgt" is going to break');

console.log("-----------------------------------------------");
//Template literals ``: insert expresion, the text will include the break lines lefth in the code

//finding the position of a substring in an string
let say = "Hello World!";

console.log(say.indexOf("hello")); // exist returs the position of the element
console.log(say.indexOf("victor")); // does not exist returs -1
console.log(say.indexOf("!"));

//American standard code (a numerical value for characters like symbols, letters and control characters )
//Compare their ask key value
console.log(String.fromCharCode(66));
let letter = "A";
console.log(letter.charCodeAt());

// includes method
console.log(say.includes(" ")); //returns true or false

// take a portion of a string
let newString = say.slice(3, 8);
console.log(newString); // returns a new string

// building methods 
console.log(say) //Hello World!
console.log(say.toUpperCase()) // HELLO WORLD!
console.log(say.toLowerCase()) // hello world!


// The replace method .replace(searchValue, newValue) // only the first value of the string is changed

// trim() it removes white apace in the begining or the end
// trimStart() 
// trimEnd() 

console.log(say.trim())