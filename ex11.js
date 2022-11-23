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

document.write("<br>");

//6
let MyArrayCopy = MyArray
let maxValue1 = Math.max(...MyArrayCopy);
let n1=1;
while(n1<=10){
    n1++;
if(MyArray[n1]==maxValue1){
    MyArrayCopy[n1] = 0
}
}
let maxValue2 = Math.max(...MyArrayCopy);
document.write("The Second largest digit is:");
document.write("<br>");
document.write(maxValue2);

//7
    document.write("<br>");
let num1=1;
let even=0;
let odd=0;
while(num1<=10){
    num1++;
if((MyArray[num1]%2)==0){
    even++
}else{
    odd++
}
}
document.write("Total of even is ");
document.write(even);
document.write("<br>")
document.write("Total of odd is ");
document.write(odd);

document.write("<br>")

//8
let MyArrayCopy1 = MyArray
document.write("Copy array = ")
document.write(MyArrayCopy1)

document.write("<br>")

//9

document.write("Add a Digit")
document.write("<br>")
MyArrayCopy1.push(8)

document.write(MyArrayCopy1)

document.write("<br>")


//10
document.write("Remove a Digit")
document.write("<br>")
MyArrayCopy1.pop()

document.write(MyArrayCopy1)
document.write("<br/ >");