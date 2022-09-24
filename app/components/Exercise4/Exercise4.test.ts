const function4 = require ('./Exercise4');

test('RepeatWords', ()=>{

    const wordsList1: string[] = ['purple', 'yellow', 'blue', 'gold', 'silver'];
    const wordsList2: string[] = ['gray', 'silver', 'aquamarine', 'white', 'blue'];
    
    const resultLists: string[] = ['blue', 'silver'];

    expect(function4(wordsList1,wordsList2)).toEqual(resultLists);
});
  