// let , var and const//
//const value fix
const collegeName = "Guru Nanak College"
// const collegeName = "Something else" //error

// var and let are used to declare variables. The main difference between them is that var is function-scoped while let is block-scoped. This means that variables declared with var are accessible throughout the entire function, while variables declared with let are only accessible within the block they are defined in.

let age = 25;
age = 30; //allowed to change value

var city = "Mumbai";  //scope issues in var//

// Arrow Function//

const add = (a, b) => {
    return a + b;
}
add(6,8);

const greet = (name) =>{
    const message = `Hello, ${name}!`;
    return message;
}

console.log(greet("Aditya"))

// Mini project - Grade Calculator//

// Input 5 subject Marks of a Student//
let English = 80;  //datatype = number//
let Hindi = 78;
let Maths = 97;
let Science = 89
let Social_Science = 70;

let totalMarks =English + Hindi + Maths + Science + Social_Science;
let percentage = (totalMarks / 5) * 100;

if(percentage >=90) grade = "A+";
else if(percentage >=80) grade="A"
else if(percentage >=70) grade="B"
else if(percentage >=60) grade="C"
else grade = "F";


if(grade !=='F'){
    console.log("Congratulations! You passed with grade " + grade);
}
else{
    console.log("Sorry! You failed with grade " + grade);
}
