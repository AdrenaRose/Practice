console.log("Hello, world!");

// window.alert("How are you today?");

//A variable is a container for storing data
//A variable behaves as if it was the value that it contains
//Two steps:
//1. Declaration (var, let, const)
//2. Assignment (= assignment operator)

let age; //declaration

console.log(age); //undefined
console.log("age"); // age

age = 32; //assignment //number

console.log(age); // 32

age = age + 1;

console.log(age); // 33

let firstName = "Charlene"; //string

console.log(firstName); //Charlene

let student = true; //boolean

console.log(student); //true

console.log("Hello", firstName); // Hello Charlene
console.log("You are", age, "years old"); // You are 33 years old
console.log("Enrolled:", student); // Enrolled: true

//Manipulate the DOM - writes to page

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + " years old";
document.getElementById("p3").innerHTML = "Enrolled: " + student;

//arithmetic expressions are a combination of...
//operands (values, variables, etc)
//operators (+ - * / %)
//that can be evaluated to a value
//Ex. y = x + 5;

let students = 20;
// students = students + 1;

// console.log(students);//21

//modulus % - gives the value of a remainder

// let extraStudents = students % 2;
// console.log(extraStudents);//1 - because this is 1, we know that the value of students is odd

students += 1; //augmented assignment operator - shortcut meaning students is equal to students + 1
console.log(students);

//operator precedence
//PEMDAS

let result = 1 + 2 * (4 + 3);
console.log(result); //15

//How to accept user input

// let username = window.prompt("What is your name?");
// console.log(username);

let username;

document.getElementById("myButton").onclick = function () {
  username = document.getElementById("myText").value;
  console.log(username);
  document.getElementById("myLabel").innerHTML = username;
};

//Type conversion
//user input is received as a string automatically

// let age2 = window.prompt("How old are you?");

// age2 = Number(age);
// age2 += 1;

// console.log("Happy birthday! You are ", age2, " years old."); //Happy birthday! You are 321 years old. Because the input was taken as a string, the string was concatenated to the number

// let x;
// let y;
// let z;

// x = 40;
// y = "Hello";
// z = true;

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

// x = String(x);//changes x from a number to a string
// console.log(x, typeof x);

let x = 3.14;
let y = 3.99;
let z = 3.3;

x = Math.round(x);
console.log(x); //3

y = Math.floor(y);
console.log(y); //3 - floor always rounds down

z = Math.ceil(z);
console.log(z); //4 - ceil always rounds up
