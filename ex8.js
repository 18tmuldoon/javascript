//1
let num = Number(prompt("enter a number"))
let r = 0;
  
    while (num > 0) {
      num = Math.floor(num / 10);
      r++;
    }
  
    console.log(r);

//2
let num1 = Number(prompt("enter 2nd number"))
let a = 0
let lastDigit = (num1 % 10);

while (num1 > 10) {
    num1 = (num1 / 10)
    a++;
  }

  console.log("First Digit = "+a);
  console.log("Second Digit = "+lastDigit)

//3
let num2 = Number(prompt("enter 3rd number"))
let b = 0
let n1 = (num2 % 10);
