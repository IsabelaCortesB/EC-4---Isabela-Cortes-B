function throwDice(throwDiceresult: Record<string, number>){

    let throwDice1 = Math.floor(Math.random()*6);
    let throwDice2 = Math.floor(Math.random()*6);

    for(let i = 1; i <12; i++){
      if(throwDice1+throwDice2 == i){
        throwDiceresult[i] =+ 1;

      }
    }
   
    return throwDiceresult
    
 }

module.exports = throwDice;