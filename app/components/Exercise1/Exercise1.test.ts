const exercise1 = require ("./Exercise1");

test("array", () =>{
    
    let wordArray: string [] = [];
        wordArray = ["r", "a", "w"];

    let numberArray: number [] = [];
        numberArray  = [1, 2, 3];
    
    let newArray = ["r",1,"a",2,"w",3]


    expect(exercise1(wordArray,numberArray)).toEqual(newArray);

})