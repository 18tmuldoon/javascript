//1
let myNumber = Number(prompt("Enter a number to check odd or evan"));
if((myNumber%2)==0){
    console.log("Even")
}else{
    console.log("Odd")
}

//1
let myNumber1 = Number(prompt("Enter First Number"));
let myNumber2 = Number(prompt("Enter Second Number"));
if((myNumber1 > myNumber2)){
    console.log("The first number is Greater")
}else if((myNumber1 < myNumber2)){
    console.log("The Second Number is Greater")
}else{
    console.log("Both Numbers are Equal")
}

//3
let myNumber3 = Number(prompt("Enter 1/3 Number"));
let myNumber4 = Number(prompt("Enter 2/3 Number"));
let myNumber5 = Number(prompt("Enter 3/3 Number"));
if(myNumber3 > myNumber4){
    console.log("The first number is Greatest")
}else if(myNumber3 > myNumber5){
     console.log("The first number is Greateest")
}else if(myNumber4 > myNumber3){
    console.log("The second number is Greatest")
}else if(myNumber4 > myNumber5){
    console.log("The second number is Greatest")
}else if(myNumber5 > myNumber3){
    console.log("The third number is Greatest")
}else if(myNumber5 > myNumber4){
    console.log("The third number is Greatest")
}else{
    console.log("All 3 Numbers are Equal")
}

//4
let side1 = Number(prompt("Length of First side of your triangle"));
let side2 = Number(prompt("Length of Second side of your triangle"));
let side3 = Number(prompt("Length of Third side of your triangle"));
if(side1*2 == side2 + side3){
        console.log("this is an equalateral triangle");   
}else if(side1 = side2){
    if(side1 != side3){
        console.log("this is an isosceles triangle");
    }
}else if(side1 = side3){
    if(side1 != side2){
        console.log("this is an isosceles triangle");
    }
}else if(side2 = side3){
    if(side2 != side1){
        console.log("this is an isosceles triangle");
    }
}else if(side1 != side2){
    if(side2 != side3)
    console.log("the triangle is scalene");
}

//5
let num1 = Number(prompt("enter your first number"));
let num2 = Number(prompt("enter your second number"));
let operation = prompt("what operation do you want applied");
if(operation == "add"){
    console.log(num1 + num2);
}else if(operation=="subtract"){
        console.log(num1 - num2);
}else if(operation == "multiply"){
    console.log(num1 * num2);
}else if(operation == "divide"){
        console.log(num1 / num2);
}else if(operation=="modulus"){
    console.log(num1 % num2);
}else{
    console.log("invalid operation")
}
