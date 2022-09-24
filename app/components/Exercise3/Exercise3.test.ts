const function3 = require ("./Exercise3");

test ("alphabeticOrder", ()=>{

    
    let  lettersGroup1 = ["k", "i", "j"];
    let  lettersGroup2 = ["b", "c", "a"];
    let  lettersGroup3 = ["z", "y", "x"];

    let finalGroup = lettersGroup1.concat(lettersGroup2,lettersGroup3);


        expect(function3(finalGroup)).toEqual(finalGroup);

})

