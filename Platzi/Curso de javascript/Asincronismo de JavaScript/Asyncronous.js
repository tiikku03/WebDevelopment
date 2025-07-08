/*

Callbacks: funciones que se pasan como argumento a 
            otras funciones y se ejecutan después de 
            que una tarea se completa.

           
Promises: objetos que representan el resultado, fucnion no bloqueante que
            trabaja con la asincronía.

Async/Await: permite escribir código asíncrono de manera más
              legible y fácil de entender, basado en promesas. elimina algunos problemas
                de las promesas, como el callback hell.

*/





/* Event Loop: es un tarea particulas que se encarga de mover del task queue a la call stack

un bucle de eventos como un patron de diseño que permite a 
JavaScript manejar operaciones asíncronas.

->Memory heap: donde se almacenan los objetos y variables de forma aleatoria.
->Call stack: donde se ejecuta el código, maneja las funciones y su contexto de ejecución.
            apila de forma organizada las instrucciones del programa en forma LIFO (Last In, First Out).
->Task queue: donde se almacenan las tareas asíncronas que esperan ser ejecutadas
                es la cola de tareas donde 
->Microtask queue: donde se almacenan las promesas y sus callbacks asociados.
                   Las promesas se ejecutan antes que las tareas de la task queue.
->Web APIs: son las APIs del navegador que permiten realizar operaciones asíncronas,
            como setTimeout, fetch, file render, XMLHttp Request. Estas APIs son proporcionadas por el entorno de ejecución


*/







/* ----------------------Call Backs------------------------------
Es una funcion que se pasa como argumento a otra función y se ejecuta dentro de esa función


*/



function suma(a, b) {
    return  a + b;
}

function useCallback(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(useCallback(5, 10, suma)); // 15


setTimeout(() => {
    console.log("Hola, soy un callback");
}, 2000); // Hola, soy un callback


function saludo(nombre){
    console.log(`Hola, ${nombre}`);
}

setTimeout(saludo, timeout = 3000,"oscar"); // Hola, soy un callback
// setTimeout(funcion, tiempo, argumento1, argumento2, ...)





/* ----------------------XML HTTP REQUEST------------------------------

1) llamado de productos.
2) acceder a un producto en particular.


*/

/* 


Convert callbacks to promises

how to create  promises: a promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
   
 ----Promise Maker -----------
function createPromise (){
    return new Promise( function(resolve, reject) {
        // Do something asynchronous
    }

Promise Reciver

let variable = createPromise();


how to use promises




why

different phases of promises

then, catch, finally

Error handling 

Chain multiple promises togther



*/




/*


The problem with Async is that you may not know when the code is executed, for example while calling an API we need to wait for the response before executing the next line of code.
but we don't know how long it is going to take, so we use callbacks to handle this situation.






*/


function getWeather() {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve('Sunny')
    }, 100)
  })
}

function getWeatherIcon(weather) {

}

function onSuccess(data) {
  console.log(`Success ${data}`)
}

function onError(error) {
  console.log(`Error: ${error}`)
}

getWeather().then(onSuccess, onError)


///////////////////////////////////////////////////////////////////////////////////
function fun1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('404')
    }, 1000)
  })
}

function fun2() {
    console.log('fun2 is called')
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('🤩') 
    }, 100)
  })
}

function onSuccess(data) {
  console.log(data)
}

function onError(errorCode) {
  console.log(`ERROR: ${errorCode}`)
}

function onFinally() { 
  console.log('FINALLY WE BE DONE YO')
}

fun1()
  .then(fun2) // this is executed if the promise is resolved successfully
  .then(onSuccess)// this is executed if the promise is resolved successfully
  .catch(onError) // this is executed if there is an error in the promise chain
  .finally(onFinally) // this is an optional function, it will always be executed