// String
let String = "Hello World";
let String2 = "javascript";
let String3 = String + "feliz";
console.log(String);
console.log(String2);
console.log(String3);
let frase = "It's time";
console.log(frase.length);
console.log(frase[0]);

// NUMBER
// 1) tipo de entero o decimal
let number = 10;
let number2 = 10.5;

console.log(typeof number, typeof number2);

// 2) Notación científica
let number3 = 10e3;

// 3) Infinity y NaN
let number4 = Infinity;
let number5 = -Infinity;
let number6 = NaN;

console.log(number3, number4, number5, number6);

// OPERACIONES ARITMETICAS
const suma = 10 + 20;
const resta = 10 - 20;
const multiplicacion = 10 * 20;
const division = 10 / 20;

//2) Modulo
const modulo = 10 % 3;
const exponente = 10 ** 3;

//3) Presicion
const resultado = 0.1 + 0.2;
console.log(resultado.toFixed(1));
console.log(resultado === 0.3);

// 4) Operaciones avanzadas
const raiz = Math.sqrt(144);
const valorAbsoluto = Math.abs(-10);
const aleatorio = Math.random();
console.log(raiz, valorAbsoluto, aleatorio);

//parseInt and parseFloat
const stringdecimal = "10.5";
const float = parseFloat(stringdecimal);
console.log(float);
console.log(typeof float);

/*

OPERADORES DE COMPARACION

/*
== COMPARACION DE VALOR
=== COMPARACION DE VALOR Y TIPO
!= NO ES IGUAL A
!== NO ES IGUAL A VALOR Y TIPO
> MAYOR QUE
< MENOR QUE
>= MAYOR O IGUAL QUE
<= MENOR O IGUAL QUE

*/

/*
 OPERADORES LOGICOS
    && AND
    || OR
    ! NOT
*/

/* 
ESTRUCTURAS DE CONTROL
    1) IF
        IF (LET CONDITION = TRUE) {
            }
    2) ELSE
        IF (LET CONDITION = TRUE) {
            } ELSE {
            }
    3) ELSE IF
        IF (LET CONDITION = TRUE) {
            } ELSE IF {
            } ELSE {
            }
    4) SWITCH
        SWITCH (VARIABLE) {
            CASE 1:
                BREAK;
            CASE 2:
                BREAK;
            DEFAULT:
                BREAK;
            }
*/
// metodos
console.log("--------------------------------------------------");
console.log("Metodos");
const numero = Math.floor(Math.random() * 10 + 1);
const numerodejugador = 5;
if (numero === numerodejugador) {
  console.log("Ganaste");
} else if (numero > numerodejugador) {
  console.log("Casi");
} else if (numero < numerodejugador) {
  console.log("Casi");
} else {
  console.log("Perdiste");
}
