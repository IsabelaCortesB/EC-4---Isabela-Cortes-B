let initialArray1: any [] =[];
    initialArray1 = ["h", 5, "m", 8, 2, "e"];

 function positionOrder(array: Array<any>) {

    let intArray = array;
    const finalOrderArray: any[] = [];
    
    array = array.filter(number => Number.isInteger(number));
    intArray = intArray.filter(string => !Number.isInteger(string));
    
    array.sort();
    intArray.sort();
    intArray.forEach(element => {
        finalOrderArray.push(element);
    });
    array.forEach(element => {
        finalOrderArray.push(element);
    });
    return finalOrderArray;
 }

 console.log(positionOrder(initialArray1))
 
 module.exports = positionOrder;