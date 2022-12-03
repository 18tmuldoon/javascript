//1
//Square area and perimeter
sides = Number(prompt("Enter the lenght of the side of your sqaure"));

let area = sides*sides
let perimeter = sides*4 

document.write("area = ", area," perimeter = ",perimeter);

document.write("<br>")

//2
//Calculate simple interest for a year
P = Number(prompt("Input principal amount"));
N = Number(prompt("Input time in years"));
R = Number(prompt("Input % annual rate of interest"));

let SI = P*N*R
document.write("Simple Interest = ",SI);
