const function5 = require ("./Exercise5");

test("elementsVerification", () =>{

    let  elementsArray1: string [] = [];
    elementsArray1 = ["brush", "key", "mirror", "backpack"];

    let  elementsArray2: string [] = [];
    elementsArray2 = ["backpack", "brush", "key", "mirror"];

    expect(function5(elementsArray1,elementsArray2)).toContain("Contains the same elements");

})