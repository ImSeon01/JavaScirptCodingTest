// 입력
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let testCaseNum = Number(input[0]);

for(let i = 1; i <= testCaseNum; i++){
    let intArr = input[i].split(' ').map(Number);
    // 학생 수
    let studentNum = intArr[0];
    let sum = intArr.slice(1).reduce((a, b) => a + b);
    let avg = sum / studentNum;

    // 점수가 평균을 넘는 학생 수 계산
    let count = 0;
    intArr.slice(1).forEach((value) => {
        if(value > avg) count++;
    })
    console.log(((count / studentNum) * 100).toFixed(3) + '%');
}