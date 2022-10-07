let y = (prompt("enter rock , paper or scissors"));
console.log("You Chose:")
console.log(y)

let x = Math.floor(Math.random() *3)+1;

console.log("The Computer Chose:")
switch(x){
    case 1 :
        console.log('rock');
        break;
    case 2:
        console.log('paper');
        break;
        case 2:
            console.log('scissors');
            break;
    default:
        console.log('scissors');
    }

if(x = 'rock'){
    if(y = 'rock')
    console.log("Draw");
}else if((x = 'paper')){
    if(y = 'paper')
    console.log("Draw");
}else if((x = 'scissors')){
    if(y = 'scissors')
    console.log("Draw");
}else if((x = 'rock')){
    if(y = 'paper')
    console.log("You Win");
}else if((x = 'rock')){
    if(y = 'scissors')
    console.log("You Lose");
}else if((x = 'paper')){
    if(y = 'scissors')
    console.log("You Win");
}else if((x = 'paper')){
    if(y = 'rock')
    console.log("You Lose");
}else if((x = 'scissors')){
    if(y = 'rock')
    console.log("You Win");
}else if((x = 'scissors')){
    if(y = 'paper')
    console.log("You Lose");
}
