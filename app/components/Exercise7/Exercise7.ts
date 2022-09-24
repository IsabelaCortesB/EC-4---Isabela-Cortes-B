function printFizzBuzz(){
    for (let index = 1; index < 40; index++) {
        console.log(index);
        if(index%3 == 0){
            console.log(index +"Fizz");
        }
        if(index%5 == 0){
            console.log(index +"Buzz");
        }
        if(index%3 == 0 && index%5 == 0){
            console.log(index +"FizzBuzz");
        }
    }
}

printFizzBuzz();

module.exports = printFizzBuzz;