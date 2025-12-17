// ==================================================
// 📌 오늘의 JS 문제 세트
// - 문제만
// - 출력값 명시
// - 풀이 없음
// ==================================================


// --------------------------------------------------
// 문제 1 (⭐⭐) — filter + map
// 조건:
// - stock >= 3
// - price <= 15000
// - name만 배열로 반환
// --------------------------------------------------

const products = [
  { name: "키위", price: 9000, stock: 2 },
  { name: "복숭아", price: 11000, stock: 6 },
  { name: "딸기", price: 13000, stock: 3 },
  { name: "샤인머스캣", price: 22000, stock: 10 },
  { name: "블루베리", price: 15000, stock: 8 },
];

// 👉 코드 작성
let result = products.filter(fruit => fruit.stock >= 3 && fruit.price <= 15000).map(fruit => fruit.name)
console.log(result);
// 출력값: ["복숭아", "딸기", "블루베리"]


// --------------------------------------------------
// 문제 2 (⭐⭐⭐) — reduce (총합 계산)
// 조건:
// - status === "완료"
// - price * count 총합
// --------------------------------------------------

const orders = [
  { product: "키위", price: 3000, count: 3, status: "완료" },
  { product: "딸기", price: 12000, count: 1, status: "진행중" },
  { product: "수박", price: 18000, count: 3, status: "완료" },
  { product: "귤", price: 5000, count: 2, status: "완료" },
];

// 👉 코드 작성
let total = orders
    .filter(fruit => fruit.status === "완료")
    .reduce((acc, cur) => acc + cur.price * cur.count, 0);
console.log(total);
// 출력값: 73000


// --------------------------------------------------
// 문제 3 (⭐⭐⭐⭐) — reduce (group by 집계)
// 조건:
// - type === "success" 만
// - service별 성공 횟수 객체로 반환
// --------------------------------------------------

const logs = [
  { type: "success", service: "auth" },
  { type: "start" },
  { type: "success", service: "auth" },
  { type: "fail", service: "payment" },
  { type: "success", service: "payment" },
  { type: "success", service: "auth" },
  { type: "success", service: "payment" },
];

// 👉 코드 작성
let result1 = logs
  .filter(log => log.type === "success")
  .reduce((acc, cur) => {
    acc[cur.service] = (acc[cur.service] || 0) + 1;
    // acc[cur.service] => 결과 객체에서 해당 서비스의 현재 카운트 값
    // (acc[cur.service] || 0) + 1 => 성공 로그를 하나 발견했으니 카운트 1 증가
    return acc;
  }, {});

console.log(result1);
// 출력값: { auth: 3, payment: 2 }


// --------------------------------------------------
// 문제 4 (⭐⭐⭐⭐⭐) — 상태 머신 사고
// 조건:
// - login 이후
// - logout 이전
// 발생한 purchase만 유효
// --------------------------------------------------

const logs2 = [
  { type: "purchase", price: 5000 },
  { type: "login" },
  { type: "purchase", price: 12000 },
  { type: "purchase", price: 8000 },
  { type: "logout" },
  { type: "purchase", price: 20000 },
  { type: "login" },
  { type: "purchase", price: 3000 },
  { type: "logout" },
];

// 👉 코드 작성
let isLoggedIn = false;
let total1 = {};

for(let i = 0; i < logs2.length; i++) {
    if(logs2[i].type === "login") {
        isLoggedIn = true;
        continue;
    }
    if(logs2[i].type === "logout") {
        isLoggedIn = false;
        continue;
    }
    if(logs2[i].type === "purchase" && isLoggedIn) {
         total1 += logs2[i].price;
    }
}

console.log(total1);
// 출력값: 23000


// --------------------------------------------------
// 문제 5 (⭐⭐⭐⭐⭐⭐) — 체이닝 종합
// 조건:
// 1) role === "frontend"
// 2) score 내림차순 정렬
// 3) 상위 2명의 name만 배열로 반환
// --------------------------------------------------

const candidates = [
  { name: "민지", role: "frontend", score: 82 },
  { name: "현수", role: "backend", score: 91 },
  { name: "서준", role: "frontend", score: 95 },
  { name: "지우", role: "frontend", score: 88 },
  { name: "도윤", role: "backend", score: 77 },
];

// 👉 코드 작성
let result3 = candidates
  .filter(item => item.role === "frontend")
  .sort((a, b) => b.score - a.score)
  .slice(0, 2)
  .map(item => item.name);

console.log(result3);
// 출력값: ["서준", "지우"]




// --------------------------------------------------
// 문제 1 (⭐⭐) — filter + map (워밍업)
// 조건:
// - stock >= 5
// - price < 15000
// - name만 배열로 반환
// --------------------------------------------------

const productsA = [
  { name: "키위", price: 9000, stock: 2 },
  { name: "복숭아", price: 11000, stock: 6 },
  { name: "딸기", price: 13000, stock: 5 },
  { name: "샤인머스캣", price: 22000, stock: 10 },
  { name: "블루베리", price: 15000, stock: 8 },
];

// 👉 코드 작성
let resultA = productsA
    .filter(item => item.stock >= 5 && item.price < 15000)
    .map(item => item.name);

console.log(resultA);
// 출력값: ["복숭아", "딸기"]


// --------------------------------------------------
// 문제 2 (⭐⭐⭐) — reduce (숫자 총합)
// 조건:
// - status === "완료" 인 것만
// - (price * count) 총합
// --------------------------------------------------

const ordersA = [
  { product: "키위", price: 3000, count: 3, status: "완료" },
  { product: "딸기", price: 12000, count: 1, status: "진행중" },
  { product: "수박", price: 18000, count: 2, status: "완료" },
  { product: "귤", price: 5000, count: 2, status: "완료" },
];

// 👉 코드 작성
let totalA = ordersA
    .filter(item => item.status === "완료")
    .reduce((acc, cur) => acc + cur.price * cur.count, 0);

console.log(totalA);
// 출력값: 55000


// --------------------------------------------------
// 문제 3 (⭐⭐⭐) — reduce (group by 카운트)
// 조건:
// - type === "success" 만
// - service별 성공 횟수 객체로 반환
// --------------------------------------------------

const logsA = [
  { type: "success", service: "auth" },
  { type: "success", service: "auth" },
  { type: "fail", service: "payment" },
  { type: "success", service: "payment" },
  { type: "success", service: "search" },
  { type: "success", service: "payment" },
  { type: "start" },
];

// 👉 코드 작성
let resultB = logsA
    .filter(item => item.type === "success")
    .reduce((acc, cur) => {
        acc[cur.service] = (acc[cur.service] || 0) +1;
        return acc;
    }, {});

console.log(resultB);
// 출력값: { auth: 2, payment: 2, search: 1 }


// --------------------------------------------------
// 문제 4 (⭐⭐⭐⭐) — 상태 머신 (login~logout 사이만 합)
// 조건:
// - login 이후 ~ logout 이전 purchase만 유효
// - 유효 purchase 금액 총합 출력
// --------------------------------------------------

const logsB = [
  { type: "login" },
  { type: "purchase", price: 7000 },
  { type: "purchase", price: 3000 },
  { type: "logout" },
  { type: "purchase", price: 9999 },
  { type: "login" },
  { type: "purchase", price: 2000 },
];

// 👉 코드 작성
let isLogin = false;
let totalB = 0;
for(let i = 0; i < logsB.length; i++) {
    if(logsB[i].type === "login") {
        isLogin = true;
        continue;
    }
    if(logsB[i].type === "logout") {
        isLogin = false;
        continue;
    }
    if(logsB[i].type === "purchase" && isLogin) {
        totalB += logsB[i].price;
    }
}

console.log(totalB);
// 출력값: 12000


// --------------------------------------------------
// 문제 5 (⭐⭐⭐⭐⭐) — 체이닝 종합 (filter → sort → slice → map)
// 조건:
// 1) role === "frontend"
// 2) score 내림차순 정렬
// 3) 상위 3명의 name만 배열로 반환
// --------------------------------------------------

const candidatesA = [
  { name: "민지", role: "frontend", score: 82 },
  { name: "현수", role: "backend", score: 91 },
  { name: "서준", role: "frontend", score: 95 },
  { name: "지우", role: "frontend", score: 88 },
  { name: "도윤", role: "backend", score: 77 },
  { name: "하린", role: "frontend", score: 90 },
];

// 👉 코드 작성
let resultC = candidatesA
    .filter(item => item.role === "frontend")
    .sort((a, b) => a.score - b.score)
    .slice(0, 3)
    .map(item => item.name);

console.log(resultC);
// 출력값: ["서준", "하린", "지우"]




// ==================================================
// 📌 JS 문제 세트 — 반복 훈련 (체이닝 & 상태 & reduce)
// - 문제만
// - 출력값 명시
// - 풀이 없음
// ==================================================


// --------------------------------------------------
// 문제 1 (⭐⭐) — filter
// 조건:
// - score >= 80
// - name만 배열로 반환
// --------------------------------------------------

const students = [
  { name: "민수", score: 75 },
  { name: "지은", score: 88 },
  { name: "서연", score: 92 },
  { name: "도윤", score: 64 },
  { name: "하린", score: 81 },
];

// 👉 코드 작성
let result4 = students.filter(student => student.score >= 80).map(student => student.name);
console.log(result4);
// 출력값: ["지은", "서연", "하린"]


// --------------------------------------------------
// 문제 2 (⭐⭐⭐) — reduce (숫자 누적)
// 조건:
// - amount 합계 출력
// --------------------------------------------------

const payments = [
  { amount: 12000 },
  { amount: 8000 },
  { amount: 15000 },
  { amount: 5000 },
];

// 👉 코드 작성
let total2 = payments.reduce((acc, cur) => {
    return acc = acc + cur.amount; 
}, 0);

console.log(total2);
// 출력값: 40000


// --------------------------------------------------
// 문제 3 (⭐⭐⭐) — reduce (조건부 합계)
// 조건:
// - type === "income" 만
// - amount 합계
// --------------------------------------------------

const records = [
  { type: "income", amount: 30000 },
  { type: "expense", amount: 12000 },
  { type: "income", amount: 18000 },
  { type: "expense", amount: 7000 },
];

// 👉 코드 작성
let total3 = records
    .filter(item => item.type === "income")
    .reduce((acc,cur) => acc + cur.amount, 0);

console.log(total3);
// 출력값: 48000


// --------------------------------------------------
// 문제 4 (⭐⭐⭐⭐) — 상태 머신
// 조건:
// - open 이후
// - close 이전
// 발생한 visit만 카운트
// --------------------------------------------------

const logs3 = [
  { type: "visit" },
  { type: "open" },
  { type: "visit" },
  { type: "visit" },
  { type: "close" },
  { type: "visit" },
  { type: "open" },
  { type: "visit" },
];

// 👉 코드 작성

let isLoggedIn1 = false;
let count = 0;

for(let i = 0; i < logs3.length; i++) {
    if(logs3[i].type === "open") {
        isLoggedIn1 = true;
        continue;
    }
    if(logs3[i].type === "close") {
        isLoggedIn1 = false;
        continue;
    }
    if(logs3[i].type === "visit" && isLoggedIn1) {
        count++;
    }
}

console.log(count);
// 출력값: 3


// --------------------------------------------------
// 문제 5 (⭐⭐⭐⭐⭐) — 체이닝 종합
// 조건:
// 1) category === "book"
// 2) price 오름차순 정렬
// 3) 상위 2개의 title만 배열로 반환
// --------------------------------------------------

const items = [
  { title: "JS 기초", category: "book", price: 18000 },
  { title: "노트북", category: "device", price: 1200000 },
  { title: "알고리즘", category: "book", price: 22000 },
  { title: "HTML/CSS", category: "book", price: 15000 },
  { title: "마우스", category: "device", price: 30000 },
];

// 👉 코드 작성
let result5 = items
    .filter(item => item.category === "book")
    .sort((a, b) => a.price - b.price)
    .slice(0, 2)
    .map(item => item.title);

console.log(result5);
// 출력값: ["HTML/CSS", "JS 기초"]
