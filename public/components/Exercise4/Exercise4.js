"use strict";
function ListRepeatWords(wordsList1, wordsList2) {
    const resultLists = wordsList1.filter(element => wordsList2.includes(element));
    return resultLists;
}
module.exports = ListRepeatWords;
