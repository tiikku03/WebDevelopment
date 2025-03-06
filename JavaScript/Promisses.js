// Pasar de un codigo sincrono a asincrono

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
2. catch (when the promise is rejected, it let us know the error)


*/
const promise = new Promise((resolve, reject) => {
    setTimeout(() =>{
        let operationSeccesful = true;
        if (!operationSeccesful){
            resolve('Operation successfull')
        } else {
            reject('Operation failed')
        }
    },2000)
})

promise
    .then((successMessage) => {
        console.log(successMessage)
    })
    .catch((failedMessage) => {
        console.log(failedMessage)
    })





console.log("__________________________ ")
console.log<("ASYNC AWAIT")
/*

function fetchData (){
    fetch("https://rickandmortyapi.com/api/character")
    .then(Response => Response.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log(error)
    })
}

*/

async function fetchData (){
    //try and catch: try to do something, if it fails, catch the error
    try{
        let response = await fetch("https://rickandmortyapi.com/api/character")
        let data = await response.json()
        console.log(data)
    } catch (error){
        console.log(error)
    }

}

console.log("__________________________ ")
console.log("for await of")
const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums"
]




