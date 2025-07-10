class MyArray {
  constructor() {
    // construimios cada elemento del array como un objecto
    this.lenght = 0; // establecemos la longitud inicial del array
    this.data = {};
  }

  /*
  MyArray {
  lenght: 3,
  data: { '0': 'diego', '1': 'karen', '2': 'oscar' }
  }
  */
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.lenght] = item;
    this.lenght++;
    return this.lenght;
  }
  pop() {
    if (this.lenght === 0) {
      return undefined;
    }
    const lastItem = this.data[this.lenght - 1];
    delete this.data[this.lenght - 1];
    this.lenght--;
    return lastItem;
  }
  delete(index) {
    const item = this.data[index];
    this.shiftIndex(index);

    return item;
  }

  shiftIndex(index) {
    for (let i = index; i < this.lenght - 1; i++) { 
        this.data[i] = this.data[i + 1];
    }
    delete this.data[this.lenght - 1]; 
    this.lenght--; }
  shift() {
    if (this.lenght === 0) {
        return undefined;
    }

    const firstItem = this.data[0];

    for (let i = 1; i < this.lenght; i++) {
        this.data[i - 1] = this.data[i];
    }

    delete this.data[this.lenght - 1];

    this.lenght--;

    return firstItem;
}
  unshift(item) {
    this.lenght++

    for (let i = this.lenght - 1; i > 0; i--) {
        this.data[i] = this.data[i - 1];
    }
    
    this.data[0] = item;
    return this.lenght;
  }
}


let myArray = new MyArray();


myArray.unshift("Suerte")
myArray.unshift("Con el")
myArray.unshift("desafio")
myArray.unshift("platzinauta")
myArray.unshift("Un 🐱 random en el desafío")

console.log(myArray.shift())

console.log(myArray.data)
myArray.shift()


console.log(myArray.data)
myArray.shift()


console.log(myArray.data)
myArray.shift()


console.log(myArray.data)
myArray.shift()


console.log(myArray.data)
myArray.shift()


console.log(myArray.data)
myArray.shift()


console.log(myArray.data)
