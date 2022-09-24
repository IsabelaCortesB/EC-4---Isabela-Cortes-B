function ListRepeatWords(wordsList1:string[], wordsList2:string[]) {
  
    const resultLists = wordsList1.filter(element => wordsList2.includes(element));
    return resultLists;
  }
  
  module.exports = ListRepeatWords;