console.log("_________________________________________________________")
console.log("                       CLASSES")
/* CLASSES ARE BLUEPRINTS FOR OBJECTS
    CLASSES ARE USED TO CREATE OBJECTS
    CLASSES ARE USED TO CREATE OBJECTS WITH THE SAME STRUCTURE
    CLASSES ARE USED TO CREATE OBJECTS WITH THE SAME METHODS
    CLASSES ARE USED TO CREATE OBJECTS WITH THE SAME PROPERTIES
    CLASSES ARE USED TO CREATE OBJECTS WITH THE SAME METHODS AND PROPERTIES

    syntax:
    class ClassName {
        constructor(parameters){
            this.property = value
        }
        method(){
            return "Hello"
        }
    }

*/
class Person {
    constructor(name, age, city){
        this.name = name
        this.age = age
        this.city = city
        
    }
    saludar(){
        return `Hello, I am ${this.name} and I am ${this.age} years old. I live in ${this.city}.`
    }
}

console.log(" ")
console.log(" ")


console.log("_________________________________________________________")
// inheritance
// We can create a new class that inherits the properties and methods from another class
console.log("=> Inheritance")
class Employee extends Person {
    constructor(name, age, city, position){
        super(name, age, city)
        this.position = position
    }
    saludar(){
        return `Hello, I am ${this.name} and I am ${this.age} years old. I live in ${this.city}. I work as a ${this.position}.`
    }
}

const employee1 = new Employee("John", 30, "Boston", "Developer")
console.log(employee1.saludar())

Employee.prototype.segundoMetodo = function(){
    console.log("I am a second method")
}

employee1.segundoMetodo()

console.log(" ")
console.log(" ")
console.log("_________________________________________________________")
console.log("=> this")
/*
this is a keyword that refers to the object that is calling the method
*/
class Car{
    constructor(brand, model){
        this.brand = brand
        this.model = model
    }
    info(){
        return `This is a ${this.brand} ${this.model}`
    }
}
const car1 = new Car("Toyota", "Corolla")
