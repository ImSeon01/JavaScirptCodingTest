// 입력
let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split('\n');

// 문제 : 첫째 줄에, 42로 나누었을 때, 서로 다른 나머지가 몇 개 있는지 출력한다
let intArr = input.map(Number);
let restSet = new Set(); // 집합 객체 생성

for(let i = 0; i < 10; i++){
    restSet.add(intArr[i] % 42);
}
// 출력
console.log(restSet.size);