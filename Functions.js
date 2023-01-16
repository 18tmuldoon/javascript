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
        
        
    reply1 = sum(num2 = Number(prompt("enter a number")) , op = (prompt("enter an operator")) , num3 = Number(prompt("enter another number")))
        
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
let reply2 = pepe(_str = (prompt("enter a string")) , sr = _str.split(""));

document.write(vowel);



//6

function pro(_str1 , sr1){
    upC = 0
    for(j=0 ; j<sr1.length ; j++){

            if(sr1[j]=="A"){upC = upC + 1}else if(sr1[j]=="B"){upC = upC + 1}else if(sr1[j]=="C"){upC = upC + 1}else if(sr1[j]=="D"){upC = upC + 1}else if(sr1[j]=="E"){upC = upC + 1}else if(sr1[j]=="F"){upC = upC + 1}else if(sr1[j]=="G"){upC = upC + 1}else if(sr1[j]=="H"){upC = upC + 1}else if(sr1[j]=="I"){upC = upC + 1}else if(sr1[j]=="J"){upC = upC + 1}else if(sr1[j]=="J"){upC = upC + 1}else if(sr1[j]=="K"){upC = upC + 1}else if(sr1[j]=="L"){upC = upC + 1}else if(sr1[j]=="M"){upC = upC + 1}else if(sr1[j]=="N"){upC = upC + 1}else if(sr1[j]=="O"){upC = upC + 1}else if(sr1[j]=="P"){upC = upC + 1}else if(sr1[j]=="Q"){upC = upC + 1}else if(sr1[j]=="R"){upC = upC + 1}else if(sr1[j]=="S"){upC = upC + 1}else if(sr1[j]=="T"){upC = upC + 1}else if(sr1[j]=="U"){upC = upC + 1}else if(sr1[j]=="V"){upC = upC + 1}else if(sr1[j]=="W"){upC = upC + 1}else if(sr1[j]=="X"){upC = upC + 1}else if(sr1[j]=="Y"){upC = upC + 1}else if(sr1[j]=="Z"){upC = upC + 1}
    
    }
}
let reply3 = pro(_str1 = (prompt("enter a string")) , sr1 = _str1.split(""));

    document.write(upC);


//7

function num0(_str2 , sr2){
    numO = 0
    for(j=0 ; j<sr2.length ; j++){

            if(sr2[j]=="1"){
                numO = numO + 1
            }else if(sr2[j]=="2"){
                numO = numO + 1
            }else if(sr2[j]=="3"){
                numO = numO + 1
            }else if(sr2[j]=="4"){
                numO = numO + 1
            }else if(sr2[j]=="5"){
                numO = numO + 1
            }else if(sr2[j]=="6"){
                numO = numO + 1
            }else if(sr2[j]=="7"){
                numO = numO + 1
            }else if(sr2[j]=="8"){
                numO = numO + 1
            }else if(sr2[j]=="9"){
                numO = numO + 1
            }else if(sr2[j]=="0"){
                numO = numO + 1
            }
    
    }
}
let reply4 = num0(_str2 = (prompt("enter a string")) , sr2 = _str2.split(""));

    document.write(numO);