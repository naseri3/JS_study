// ==================================================
// 📌 JS 연습 문제 세트 — 중급 ~ 중급+
// ==================================================



// --------------------------------------------------
// 문제 1 — 조건 필터링 + 누적 계산 ⭐⭐⭐
// --------------------------------------------------
// - status가 "paid"인 주문만
// - price * count 금액의 총합 출력
// - for문 사용 (filter ❌)

console.log("===== 문제 1 =====");

const orders = [
  { item: "키위", price: 3000, count: 3, status: "paid" },
  { item: "딸기", price: 12000, count: 1, status: "pending" },
  { item: "수박", price: 18000, count: 2, status: "paid" },
  { item: "귤", price: 5000, count: 4, status: "paid" }
];

// 👉 코드 작성
let sum = 0;
for(let i=0; i<orders.length; i++) {
    if(orders[i].status === "paid") {
        sum += orders[i].price * orders[i].count;
    }
}
console.log(sum);
// 출력 예시: 42000



// --------------------------------------------------
// 문제 2 — 객체 누적 패턴 ⭐⭐⭐⭐
// --------------------------------------------------
// - 상품별 총 판매 금액 객체로 정리
// - (obj[key] || 0) 패턴 사용

console.log("\n===== 문제 2 =====");

const sales = [
  { item: "키위", price: 3000, count: 3 },
  { item: "수박", price: 18000, count: 2 },
  { item: "귤", price: 5000, count: 4 }
];

// 👉 코드 작성
let result = {};
for (const sale of sales) {
  const item = sale.item;                       // result 객체에서 사용할 key를 정하기 위해서 [어디에 넣을지 (key)]
    // sale.item === "키위"             => result["키위"]
    // sale.item === "수박"             => result["수박"]
    // sale.item === "귤"               => result["귤"]

  const total = sale.price * sale.count;        // 이번 데이터 하나가 얼마짜리인지 계산 [얼마를 넣을지 (value)]
    // 키위: 3000 * 3 = 9000
    // 수박: 18000 * 2 = 36000
    // 귤: 5000 * 4 = 20000

  result[item] = (result[item] || 0) + total;   // 이 줄은 객체 누적 공식
}
console.log(result);

// 출력 예시:
// { 키위: 9000, 수박: 36000, 귤: 20000 }



// --------------------------------------------------
// 문제 3 — 상태 머신 사고 ⭐⭐⭐⭐⭐
// --------------------------------------------------
// - login 이후 logout 이전 view만 유효
// - 유효한 view 총 개수 출력

console.log("\n===== 문제 3 =====");

const logs = [
  { type: "view" },
  { type: "login" },
  { type: "view" },
  { type: "view" },
  { type: "logout" },
  { type: "view" },
  { type: "login" },
  { type: "view" }
];

// 👉 코드 작성
let isLogin = false;
let count = 0;
for(let i=0; i<logs.length; i++) {
    if(logs[i].type === "login") {
        isLogin = true;
        continue;
    }
    if(logs[i].type === "logout") {
        isLogin = false;
        continue;
    }
    if(logs[i].type === "view" && isLogin) {
        count++;
    }
}
console.log(count);
// 출력 예시: 3



// --------------------------------------------------
// 문제 4 — 체이닝 (filter → map → reduce) ⭐⭐⭐⭐⭐
// --------------------------------------------------
// - age >= 20
// - role === "user"
// - score 평균 출력

console.log("\n===== 문제 4 =====");

const users = [
  { name: "민수", age: 22, role: "user", score: 80 },
  { name: "지영", age: 19, role: "user", score: 90 },
  { name: "철수", age: 30, role: "admin", score: 70 },
  { name: "수진", age: 25, role: "user", score: 100 }
];

// 👉 코드 작성
let filtered = users.filter(user => user.age >= 20 && user.role === "user");

let scores = filtered.map(user => user.score);

let total = scores.reduce((acc, cur) => acc + cur, 0);

let avg = total / scores.length;
console.log(avg);
// 출력 예시: 90


// ==================================================
// 📌 문제 — 상태 머신 + 누적 결합 ⭐⭐⭐⭐⭐⭐
// ==================================================
// 요구사항
// - login 이후 logout 이전만 "활성 상태"
// - 활성 상태에서 발생한 purchase만 유효
// - 동일 상품은 금액 누적
// - 최종 결과를 객체로 출력
//
// ⚠️ 조건
// - for문 사용
// - filter / reduce 사용 ❌
// - 상태 변수(boolean) 반드시 사용

console.log("===== 상태 머신 + 누적 문제 =====");

const logs1 = [
  { type: "purchase", item: "키위", price: 3000, count: 2 },
  { type: "login" },
  { type: "purchase", item: "키위", price: 3000, count: 1 },
  { type: "purchase", item: "수박", price: 18000, count: 1 },
  { type: "logout" },
  { type: "purchase", item: "귤", price: 5000, count: 3 },
  { type: "login" },
  { type: "purchase", item: "수박", price: 18000, count: 2 }
];

// 👉 코드 작성
let result1 = {};
let isLoggedIn = false;

for(let i = 0; i < logs1.length; i++) {
    if(logs1[i].type === "login") {
        isLoggedIn = true;
        continue;
    }
    if(logs1[i].type === "logout") {
        isLoggedIn = false;
        continue;
    }
    if(logs1[i].type === "purchase" && isLoggedIn) {
        // 동일 상품은 금액 누적
        const item = logs1[i].item;                         // key값 위치
        const amount = logs1[i].price * logs1[i].count;     // value값 위치
        result1[item] = (result1[item] || 0) + amount;      // 누적
    }
}
console.log(result1);
// 출력 예시
// {
//   키위: 3000,
//   수박: 54000
// }

// ==================================================
// 📌 문제 — 상태 머신 + 조건 누적 (⭐⭐⭐⭐⭐)
// ==================================================
// 요구사항
// - "open" 이후 "close" 이전만 활성 상태
// - 활성 상태에서 발생한 action === "add" 만 유효
// - category 기준으로 amount 누적
// - 최종 결과 객체 출력
//
// ⚠️ 조건
// - for문 사용
// - filter / map / reduce 사용 ❌
// - 상태 변수(boolean) 사용 필수

console.log("===== ⭐⭐⭐⭐⭐ 문제 =====");

const events = [
  { type: "add", category: "A", amount: 1000 },
  { type: "open" },
  { type: "add", category: "A", amount: 2000 },
  { type: "add", category: "B", amount: 3000 },
  { type: "close" },
  { type: "add", category: "A", amount: 4000 },
  { type: "open" },
  { type: "add", category: "B", amount: 5000 },
  { type: "add", category: "A", amount: 1000 }
];

// 👉 코드 작성
let isOpen = false;
let result2 = {};
for(let i = 0; i < events.length; i++) {
    if(events[i].type === "open") {
        isOpen = true;
        continue;
    }
    if(events[i].type === "close") {
        isOpen = false;
        continue;
    }
    if(events[i].type === "add" && isOpen) {
        const key  = events[i].category;
        const value = events[i].amount;
        result2[key] = (result2[key] || 0) + value;
    }
}
console.log(result2);
// 출력 예시
// {
//   A: 3000,
//   B: 8000
// }

// ==================================================
// 📌 문제 — 상태 + 조건 + 객체 누적 (⭐⭐⭐⭐⭐)
// ==================================================
// 요구사항
// - "start" 이후 "end" 이전만 활성 상태
// - 활성 상태에서 status === "success" 만 유효
// - service 기준으로 duration 누적
// - 최종 결과 객체 출력
//
// ⚠️ 조건
// - for문 사용
// - filter / map / reduce 사용 ❌
// - 상태 변수(boolean) 필수

console.log("===== ⭐⭐⭐⭐⭐ 문제 =====");

const logs2 = [
  { type: "success", service: "auth", duration: 120 },
  { type: "start" },
  { type: "success", service: "auth", duration: 80 },
  { type: "fail", service: "payment", duration: 200 },
  { type: "success", service: "payment", duration: 300 },
  { type: "end" },
  { type: "success", service: "auth", duration: 50 },
  { type: "start" },
  { type: "success", service: "payment", duration: 400 }
];

// 👉 코드 작성
let isLog = false;
let result3 = {};
for(let i = 0; i < logs2.length; i++) {
    if(logs2[i].type === "start") {
        isLog = true;
        continue;
    }
    if(logs2[i].type === "end") {
        isLog = false;
        continue;
    }
    if(logs2[i].type === "success" && isLog) {
        let key = logs2[i].service;
        let value = logs2[i].duration;
        result3[key] = (result3[key] || 0) + value;
    }
}
console.log(result3);

// 출력 예시
// {
//   auth: 80,
//   payment: 700
// }
