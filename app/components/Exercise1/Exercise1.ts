let wordArray: string [] = [];
wordArray = ["r", "a", "w"];

let numberArray: number [] = [];
numberArray = [1, 2, 3];

function arrayCombination(array1: Array<string>, array2: Array<number>){
 
 let arraySize = array1.length + array2.length
 let array= [];
 for (let a = 0; a < arraySize; a++) {
     if(array1[a] !== undefined){
         array.push(array1[a]);
     }
     if(array2[a] !== undefined){
         array.push(array2[a]);
     }
 }
 return array;
}

console.log(arrayCombination(wordArray, numberArray));

module.exports = arrayCombination;