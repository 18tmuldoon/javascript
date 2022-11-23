//1
const number = prompt("Enter a positive integer");
const numberOfDigits = number.length;
let sum = 0;

let temp = number;

while (temp > 0) {

    let remainder = temp % 10;

    sum += remainder ** numberOfDigits;

    temp = parseInt(temp / 10); 
}

if (sum == number) {
    console.log(`${number} is an Armstrong number`);
}
else {
    console.log(`${number} is not an Armstrong number.`);
}

//2
let num = Number(prompt("enter number"))
total = 0;

while(num > 0){
    tmp = (num % 10)
    fact = 1;
    for(let i = tmp; i>0; i--){
    fact = fact * i;
    }
    total = total + fact
    console.log(total)
    num=Math.floor(num/10)
}
//to extract the last digit use tmp = num%10

//to calculate factorial of number use for loop
//total = 0;
//fact = 1;
//for(let i = tmp; i>0; i++)
//{
 //fact = fact * i;
//}
//total = total + fact


//to remove the last digit use num=Math.floor(num/10)



let num1 = Number(prompt("enter number"))
let ld = 0

while(num1 > 0){
    ld = (num1 % 10)
   console.log(ld)
    num1 = Math.floor(num1 / 10)
}
