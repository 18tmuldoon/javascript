console.log("hello world") //this will print hello world to console

/*
Multi-line comment
this comment will cover
several lines
*/

//Variables

/*

there are two ways to declare variables in javascript

var a = 10;

let a = 10;

const x = 20;
*/

let a =10
console.log(a);

const x =20;

console.log(x)

let bob =20;

let boB =10;

//Datatypes
/*
Numbers
Strings
Booleans
*/

let temp = 10 //Datatype number

let temp1 = "10" //Datatype String

//All numbers in javascript are floating point numbers

/*
All variable names in javascript must begin with a letter or an underscore
You can not use a reserved word as a variable name
*/

//Arithmetic Operators

//Addition

console.log(5+2)

console.log("abc"+"def")

//Subtraction

console.log(5-2)

//multiplication

console.log(5*2);

//Exponent

console.log(3**4);

//increment

let h = 11;

console.log(h++);

console.log(h);

let k = 10;

console.log(++k);

//decrement operator

let l = 5;

console.log(l--);

console.log(l);

console.log(--l);

//Comparison opperators

//equals

console.log(5 == 3);

console.log(4 === 4);

//not equals !=

console.log(5!=4);
console.log(4!=4);

// Greater Than >

console.log(5>4);
console.log(4>4);

// Less Than <

console.log(5<4);
console.log(4<4);

//Greater Than or equal to <=

console.log(5>=4);
console.log(4>=4);

// Less Than or equal <=

console.log(5<=4);
console.log(4<=4);

//assignment operators 

//equals =
//this is the simple assignment

let n = 12;

//add and assignment +=

n += 12; //this is the same as writing n = n + 12
console.log(n);

//subtract and assignment -=

n -= 4; //this is the same as writing n = n - 4
console.log(n);

//multiply and assignment *=

n *= 5; //this is the same as writing n = n *5
console.log(n);

//divide and assignment /=

let y = 4;

y /= 2; //this is the same as writing y = y / 2
console.log(y);

//modulus and assignment

y %= 2; //this is the same as writing y = y%2

console.log(y);

        //Conditional Operator

/*
the conditonal operator evaluates an expression
for true or false. if true, it executes the first statement 
otherwise it executes the second statement
*/

let first = 10;
let second = 12;

console.log(first>second?"True":"False");

        //typeof operator

let myString = "Hello";

console.log(typeof(myString));

let myNumber = 12;

console.log(typeof(myNumber));

        //USER INPUT

/*
the prompt() function is used to take input
from the user.
 the default datatype for input is string 
 to covert the input to a number , wrap the 
 prompt in a NUMBER() function call
*/

let mySecondString = prompt("Enter Something");

console.log(mySecondString);

let mySecondNumber = Number(prompt("Enter a number"));
console.log(mySecondNumber);

        //IF STATEMENT

/*
The if statement is a control statement 
which ex3ecutes if the test condition evaluates to true
*/

let myage = 400;

if(myage > 500){
    console.log("You are over 500 years old");
}

        //IF ELSE STATEMENT
/*
If else is also a control statement if the test condition is true it executes 
the code in the if block, otherwise , 
it executes the code in the else block
*/

if(myage > 500){
    console.log("you are over 500 years old");
}else{
    console.log("you are not over 500 years old");
}

// IF ELSE-IF ELSE STATEMENT 

/*
Similar to the two control statements above.
this can test multiple different conditions,
If they all fail it will run the else condi5tion
*/

if(myage > 500){
    console.log("You are over 500 years old");
}else{
    console.log("You must be 500 years old")
}

/*
Logical Operators
These test for 'true' and 'false' conditions
*/

/*
LOGICAL AND (&&)
RETURNS TRUE IF BOTH OPERATORS ARE TRUE
*/

a = true;
let b = true;
console.log(a && b); //Will print true to the console
                    //as both a and b are true 

b = false;
console.log(a && b); //Will print false to the console
                    //as a and b are not BOTH true
            
let firstNumber = 10;
let secondNumber = 20;

if((firstNumber > 5) && (secondNumber > 15)){
    console.log("first is greater than 5 and second than 15");
}else{
    console.log("One of the expressions failed the test");
}

/*
Logical OR (||) - IF EITHER A OR B IS TRUE IT IS ALL TRUE
*/

a = true;
b = false; 

console.log(a || b);

/*
LOGICAL NOT (!) - REVERSES THE RESULT IF TRUE BECOMES FALSE 
IF FALSE BECOMES TRUE 
*/

console.log(!(a));

/*
SWITCH STATEMENT
*/

let myVar = 'A' ; 
switch(myVar){
case 'A' :
    console.log("You got an A");
    break;
case 'B':
    console.log("you got a B");
    break;
default:
    console.log("Grade not recognized");
}

let count=0;
while(count<10){
    console.log(count);
    count++; //count = count+1
}

//DO WHILE LOOP
//ALWAYS RUNS THE CODE
//AT LEAST ONCE
do{
    console.log(count);
    count++
}while(count<20);

//Break statement 

let h = 0;
document.write("Entering loop:<br>");

while(h<20){
    h = h+1;
    if(h == 5){
        break;
    }
    document.write(h+"<br>")
}
document.write("Leaving loop:<br>")

//Continue statement
h = 0;
document.write("Entering loop:<br>");

while(h<20){
    h = h+1;
    if(h == 5){
        conrtinue;
    }
    document.write(h+"<br>")
}
document.write("Leaving loop:<br>")


//Arrays
/*
The array object allows you to store multiple values in a single variable.

It stores a fixed size, sequential collection of elements of the same or mixed type

To create an array*/

let MyArray = new Array("apples","oranges");
let MyArray2 = ["apples","oranges"];

/*To access elements of an array we use indexing
indexing is when you type the array name followed
by square brackets. The number you put between the
squere brackets is the number of the element in the
array you wish to access.

All arrays start with index value 0.*/
document.write(MyArray[0]);//This prints apples
document.write(MyArray[1]);//This prints oranges

/*To chande the array element
use indexing to locate the element and then
an assigment operation to assign a new value.*/

MyArray2[0] = "Lemon";
document.write(MyArray2[0],"<br>");
/*Very important!!
javascript will not crash with invalid
index errors. It will pad the array with
empty spaces.*/
document.write(MyArray2);
MyArray2[10] = "test";
document.write(MyArray2);
/*To add elements to an array you can use the
push command. They will be pushed on to the end
of the array*/

MyArray2.push("lime");

/*To remove the last element from an array you
can use the pop command*/
MyArray2.pop();//This removse the last element

/*To create an empty array you can use
the new Array() command or a pair of empty
squere brackets*/

let MyArray3 = new Array();
let MyArray4 = [];


