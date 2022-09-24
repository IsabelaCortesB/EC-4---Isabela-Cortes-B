
  let  elementsArray1: string [] = [];
        elementsArray1 = ["brush", "key", "mirror", "backpack"];

  let  elementsArray2: string [] = [];
        elementsArray2 = ["backpack", "brush", "key", "mirror"];
 
  function verification(array1:Array<string>, array2:Array<string>){
     array1.sort()
     array2.sort()
     if(array1.length==array2.length && array1.every(function(v,i) { return v === array2[i] })){
         return "Contains the same elements";
     }else{
         return "Does'nt contain the same elements"
     }
  }
 
  console.log(verification(elementsArray1,elementsArray2));

  module.exports = verification;
  