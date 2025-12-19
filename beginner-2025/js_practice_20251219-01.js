// ==================================================
// 📘 오늘의 JS 문제 — reduce / 상태 / 집계 패턴
// 난이도 ⭐⭐⭐⭐ ~ ⭐⭐⭐⭐⭐
// 풀이 X / 문제만
// ==================================================


// --------------------------------------------------
// 문제 1 — 상태별 카운트 (⭐⭐⭐⭐)
// --------------------------------------------------
// logs 배열에서 type별 개수를 객체로 출력하세요.

const logs = [
  { type: "login" },
  { type: "logout" },
  { type: "login" },
  { type: "purchase" },
  { type: "login" },
  { type: "purchase" },
  { type: "purchase" }
];
let resultLog = logs.reduce((acc, cur) => {
    acc[cur.type] = (acc[cur.type] || 0) + 1;
    return acc;
}, {});

console.log(resultLog);

// 출력값
// {
//   login: 3,
//   logout: 1,
//   purchase: 3
// }


// --------------------------------------------------
// 문제 2 — 조건 필터 + 합계 (⭐⭐⭐⭐)
// --------------------------------------------------
// status가 "done" 이고
// price * count가 20,000 이상인 주문의
// 총 금액 합계를 출력하세요.

const orders = [
  { item: "키위", price: 5000, count: 2, status: "done" },
  { item: "사과", price: 3000, count: 3, status: "done" },
  { item: "수박", price: 18000, count: 2, status: "pending" },
  { item: "망고", price: 12000, count: 2, status: "done" }
];

let resultSum = orders
    .filter(item => item.status === "done" && item.price * item.count >= 20000)
    .reduce((acc, cur) => acc + cur.price * cur.count, 0);
console.log(resultSum);

// 출력값
// 24000


// --------------------------------------------------
// 문제 3 — 카테고리별 합계 (⭐⭐⭐⭐)
// --------------------------------------------------
// payments 배열에서
// category별 amount 총합을 객체로 출력하세요.

const payments = [
  { category: "food", amount: 12000 },
  { category: "transport", amount: 3000 },
  { category: "food", amount: 8000 },
  { category: "shopping", amount: 50000 },
  { category: "transport", amount: 2000 }
];

let resultAmount = payments.reduce((acc, cur) => {
    acc[cur.category] = (acc[cur.category] || 0) + cur.amount;
    return acc;
}, {});

console.log(resultAmount);

// 출력값
// {
//   food: 20000,
//   transport: 5000,
//   shopping: 50000
// }


// --------------------------------------------------
// 문제 4 — 로그인 상태 유지 (⭐⭐⭐⭐⭐)
// --------------------------------------------------
// login 이후
// logout 이전에 발생한
// purchase 금액의 총합을 출력하세요.

const logs2 = [
  { type: "login" },
  { type: "purchase", price: 10000 },
  { type: "purchase", price: 5000 },
  { type: "logout" },
  { type: "purchase", price: 7000 },
  { type: "login" },
  { type: "purchase", price: 20000 }
];

let isLoggined = false;
let total = 0;
for(let i = 0; i < logs2.length; i++) {
    if(logs2[i].type === "login") {
        isLoggined = true;
        continue;
    }
    if(logs2[i].type === "logout") {
        isLoggined = false;
        continue;
    }
    if(logs2[i].type === "purchase" && isLoggined) {
        total += logs2[i].price;
    }
}
console.log(total);

// 출력값
// 35000


// --------------------------------------------------
// 문제 5 — 최고 소비 카테고리 (⭐⭐⭐⭐⭐)
// --------------------------------------------------
// 카테고리별 합계를 구한 뒤
// 가장 많이 소비한 카테고리 이름만 출력하세요.

const expenses = [
  { category: "food", amount: 15000 },
  { category: "travel", amount: 70000 },
  { category: "food", amount: 10000 },
  { category: "shopping", amount: 30000 },
  { category: "travel", amount: 20000 }
];

// 1️⃣ 카테고리별 합계 구하기
const sumByCategory = expenses.reduce((acc, cur) => {
  acc[cur.category] = (acc[cur.category] || 0) + cur.amount;
  return acc;
}, {});

// 2️⃣ 가장 많이 소비한 카테고리 찾기
const maxCategory = Object.entries(sumByCategory).reduce(
  (max, cur) => (cur[1] > max[1] ? cur : max)
)[0];
// Object.entries(obj) => 객체를 배열로 바꿔줌
// [0] → key (카테고리 이름) / [1] → value (금액)
console.log(maxCategory);

// 출력값
// "travel"



// ==================================================
// 📘 JS 연습 문제 세트 (reduce / 상태 / 체이닝)
// 난이도 ⭐⭐⭐⭐ ~ ⭐⭐⭐⭐⭐
// 풀이 X / 문제만
// ==================================================


// --------------------------------------------------
// 문제 1 (⭐⭐⭐⭐) — reduce (조건부 합계)
// 조건:
// - status === "success"
// - amount 합계 출력
// --------------------------------------------------

const transactions = [
  { status: "success", amount: 12000 },
  { status: "fail", amount: 8000 },
  { status: "success", amount: 3000 },
  { status: "success", amount: 7000 },
  { status: "fail", amount: 5000 },
];

// 👉 코드 작성
let result = transactions
    .filter(item => item.status === "success")
    .reduce((acc, cur) => acc + cur.amount, 0);

console.log(result);
// 출력값: 22000



// --------------------------------------------------
// 문제 2 (⭐⭐⭐⭐) — reduce (group by 집계)
// 조건:
// - category별 count 총합 객체로 출력
// --------------------------------------------------

const sales = [
  { category: "book", count: 2 },
  { category: "food", count: 5 },
  { category: "book", count: 3 },
  { category: "toy", count: 1 },
  { category: "food", count: 2 },
];

// 👉 코드 작성
let categoryCount = sales.reduce((acc, cur) => {
    acc[cur.category] = (acc[cur.category] || 0) +cur.count;
    return acc;
}, {});

console.log(categoryCount);

// 출력값:
// {
//   book: 5,
//   food: 7,
//   toy: 1
// }



// --------------------------------------------------
// 문제 3 (⭐⭐⭐⭐⭐) — 상태 머신 사고
// 조건:
// - start 이후
// - end 이전
// 발생한 value만 누적
// --------------------------------------------------

const logs3 = [
  { type: "value", value: 100 },
  { type: "start" },
  { type: "value", value: 300 },
  { type: "value", value: 200 },
  { type: "end" },
  { type: "value", value: 500 },
  { type: "start" },
  { type: "value", value: 400 },
];

// 👉 코드 작성
let isLogs = false;
let sum = 0;
for(let i = 0; i < logs3.length; i++) {
    if(logs3[i].type === "start") {
        isLogs = true;
        continue;
    }
    if(logs3[i].type === "end") {
        isLogs = false;
        continue;
    }
    if(logs3[i].type === "value" && isLogs) {
        sum += logs3[i].value;
    }
}
console.log(sum);

// 출력값: 900



// --------------------------------------------------
// 문제 4 (⭐⭐⭐⭐) — 체이닝 (filter → sort → map)
// 조건:
// 1) role === "designer"
// 2) score 내림차순 정렬
// 3) name만 배열로 반환
// --------------------------------------------------

const members = [
  { name: "지민", role: "designer", score: 88 },
  { name: "현우", role: "developer", score: 92 },
  { name: "서연", role: "designer", score: 95 },
  { name: "민수", role: "designer", score: 80 },
];

// 👉 코드 작성
let scored = members
    .filter(item => item.role === "designer")
    .sort((a, b) => b.score - a.score)
    .map(itme => itme.name);

console.log(scored);

// 출력값: ["서연", "지민", "민수"]



// --------------------------------------------------
// 문제 5 (⭐⭐⭐⭐⭐) — reduce + Object.entries
// 조건:
// - type별 amount 총합 구하기
// - 가장 큰 총합을 가진 type 이름만 출력
// --------------------------------------------------

const payments1 = [
  { type: "card", amount: 12000 },
  { type: "cash", amount: 5000 },
  { type: "card", amount: 18000 },
  { type: "point", amount: 7000 },
  { type: "cash", amount: 9000 },
];

// 👉 코드 작성
const sumByType = payments1.reduce((acc, cur) => {
    acc[cur.type] = (acc[cur.type] || 0) + cur.amount;
    return acc;
}, {});

const maxType = Object.entries(sumByType).reduce(
    (max, cur) => (cur[1] > max[1] ? cur : max)
)[0];
// Object.entries(sumByType) => 배열 sumByType를 객체로 변경
// .reduce((max, cur) => (cur[1] > max[1] ? cur : max))[0];
// ㄴ 배열을 돌면서 값(index 1)이 더 큰 [key, value]를 선택하고, 최종적으로 그 key(index 0)를 반환한다.
console.log(maxType);
// 출력값: "card"



// ==================================================
// 📘 JS 연습 문제 세트 2
// 주제: reduce / 상태 / 체이닝
// 난이도 ⭐⭐⭐⭐ ~ ⭐⭐⭐⭐⭐
// 풀이 X / 문제만
// ==================================================


// --------------------------------------------------
// 문제 1 (⭐⭐⭐⭐) — reduce (조건부 합계)
// 조건:
// - type === "income" 만
// - amount 총합 출력
// --------------------------------------------------

const records = [
  { type: "income", amount: 12000 },
  { type: "expense", amount: 5000 },
  { type: "income", amount: 8000 },
  { type: "income", amount: 3000 },
  { type: "expense", amount: 4000 },
];

// 👉 코드 작성
let result1 = records
    .filter(item => item.type === "income")
    .reduce((acc, cur) => acc + cur.amount, 0);

console.log(result1);

// 출력값: 23000



// --------------------------------------------------
// 문제 2 (⭐⭐⭐⭐) — reduce (group by 집계)
// 조건:
// - role별 인원 수 객체로 출력
// --------------------------------------------------

const users = [
  { name: "민지", role: "frontend" },
  { name: "현수", role: "backend" },
  { name: "서준", role: "frontend" },
  { name: "지우", role: "frontend" },
  { name: "도윤", role: "backend" },
];

// 👉 코드 작성
let userResult = users.reduce((acc, cur) => {
    acc[cur.role] = (acc[cur.role] || 0) + 1;
    return acc;
}, {});
console.log(userResult);

// 출력값:
// {
//   frontend: 3,
//   backend: 2
// }



// --------------------------------------------------
// 문제 3 (⭐⭐⭐⭐⭐) — 상태 머신 사고
// 조건:
// - open 이후
// - close 이전
// 발생한 score만 합산
// --------------------------------------------------

const events = [
  { type: "score", score: 100 },
  { type: "open" },
  { type: "score", score: 300 },
  { type: "score", score: 200 },
  { type: "close" },
  { type: "score", score: 500 },
  { type: "open" },
  { type: "score", score: 400 },
];

// 👉 코드 작성
let isEvents = false;
let scoreTotal = 0;
for(let i = 0; i < events.length; i++) {
    if (events[i].type === "open") isEvents = true;
    if (events[i].type === "close") isEvents = false;
    if(events[i].type === "score" && isEvents) {
        scoreTotal += events[i].score;
    }
}
console.log(scoreTotal);

// 출력값: 900



// --------------------------------------------------
// 문제 4 (⭐⭐⭐⭐) — 체이닝 (filter → map)
// 조건:
// - stock >= 3
// - price * stock >= 15000
// - 결과: "상품명(총액)" 문자열 배열
// --------------------------------------------------

const products = [
  { name: "사과", price: 3000, stock: 5 },
  { name: "딸기", price: 12000, stock: 1 },
  { name: "수박", price: 18000, stock: 2 },
  { name: "키위", price: 5000, stock: 4 },
];

// 👉 코드 작성
let fruit = products
    .filter(item => item.stock >= 3 && item.price * item.stock >= 15000)
    .map(item => `${item.name}(${item.price * item.stock})`);

console.log(fruit);
// 출력값:
// ["사과(15000)", "키위(20000)"]



// --------------------------------------------------
// 문제 5 (⭐⭐⭐⭐⭐) — reduce + Object.entries
// 조건:
// - category별 amount 합계
// - 가장 큰 합계를 가진 category 이름 출력
// --------------------------------------------------

const expenses1 = [
  { category: "food", amount: 20000 },
  { category: "travel", amount: 50000 },
  { category: "food", amount: 15000 },
  { category: "shopping", amount: 30000 },
  { category: "travel", amount: 10000 },
];

// 👉 코드 작성
const sumAmount = expenses1.reduce((acc, cur) => {
    acc[cur.category] = (acc[cur.category] || 0) + cur.amount;
    return acc;
}, {});

const maxItem = Object.entries(sumAmount).reduce(
    (max, cur) => (cur[1] > max[1] ? cur : max)
)[0];
console.log(maxItem);

// 출력값: "travel"



// ==================================================
// 📘 JS 연습 문제 세트 3
// 주제: reduce / 상태 / 체이닝
// 난이도 ⭐⭐⭐⭐ ~ ⭐⭐⭐⭐⭐
// 풀이 X / 문제만
// ==================================================


// --------------------------------------------------
// 문제 1 (⭐⭐⭐⭐) — reduce (조건부 합계)
// 조건:
// - status === "paid"
// - price * count 총합 출력
// --------------------------------------------------

const orders1 = [
  { item: "사과", price: 3000, count: 5, status: "paid" },
  { item: "딸기", price: 12000, count: 1, status: "pending" },
  { item: "수박", price: 18000, count: 2, status: "paid" },
  { item: "귤", price: 5000, count: 2, status: "paid" },
];

// 👉 코드 작성
let resultA = orders1
    .filter(item => item.status === "paid")
    .reduce((acc, cur) => acc + cur.price * cur.count, 0);

console.log(resultA);

// 출력값: 76000



// --------------------------------------------------
// 문제 2 (⭐⭐⭐⭐) — reduce (group by 집계)
// 조건:
// - level별 사용자 수 객체로 출력
// --------------------------------------------------

const users1 = [
  { name: "민지", level: "A" },
  { name: "현수", level: "B" },
  { name: "서준", level: "A" },
  { name: "지우", level: "C" },
  { name: "도윤", level: "B" },
  { name: "하린", level: "A" },
];

// 👉 코드 작성

let resultUser = users1.reduce((acc, cur) => {
    acc[cur.level] = (acc[cur.level] || 0) + 1;
    return acc;
}, {});
console.log(resultUser);

// 출력값:
// {
//   A: 3,
//   B: 2,
//   C: 1
// }



// --------------------------------------------------
// 문제 3 (⭐⭐⭐⭐⭐) — 상태 머신 사고
// 조건:
// - start 이후
// - stop 이전
// 발생한 value만 누적
// --------------------------------------------------

const logs4 = [
  { type: "value", value: 100 },
  { type: "start" },
  { type: "value", value: 300 },
  { type: "value", value: 200 },
  { type: "stop" },
  { type: "value", value: 500 },
  { type: "start" },
  { type: "value", value: 400 },
  { type: "stop" },
];

// 👉 코드 작성
let isLogin = false;
let totalValue = 0;
for(let i = 0; i < logs4.length; i++) {
    if(logs4[i].type === "start") isLogin = true;
    if(logs4[i].type === "stop") isLogin = false;
    if(logs4[i].type === "value" && isLogin) {
        totalValue += logs4[i].value;
    }
}
console.log(totalValue);

// 출력값: 900



// --------------------------------------------------
// 문제 4 (⭐⭐⭐⭐) — 체이닝 (filter → sort → map)
// 조건:
// 1) category === "book"
// 2) price * stock >= 20000
// 3) 총액 기준 내림차순 정렬
// 4) 결과: "상품명(총액)" 배열
// --------------------------------------------------

const products2 = [
  { name: "JS책", category: "book", price: 15000, stock: 2 },
  { name: "노트", category: "stationery", price: 3000, stock: 10 },
  { name: "알고리즘책", category: "book", price: 20000, stock: 1 },
  { name: "리액트책", category: "book", price: 25000, stock: 2 },
];

// 👉 코드 작성
let itemResult = products2
    .filter(item => item.category === "book" && (item.price * item.stock) >= 20000)
    .sort((a, b) => b.price * b.stock - a.price * a.stock)
    .splice(0, 2)
    .map(item => `${item.name}(${item.price * item.stock})`);

console.log(itemResult);
// 출력값:
// ["리액트책(50000)", "JS책(30000)"]



// --------------------------------------------------
// 문제 5 (⭐⭐⭐⭐⭐) — reduce + Object.entries
// 조건:
// - type별 amount 합계 객체 생성
// - 가장 큰 합계를 가진 type 이름 출력
// --------------------------------------------------

const payments2 = [
  { type: "card", amount: 15000 },
  { type: "cash", amount: 7000 },
  { type: "card", amount: 12000 },
  { type: "point", amount: 5000 },
  { type: "cash", amount: 9000 },
  { type: "card", amount: 8000 },
];

// 👉 코드 작성
let resultB = payments2.reduce((acc, cur) => {
    acc[cur.type] = (acc[cur.type] || 0) + cur.amount;
    return acc;
}, {});

let resultName = Object.entries(resultB).reduce(
    (max, cur) => (cur[1] > max[1] ? cur : max)
)[0];

console.log(resultName);

// 출력값: "card"



// ==================================================
// 📘 JS 연습 문제 세트 4
// 주제: reduce / 상태 / 체이닝
// 난이도 ⭐⭐⭐⭐ ~ ⭐⭐⭐⭐⭐
// 풀이 X / 문제만
// ==================================================


// --------------------------------------------------
// 문제 1 (⭐⭐⭐⭐) — reduce (조건부 합계)
// 조건:
// - status === "done"
// - amount 총합 출력
// --------------------------------------------------

const records3 = [
  { status: "done", amount: 12000 },
  { status: "pending", amount: 8000 },
  { status: "done", amount: 5000 },
  { status: "done", amount: 7000 },
  { status: "cancel", amount: 3000 },
];

// 👉 코드 작성
let total2 = records3
    .filter(item => item.status === "done")
    .reduce((acc, cur) => acc + cur.amount, 0);

console.log(total2);
// 출력값: 24000



// --------------------------------------------------
// 문제 2 (⭐⭐⭐⭐) — reduce (group by 집계)
// 조건:
// - department별 인원 수 객체로 출력
// --------------------------------------------------

const employees = [
  { name: "민지", department: "design" },
  { name: "현수", department: "dev" },
  { name: "서연", department: "design" },
  { name: "지우", department: "dev" },
  { name: "도윤", department: "dev" },
];

// 👉 코드 작성
let result2 = employees.reduce((acc, cur) => {
    acc[cur.department] = (acc[cur.department] || 0) +1;
    return acc;
}, {});

console.log(result2);
// 출력값:
// {
//   design: 2,
//   dev: 3
// }



// --------------------------------------------------
// 문제 3 (⭐⭐⭐⭐⭐) — 상태 머신 사고
// 조건:
// - on 이후
// - off 이전
// 발생한 score만 누적
// --------------------------------------------------

const events2 = [
  { type: "score", score: 100 },
  { type: "on" },
  { type: "score", score: 300 },
  { type: "score", score: 200 },
  { type: "off" },
  { type: "score", score: 500 },
  { type: "on" },
  { type: "score", score: 400 },
  { type: "off" },
];

// 👉 코드 작성
let isOnOff = false;
let sum1 = 0;
for(let i = 0; i < events2.length; i++) {
    if(events2[i].type === "on") isOnOff = true;
    if(events2[i].type === "off") isOnOff = false;
    if(events2[i].type === "score" && isOnOff) {
        sum1 += events2[i].score;
    }
}

console.log(sum1);
// 출력값: 900



// --------------------------------------------------
// 문제 4 (⭐⭐⭐⭐) — 체이닝 (filter → sort → map)
// 조건:
// 1) category === "fruit"
// 2) price * count >= 10000
// 3) 총액 기준 오름차순 정렬
// 4) 결과: "상품명(총액)" 배열
// --------------------------------------------------

const products3 = [
  { name: "사과", category: "fruit", price: 3000, count: 5 },
  { name: "딸기", category: "fruit", price: 12000, count: 1 },
  { name: "고구마", category: "vegi", price: 4000, count: 4 },
  { name: "귤", category: "fruit", price: 5000, count: 2 },
];

// 👉 코드 작성
let resultC = products3
    .filter(item => item.category === "fruit" && item.price * item.count >= 10000)
    .sort((a, b) => a.price*a.count - b.price*b.count)
    .map(item => `${item.name}(${item.price*item.count})`)

console.log(resultC);
// 출력값:
// ["사과(15000)", "귤(10000)", "딸기(12000)"]



// --------------------------------------------------
// 문제 5 (⭐⭐⭐⭐⭐) — reduce + Object.entries
// 조건:
// - category별 amount 합계 객체 생성
// - 가장 작은 합계를 가진 category 이름 출력
// --------------------------------------------------

const expenses3 = [
  { category: "food", amount: 20000 },
  { category: "travel", amount: 50000 },
  { category: "food", amount: 15000 },
  { category: "shopping", amount: 30000 },
  { category: "travel", amount: 10000 },
];

// 👉 코드 작성
let choice = expenses3.reduce((acc, cur) => {
    acc[cur.category] = (acc[cur.category] || 0) + 1;
    return acc;
}, {});

let maxChoice = Object.entries(choice).reduce(
    (max, cur) => max[1] < cur[1] ? max : cur
)[0];

console.log(maxChoice);

// 출력값: "shopping"

// ==================================================
// 📘 JS 연습 문제 세트 5
// 조건: 아래 문제들은
// 👉 네가 정리한 reduce 공식만 사용해서 풀 것
// (filter / map / Object.entries / reduce OK)
// ==================================================


// --------------------------------------------------
// 문제 1 (⭐⭐⭐⭐) — 총합 계산
// 조건:
// - status === "paid"
// - price * count 총합 출력
// (총합 계산 reduce 공식 사용)
// --------------------------------------------------

const orders3 = [
  { item: "사과", price: 3000, count: 5, status: "paid" },
  { item: "딸기", price: 12000, count: 1, status: "pending" },
  { item: "수박", price: 18000, count: 2, status: "paid" },
  { item: "귤", price: 5000, count: 2, status: "paid" },
];

// 👉 코드 작성
let result3 = orders3
    .filter(item => item.status === "paid")
    .reduce((acc, cur) => acc + cur.price * cur.count, 0);

console.log(result3);
// 출력값: 61000



// --------------------------------------------------
// 문제 2 (⭐⭐⭐⭐) — group by 집계 (개수)
// 조건:
// - type === "success" 만
// - service별 성공 횟수 객체로 출력
// (group by 집계 공식 사용)
// --------------------------------------------------

const logs5 = [
  { type: "success", service: "auth" },
  { type: "fail", service: "payment" },
  { type: "success", service: "auth" },
  { type: "success", service: "payment" },
  { type: "success", service: "search" },
  { type: "success", service: "auth" },
];

// 👉 코드 작성
let resultD = logs5
    .filter(item => item.type === "success")
    .reduce((acc, cur) => {
        acc[cur.service] = (acc[cur.service] || 0) + 1;
        return acc;
    }, {});

console.log(resultD);

// 출력값:
// {
//   auth: 3,
//   payment: 1,
//   search: 1
// }



// --------------------------------------------------
// 문제 3 (⭐⭐⭐⭐) — group by 합계
// 조건:
// - category별 amount 총합 객체로 출력
// (group by 합계 공식 사용)
// --------------------------------------------------

const expenses4 = [
  { category: "food", amount: 12000 },
  { category: "travel", amount: 50000 },
  { category: "food", amount: 8000 },
  { category: "shopping", amount: 30000 },
  { category: "travel", amount: 10000 },
];

// 👉 코드 작성
let result4 = expenses4.reduce((acc, cur) => {
    acc[cur.category] = (acc[cur.category] || 0) + cur.amount;
    return acc;
}, {});

console.log(result4);
// 출력값:
// {
//   food: 20000,
//   travel: 60000,
//   shopping: 30000
// }



// --------------------------------------------------
// 문제 4 (⭐⭐⭐⭐⭐) — 최대값
// 조건:
// - 가장 큰 amount 값 출력
// (최대값 reduce 공식 사용)
// --------------------------------------------------

const payments3 = [
  { amount: 12000 },
  { amount: 8000 },
  { amount: 15000 },
  { amount: 5000 },
];

// 👉 코드 작성
let result5 = payments3.reduce((acc, cur) => {
    return acc > cur.amount ? acc : cur.amount;
}, 0);
console.log(result5);
// 출력값: 15000



// --------------------------------------------------
// 문제 5 (⭐⭐⭐⭐⭐) — group by + 최대값
// 조건:
// 1) type별 amount 합계 객체 생성
// 2) 가장 큰 합계를 가진 type 이름 출력
// (group by 합계 + Object.entries 최대값 공식 사용)
// --------------------------------------------------

const payments5 = [
  { type: "card", amount: 12000 },
  { type: "cash", amount: 7000 },
  { type: "card", amount: 18000 },
  { type: "point", amount: 5000 },
  { type: "cash", amount: 9000 },
];

// 👉 코드 작성
let itemChoice = payments5.reduce((acc, cur) => {
    acc[cur.type] = (acc[cur.type] || 0) + cur.amount;
    return acc;
}, {});

let resultItem1 = Object.entries(itemChoice).reduce((max, cur) => 
    max[1] > cur[1] ? max : cur
)[0];

console.log(resultItem1);
// 출력값: "card"
