/*
//1
let _MyArray = [1,2,3,4,5,6];
function mean(_MyArray){
let sum = 0;
let _array = _MyArray
let l= _array.length ;

for(let i=0 ; i<l ; i++){
    sum = sum + _array[i];

}
 let _mean = sum / l;
return _mean;
}


reply = mean(_MyArray);

document.write(reply);

//4
document.write("</br>");
function frequency(_MyArray1 , _array1 , _l1 , _num , Arr){
    let _numC1 = ""
    let c = 0;
    for(let i=0 ; i<_l1 ; i++){
        if(_MyArray1[c] == _MyArray1[i]){
            _num = _num + 1;
            _numC = (_MyArray1[c] +" Shows up " + _num + " Times");
        }else if(_MyArray1[c++] == _MyArray1[i]){
            _num = _num + 1;
            _numC1 = (_MyArray1[c] +" Shows up " + _num + " Times");
        }}
        if(_numC == _numC1){
            _numC = (_numC + " And " + _numC1);
        }
    Arr.push(_numC);
    return Arr;
}
reply1 = frequency(_MyArray1 = [1,1,1,2,2,3,4,4,4,4,5,6,7,8,9,10,10,10,10,11],_array1 = _MyArray1,_l1= _array1.length,_num = 0,Arr = []);
document.write(reply1);
*/

//2
document.write("</br>");
function mode(_MyArray2 , _array2 , _l2 , _num1){
    let c = 0;
    let _larr = [];
    for(let i=0 ; i<_l1 ; i++){
        if(_MyArray2[c] == _MyArray2[i]){
            _num1 = _num1 + 1;
            _larr.push(_num1)
        }else if(_MyArray2[c++] == _MyArray2[i]){
            _num1 = _num1 + 1;
            _larr.push(_num1)
        }}
        
    let _max = Math.max(..._larr);
    return _larr;
}
let reply2 = mode(_MyArray2 = [1,1,1,2,2,3,4,4,5,6,7,8,9,9,9,10,10,10,10,11],_array2 = _MyArray2,_l2= _array2.length,_num1 = 0);
document.write(reply2);

/*

//3
document.write("</br>");
median([2, 1, 3, 4]);

function median(arr) {
  if (arr.length == 0) {
    return;
  }
  arr.sort((a, b) => a - b); 
  const midpoint = Math.floor(arr.length / 2);
  const median = arr.length % 2 === 1 ?
    arr[midpoint] : 
    (arr[midpoint - 1] + arr[midpoint]) / 2;
  return median;
}
let reply3 = median([2, 1, 3, 4]);

document.write(reply3);

*/