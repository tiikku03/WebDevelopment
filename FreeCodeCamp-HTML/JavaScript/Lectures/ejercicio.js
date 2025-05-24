let questions = [
  {
    category: "animales",
    question: "cual es el animal mas grande?",
    choices: ["camello", "raton", "conejo"],
    answer: "camello",
  },
  {
    category: "animales",
    question: "cual es el animal mas grande?",
    choices: ["elefante", "raton", "conejo"],
    answer: "elefante",
  },
  {
    category: "animales",
    question: "cual es el animal mas grande?",
    choices: ["elefante", "raton", "conejo"],
    answer: "elefante",
  },
  {
    category: "animales",
    question: "cual es el animal mas grande?",
    choices: ["elefante", "raton", "conejo"],
    answer: "elefante",
  },
  {
    category: "animales",
    question: "cual es el animal mas grande?",
    choices: ["elefante", "raton", "conejo"],
    answer: "elefante",
  },
];

function getRandomItem(array) {
  let randomIndex = Math.round(Math.random() * (array.length - 1));
  return array[randomIndex];
}

function getRandomQuestion(questionsObject) {
  return questionsObject.question;
}

function getRandomComputerChoice(questionsObject) {
  let randomIndex = Math.round(
    Math.random() * (questionsObject.choices.length - 1)
  );
  return questionsObject.choices[randomIndex];
}

function getResults(answer, questionsObject) {
  console.log(answer);
  if (answer === questionsObject.answer) {
    console.log(questionsObject.answer);
    return true;
  } else {
    console.log(questionsObject.answer);
    return false;
  }
}

// Definición básica de un nodo de lista enlazada
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

// --- Definición de la clase ListNode ---
// Esta es la definición estándar de un nodo de lista enlazada para problemas de LeetCode.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

// --- Función addTwoNumbers (la solución al problema) ---
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode(0); // Nodo "fantasma" para simplificar la creación de la lista
    let current = dummyHead; // Puntero para construir la nueva lista
    let carry = 0; // Acarreo

    // Bucle mientras haya dígitos en alguna lista o un acarreo pendiente
    while (l1 !== null || l2 !== null || carry !== 0) {
        // Obtener el valor del nodo actual o 0 si el nodo es nulo (lista más corta)
        let val1 = (l1 !== null) ? l1.val : 0;
        let val2 = (l2 !== null) ? l2.val : 0;

        // Calcular la suma de los dígitos y el acarreo
        let sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10); // El nuevo acarreo es la parte de las decenas
        let digit = sum % 10; // El dígito para el nodo actual es la parte de las unidades

        // Crear un nuevo nodo con el dígito y adjuntarlo a la lista resultante
        current.next = new ListNode(digit);
        current = current.next; // Mover el puntero al nuevo nodo

        // Avanzar a los siguientes nodos en las listas de entrada
        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }

    // Retorna el inicio de la lista resultante (después del nodo fantasma)
    return dummyHead.next;
};

// --- Funciones de utilidad para probar (no parte de la solución del problema) ---

// Función para crear una lista enlazada a partir de un array de números
function createLinkedList(arr) {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Función para convertir una lista enlazada a un array (para visualización)
function linkedListToArray(head) {
    const arr = [];
    let current = head;
    while (current !== null) {
        arr.push(current.val);
        current = current.next;
    }
    return arr;
}

// --- Casos de Prueba ---

// Tu ejemplo inicial: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Los dígitos están en orden inverso, así que representan 9,999,999 y 9,999
// La suma debería ser 10,009,998
// Que en orden inverso (como lista enlazada) sería [8,9,9,0,0,0,1]
let l1_test = createLinkedList([9,9,9,9,9,9,9]);
let l2_test = createLinkedList([9,9,9,9]);

let result1 = addTwoNumbers(l1_test, l2_test);
console.log("Resultado de [9,9,9,9,9,9,9] + [9,9,9,9]:");
console.log(linkedListToArray(result1)); // Debería imprimir [8,9,9,0,0,0,1]

// Otro ejemplo: 342 + 465 = 807
// En orden inverso: l1 = [2,4,3], l2 = [5,6,4]
// Suma en orden inverso: [7,0,8]
let l3_test = createLinkedList([2,4,3]);
let l4_test = createLinkedList([5,6,4]);
let result2 = addTwoNumbers(l3_test, l4_test);
console.log("\nResultado de [2,4,3] + [5,6,4]:");
console.log(linkedListToArray(result2)); // Debería imprimir [7,0,8]

// Ejemplo con un número con acarreo final
// 9 + 9 = 18
// En orden inverso: l5 = [9], l6 = [9]
// Suma en orden inverso: [8,1]
let l5_test = createLinkedList([9]);
let l6_test = createLinkedList([9]);
let result3 = addTwoNumbers(l5_test, l6_test);
console.log("\nResultado de [9] + [9]:");
console.log(linkedListToArray(result3)); // Debería imprimir [8,1]

// Ejemplo con ceros y diferentes longitudes
// 0 + 123 = 123
// En orden inverso: l7 = [0], l8 = [3,2,1]
// Suma en orden inverso: [3,2,1]
let l7_test = createLinkedList([0]);
let l8_test = createLinkedList([3,2,1]);
let result4 = addTwoNumbers(l7_test, l8_test);
console.log("\nResultado de [0] + [3,2,1]:");
console.log(linkedListToArray(result4)); // Debería imprimir [3,2,1]
