function pyramid(character, rowsNumber, boolean) {
  const rows = [];

  function padRow(rowNumber, rowCount) {
    return (
      " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1)
    );
  }

  for (let i = 1; i <= rowsNumber; i++) {
    if (boolean) {
      rows.unshift(padRow(i, rowsNumber));
    } else {
      rows.push(padRow(i, +rowsNumber));
    }
  }

  let result = "\n";

  for (const row of rows) {
    result = result + row + "\n";
  }

  return result;
}

console.log(pyramid("o", 4, false));

console.log(pyramid("p", 5, true));

//////////////////////////////////////////////////////////////////////////////////////////////////////
function getAverage(scoresArr) {
  let scoresSum = 0;
  for (let score of scoresArr) {
    scoresSum += score;
  }
  return scoresSum / scoresArr.length;
}

function getGrade(studentScore) {
  if (studentScore === 100) {
    return "A+";
  } else if (studentScore >= 90 && studentScore <= 99) {
    return "A";
  } else if (studentScore >= 80 && studentScore <= 89) {
    return "B";
  } else if (studentScore >= 70 && studentScore <= 79) {
    return "C";
  } else if (studentScore >= 60 && studentScore <= 69) {
    return "D";
  } else if (studentScore >= 0 && studentScore <= 59) {
    return "F";
  }
}

function hasPassingGrade(studentScore) {
  if (getGrade(studentScore) === "F") {
    return false;
  } else {
    return true;
  }
}

function studentMsg(scoresArr, score) {
  if (hasPassingGrade(score)) {
    return `Class average: ${getAverage(scoresArr)}. Your grade: ${getGrade(
      score
    )}. You passed the course.`;
  } else {
    return `Class average: ${getAverage(scoresArr)}. Your grade: ${getGrade(
      score
    )}. You failed the course.`;
  }
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 40));

////////////////////////////////////////////////////////////////////////////
let inventory = [];

function findProductIndex(productName) {
  for (let i = 0; i < inventory.length; i++) {
    const product = inventory[i];
    if (product.name === productName.toLowerCase()) {
      return i;
    }
  }
  return -1;
}

function addProduct(productObj) {
  let productIndex = findProductIndex(productObj.name);
  if (productIndex !== -1) {
    inventory[productIndex].quantity += productObj.quantity;
    console.log( (`${inventory[productIndex].name} quantity updated`));
  } else {
     let newLength = inventory.push({name: productObj.name.toLowerCase(), quantity: productObj.quantity});
    console.log( (`${inventory[newLength - 1].name} added to inventory`));
  }
}

function removeProduct(product, quantity) {
  const productIndex = findProductIndex(product);
  if (productIndex !== -1) {
    const productQuantity = inventory[productIndex].quantity;
    const productName = inventory[productIndex]?.name;
    const remaniningProduct = productQuantity - quantity;
    if (remaniningProduct !== 0 && remaniningProduct > 0) {
      inventory[productIndex].quantity = remaniningProduct
      console.log( `Remaining ${productName} pieces: ${remaniningProduct}`);
    } else if (remaniningProduct < 0) {
      console.log(`Not enough ${productName} available, remaining pieces: ${productQuantity}`);
      return;
    } else {
      inventory.splice(productIndex, 1);
      return;
    }
  } else {
     console.log(`${product.toLowerCase()} not found`);
     return;
  }
}


console.log(removeProduct("agua", 8));
console.log(removeProduct("FLOUR", 1))
console.log(addProduct({name: "FLOUR", quantity: 5})) 
console.log(removeProduct("FLOUR", 5)) 