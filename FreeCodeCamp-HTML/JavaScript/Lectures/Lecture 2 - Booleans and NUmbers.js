 // =% 
 // += 
 // -=
 // *=
 // /=

 //unary operators
 //(+) changes an string into a number
 let stringNumber = "6"

console.log(typeof(stringNumber))
console.log(stringNumber)

let number = +stringNumber // instead of using (+) we could have use the (-) but that changes the value to a  negative number

console.log(typeof(number))
console.log(number)

console.log("---------------------------------------------------")

console.log(Math.trunc(2.5))
console.log("---------------------------------------------------")
console.log(Math.sqrt(81))
console.log(Math.cbrt(27))
console.log(Math.abs(-5))
console.log(Math.pow(2,3))


// is not a number (isNaN) 
console.log(isNaN(5))
let floatNumber = 1.5511111111111
console.log(floatNumber.toFixed()) // 1.1111 it returns the numbers as stringsc
console.log(isNaN(undefined))


// switch
let expression = 0
switch(expression){
    case 0: //value1:
        //code to be executed if expression === value
        break
    case 1: //value2:
        //code to be executed if expression === value
        break
}

let vehicle = "car";

