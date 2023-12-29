// 입력
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
/*
내 풀이
let [first, second, third] = input[0].split(' ').map(Number);
let price = 0;
if(first === second && second === third ){ // 같은 눈이 3개
    price = 10000 + first * 1000;                                                                                                                                                                                                                                                                                       
} else if(first === second || first === third || second === third){ // 같은 눈이 2개
    let same;
    if(first === second || first === third) same = first;
    else same = second;
    price = 1000 + same * 100;
} else { // 모두 다른 눈
    let max = first;
    if(second > max) max = second;
    if(third > max) max = third;

    price = max * 100;
}
// 출력
console.log(price)
*/
// 문제 풀이 핵심 아이디어
// 1. 눈금 세 개가 모두 같으면 => 10000 + (같은 눈금) * 1000
// 2. 눈금 두 개가 같으면 => 1000 + (같은 눈금) * 100
// 3. 눈금이 모두 다르면 => (가장 큰 눈금) * 100

let [first, second, third] = input[0].split(' ').map(Number);

// 세 개의 수가 모두 같은 경우
if(first == second && second == third) console.log(10000 + first * 1000);
// 세 개의 수가 전부 같지는 않지만, 두 개의 수가 같은 경우
else if(first == second) console.log(1000 + first * 100);
else if(first == third) console.log(1000 + first * 100);
else if(second == third) console.log(1000 + second * 100);
// 세 개의 수가 전부 다른 경우
else console.log(Math.max(first, second, third) * 100);