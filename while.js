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
