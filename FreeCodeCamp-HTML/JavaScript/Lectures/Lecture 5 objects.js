/* Notation 

objectName.propertyName
objectName["propertyName"] this notation allows the usage of variables between the brackets


---->>object Destructuring: extract values from objects


*/



console.log("-----------------Removing properties from an object------------------------")
/*Removing properties from an object */

let user = {
    userName: "victor",
    userAge: 25,
    job: "designer",
    city: "newYork"
}
console.log(user) //{ userName: 'victor', userAge: 25, job: 'designer', city: 'newYork' }


let {userName, job, ...remainingProperties} = user 
console.log(remainingProperties) //{ userAge: 25, city: 'newYork' }


console.log(delete user.job)// deletes job from the object
console.log(user) // { userName: 'victor', userAge: 25, city: 'newYork' }

console.log(user.job)


console.log("-----------------checking if an object has a property------------------------")

// checking if an object has a property
/* HasOnProperty() returns a boolean  */

console.log(user.hasOwnProperty("userName")) // output: True

// in operator
console.log("userName" in user)// output: True




console.log("-----------------Nested objects and Arrays in objects------------------------")

let person = {
    contact: {
        phone: {
            home: "123-456-7890",
            work: "098-765-4321"
        }
    }
};

console.log(person.contact.phone.work) //output: 098-765-4321
console.log(person["contact"]["phone"]["work"]) //output: 098-765-4321
//----------------------------------------------------------------
let secondPerson = {
    name: "Alice",
    details: {
        age: 25,
        hobbies: ["reading", "swimming"]
    }
};

console.log(secondPerson.details.hobbies[1]); //Output: swimming

//------------------------------------------------------------
let data = {
    results: [
        { name: "Alice", score: 95 },
        { name: "Bob", score: 80 },
        { name: "Charlie", score: 90 }
    ]
};

console.log(data.results[1].name);//Output: Bob

console.log("-----------------Difference between primitive and not primitive------------------------")
/*
Primitive Data Types:
    they represents single values like strings and numbers and they are not objects, it is stored directly in the variable


Non Primitive Data Types:
    they are objects, arrays and functions, what is stored in the variable is a reference to the location of memory and not the object itself
*/

let number1 = 10
let number2 = number1
number1 = 20
console.log(number2) //output: 10 Due that a number is a primitive value number2 stores a copy of the declared variable number1 and it cannot be changed

//---------------------------------------------------------
let angy = {
    age: 31,
    job: "manager",
    maritalSta: "single"
}

const mari = angy
console.log(mari)// { age: 31, job: 'manager', maritalSta: 'single' }
angy.age = 32
console.log(angy.age) //output: 32
console.log(mari.age) //output: 32 Due that angy is a non primitive value the variable mari does not store a direct copy of angy insted it has the reference of 
                                // where angy  is stored


console.log("-----------------Functions and Object Methos------------------------")
/*



*/
// greet is an object method
let personObject = {
    name: "Alice",
    greet: function() {
        console.log("Hello, I'm " + this.name);
    }
};
console.log(personObject.greet()) // output: Hello, I'm Alice
// they are used for functions to use within the object, they are associated to its object, to the object properties


// function
function functionGreet(userName){
    console.log("Hello, I'm " + userName)
}

console.log(functionGreet("victor")) // output: Hello, I'm victor
// they are used in tasks related to reusable code





console.log("-----------------Constructor Object()------------------------")
/* 
It is a function used to create and initialize objects. it is invoked with the new keyword and can initialize 
properties and methods an the newly created object
*/

let obj = Object(42); // [Number: 42]
console.log(typeof obj); // output: object
console.log(obj)



console.log("-----------------Optional Chaining Operator------------------------")
// it is used to safely access object properties or call methods without worrying if they exist or not
//it is used to not continue with the operation if the a property within the object is null, undefined or does not exist

let book = {
    title: "JavaScript 101",
    author: {
        name: "Jane Doe"
    }
};

console.log(book?.author?.name); // output: "Jane Doe"
console.log(book?.author?.age); // output: Undefined



console.log("-----------------JSON (Java Script Object Notation)------------------------")
//it is a lightweight, text-based data format commonly used to exchange data between a server and webapp
// the information within the JSON file can be accessed using the same notation as working with objects


console.log("-----JSON.parse()------------------------")
// it is used to convert JSON strings into javaScript objects. Useful when you need to manipulate JSON data in your application

const jsonString = '{"name":"Alice","age":25}';
const jsObject = JSON.parse(jsonString)
console.log(jsObject)// { name: 'Alice', age: 25 }

console.log("-----JSON.stringify()------------------------")
// it is used to convert a javaScript object into a JSON string. Useful for storing or transmitting data in a format that's 
//easy to share or transfer between systems.

const casa = {
  // Atributos básicos de la casa
  tipo: "Casa Unifamiliar",
  direccion: {
    calle: "Avenida Las Américas",
    pais: "Guatemala"
  }
}

const jsonObject = JSON.stringify(casa) 
console.log()
console.log(jsonObject) // {"tipo":"Casa Unifamiliar","direccion":{"calle":"Avenida Las Américas","pais":"Guatemala"}}



function sum(array){
  let total = 0
  for (let number in array){
    total += array[number]
  }
  return total
}


function getAverageRating (array){
  let totalIngredients = sum(array)
  let averageRating = totalIngredients/(array.length)
  return averageRating
}



///////////////////////////////Creating a factory function ////////////////////////////
/* Create objects */

function personFactory (name){
    return {
        talkk(){
            return `Hello I am ${name}`
        }
    }
}

/////////////////////////////////Constructor Functions /////////////////////////////////////
/* A function that creates objects */
