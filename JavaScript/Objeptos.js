console.log("                       OBJECTS")
/* OBJECTS ARE DATA STRUCTURES THAT ALLOW US TO STORE DATA IN KEY-VALUE PAIRS 
METHODS ARE FUNCTIONS THAT ARE STORED INSIDE OBJECTS
    
    object = {
        key: value
        key: value
        key: value
        METHODS
        key: function(){}
    }
*/

const person = {
    name: "John",
    age: 30,
    adress: {
        street: "Main St",
        city: "Boston"
    },
    saludar: function(){
        return "Hello, I am " + this.name;
    }
}
console.log(person.saludar())

// Adding elements to an object
person.phone = "555-555-5555"
console.log(person)

person.despedir =() => {
    return "Goodbye"
}

//Removing elements from an object
delete person.phone
delete person.despedir

console.log(person)

console.log(" ")
console.log(" ")
console.log("_________________________________________________________")
// What if we want to create a big amount of objects with the same structure?
// We can use a constructor function
function Person(name, age, city){
    this.name = name
    this.age = age
    this.city = city
    this.saludar = function(){
        // Using template literals to embed variables within the string
        return `Hello, I am ${this.name} and I am ${this.age} years old. I live in ${this.city}.`;
    }
}

const person1 = new Person("John", 30, "Boston")
console.log(person1.saludar())

Person.prototype.despedir = function(){
    return "Goodbye"
}