// 입력
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 풀이
let n = Number(input[0]);

let result = '';
for(let i = 1; i <= n; i++){ // 행만큼 반복
    for(let j = 1; j <= i; j++){ // 현재 행만큼 별을 출력
        result += '*';
    }
    result += '\n';
}
console.log(result);