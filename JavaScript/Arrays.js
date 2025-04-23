// podemos guatdar varias variables en una misma
// son objeptos

const fruits = Array("apple", "banana", "orange");
console.log(fruits);

const justOneNumber = Array(1);
console.log(justOneNumber);

const numbers = Array(1, 2, 3, 4, 5);
console.log(numbers);

console.log("_________________________________________________________");
console.log("                     sintaxis literal");
// 2. literal sintaxis
const fruits2 = ["apple", "banana", "orange"];
console.log(fruits);

const justOneNumber2 = [1];
console.log(justOneNumber2);

const emptyArray = [];
console.log(emptyArray);

// arrays mixtos

const recipIngredients = [
  "flour",
  true,
  2,
  {
    ingredient: "milk",
    quantity: 1,
  },
  false,
];
console.log(recipIngredients);

console.log("_________________________________________________________");
console.log("                     Accessing array elements");
// 3. Accessing array elements
const firstFruit = fruits[0];
console.log(firstFruit);

console.log("_________________________________________________________");
console.log("                     length Property");
// length Property
const lengthArray = fruits.length;
console.log(lengthArray);

console.log("_________________________________________________________");
console.log("                     mutability ");
// mutability
const sports = ["soccer", "tennis", "basketball"];
console.log(sports);
sports.push("football");
console.log(sports);
// pueden mutar el array original

console.log("_________________________________________________________");
console.log("                     immutability");
// immutability
const tools = ["hammer", "screwdriver", "wrench"];
console.log(tools);
const newTools = [...tools, "drill"];
console.log(newTools);
const newTools2 = newTools.concat("saw");
console.log(newTools2);
// pueden mutar el array original

console.log("_________________________________________________________");
console.log("                     Checking arrays");
// immutability
const tools2 = ["hammer", "screwdriver", "wrench"];
const isAnArray = Array.isArray(tools2);
console.log(isAnArray);

console.log("_________________________________________________________");
console.log("Sum all the elements in an array");
// Exercise: Sum all the elements of an array
const numbers2 = [1, 2, 3, 4, 5];
let sum = 0;
for (let number of numbers2) {
  sum = number + sum;
}
console.log(sum);

console.log("_________________________________________________________");
console.log("                     Methods that modify the original array");
const countries = ["canada", "usa", "mexico"];
console.log(countries);

console.log(" ");
console.log(" ");

console.log("=> Removing Elements");
const removedCountry = countries.pop();
console.log(removedCountry);
console.log(countries);

console.log(" ");
console.log(" ");

console.log("=> Adding Elements");
const addedCountry = countries.push("france");
console.log(countries);

console.log("_________________________________________________________");
console.log("=> push() method example");

console.log(fruits); // Output: ["apple", "banana", "orange"]

// Using push() to add elements to the end of the array
fruits.push("grape");
console.log(fruits); // Output: ["apple", "banana", "orange", "grape"]

// Adding multiple elements
fruits.push("kiwi", "mango");
console.log(fruits); // Output: ["apple", "banana", "orange", "grape", "kiwi", "mango"]

console.log("_________________________________________________________");
console.log("=> Map()");
const listNumbers = [1, 2, 3, 4, 5];
const squareNumbers = listNumbers.map((number) => number * number);
console.log(squareNumbers);
//Devuelve la informacion en forma de array

console.log(" ");
console.log(" ");

console.log("_________________________________________________________");
console.log("=> ForEach()");
// no devuelve la informacion en array
const colors = ["red", "blue", "green"];
const iterationColor = colors.forEach((color) => console.log(color));

console.log("_________________________________________________________");
console.log("exercises");
// conver farenheit degrees in celciosu degrees
const temperaturesInFarenheit = [32, 45, 50, 70, 80, 90, 100];
const temperaturesInCelcious = temperaturesInFarenheit.map(
  (temp) => (5 / 9) * (temp - 32)
);
console.log(temperaturesInCelcious);

// make a sum for all the items in an array
let suma = 0;
temperaturesInFarenheit.forEach((sumar) => {
  suma = sumar + suma;
});
console.log(suma);

console.log("_________________________________________________________");
console.log("=> filter()");
// metodos de arrays que no modifican el array original, crea un nuevo aray con elementos que pasaron la condicion

const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const digitsHigher = digits.filter((even) => even % 2 === 0);
console.log(digitsHigher);

console.log(" ");
console.log(" ");

console.log("_________________________________________________________");
console.log("=> Reduce()");
// Ejecuta una funcion reductora en cada elemento del array, devolviendo un unico valor
const numbersReduce = [1, 2, 3, 4, 5];
const reducedDigits = numbersReduce.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(reducedDigits);

const wordsReduce = ["I", "love", "coding", "I", "love", "coding"];
const wordFrequency = wordsReduce.reduce((accumulator, currentValue) => {
  if (accumulator[currentValue]) {
    accumulator[currentValue]++;
  } else {
    accumulator[currentValue] = 1;
  }
  // Returning the updated accumulator for the next iteration
  return accumulator;
}, {});
console.log(wordFrequency);

console.log(" ");
console.log(" ");

console.log("_________________________________________________________");
console.log("=> find()");
// Devuelve el primer elemento que cumple con la condiciones
const ages = [15, 20, 25, 30, 35];
const adult = ages.find((age) => age >= 18);
console.log(ages);
console.log(adult);

console.log("=> findIndex()");
// Devuelve el indice del primer elemento que cumple con la condiciones
const ages2 = [15, 20, 25, 30, 35];
const adult2 = ages2.findIndex((age) => age >= 18);
console.log(ages2);
console.log(adult2);

console.log(" ");
console.log(" ");

console.log("_________________________________________________________");
console.log("=> Slice()");
// Devuelve un nuevo array con los elementos seleccionados
const animals = ["dog", "cat", "bird", "fish"];
console.log(animals);
// we have selected the items that are from the position 1 to 3
const selectedAnimals = animals.slice(0, 3);
console.log(selectedAnimals);
const selectedAnimals2 = animals.slice(-2);
console.log(selectedAnimals2);

console.log(" ");
console.log(" ");

console.log("_________________________________________________________");
console.log("                          SPREAD OPERATORS");
console.log("coping an Array");
// coping an Array
const originalArray = [1, 2, 3, 4, 5];
const copiedArray = [...originalArray];
console.log(originalArray);
console.log(copiedArray);

console.log(" ");
console.log(" ");

console.log("_________________________________________________________");
console.log("coping an Array");
// combining Arrays
const Array1 = [1, 2, 3];
const Array2 = [4, 5, 6];
const combinedArray = [...Array1, ...Array2];
console.log("Este el el Array 1 : " + Array1);
console.log("Este el el Array 1 : " + Array2);
console.log(combinedArray);

console.log(" ");
console.log(" ");

console.log("_________________________________________________________");
console.log("Creating arrays with additional elements");
const baseArray = [1, 2, 3];
const newArray = [...baseArray, 4, 5, 6];
console.log("Este el el Array original: " + baseArray);
console.log("Este el el Array modificado: " + newArray);

console.log(" ");
console.log(" ");

console.log("_________________________________________________________");
console.log("Passing elements to a function");

function sumaDeUnArray(a, b, c) {
  return a + b + c;
}
const numbersToSum = [1, 2, 3];
sumaDeUnArray(...numbersToSum);
console.log(sumaDeUnArray(...numbersToSum));

console.log(" ");
console.log(" ");
