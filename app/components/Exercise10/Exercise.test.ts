const function10 = require ('./Exercise10');

test('throwDices', ()=>{
    
    const throwDiceresult:Record<string,number> = {};

    expect(function10(throwDiceresult)).not.toEqual({});
});