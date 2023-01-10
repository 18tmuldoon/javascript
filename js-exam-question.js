num = 4388576018402626

while(num >= 1){
    sum = num % 10;
    sumx2 = sum * 2
    document.write(sum , " --> " , sumx2);
    document.write("<br>");
    num = Math.floor(num / 10);
    num = Math.floor(num / 10);
}


