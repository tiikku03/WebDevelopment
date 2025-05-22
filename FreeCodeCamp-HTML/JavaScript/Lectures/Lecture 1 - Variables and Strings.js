/*

                  ┌─────────────────────────────────────────┐
                  │          DOMINAR EL DOM EN JAVASCRIPT   │
                  └───────────────────┬─────────────────────┘
                                      │
          ┌───────────────────────────┴───────────────────────────┐
          │                                                       │
┌─────────┴─────────┐                                ┌────────────┴───────────┐
│ 1. ¿Qué es el DOM?│                                │ 4. Manipulación del DOM│
└─────────┬─────────┘                                └────────────┬───────────┘
          │                                                       │
          ├─── Concepto (Árbol de Nodos)                          ├─── Modificar Contenido
          ├─── Nodos (Elementos, Texto, Atributos, Comentarios)   │     ├─── `innerHTML`
          ├─── Objeto `document`                                  │     ├─── `textContent`
          └─── Relación con HTML y CSS                            │     └─── `innerText` (menos común)
                                                                  │
┌─────────┴─────────────────┐                                     |     ├─── Modificar Atributos
│ 2. Selección de Elementos │                                     │     ├─── `setAttribute()`
└─────────┬─────────────────┘                                     |     │     ├─── `getAttribute()`
          │                                                       │     ├─── `removeAttribute()`
          ├─── Por ID: `document.getElementById()`                │     ├─── Propiedades directas (ej. `img.src`, `a.href`)
          ├─── Por Clase: `document.getElementsByClassName()`     │
          ├─── Por Etiqueta: `document.getElementsByTagName()`    │
          |                                                       ├─── Modificar Clases CSS
          ├─── Con Selectores CSS (más modernos y flexibles)      │     ├─── `classList.add()`
          │     ├─── `document.querySelector()` (primer elemento) │     ├─── `classList.remove()`
          │     └─── `document.querySelectorAll()` (todos los elementos)├─── `classList.toggle()`
          │                                                       │     └─── `classList.contains()`
          └─── Colecciones (HTMLCollection vs NodeList)           │
                ├─── Diferencias (Vivas vs Estáticas)             │
                └─── Cómo iterar (forEach, for...of, Array.from)  ├─── Modificar Estilos CSS
                                                                  │     └─── `elemento.style.propiedadCss`
┌─────────┴───────────────┐                                       │
│ 3. Navegación en el DOM │                                       ├─── Crear Nuevos Elementos
└─────────┬───────────────┘                                       │     ├─── `document.createElement()`
          │                                                       │     ├─── `document.createTextNode()`
          ├─── Padre: `parentNode`                                │
          ├─── Hijos:                                             ├─── Insertar y Eliminar Elementos
          │     ├─── `children` (solo elementos)                  │     ├─── `appendChild()`
          │     ├─── `childNodes` (todos los nodos)               │     ├─── `insertBefore()`
          │     ├─── `firstElementChild`, `lastElementChild`      │     ├─── `removeChild()`
          │     └─── `firstChild`, `lastChild` (todos los nodos)  │     └─── `replaceChild()`
          │                                                       │
          └─── Hermanos:                                          └─── Fragmentos de Documento (`document.createDocumentFragment()`)
                ├─── `nextElementSibling`, `previousElementSibling`    (para inserciones masivas y rendimiento)
                └─── `nextSibling`, `previousSibling` (todos los nodos)


┌───────────────────────────┐
│ 5. Eventos del DOM        │
└─────────┬─────────────────┘
          │
          ├─── Concepto de Eventos (Click, Keydown, Mouseover, Load, Submit, etc.)
          ├─── `addEventListener()` (método preferido)
          │     ├─── Tipos de eventos
          │     ├─── Funciones de callback
          │     └─── Opciones (captura, una vez, pasivo)
          ├─── `removeEventListener()`
          ├─── El Objeto `Event`
          │     ├─── `event.target`
          │     ├─── `event.currentTarget`
          │     ├─── `event.preventDefault()`
          │     └─── `event.stopPropagation()`
          ├─── Delegación de Eventos (optimización para múltiples elementos)
          └─── Burbujeo y Captura de Eventos (fases de propagación)

┌─────────────────────────────────────────────────┐
│ 6. Consideraciones Avanzadas y Buenas Prácticas │
└─────────┬───────────────────────────────────────┘
          │
          ├─── Rendimiento:
          │     ├─── Minimizar manipulaciones directas del DOM (reflow/repaint)
          │     ├─── Usar `document.createDocumentFragment`
          │     ├─── Batch updates
          │     └─── Evitar selecciones repetidas
          ├─── Seguridad:
          │     └─── Cuidado con `innerHTML` y contenido de usuario (`XSS`)
          ├─── Compatibilidad de Navegadores (Can I Use?)
          ├─── Frameworks/Librerías (React, Angular, Vue):
          │     └─── Abstracciones del DOM (Virtual DOM, etc.)
          └─── Accesibilidad (ARIA attributes, semantic HTML)



*/

//Bracket notation [] for strings
let greeting = "hello";
console.log(greeting[0]);
//-----------------------------
//break a string accros multiple lines and to insert

console.log("the house is a \n beautiful place to live");
console.log('the house that my grandpa "bouhgt" is going to break');

console.log("-----------------------------------------------");
//Template literals ``: insert expresion, the text will include the break lines lefth in the code

//finding the position of a substring in an string
let say = "Hello World!";

console.log(say.indexOf("hello")); // exist returs the position of the element
console.log(say.indexOf("victor")); // does not exist returs -1
console.log(say.indexOf("!"));

//American standard code (a numerical value for characters like symbols, letters and control characters )
//Compare their ask key value
console.log(String.fromCharCode(66));
let letter = "A";
console.log(letter.charCodeAt());

// includes method
console.log(say.includes(" ")); //returns true or false

// take a portion of a string
let newString = say.slice(3, 8);
console.log(newString); // returns a new string

// building methods 
console.log(say) //Hello World!
console.log(say.toUpperCase()) // HELLO WORLD!
console.log(say.toLowerCase()) // hello world!


// The replace method .replace(searchValue, newValue) // only the first value of the string is changed

// trim() it removes white apace in the begining or the end
// trimStart() 
// trimEnd() 

console.log(say.trim())