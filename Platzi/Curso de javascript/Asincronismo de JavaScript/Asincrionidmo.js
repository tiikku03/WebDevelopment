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

