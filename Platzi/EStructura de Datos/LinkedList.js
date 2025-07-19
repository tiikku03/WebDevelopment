/* 

|Data|----->|Data|----->|Data|----->|Data|----->|null|
 Head   ^pointer         node        Tail     




Single listLIst

prepend: Agregar un nodo al inicio
append: Agregar un nodo al final
lookUp / Search: Buscar un nodo
insert: insertar un nodo en la lista
delete: borrar un nodo 


1 --> 2 --> 3 --> 4 --> null

la logica interna funciona de la siguiente manera
*/

let singleListList = {
  head: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null,
        },
      },
    },
  },
};

class Node {
  constructor(value) {
    (this.value = value), (this.next = null);
  }
}

class MySingleListList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    let newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  prepend(value) {
    let newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  find(value) {
    let currentNode = this.head; // 1. Empieza desde el head
    const values = []; // Para almacenar los valores si los quieres en un array

    while (currentNode !== null) {
      // 2. Continúa mientras el nodo actual no sea null
      console.log(currentNode)
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
    const holdingPointer = leader.next; // Store the node that will come after the new node
    leader.next = newNode; // Link the leader to the new node
    newNode.next = holdingPointer; // Link the new node to the rest of the list
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
          break
        } else {
          preNode = currentNode;
          currentNode = currentNode.next;
        }
        index++;
      }
    }

    return this.head;
  }
}

const newList = new MySingleListList(1);
newList.append(2);

newList.append(4);
newList.append(5);
newList.append(6);
newList.append(7);

debugger


newList.insert2(3,2)

console.log(newList)
newList.find(4)