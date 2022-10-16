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
let Level = prompt("Higher or Ordinary")
let Grade = prompt("Enet Grade")
let Higher = "H1";
let Ordinary = "O1";



if (Level=="Higher"){
switch(Level){
case "Higher":
    switch(Grade){
        case "H1":
            console.log(100);
        break
        case "H2":
            console.log(88);
        break
        case "H3":
            console.log(77);
        break
        case "H4":
            console.log(66)
        break
        case "H5":
            console.log(56);
        break
        case "H6":
            console.log(46);
        break
        case "H7":
            console.log(37);
        default:
            console.log("INVALID GRADE")
    }
}
} else if (Level=="Ordinary"){
switch(Level){
    case "Ordinary":
    switch(Grade){
        case "O1":
            console.log(56);
        break
        case "O2":
            console.log(46);
        break
        case "O3":
            console.log(37);
        break
        case "O4":
            console.log(28);
        break
        case "O5":
            console.log(20);
        break
        case "O6":
            console.log(12);
        break
        case "O7":
            console.log(0);
        default:
            console.log("INVALID")
        }
    }       
}

