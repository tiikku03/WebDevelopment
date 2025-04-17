// Pasar de un codigo sincrono a asincrono
// PROMISES: sirven para hacer asincrono el codigo

/*

promesa()
pending -> estado inicial
fulfilled -> termina correctamente
rejected -> termina con error

promisses has two types of callbacks
1. resolve
2. reject

They have two methods
1. then (when the promise is resolved)
2. catch (when the promise  is rejected, it let us know the error)

Metodos de las promesas
1. catch() no se resuelve la promesa, este medodo imprime el error
2. then() se resuelve la promesa, este metodo imprime el resultado

*/

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let operationSeccesful = true;
    if (!operationSeccesful) {
      resolve("Operation successfull");
    } else {
      reject("Operation failed");
    }
  }, 2000);
});

promise
  .then((successMessage) => {
    console.log(successMessage);
  })
  .catch((failedMessage) => {
    console.log(failedMessage);
  });






  



console.log("__________________________ ");
console.log <"ASYNC and AWAIT";


function fetchData (){
    fetch("https://rickandmortyapi.com/api/character")
    .then((Response) => Response.json())
    .then((data) => {
        console.log((data))
    })
    .catch((error) => {
        console.log((error))
    })
}



async function fetchData2() {
  //try and catch: try to do something, if it fails, catch the error
  // try tiene la misma funcion que then
  try {
    let response = await fetch("https://rickandmortyapi.com/api/character");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}


console.log("__________________________ ");
console.log("for await of");
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

async function fetchNewData() {
  try {
    for await (let url of urls) {
      let response = await fetch(url);
      let data = await response.json();
      console.log(data);
    }
  } catch (error) {
    console.log(error);
  }
}

 
async function name(params) {
    try {
        let response = await fetch("https://rickandmortyapi.com/api/character");
        let data = await response.json();
        console.log(data);
    }catch (error) {
        console.log(error)
    }
}

