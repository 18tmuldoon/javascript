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

//2