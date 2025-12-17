// ==================================================
// 📌 JS 문제 세트 — 실전 감각 훈련
// ==================================================


// --------------------------------------------------
// 문제 1 (⭐⭐⭐) — reduce (최댓값)
// 조건:
// - 가장 큰 amount 값 출력
// --------------------------------------------------

const payments2 = [
  { amount: 12000 },
  { amount: 8000 },
  { amount: 15000 },
  { amount: 5000 },
];

// 👉 코드 작성
let maxAmount = payments2
    .reduce((acc, cur) => {
        return acc > cur.amount ? acc : cur.amount;
        // acc값이 cur값보다 크면 acc값 출력하고 아니면 cur.amount값을 출력하시오
    }, 0);

console.log(maxAmount);
// 출력값: 15000


// --------------------------------------------------
// 문제 2 (⭐⭐⭐⭐) — 상태 머신 + 합계
// 조건:
// - start 이후
// - end 이전
// 발생한 score만 합산
// --------------------------------------------------

const logs4 = [
  { type: "score", value: 10 },
  { type: "start" },
  { type: "score", value: 20 },
  { type: "score", value: 30 },
  { type: "end" },
  { type: "score", value: 999 },
  { type: "start" },
  { type: "score", value: 40 },
];

// 👉 코드 작성
let isLoggedIn2 = false;
let totalScore = 0;

for(let i = 0; i < logs4.length; i++) {
    if(logs4[i].type === "start") {
        isLoggedIn2 = true;
        continue;
    }
    if(logs4[i].type === "end") {
        isLoggedIn2 = false;
        continue;
    }
    if(logs4[i].type === "score" && isLoggedIn2) {
        totalScore += logs4[i].value;
    }
}

console.log(totalScore);
// 출력값: 90


// --------------------------------------------------
// 문제 3 (⭐⭐⭐⭐⭐) — 체이닝 + 조건
// 조건:
// 1) category === "food"
// 2) price <= 10000
// 3) price 오름차순 정렬
// 4) name 배열로 반환
// --------------------------------------------------

const productsB = [
  { name: "햄버거", category: "food", price: 8000 },
  { name: "피자", category: "food", price: 12000 },
  { name: "샐러드", category: "food", price: 6000 },
  { name: "노트북", category: "device", price: 1000000 },
];

// 👉 코드 작성
let result = productsB
    .filter(item => item.category === "food" && item.price <= 10000)
    .sort((a, b) => a.price - b.price)
    .map(item => item.name);

console.log(result);
// 출력값: ["샐러드", "햄버거"]



// ==================================================
// 📌 JS 문제 세트 — 패턴 변형 훈련
// - 문제만
// - 출력값 명시
// - 풀이 없음
// ==================================================


// --------------------------------------------------
// 문제 1 (⭐⭐⭐) — reduce (개수 세기)
// 조건:
// - isActive === true 인 항목 개수 출력
// --------------------------------------------------

const users = [
  { name: "민수", isActive: true },
  { name: "지은", isActive: false },
  { name: "서연", isActive: true },
  { name: "도윤", isActive: true },
];

// 👉 코드 작성
let activeCount = users
    .filter(item => item.isActive === true)
    .reduce((acc, cur) => acc + (cur.isActive ? 1 : 0),0);
    // active인 사람을 만나면 1씩 더해서 총 몇 명인지 세어라

console.log(activeCount);
// 출력값: 3


// --------------------------------------------------
// 문제 2 (⭐⭐⭐) — map + 조건 처리
// 조건:
// - score가 60 미만이면 "F"
// - 60 이상이면 score 그대로 유지
// --------------------------------------------------

const scores = [78, 55, 92, 40, 61];

// 👉 코드 작성
let result2 = scores.map(item => item <= 60 ? "F" : item);

console.log(result2);
// 출력값: [78, "F", 92, "F", 61]


// --------------------------------------------------
// 문제 3 (⭐⭐⭐⭐) — reduce (객체 변환)
// 조건:
// - id를 key로
// - name을 value로 하는 객체 생성
// --------------------------------------------------

const members = [
  { id: 101, name: "민지" },
  { id: 102, name: "현수" },
  { id: 103, name: "서준" },
];

// 👉 코드 작성
let result3 = members.reduce((acc, cur) => {
  acc[cur.id] = cur.name;
  return acc;
}, {});
console.log(result3);
// 출력값: { 101: "민지", 102: "현수", 103: "서준" }


// --------------------------------------------------
// 문제 4 (⭐⭐⭐⭐) — 상태 머신 (카운트)
// 조건:
// - on 이후
// - off 이전
// 발생한 click만 카운트
// --------------------------------------------------

const logs5 = [
  { type: "click" },
  { type: "on" },
  { type: "click" },
  { type: "click" },
  { type: "off" },
  { type: "click" },
  { type: "on" },
  { type: "click" },
  { type: "click" },
];

// 👉 코드 작성
let isLogin = false;
let clickCount = 0;
for(let i = 0; i < logs5.length; i++) {
    if(logs5[i].type === "on") {
        isLogin = true;
        continue;
    }
    if(logs5[i].type === "off") {
        isLogin = false;
        continue;
    }
    if(logs5[i].type === "click" && isLogin) {
        clickCount++;
    }
}

console.log(clickCount);
// 출력값: 4


// --------------------------------------------------
// 문제 5 (⭐⭐⭐⭐⭐) — 체이닝 종합 + slice
// 조건:
// 1) type === "drink"
// 2) price >= 3000
// 3) price 내림차순 정렬
// 4) 상위 2개의 name 배열로 반환
// --------------------------------------------------

const menu = [
  { name: "아메리카노", type: "drink", price: 4000 },
  { name: "라떼", type: "drink", price: 4500 },
  { name: "케이크", type: "food", price: 5500 },
  { name: "주스", type: "drink", price: 3000 },
  { name: "쿠키", type: "food", price: 2000 },
];

// 👉 코드 작성
let result5 = menu
    .filter(item => item.type === "drink" && item.price >= 3000)
    .sort((a, b) => b.price - a.price)
    .slice(0, 2)
    .map(item => item.name);

console.log(result5);
// 출력값: ["라떼", "아메리카노"]



// ==================================================
// 📌 JS 문제 세트 — 응용 단계 훈련
// ==================================================


// --------------------------------------------------
// 문제 1 (⭐⭐⭐) — reduce (조건부 개수)
// 조건:
// - score가 70 이상인 학생 수 출력
// --------------------------------------------------

const students2 = [
  { name: "민수", score: 65 },
  { name: "지은", score: 72 },
  { name: "서연", score: 88 },
  { name: "도윤", score: 70 },
  { name: "하린", score: 61 },
];

// 👉 코드 작성
let passCount = students2.reduce((acc, cur) => acc + (cur.score >= 70 ? 1 : 0), 0);
console.log(passCount);
// 출력값: 3


// --------------------------------------------------
// 문제 2 (⭐⭐⭐⭐) — reduce (group by)
// 조건:
// - category별 상품 개수 집계
// --------------------------------------------------

const productsC = [
  { name: "햄버거", category: "food" },
  { name: "피자", category: "food" },
  { name: "노트북", category: "device" },
  { name: "마우스", category: "device" },
  { name: "샐러드", category: "food" },
];

// 👉 코드 작성
let result4 = productsC
    .reduce((acc, cur) => {
        acc[cur.category] = (acc[cur.category] || 0) + 1;
        // acc[cur.category] => 결과 객체에서 해당 서비스의 현재 카운트 값
        // (acc[cur.category] || 0) + 1 => 성공 로그를 하나 발견했으니 카운트 1 증가
        return acc;
    }, {});

console.log(result4);
// 출력값: { food: 3, device: 2 }


// --------------------------------------------------
// 문제 3 (⭐⭐⭐⭐) — 상태 머신 (합계)
// 조건:
// - open 이후
// - close 이전
// 발생한 amount만 합산
// --------------------------------------------------

const logs6 = [
  { type: "amount", value: 1000 },
  { type: "open" },
  { type: "amount", value: 3000 },
  { type: "amount", value: 2000 },
  { type: "close" },
  { type: "amount", value: 9999 },
  { type: "open" },
  { type: "amount", value: 4000 },
];

// 👉 코드 작성
let isAmount = false;
let totalAmount = 0;
for(let i = 0; i < logs6.length; i++) {
    if(logs6[i].type === "open") {
        isAmount = true;
        continue;
    }
    if(logs6[i].type === "close") {
        isAmount = false;
        continue;
    }
    if(logs6[i].type === "amount" && isAmount) {
        totalAmount += logs6[i].value;
    }
}

console.log(totalAmount);
// 출력값: 9000


// --------------------------------------------------
// 문제 4 (⭐⭐⭐⭐⭐) — 체이닝 종합 (난이도 업)
// 조건:
// 1) role === "frontend"
// 2) score >= 80
// 3) score 내림차순 정렬
// 4) name 배열로 반환
// --------------------------------------------------

const devs = [
  { name: "민지", role: "frontend", score: 82 },
  { name: "현수", role: "backend", score: 91 },
  { name: "서준", role: "frontend", score: 95 },
  { name: "지우", role: "frontend", score: 78 },
  { name: "하린", role: "frontend", score: 88 },
];

// 👉 코드 작성
let devResult = devs
    .filter(item => item.role === "frontend" && item.score >= 80)
    .sort((a, b) => b.score - a.score)
    .map(item => item.name);

console.log(devResult);
// 출력값: ["서준", "하린", "민지"]
