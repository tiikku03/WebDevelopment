let l1 = [9,9,9,9,9,9,9]
let l2 = [9,9,9,9]
var addTwoNumbers = function (l1, l2) {
  let number1 = parseInt(l1.join(""));
  let number2 = parseInt(l2.join(""));
  let suma = number1 + number2;
  let numberToString = suma.toString().split("").reverse();
  for (num in numberToString){
    numberToString[num] = parseInt(numberToString[num])
  }
  return numberToString
};

console.log(addTwoNumbers(l1,l2))
