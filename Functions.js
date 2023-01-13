/*
//1
function sum(num , num1){
    return num + num1;
    }
    
    
    reply = sum(num = Number(prompt("enter a number")) , num1 = Number(prompt("enter another number")))
    
    document.write(reply)

    
//2 
function sum(num2 , op , num3 ){
    if(op == "-"){
        return num2 - num3;
    }if(op =="+"){
        return num2 + num3;
    }if(op =="*"){
        return num2 * num3;
    }if(op =="/"){
        return num2 / num3;
    }
    else{
        return "Try again"
    }

    }
        
        
    reply = sum(num2 = Number(prompt("enter a number")) , op = (prompt("enter an operator")) , num3 = Number(prompt("enter another number")))
        
    document.write(reply)

//3
function pal(a , n , n1){
    while(n >= 1){
        s = n % 10;
        n = Math.floor(n / 10);
        a = a + s
    }
    if(a == n1){
        document.write("This IS a palindrome")
    }else{
        document.write("This is NOT a palindrome")
    }
}
    reply = pal(a = "" , n = Number(prompt("enter a number")) , n1 = n)


//4
function pepe(_str , sr ){
vowel = 0
for(i=0 ; i<sr.length ; i++){

    if(sr[i] == "a"){
        vowel = vowel+1
    }else if(sr[i] == "e"){
        vowel = vowel+1
    }else if(sr[i] == "i"){
        vowel = vowel+1
    }else if(sr[i] == "o"){
        vowel = vowel+1
    }else if(sr[i] == "u"){
        vowel = vowel+1
    }
}
}
let reply = pepe(_str = (prompt("enter a string")) , sr = _str.split(""));

document.write(vowel);

*/

//6

function pro(_str1 , _sr1 , _alphaS){
    upC = 0
    for(i=0 ; i<_alphaS.length ; i++){
        for(j=0 ; j<_sr1.length ; j++){

            if(sr1[j] == alphaS[i]){
                upC = upC + 1
            }
    
        }
    }
}
let reply = pro(_str1 = (prompt("enter a string")) , _sr1 = _str1.split("") , alpha = "ABCDEFGHIJKLMNOPQRSTUV" , _alphaS = _alpha.split(""));
    
    document.write(upC);