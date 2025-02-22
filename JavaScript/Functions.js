function calculateDiscountPrice (price, discount) {
  console.log(price - (price * discount));
}
calculateDiscountPrice(100, 0.2); // 80

// capacidades que tienen las funciones al igual que otros objeptos
// 1. pasar funciones como argumentos -> callback
function a () {}
function b () {}
function b (a) {}
b(a);


// RETORNAR UNA FUNCIÓN DESDE OTRA FUNCIÓN
// DECLARACION DE FUNCIONES
function a () {
    function b () {
      return b 
    }
}

// asignar funciones a variables -> expresion de funcion
const c = function () {}

// tener Propiedades y metodos
function z () {
const obj = {}
    z.call(obj)
}
// ANIDAR FUNCIONES // NESTED FUNCTIONS
function a () {
  function b () {
    function c () {
      console.log('c')
    }
    c()
    console.log('b')
  }
  b()
  console.log('a')
}
a()





// FUNCIONES PURAS E IMPURAS 
// Funciones puras  
/* 
1. MODIFICAR VARIAVLES GLOBALES
2. MODIFICAR PARAMETROS
3. SOLICITUDES HTTP
4. IMPRIMIR MENSAJES EN  PANTALLA O CONSOLA
5. MANIPULACION DE DOM
6. OBTENER LA HORA ACTUAL
*/
// funciones puras

function suma (a, b) {
  return a + b
}

function square (a) {
  return a * a
} 


// es una funcion pura porque no modifica nada fuera de ella



// Funciones impuras
function suma (a, b) {
  console.log("A: ", a)
}
 
let counter = 0
function increment (a) {
  counter += a
}
console.log("--------------------------------------------------");
// ARROW FUNCTIONS Y ENLACE LEXICO

let name = "Juan"
let lastName = "Perez"

const greeting = function (name) {
  return `Hola ${name}`
}

const newgreeting = name => {
  return `Hola ${name}`
}

console.log("--------------------------------------------------");
// arrow function  with an implicit return
const newgreetingimplicit = name => `Hola ${name}`

const newgreetingimplicitWithTwoParameters = (name, lastName) => `Hola i am ${name} ${lastName}`

console.log("--------------------------------------------------");
/*
lexical binding
*/
console.log("lexical Binding")
const fictionalCharacter = {
  name: "Harry Potter",
  age: 40,
  greet: function () {
    console.log(`Hola soy ${this.name}`)
  }
}
fictionalCharacter.greet() 