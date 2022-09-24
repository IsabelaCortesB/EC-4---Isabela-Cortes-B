"use strict";
const function4 = require('./Exercise4');
test('RepeatWords', () => {
    const wordsList1 = ['purple', 'yellow', 'blue', 'gold', 'silver'];
    const wordsList2 = ['gray', 'silver', 'aquamarine', 'white', 'blue'];
    const resultLists = ['blue', 'silver'];
    expect(function4(wordsList1, wordsList2)).toEqual(resultLists);
});
