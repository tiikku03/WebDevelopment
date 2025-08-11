// HASS TABLE
// tengo una key(hash) y con esa key puedo acceder al valor almacenado

/*
Usando una funcion Hash en la cual se ingresa un valor y genera un numero el cual
será la llave para poder acceder al valor que hemos almacenado.
Metodos
=> Insert: inserta un elemento a la tabla
=> Search: Busca un elemento
=> Delete: borra un elemento

Puede comnvertirse en un problema ya que se puede generar un mismo hash (numero)
para un dato diferente que queremos almacenar, tendremos dos elementos guardados en un
mismo bucket(celda). 


--------------------------COSTRUYENDO UNA HASH TABLE-------------------------------
*/

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  hashMethod(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  set(key, value) {// para agregar un elemento a hashTable
    const address = this.hashMethod(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }
  get(key) {// Para obtener un elemento de la hashTable
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {//todos los [0] representan la key
          return currentBucket[i][1]; // todos los [1] representan los valores
        }
      }
    }
    return undefined;
  }

  //Encadenamiento separado
  /*
  En el sondeo lineal, si la posición calculada está ocupada, 
  se examina secuencialmente la siguiente posición hasta 
  encontrar una vacía.

  El rehashing se realiza cuando el factor de carga de la tabla 
  alcanza un cierto umbral, indicando que la tabla se está volviendo 
  demasiado densa y es probable que el rendimiento disminuya 
  debido a las colisiones.
  
  */
 
  delete(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          const deletedValue = currentBucket[i];
          currentBucket.splice(i, 1);
          if (currentBucket.length === 0) {
            this.data[address] = undefined;
          }
          return deletedValue;
        }
      }
    }
    return undefined;
  }

  // Obtener todas las claves
  keys() {
    const keys = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        for (let j = 0; j < this.data[i].length; j++) {
          keys.push(this.data[i][j][0]);
        }
      }
    }
    return keys;
  }

  // Obtener todos los valores
  values() {
    const values = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        for (let j = 0; j < this.data[i].length; j++) {
          values.push(this.data[i][j][1]);
        }
      }
    }
    return values;
  }

  // Obtener el factor de carga (qué tan llena está la tabla)
  loadFactor() {
    let usedBuckets = 0;
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] && this.data[i].length > 0) {
        usedBuckets++;
      }
    }
    return usedBuckets / this.data.length;
  }

  // Mostrar estadísticas de la tabla
  getStats() {
    let totalElements = 0;
    let collisions = 0;
    let emptyBuckets = 0;

    for (let i = 0; i < this.data.length; i++) {
      if (!this.data[i] || this.data[i].length === 0) {
        emptyBuckets++;
      } else {
        totalElements += this.data[i].length;
        if (this.data[i].length > 1) {
          collisions++;
        }
      }
    }

    return {
      totalElements,
      collisions,
      emptyBuckets,
      loadFactor: this.loadFactor(),
      tableSize: this.data.length
    };
  }
}




// === DEMO DE HASH TABLE ===
const myHashTable = new HashTable(5); // Tamaño pequeño para forzar colisiones

console.log("=== INSERTANDO ELEMENTOS ===");

// Insertar elementos
myHashTable.set("daniel", 2004);
console.log(`Hash de "daniel": ${myHashTable.hashMethod("daniel")}`);

myHashTable.set("samuel", 2000);
console.log(`Hash de "samuel": ${myHashTable.hashMethod("samuel")}`);

myHashTable.set("claudia", 1979);
console.log(`Hash de "claudia": ${myHashTable.hashMethod("claudia")}`);

myHashTable.set("daniela", 2008);
console.log(`Hash de "daniela": ${myHashTable.hashMethod("daniela")}`);

console.log("\n=== ESTADO DE LA TABLA ===");
console.log("Contenido completo:", myHashTable.data);

// Mostrar colisiones
console.log("\n=== VERIFICANDO COLISIONES ===");
myHashTable.data.forEach((bucket, index) => {
  if (bucket && bucket.length > 1) {
    console.log(`¡Colisión en índice ${index}!:`, bucket);
  }
});

console.log("\n=== BUSCANDO ELEMENTOS ===");
console.log(`Valor de "daniel": ${myHashTable.get("daniel")}`);
console.log(`Valor de "daniela": ${myHashTable.get("daniela")}`);
console.log(`Valor de "samuel": ${myHashTable.get("samuel")}`);

console.log("\n=== ELIMINANDO ELEMENTO ===");
const deleted = myHashTable.delete("daniel");
console.log(`Elemento eliminado:`, deleted);

console.log("\n=== ESTADO FINAL ===");
console.log("Tabla después de eliminar:", myHashTable.data);
console.log(`Buscando "daniel" después de eliminar: ${myHashTable.get("daniel")}`);
console.log(`"daniela" sigue ahí: ${myHashTable.get("daniela")}`);

console.log("\n=== MÉTODOS ADICIONALES ===");
console.log("Todas las claves:", myHashTable.keys());
console.log("Todos los valores:", myHashTable.values());

console.log("\n=== ESTADÍSTICAS DE LA TABLA ===");
const stats = myHashTable.getStats();
console.log("Estadísticas:", stats);

console.log("\n=== COMPARACIÓN DE COMPLEJIDAD ===");
console.log("Hash Table vs Array:");
console.log("- Búsqueda: O(1) promedio vs O(n)");
console.log("- Inserción: O(1) promedio vs O(1) al final, O(n) al inicio");
console.log("- Eliminación: O(1) promedio vs O(n)");

console.log("\n=== CASOS DE USO COMUNES ===");
console.log("- Cachés y memoización");
console.log("- Índices de bases de datos");
console.log("- Contadores y frecuencias");
console.log("- Diccionarios y mapas");
