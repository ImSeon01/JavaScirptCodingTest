let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// ["1", "2"]
let line = input[0].split(' ');

let result;

let a = Number(line[0]);
let b = Number(line[1]);

result = a * b;

// 결과 출력
console.log(result);