const aldeas = [
  { nombre: "El Fiscal", poblacion: 1500 },
  { nombre: "Los Pajales", poblacion: 850 },
  { nombre: "Agua Caliente", poblacion: 2200 },
  { nombre: "Pacayá I", poblacion: 1200 },
  { nombre: "Las Canoas", poblacion: 950 },
];

function calcularPoblacionTotal(pueblo) {
  //access the first item in the array
  let totalPopulation = 0;
  for (let i = 0; i < pueblo.length; i++) {
    totalPopulation = pueblo[i].poblacion + totalPopulation;
  }
  console.log(totalPopulation);
  //acces the amount of population in the element
  //sum those amount
}

function encontrarAldeaMasPoblada(pueblo) {
  let maxNum = {
    nombre: "",
    poblacion: 0,
  };
  for (let i = 0; i < pueblo.length; i++) {
    if (pueblo[i].poblacion > maxNum.poblacion) {
      maxNum = pueblo[i];
    }
  }
  return maxNum;
}


function filtrarAldeasPorPoblacion(pueblo) {
  let orderedList = [];
  for (let i = 0; i < pueblo.length; i++) {
    orderedList.push({nombre: "", poblacion: 0})
    if (pueblo[i].poblacion) {
      maxNum = pueblo[i];
    }
  }
  return orderedList;
}

console.log("Poblacion Total");
calcularPoblacionTotal(aldeas);

console.log("aldea mas Poblada");
let masPoblacion = encontrarAldeaMasPoblada(aldeas);
console.log(masPoblacion.nombre);


console.log(filtrarAldeasPorPoblacion(aldeas))