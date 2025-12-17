// ===============================
// 📌 JavaScript — 2단계 난이도 상승 버전 (⭐⭐⭐)
// ===============================


// --------------------------------
// 문제 1 — 짝수이면서 5보다 큰 숫자만 출력하기
// 👉 numbers 배열에서 값이 짝수 AND 5보다 큰 값만 출력.
//
const numbers = [2, 4, 6, 7, 12, 15, 18, 3, 10];

// for문 작성
for(let i=0; i<numbers.length; i++) {
    if(numbers[i] % 2 === 0 && numbers[i] > 5) {
        console.log(numbers[i]);
    }
}



console.log("--------------------------------");


// --------------------------------
// 문제 2 — 배열에서 최솟값 찾기
// 👉 아래 배열에서 가장 작은 값을 for문으로 찾아 출력하시오.
// (Math.min 사용 ❌ 직접 비교해서 찾기)
const nums = [33, 12, 5, 99, 27, 1, 42];

// hint: 비교 변수 필요
let min = nums[0];

// for문 작성
for(let i=0; i<nums.length; i++) {
    if(nums[i] < min) {
        min = num[i];
    }
}


console.log("--------------------------------");


// --------------------------------
// 문제 3 — 문자열에서 모음(a, e, i, o, u) 개수 세기
// 👉 word 문자열에서 모음이 총 몇 개 있는지 세시오.
//
const word = "I am learning JavaScript loops and logic!";
const vowels = ["a", "e", "i", "o", "u"];

let vowelCount = 0;

// for문 작성
// (힌트: includes(), toLowerCase() 활용 가능)
for(let i = 0; i < word.length; i++) {
    if(word[i] == vowels.includes()) {
        console.log(word[i]);
    }
}


console.log("모음 개수:", vowelCount);


console.log("--------------------------------");


// --------------------------------
// 문제 4 — 특정 기준 이하 숫자만 더하기
// 👉 아래 배열에서 10 이하인 숫자만 합산하여 결과 출력하시오.
//
const points = [5, 10, 12, 3, 25, 8, 11, 2];

let sum = 0;

// for문 작성
for(let i = 0; i < points.length; i++) {
    if(points[i] < 10) {
        sum = points[i] + points[i];
    }
}

console.log("10 이하 값 합계:", sum);


console.log("--------------------------------");


// --------------------------------
// 문제 5 — 구구단 1~5단 출력하기
// 👉 중첩 for문을 사용해 1단부터 5단까지만 출력하시오.
//
// 출력 예시:
// 1 x 1 = 1
// 1 x 2 = 2
// ...
// 2 x 1 = 2
// ...
// 5 x 9 = 45

// for문 작성
for(let i=1; i<=5; i++) {
    for(let j=1; j<=9; j++) {
        console.log(`${i} X ${j} = ${i * j}`);
    }
}


console.log("--------------------------------");


// ✔ 학습 완료!
// 원하면 "정답 알려줘" 하면 됨 😎
