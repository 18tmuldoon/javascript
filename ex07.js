//1
userinput = Number(prompt("enter a number"));

for(let i=1; i<=userinput; i+=2){
    console.log(i);
}

//2
userNum = Number(prompt("enter another number"));
let c = 1

for(let i=1; i<=userNum; i++){
    c *=i;
    console.log(c)
}

//3
Correct = 73594701
let a = 0
for(; a < 4; ){
    a++
    let guess = Number(prompt("8 Digit guess"));
    if(guess == Correct){
        console.log("That is correct")
        let a = 20
    }else{"That is incorrect"}
}







/*
//4
userNum1 = Number(prompt("enter another number"));
let d = 1

for(let i=1; i<=userNum; i++){
    d +=i;
    console.log(d)
}
*/
