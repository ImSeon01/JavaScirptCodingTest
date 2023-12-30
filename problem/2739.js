// 입력
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let result = '';
for(let i = 1 ; i <= 9; i++){
    result += `${n} * ${i} = ${n * i}\n`
}
// 출력
console.log(result)