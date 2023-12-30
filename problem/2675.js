// 입력
let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split('\n');

// 문제
const t = Number(input[0]);
/*
내 풀이
for(let i = 1; i <= t; i++){
    const [ r, s ] = input[i].split(' ');
    let p = '';
    const strArr = s.split('');
    strArr.forEach((value) => {
        for(let i = 0; i < r; i++){
            p += value
        }
    })
    console.log(p);
}
*/

// 한 줄씩 입력받기
for(let i = 1; i <= t; i++){
    let [r, s] = input[i].split(' ');
    let result = '';
    // 현재 문자열의 각 문자를 하나씩 확인하며
    for(let j = 0; j < s.length; j++){
        // r번 반복한 문자열을 뒤에 이어붙이기
        result += s.charAt(j).repeat(r);
    }
    console.log(result);
}