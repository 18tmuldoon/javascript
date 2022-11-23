//1
let num = Number(prompt("enter a number"))
let r = 0;
  
    while (num > 0) {
      num = Math.floor(num / 10);
      r++;
    }
  
    console.log(r);

//2
let num1 = Number(prompt("enter 2nd number"))
let a = 0
let lastDigit = (num1 % 10);

while (num1 > 10) {
    num1 = (num1 / 10)
    a++;
  }

  console.log("First Digit = "+a);
  console.log("Second Digit = "+lastDigit)

//3
let num2 = Number(prompt("enter 3rd number"))

let ln = -1
let ln1 = (num2 % 10);
let l =  Math.floor(num2 / 10);
let l1 =  Math.floor(l / 10);
let l2 =  Math.floor(l1 / 10);


  while (num2 > 0) {
    ln = (num2 % 10);
    switch(ln){
      case 1 :
          console.log('one');
          break;
      case 2:
          console.log('two');
          break;
      case 3:
          console.log('three');
          break;
      case 4:
        console.log('four');
        break;
      case 5:
        console.log('five');
        break;
      case 6:
        console.log('six');
         break;
      case 7:
        console.log('seven');
         break;
      case 8:
        console.log('eight');
          break;
      case 9:
        console.log('nine');
         break;
      }


    num2 = Math.floor(num2 / 10);
 
    }


//4
let num3 = Number(prompt("enter 4th number"))
let num4 = Number(prompt("enter 5th number"))

max = Math.max(num3, num4);

for(;(max/j==Math.floor(max/num3)&&max/num4==Math.floor(max/num4))==false;){
  max=max*2
}
console.log(max+" is the lcm of "+num3+" and "+num4);

}else{
console.log("thats not a question");
}
