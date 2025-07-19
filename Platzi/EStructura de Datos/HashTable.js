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
}




const myHashTable = new HashTable(10);
debugger
myHashTable.set("daniel", 2004);
myHashTable.set("samuel", 2000);
myHashTable.set("claudia", 1979);
myHashTable.set("daniela", 2008);

console.log(myHashTable.data);
myHashTable.delete("daniel");

console.log(myHashTable.data);
