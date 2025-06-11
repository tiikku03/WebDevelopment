/* 
.push()
.pop()
.shift()
.unshift()
.map()
.join()
.sort()
.find() returns undefined if the item is not found within the array
.indexOf()
.filter()
.split() divides a string into an array of substrings and specifies where each 
         split should happen based on a given separator

.join()
.reverse() 


.removeAttribute
? used in -->> function(object?.property); <<--makes to return undefined instead of an error

.classList is used to access the class of a tag in the html file
document.createTextNode
*/


/* .split() divides a string into an array of substrings and specifies where each 
         split should happen based on a given separator */
console.log("----> .split()  Method")
const stringSeparatedBySpaces = "hello my name is emanuel"
const stringSeparatedByDash = "hello-my-name-is-emanuel"
console.log(stringSeparatedBySpaces)
console.log(stringSeparatedBySpaces.split(" "))
console.log("------------------------------")
console.log(stringSeparatedByDash)
console.log(stringSeparatedByDash.split("-"))

/* .reverse()  is a method that reverses an array in place. This means it modifies the original 
                array rather than creating a new one */

/* join the characters by concatenating all of the elements in an array and returns */
console.log("------->-----------------------")
const destructuringString = "chocolate"
const usingTheSplit = destructuringString.split("")
const usingTheReverse = usingTheSplit.reverse()
const usingTheJoin = usingTheReverse.join("")
console.log(`The original string: ${destructuringString}`)
console.log(`The string being split: ${usingTheSplit}`)
console.log(`The string being reversed: ${usingTheReverse}`)
console.log(`The string being joint: ${usingTheJoin}`)


console.log("------->.splice()-----------------------")
/* array.splice(startIndex, itemsToRemove, item1, item2) */
let arrayExample = [4, 5]
let arrSplice = [1, 2, 3, 4, 5];
arrSplice.splice(2, 0, ...arrayExample);
console.log(arrSplice);


console.log("------->.includes()-----------------------")
/* array.includes(itemToBeSearched, StartingIndex) */
let arrIncludes = [1, 2, 3, 4, 5];
console.log(arrIncludes.includes(3, 3));


console.log("------->Creating New Arrays Methods-----------------------")
/* a shadow copies of arrays is a new array that contains references to the same elementsas the 
original array  
    concat() creates a new array by merging two arrays
    slice() returns a shallow copy of the original array
    spread(...) spreads the elements of the original array into a new array
*/

