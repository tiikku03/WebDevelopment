function* generator(){// usar * asegura que la funcion es un generator y permite el uso de "yield"
    yield 1;
    yield 2;
    yield 3;
}


const g = generator();

console.log(g.next().value)
console.log(g.next().value)
console.log(g.next().value)

function* iterate(array){
    for(let item of array){
        yield item
    }
}

const it = iterate(["oscar","omar","ana","lucia"])

console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
