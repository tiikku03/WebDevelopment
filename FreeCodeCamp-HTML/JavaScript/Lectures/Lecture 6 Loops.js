console.log()
/* loops
    1) For (variable; condicion; incremento){
        codigo a ejecutar
    }
*/
let mycompu = "victor";
for (let i = 0; i < mycompu.length; i++) {
    let letra = mycompu[i];
    console.log(letra);
}


console.log("--------------------------------------------------");
console.log("For of");
/* for of (objeptos iterables arrays and strings)
    for of (let (variable) of (array)) {
        codigo a ejecutar
    }
*/
let canasta = ["manzana", "pera", "platano"];
for (let fruta of canasta) {
    console.log(fruta);
}


console.log("--------------------------------------------------");
console.log("For in");
/* for in (objetos)

    for ((variable) in (objeto)) {
        codigo a ejecutar
    }

    un objepto tiene una propiedad y un valor, se utiliza para iterar entre las propiedades de un objeto
*/
const persona = {
    nombre: "victor",
    edad: 25,
    ciudad: "santiago"
};
for (let propiedad in persona) {
    console.log(propiedad);
    console.log(persona[propiedad]);
}


console.log("--------------------------------------------------");
console.log("While");
/* 
it will run a code as long as the condition is true
are usefull when we dont know how many times are we going to iterate

while (condicion) {
    codigo a ejecutar
}
*/

let counter = 0;
while (counter <= 10){
    console.log(counter);
    counter++;
}


console.log("--------------------------------------------------");
console.log("Do while");
/*
do while loops will execute the code at leat once before checking the condition

do {
    codigo a ejecutar
} while (condition)


diferecia entre while y do while, es que el do while se ejecuta el codigo antes de evaluar la condicion
*/
let contador = 0;
do {
    console.log(contador);
    contador++;
} while (contador <= 10);


// break : To exit the loop immediately.
// continue it is used to skip the code in an iteration

console.log("-------------------------------------------------------")
for (let i = 2; i <= 13; i++) {
  console.log(i);
}



