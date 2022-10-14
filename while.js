//1
let num=1;
while(num<=10){
    console.log(num);
    num++;
}

//2
let myNum=0;
do{
    console.log(myNum)
    myNum+=2
}while(myNum<=100)

//3
let userNum = Number(prompt("enter a number"))
let userPower = Number(prompt("enter what power you want"))

let x =Math.pow(userNum , userPower)
console.log(x)

//4
let numRow = Number(prompt("enter number of rows"))
let tri = "*"
let sp = 0

do{
    console.log(tri)
    tri = tri + "*"
    sp++
}while(sp<=numRow)

//5
let numDigits = Number(prompt("enter a number"))
let result = 0;
  
    while (numDigits > 0) {
      numDigits = Math.floor(numDigits / 10);
      result++;
    }
  
    console.log(result);

//6
let userNum1 = Number(prompt("enter a number"))
let sum = 0;

while (userNum1) {
    sum += userNum1 % 10;
    userNum1 = Math.floor(userNum1 / 10);
}

console.log(sum);
