let y = (prompt("enter rock , paper or scissors"));
console.log("You Chose:")
console.log(y)

let x = Math.floor(Math.random() *3)+1;
let compChoice = ""
console.log("The Computer Chose:")
switch(x){
    case 1 :
        console.log('rock');
        compChoice = 'rock'
        break;
    case 2:
        console.log('paper');
        compChoice = 'paper'
        break;
        case 2:
            console.log('scissors');
            compChoice = 'scissors'
            break;
    default:
        console.log('scissors');
    }

if(compChoice == 'rock'){
    if(y == 'rock')
    console.log("Draw");
}else if((compChoice == 'paper')){
    if(y == 'paper')
    console.log("Draw");
}else if((compChoice == 'scissors')){
    if(y == 'scissors')
    console.log("Draw");
}else if((compChoice == 'rock')){
    if(y == 'paper')
    console.log("You Win");
}else if((compChoice == 'rock')){
    if(y == 'scissors')
    console.log("You Lose");
}else if((compChoice == 'paper')){
    if(y == 'scissors')
    console.log("You Win");
}else if((compChoice == 'paper')){
    if(y == 'rock')
    console.log("You Lose");
}else if((compChoice == 'scissors')){
    if(y == 'rock')
    console.log("You Win");
}else if((compChoice == 'scissors')){
    if(y == 'paper')
    console.log("You Lose");
}

//Q2
let level = (prompt("Higher or Ordinary Level"));
let grade = (prompt("Ener Grade"));

