/* CallBack function: is a function that is passed as an argument to another 
funtion and it is executed after the main function has finished its execution 


*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
arr.forEach((element, index, array) => {
  console.log(
    `The element is: ${element}\n El index es: ${index}\n The original array is: ${array} `
  );
});

console.log("------------------.map()------------------------------");
/* .map() method: it is a method designed to create a new array by applying a given funtion to each element of the 
original array, it does not modify the original array*/
let newNumbersArray = arr.map((element, index, array) => {
  console.log(`element: ${element}\nindex: ${index}\narray: ${array}`);
  return element * 2;
});

console.log(newNumbersArray);

console.log("------------------.filter()------------------------------");
/* it creates a new array, Returns the elements of an array that meet the condition specified in the callback function.*/
let newEvenNumbers = arr.filter((number) => number % 2 === 0);
console.log(newEvenNumbers);

console.log("------------------.reduce()------------------------------");
/*it is used to process an array and condense it into a single value. this single value can be a number, a string, an object or even another array. 

array.reduce(callbackFn, initialValue);
the callback function is can take 4 parameters accumulator, currentValue, currentIndex, and array in that order


array.reduce(function(accumulator, currentValue, currentIndex, array) {
  // ... code to process each element
}, initialValue);

*/

let sumNumbers = arr.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  7
);
console.log(sumNumbers);

// Method Chaining: it is a tecnique used to  call multiple methods on the same object in a sigle line of code
const transactions = [
  { amount: 100, type: "credit" },
  { amount: 20, type: "cash" },
  { amount: 150, type: "credit" },
  { amount: 50, type: "cash" },
  { amount: 75, type: "credit" },
];
const totalCreditWithBonus = transactions
  .filter((transaction) => transaction.type === "credit")
  .map((transaction) => transaction.amount * 1.1)
  .reduce((sum, amount) => sum + amount, 0);

console.log(totalCreditWithBonus); // 357.5

console.log("------------------.sort()------------------------------");
/* it used to arrange the elements of an array and returns a reference to the sorted array, it returns a reference to the same array, now sorted.
array.sort(comparedFunction) 
the compare function is an optional parameter, if not parameter is provided the elements will be sorted in the alphabetical order
numbers will be converted into strings and evaluated using the utf-16 */
function compareNumbers(a, b) {
  // if works using the negative, positive values of the result of the operation, if the result is 0 it means that the values are equal
  return a - b; // if "a" comes after "b" the return of the function should be positive, if "a" comes before "b" the return of the function should be negative
}
const numbersArr = [3, 1, 1, 5, 9];
const sorted = numbersArr.sort(compareNumbers);
console.log(sorted);

console.log(
  "------------------.every() or .some()------------------------------"
);
/*When we want toi check if all or some of the elements within the array meet certain condition 

.every() this method tests whether all the elements in an array pass a test implemented by a provided function. this method returns true if the function provided returns true, if the function
         returns false the method will stop checking the remaining elements and the method will return false

.some() it check if at least one element passes the test, it returns true as soon as one element passes the test, if no elements meet the test it returns false
*/

const hasAllNotEvenNumbers = numbersArr.every((number) => {
  if (number % 2 !== 0) {
    return true;
  } else {
    return false;
  }
});

console.log(hasAllNotEvenNumbers); // true

const library = [
  {
    title: 'Your Next Five Moves: Master the Art of Business Strategy',
    author: 'Patrick Bet-David and Greg Dinkin',
    about: 'A book on how to plan ahead',
    pages: 320,
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    about: 'A practical book about discarding bad habits and building good ones',
    pages: 320,
  },
  {
    title: 'Choose Your Enemies Wisely: Business Planning for the Audacious Few',
    author: 'Patrick Bet-David',
    about:
      "A book that emphasizes the importance of identifying and understanding one's adversaries to succeed in the business world",
    pages: 304,
  },
  {
    title: 'The Embedded Entrepreneur',
    author: 'Arvid Kahl',
    about: 'A book focusing on how to build an audience-driven business',
    pages: 308,
  },
  {
    title: 'How to Be a Coffee Bean: 111 Life-Changing Ways to Create Positive Change',
    author: 'Jon Gordon',
    about: 'A book about effective ways to lead a coffee bean lifestyle',
    pages: 256,
  },
  {
    title: 'The Creative Mindset: Mastering the Six Skills That Empower Innovation',
    author: 'Jeff DeGraff and Staney DeGraff',
    about: 'A book on how to develop creativity and  innovation skills',
    pages: 168,
  },
  {
    title: 'Rich Dad Poor Dad',
    author: 'Robert Kiyosaki and Sharon Lechter',
    about: 'A book about financial literacy, financial independence, and building wealth. ',
    pages: 336,
  },
  {
    title: 'Zero to Sold',
    author: 'Arvid Kahl',
    about: 'A book on how to bootstrap a business',
    pages: 500,
  },
];

function displayBooks(catalog) {
  let output = 'Books in the Library:\n';

  catalog.forEach((book) => {
    output += `- ${book.title} by ${book.author} (${book.pages} pages)\n`;
  });

  return output;
}

function getBookSummaries(catalog) {
  return catalog.map((book) => book.about);
}

function getBooksByAuthor(catalog, author) {
  return catalog.filter((book) => book.author === author);
}

function getTotalPages(catalog) {
  return catalog.reduce((acc, book) => acc + book.pages, 0);
}


const multiply = (a) => (b) => a * b;
const operations = [multiply(2), multiply(3)];
const result = operations.reduce((acc, fn) => fn(acc), 5);

console.log(result);