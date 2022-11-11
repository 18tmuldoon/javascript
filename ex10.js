document.write("<pre>")
/*
//1
for(let j= 0; j<5; j++){
    for (let k = 0; k<5; k++){
    document.write("*");
    }
    document.write("<br />");
}

//2
let row = Number(prompt("enter amount of rows"));
let col = Number(prompt("enter amount of columns"));

for(let j= 0; j<col; j++){
    for (let k = 0; k<row; k++){
    document.write("*");
    }
    document.write("<br />");
}


//3
let row1 = Number(prompt("enter amount of rows"));
let col1 = Number(prompt("enter amount of columns"));

for(let j= 0; j<col1; j++){
    for(let k = 0; k<row1; k++){
   if(j == 0 || j == col1-1 || k == 0 || k == row1-1){
    document.write("*");
   }else{
    document.write(" ");
   }
   }

    document.write("<br />");
}

*/


//4
let row2 = Number(prompt("enter amount of rows"));
let col2 = Number(prompt("enter amount of columns"));

for(let j= 0; j<col2; j++){
    for(let k = 0; k<row2; k++){
   if(j == 0 || j == col2-1 || k == 0 || k == row2-1){
    document.write("*");
   }else{
    document.write(" ");
   } if(j==k){
    document.write("*");
   }
   let l = (0 -j)
   let p = (0 -k)
   if(l==p){
    document.write("*");
   }
   }

    document.write("<br />");
}
/*
for(let j= 0; j<col2; j++){
    for (let k = 0; k<row2; k++){
   if(j==k){
    document.write("*");
   }else{
    document.write(" ");
   } 
    }
    document.write("<br />");
}
*/
document.write("<pre>")