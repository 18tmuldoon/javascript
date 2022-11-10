/*
//1
for(let j= 0; j<5; j++){
    for (let k = 0; k<5; k++){
    document.write("*" );
    }
    document.write("<br />");
}

//2
let row = Number(prompt("enter amount of rows"));
let col = Number(prompt("enter amount of columns"));

for(let j= 0; j<col; j++){
    for (let k = 0; k<row; k++){
    document.write(" * ");
    }
    document.write("<br />");
}
*/

//3
let row1 = Number(prompt("enter amount of rows"));
let col1 = Number(prompt("enter amount of columns"));

for(let j= 0; j<col1; j++){
    for (let k = 0; k<row1; k++){
    document.write(" * ");
    if(j = 1 && k > 1){
        document.write("  "); 
    }
    }
    document.write("<br />");
}