// Function is a block of code that performs a specific task. It can be reused multiple times in a program. Functions can take input parameters and return output values.
// Function declaration
import chalk from 'chalk';
function greet(name) {
    console.log(chalk.green("Hello, " + name + "!"));
}
greet("Abhijeet")


// Function to check Prime Number//
function isPrime(n){
    let count =0;
    for(let i=1; i<=n; i++){
        if(n%i==0){
            count++;
        }
    }
    if(count==2){
       return true;
    }
    else{
        return false;
    }
}

if(isPrime(7)){
    console.log("7 is a Prime Number");
}
else{
    console.log("7 is not a Prime Number");
}

//Function to calculate Factorial of a number//
function fact(n){
    let fact=1;
    for(let i=1; i<=n; i++){
        fact = fact * i;
    }
    console.log("Factorial of " + n + " is : " + fact)
}
fact(5)


let n1 = 5;
let n2 = 150;
for(let i=n1; i<=n2; i++){
    if(isPrime(i)){
        console.log(i);
    }
}