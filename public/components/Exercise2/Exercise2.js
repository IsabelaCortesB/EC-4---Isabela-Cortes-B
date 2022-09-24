"use strict";
let initialArray = [];
initialArray = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
function pairAndOddNumbers(array) {
    let pairArray = [];
    let oddArray = [];
    array.forEach(element => {
        if (element % 2 == 0) {
            pairArray.push(element);
        }
        else {
            oddArray.push(element);
        }
    });
    console.log(pairArray, oddArray);
}
console.log(pairAndOddNumbers(initialArray));
module.exports = pairAndOddNumbers;
