let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let intArr = input.map(Number);

/*
내 풀이
let max = intArr[0];
let maxIndex = 0;
for(let i = 1; i < intArr.length; i++){
    if(intArr[i] > max){
        max = intArr[i];
        maxIndex = i;
    }
}


// 출력
console.log(max);
console.log(maxIndex + 1);
*/

let max = Math.max(...intArr);

console.log(max);
console.log(intArr.indexOf(max) + 1);