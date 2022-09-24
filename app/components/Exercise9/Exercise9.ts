function factorialCalculation( n:number) {

    let result = 1;
    for (let a = 1; a < n; a++) {
        result  = result  * a;
    }
    return result ;
 }
console.log(factorialCalculation(4));

module.exports= factorialCalculation;
