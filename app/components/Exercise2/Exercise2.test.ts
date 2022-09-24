const function2 = require ('./Exercise2');

test("PairAndOdd", () =>{
   
 let initialArray: number [] = [];
        initialArray = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

 let finalArray: any[] 
        finalArray= [[20,22,24,26,28,30], [21, 23, 25, 27, 29]];

    expect(function2(initialArray)).not.toEqual(finalArray);
})