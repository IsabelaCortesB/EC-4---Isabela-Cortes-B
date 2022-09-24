let initialArray: number [] = [];
    initialArray = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

function pairAndOddNumbers(array: Array <number>){
    let pairArray: Array<number> = [];
    let oddArray: Array<number>  = [];

    array.forEach(element => {
   
        if(element%2 == 0){
            pairArray.push(element);
         } else {
            oddArray.push(element);
        }
    });
console.log(pairArray, oddArray);
}

console.log(pairAndOddNumbers(initialArray));

module.exports = pairAndOddNumbers;

