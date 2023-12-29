// 입력
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 풀이
// 시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력하는 프로그램을 작성하시오.
const score = Number(input[0]);
/*
내 풀이
let grade = 'F';

if(90 <= score && score <= 100){
    grade = 'A';
} else if(score >= 80) {
    grade = 'B';
} else if(score >= 70) {
    grade = 'C';
} else if(score >= 60) {
    grade = 'D'
}

// 출력
console.log(grade);
*/

const check = (score) => {
    if(90 <= score && score <= 100) console.log('A');
    else if(80 <= score && score <= 89) console.log('B');
    else if(70 <= score && score <= 79) console.log('C');
    else if(60 <= score && score <= 69) console.log('D');
    else console.log('F');
}

check(score);