//1
let MyArray = new Array(1,2,3,-4,5,-6);

//2
document.write("The Elements in the array are:");
document.write("<br/ >");
document.write(MyArray)

document.write("<br>")

//3
document.write("The negative elements are:");
    document.write("<br>");
let num=1;
while(num<=10){
    num++;
if(MyArray[num]<1){
    document.write(MyArray[num])
}
}

document.write("<br>")

//4
let sum = 0 
for(let j=0; j<MyArray.length;j+=1){
   sum += MyArray[j]
}
document.write("The sum of all digits is:");
document.write("<br>");
document.write(sum);


document.write("<br>");

//5
let minValue = Math.min(...MyArray);
let maxValue = Math.max(...MyArray);

document.write("The Max digit is:");
document.write("<br>");
document.write(maxValue);

document.write("<br>");

document.write("The Min digit is:");
document.write("<br>");
document.write(minValue);

//6





document.write("<br/ >");