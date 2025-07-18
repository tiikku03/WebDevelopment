async function start() {
  const data = await fetch('https://api.weather.gov/gridpoints/OKX/35,35/forecast');// api de pronóstico del tiempo
  const result = await data.json();
  console.log(result.properties.periods[1].shortForecast);
}



async function start2() {
  fetch('https://api.weather.gov/gridpoints/OKX/35,35/forecast')// api de pronóstico del tiempo
    .then(data => data.json())
    .then(result => {
      console.log(result.properties.periods[1].shortForecast);
    });
}

start2();
 
start();


/*

->async and await must be used together

Exceptions: JS Modules & Chrome DevTools Console

->async/await only affects Promise receiver

->you can await any function that returns a Promise

Any function can be converted to async

All async functions return a Promise

*/


async function miFuncionAsincrona() {
  try {
    // Código que puede generar una Promesa exitosa
    const resultado = await algunaFuncionQueRetornaUnaPromesaExitosa();
    console.log("Operación exitosa:", resultado);

    // Puedes tener más operaciones await aquí
    const otroResultado = await otraFuncionAsincrona(resultado);
    console.log("Otra operación exitosa:", otroResultado);

  } catch (error) {
    // Código que se ejecuta si alguna de las Promesas es rechazada (falla)
    console.error("Hubo un error en la operación asíncrona:", error);
    // Aquí puedes manejar el error, mostrar un mensaje al usuario, etc.
  } finally {
    // Bloque opcional: Este código se ejecuta siempre, independientemente de si hubo un error o no
    console.log("La operación asíncrona ha finalizado (limpieza, etc.).");
  }
}

// Para llamar a la función asíncrona
miFuncionAsincrona();