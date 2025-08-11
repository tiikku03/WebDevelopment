class Node {
  constructor(value) {
    (this.value = value), 
    (this.next = null), 
    (this.prev = null);
  }
}

class MyDoubleLinkedList {
  constructor(value) {
    this.head = new Node(value); // Usar la clase Node para consistencia
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    let newNode = new Node(value);
    this.tail.next = newNode;
    newNode.prev = this.tail; // Establecer el nodo anterior
    this.tail = newNode;
    this.length++;

    return this;
  }

  prepend(value) {
    let newNode = new Node(value);

    newNode.next = this.head;
    this.head.prev = newNode; // Establecer la referencia prev del head actual
    this.head = newNode;
    this.length++;
    
    return this;
  }

  find(value) {
    let currentNode = this.head; // 1. Empieza desde el head
    const values = []; // Para almacenar los valores si los quieres en un array

    while (currentNode !== null) {
      // 2. Continúa mientras el nodo actual no sea null
      console.log(currentNode);
      values.push(currentNode.value); // 3. Procesa el valor del nodo actual
      currentNode = currentNode.next; // 4. Mueve al siguiente nodo
    }
    let index = values.indexOf(value);
    return index;
  }

  indexOfNode(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  insert(value, insertIndex) {
    // 1. Handle invalid index
    if (insertIndex < 0 || insertIndex > this.length) {
      console.error("Invalid index for insertion.");
      return this; // Or throw an error
    }

    // 2. Handle insertion at the beginning
    if (insertIndex === 0) {
      return this.prepend(value);
    }

    // 3. Handle insertion at the end
    if (insertIndex === this.length) {
      return this.append(value);
    }

    // 4. Handle insertion in the middle
    let newNode = new Node(value);
    const leader = this.indexOfNode(insertIndex - 1); // Get the node before the insertion point
    const follower = leader.next; // Store the node that will come after the new node
    
    // Establecer las conexiones bidireccionales
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
    
    this.length++;
    return this; // Return 'this' for chaining
  }

  insert2(value, insertIndex) {
    let newNode = new Node(value);
    let preNode;
    let currentNode = this.head;
    if (insertIndex < this.length && this.length > 0) {
      let index = 0;
      while (index <= insertIndex) {
        if (index === insertIndex) {
          newNode.next = currentNode;
          preNode.next = newNode;
          this.length++;
          break;
        } else {
          preNode = currentNode;
          currentNode = currentNode.next;
        }
        index++;
      }
    }

    return this.head;
  }

  // Método para recorrer hacia atrás desde el tail
  printBackwards() {
    let currentNode = this.tail;
    const values = [];

    while (currentNode !== null) {
      console.log(`Backward: ${currentNode.value}`);
      values.push(currentNode.value);
      currentNode = currentNode.prev; // Moverse hacia atrás
    }
    
    return values;
  }

  // Eliminar un nodo por valor
  remove(value) {
    if (!this.head) return null;

    let currentNode = this.head;

    // Si es el primer nodo
    if (currentNode.value === value) {
      this.head = currentNode.next;
      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null; // Lista vacía
      }
      this.length--;
      return currentNode;
    }

    // Buscar el nodo
    while (currentNode && currentNode.value !== value) {
      currentNode = currentNode.next;
    }

    if (!currentNode) return null; // No encontrado

    // Reconectar los nodos
    if (currentNode.prev) {
      currentNode.prev.next = currentNode.next;
    }
    
    if (currentNode.next) {
      currentNode.next.prev = currentNode.prev;
    } else {
      // Es el último nodo
      this.tail = currentNode.prev;
    }

    this.length--;
    return currentNode;
  }
}

const newList = new MyDoubleLinkedList(1);
newList.append(2);
newList.append(4);
newList.append(5);
newList.append(6);
newList.append(7);

console.log("=== DOUBLE LINKED LIST DEMO ===");
console.log("Lista inicial:", newList);

// Insertar en el medio
newList.insert(3, 2);
console.log("\nDespués de insertar 3 en posición 2:");
console.log("Encontrar el 4:", newList.find(4));

// Demostrar navegación hacia atrás
console.log("\n=== Navegación hacia atrás ===");
newList.printBackwards();

// Prepend (agregar al inicio)
newList.prepend(0);
console.log("\nDespués de prepend(0):");
console.log("Head value:", newList.head.value);
console.log("Head.next.prev.value:", newList.head.next.prev.value); // Debe ser 0

// Eliminar un elemento
console.log("\n=== Eliminar elemento ===");
newList.remove(4);
console.log("Después de eliminar 4:");
newList.find(5); // Verificar que el 5 sigue ahí
