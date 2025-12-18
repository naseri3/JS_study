// ==================================================
// 📌 12-18 JS Practice
// ==================================================


// --------------------------------------------------
// 문제 1 — 문자열/배열 기본 ⭐
// --------------------------------------------------
// 공백을 제외한 글자 수 출력하기

const text = "I love JavaScript";

// 요구사항
// - 공백(" ") 제외
// - 힌트: split / join 또는 replace
const resultText = text.split(" ").join("").length;
console.log(resultText);
// 👉 출력값: 14



// --------------------------------------------------
// 문제 2 — for…of + 조건 ⭐⭐
// --------------------------------------------------
// 짝수만 골라 합 구하기

const nums = [3, 10, 7, 6, 2, 9, 12];

// 요구사항
// - for...of 사용
// - 짝수만 합산

let resultNum = 0;
for (const key of nums) {
    if(key % 2 === 0) {
        resultNum += key;
    }
}

console.log(resultNum);
// 👉 출력값: 30



// --------------------------------------------------
// 문제 3 — 객체 카운팅 패턴 ⭐⭐⭐
// --------------------------------------------------
// success 로그를 서비스별로 카운트

const logs = [
  { type: "success", service: "auth" },
  { type: "fail", service: "auth" },
  { type: "success", service: "payment" },
  { type: "success", service: "auth" },
  { type: "success", service: "payment" },
];

// 요구사항
// - success만 집계
// - 서비스별 카운트 객체로 출력
// - 힌트: (count[key] || 0) + 1

let resultLog = logs
    .filter(log => log.type === "success")
    .reduce((acc, cur) => {
        acc[cur.service] = (acc[cur.service] || 0) + 1;
        return acc;
    }, {});

console.log(resultLog);
// 👉 출력값: { auth: 2, payment: 2 }



// --------------------------------------------------
// 문제 4 — filter → map 체이닝 ⭐⭐⭐⭐
// --------------------------------------------------
// 조건에 맞는 상품 문자열 배열 만들기

const cart = [
  { name: "키위", price: 3000, count: 3, category: "fruit" },
  { name: "딸기", price: 12000, count: 1, category: "fruit" },
  { name: "고구마", price: 4000, count: 5, category: "vegi" },
  { name: "귤", price: 5000, count: 2, category: "fruit" },
];

// 요구사항
// - category === "fruit"
// - total(price * count) >= 10000
// - 결과 형식: "상품명(총액)"

let resultCart = cart
    .filter(item => item.category === "fruit" && item.price * item.count >= 10000)
    .map(item => `${item.name}(${item.price * item.count})`);

console.log(resultCart);
// 👉 출력값: ["딸기(12000)", "귤(10000)"]



// --------------------------------------------------
// 문제 5 — 상태 머신 사고 ⭐⭐⭐⭐⭐
// --------------------------------------------------
// 로그인 상태에서만 장바구니 금액 누적 + 결제 시 초기화

const events = [
  { type: "add", price: 5000 },
  { type: "login" },
  { type: "add", price: 12000 },
  { type: "add", price: 8000 },
  { type: "pay" },
  { type: "add", price: 7000 },
  { type: "add", price: 3000 },
  { type: "logout" },
  { type: "pay" },
  { type: "login" },
  { type: "add", price: 15000 },
  { type: "pay" },
];

// 규칙
// - login 이후 ~ logout 이전 add만 유효
// - pay 발생 시: 누적 금액 결제 + 누적값 0으로 초기화
// - 최종 출력: 모든 결제 금액의 합

let isLoggedIn = false;
let cartTotal = 0;   // 현재 장바구니 누적
let resultTotal = 0; // 모든 결제 금액 합

for (let i = 0; i < events.length; i++) {
  const event = events[i];

  if (event.type === "login") {
    isLoggedIn = true;
    continue;
  }

  if (event.type === "logout") {
    isLoggedIn = false;
    continue;
  }

  if (event.type === "add" && isLoggedIn) {
    cartTotal += event.price;
    continue;
  }

  if (event.type === "pay") {
    resultTotal += cartTotal;
    cartTotal = 0;
  }
}

console.log(resultTotal);
// 👉 출력값: 35000

// ==================================================
// 🌅 오전용 JS 문제 (⭐ ~ ⭐⭐⭐)
// ==================================================


// --------------------------------------------------
// 문제 1 — 배열 기본 ⭐
// --------------------------------------------------
// numbers 배열에서 5 이상인 숫자의 개수를 출력하세요.
// (힌트: for문 또는 filter)

const numbers = [1, 5, 3, 7, 9, 2];

let numCount1 = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] >= 5) {
    numCount1++;
  }
}

let numCount2 = numbers.filter(num => num >= 5).length;
console.log(numCount1);
console.log(numCount2);
// 👉 출력값: 3



// --------------------------------------------------
// 문제 2 — for…of + 조건 ⭐⭐
// --------------------------------------------------
// scores 배열에서
// 80점 이상인 점수만 합산하여 출력하세요.
// (힌트: for...of + if)

const scores = [75, 82, 90, 64, 88];

let totalScore = 0;
for (const value of scores) {
    if(value >= 80) {
        totalScore += value;
    }
}

console.log(totalScore);
// 👉 출력값: 260



// --------------------------------------------------
// 문제 3 — 객체 배열 접근 ⭐⭐⭐
// --------------------------------------------------
// users 배열에서
// role이 "admin"인 사람의 이름만 배열로 출력하세요.
// (힌트: filter → map 또는 for문)

const users = [
  { name: "민수", role: "user" },
  { name: "지영", role: "admin" },
  { name: "현우", role: "user" },
  { name: "수진", role: "admin" },
];

let useName = [];
for (const key of users) {
    if(key.role === "admin") {
        useName.push(key.name);
    }
}

let userAdmin = users.filter(user => user.role === "admin").map(user => user.name);

console.log(useName);
console.log(userAdmin);
// 👉 출력값: ["지영", "수진"]


// ==================================================
// 🌅 리셋 문제 세트 (힌트 없음)
// ==================================================


// --------------------------------------------------
// 문제 1 — 배열 순회 ⭐
// --------------------------------------------------
// numbers 배열에서 홀수만 골라
// 새로운 배열 oddNumbers를 만들고 출력하세요.

const numbers1 = [1, 4, 7, 10, 13, 16];

let numResult = numbers1.filter(num => num % 2 === 1);

// 출력 예시
// [1, 7, 13]

console.log(numResult);



// --------------------------------------------------
// 문제 2 — 조건 + 누적 ⭐⭐
// --------------------------------------------------
// prices 배열에서
// 5000원 이상인 가격만 합산하여 출력하세요.

const prices = [3000, 12000, 4500, 8000, 2000];

let result = prices
    .filter(num => num >= 5000)
    .reduce((acc, cur) => acc + cur, 0);

// 출력 예시
// 20000

console.log(result);



// --------------------------------------------------
// 문제 3 — 객체 배열 접근 ⭐⭐
// --------------------------------------------------
// products 배열에서
// sold가 true인 상품의 name만 배열로 만들어 출력하세요.

const products = [
  { name: "노트북", sold: true },
  { name: "마우스", sold: false },
  { name: "키보드", sold: true },
  { name: "모니터", sold: false },
];

let resultItem = products
    .filter(item => item.sold === true)
    .map(item => item.name);

// 출력 예시
// ["노트북", "키보드"]

console.log(resultItem);


// ==================================================
// 🚀 난이도 업 JS 문제 (⭐⭐⭐ ~ ⭐⭐⭐⭐)
// ==================================================


// --------------------------------------------------
// 문제 1 — 조건 분기 + 누적 ⭐⭐⭐
// --------------------------------------------------
// orders 배열에서
// status가 "done"인 주문만 대상으로
// price * count의 총합을 출력하세요.

const orders = [
  { product: "사과", price: 3000, count: 3, status: "done" },
  { product: "배", price: 5000, count: 1, status: "pending" },
  { product: "포도", price: 4000, count: 2, status: "done" },
];

let totalPrice = orders
    .filter(item => item.status === "done")
    .reduce((acc, cur) => acc + cur.price * cur.count, 0);

console.log(totalPrice);
// 👉 출력값: 17000



// --------------------------------------------------
// 문제 2 — 객체 카운팅 패턴 ⭐⭐⭐⭐
// --------------------------------------------------
// logs 배열에서
// type이 "error"인 로그만 대상으로
// service별 발생 횟수를 객체로 출력하세요.

const logs1 = [
  { type: "error", service: "auth" },
  { type: "success", service: "auth" },
  { type: "error", service: "payment" },
  { type: "error", service: "auth" },
  { type: "error", service: "payment" },
];

let resultLogs = logs1
    .filter(item => item.type === "error")
    .reduce((acc, item) => {
        acc[item.service] = (acc[item.service] || 0) + 1;
        return acc;
    }, {});

console.log(resultLogs);
// 👉 출력값: { auth: 2, payment: 2 }



// --------------------------------------------------
// 문제 3 — 조건 + 상태 개념 ⭐⭐⭐⭐
// --------------------------------------------------
// actions 배열에서
// active가 true인 동안 발생한 score만 누적하세요.
// active가 false가 되면 누적을 중단합니다.

const actions = [
  { type: "start" },
  { type: "score", value: 10 },
  { type: "score", value: 20 },
  { type: "stop" },
  { type: "score", value: 50 },
  { type: "start" },
  { type: "score", value: 30 },
];

let isAction = false;
let cumulative = 0;

for(let i = 0; i < actions.length; i++) {
    if(actions[i].type === "start") {
        isAction = true;
        continue;
    }
    if(actions[i].type === "stop") {
        isAction = false;
        continue;
    }
    if(actions[i].type === "score" && isAction) {
        cumulative += actions[i].value;
    } 
}

// 최종 출력
// 60

console.log(cumulative);

