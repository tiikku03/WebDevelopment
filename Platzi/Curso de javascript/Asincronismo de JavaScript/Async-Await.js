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