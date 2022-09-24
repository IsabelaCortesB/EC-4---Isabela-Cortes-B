 let  lettersGroup1 = ["k", "i", "j"];
 let  lettersGroup2 = ["b", "c", "a"];
 let  lettersGroup3 = ["z", "y", "x"];

 let finalGroup = lettersGroup1.concat(lettersGroup2,lettersGroup3);

 function alphabeticalOrderArray(array:Array<string>){
     let arr = [];
     array.sort();

     for (let a = 0; a < array.length; a++) {
         const element = array[a];
         arr.push(element);
     }
     return arr;
 }
 console.log(alphabeticalOrderArray(finalGroup));

 module.exports = alphabeticalOrderArray
  