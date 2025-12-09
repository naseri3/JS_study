// ===============================================
// 📌 12/9 — 반복문 상급 문제 세트 (⭐⭐⭐⭐ ~ ⭐⭐⭐⭐⭐)
// ===============================================


// -----------------------------------------------
// 문제 1 — 카테고리별 데이터 분류 ⭐⭐⭐⭐
// -----------------------------------------------

const items = [
  { name: "콜라", category: "drink", price: 1500 },
  { name: "햄버거", category: "food", price: 5500 },
  { name: "사이다", category: "drink", price: 1300 },
  { name: "감자튀김", category: "food", price: 3000 },
  { name: "커피", category: "drink", price: 4500 },
];

let categorized = { food: [], drink: [] };

for (const item of items) {
  categorized[item.category].push(item.name);
  // item.category기준으로 item.name 이름을 categorized에 넣음
    // console.log(item.category);
}

console.log("문제1 결과:", categorized);
console.log("---------------------------------------");




// -----------------------------------------------
// 문제 2 — 짝수 인덱스만 값 * 2 ⭐⭐⭐⭐
// -----------------------------------------------

const numbers = [5, 12, 7, 21, 9, 40];
let resultIndexes = [];

for (let i = 0; i < numbers.length; i++) {
  if (i % 2 === 0) {
    resultIndexes.push(numbers[i] * 2);
  }
}

console.log("문제2 결과:", resultIndexes);
console.log("---------------------------------------");




// -----------------------------------------------
// 문제 3 — 배열 합치기 + 중복 제거 + 조건 적용 ⭐⭐⭐⭐⭐
// -----------------------------------------------

const tagSet1 = ["dev", "frontend", "career", "html", "css"];
const tagSet2 = ["javascript", "dev", "career", "react", "css"];

let merged = [...tagSet1, ...tagSet2];      // tagSet1, tagSet2 값들 합치는 배열
let filtered = [];

for (const tag of merged) {
  if (tag.length >= 4 && !filtered.includes(tag)) {
    filtered.push(tag);
  }
}

filtered.sort(); // 알파벳순 정렬

console.log("문제3 결과:", filtered);
console.log("---------------------------------------");




// -----------------------------------------------
// 문제 4 — 가장 많이 등장한 값 찾기 ⭐⭐⭐⭐⭐
// -----------------------------------------------

const views = ["home", "home", "detail", "login", "home", "login", "detail", "detail", "detail"];

let countMap = {};              // 빈도 저장용 객체
let mostFrequent = "";          // 가장 많이 등장한 값 저장용
let maxCount = 0;               // 현재까지 발견된 최댓값 빈도

for (const page of views) {
  countMap[page] = (countMap[page] || 0) + 1;       // 등장 횟수 누적하기
    // 가장 많이 등장한 값 실시간 업데이트
  if (countMap[page] > maxCount) {
    maxCount = countMap[page];
    mostFrequent = page;
  }
}

console.log("문제4 결과:", mostFrequent);
console.log("---------------------------------------");




// -----------------------------------------------
// 문제 5 — 조건 필터링 + 정렬 (Object 배열) ⭐⭐⭐⭐
// -----------------------------------------------

const users = [
  { name: "민지", age: 21, region: "서울" },
  { name: "현수", age: 28, region: "부산" },
  { name: "가영", age: 31, region: "서울" },
  { name: "선우", age: 25, region: "서울" },
  { name: "지훈", age: 27, region: "대구" },
];

let selectedUsers = [];

for (const user of users) {
  if (user.age >= 25 && user.region === "서울") {
    selectedUsers.push(user.name);
  }
}

selectedUsers.sort(); // 이름순 정렬

console.log("문제5 결과:", selectedUsers);
console.log("---------------------------------------");




// ===============================================
// 완료하면 →  "체크해줘 상급 버전"  입력하세요 ✔
// ===============================================
