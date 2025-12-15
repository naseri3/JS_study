// ===============================================
// 📌 12/15 JS 문제 — 반복문 + 체이닝 (⭐⭐⭐⭐ ~ ⭐⭐⭐⭐⭐)
// ===============================================


// -----------------------------------------------
// 문제 1 (⭐⭐⭐⭐)
// -----------------------------------------------
// orders 배열에서
// - status가 "완료" 이고
// - count가 2개 이상인 주문의
// 👉 총 금액(price * count)의 합계를 출력하세요.
//
// ❗ 조건
// - 반복문(for 또는 for...of) 사용
// - filter / map 사용 ❌

const orders = [
  { product: "사과", price: 3000, count: 3, status: "완료" },
  { product: "배", price: 5000, count: 1, status: "대기" },
  { product: "포도", price: 7000, count: 2, status: "완료" },
  { product: "귤", price: 2000, count: 5, status: "완료" }
];

let total = 0;              // 합 저장하는 변수
let expressions = [];       // 수식 저장하는 배열
for (const fruit of orders) {
    if(fruit.status === "완료" && fruit.count >= 2) {
        total += fruit.price * fruit.count;
        expressions.push(`${fruit.price}*${fruit.count}`);
    }
}
console.log(`${expressions.join(" + ")} = ${total}`);

// 출력 예시
// 3000*3 + 7000*2 + 2000*5 = 33000



// -----------------------------------------------
// 문제 2 (⭐⭐⭐⭐)
// -----------------------------------------------
// users 배열에서
// - age가 30 이상인 사람들의
// 👉 이름(name)만 배열로 만들어 출력하세요.
//
// ❗ 조건
// - filter + map 체이닝 사용
// - for문 사용 ❌

const users = [
  { name: "민수", age: 28 },
  { name: "지연", age: 34 },
  { name: "철수", age: 41 },
  { name: "영희", age: 25 }
];
let result = users.filter(user => user.age >= 30).map(user => user.name);
console.log(result);

// 출력 예시
// ["지연", "철수"]



// -----------------------------------------------
// 문제 3 (⭐⭐⭐⭐⭐)
// -----------------------------------------------
// logs 배열은 사용자의 행동 기록입니다.
// - login 이후
// - logout 이전
// 에 발생한 action이 "view" 인 것만 유효합니다.
//
// 👉 유효한 view의 개수를 출력하세요.
//
// ❗ 조건
// - 반복문 사용
// - 상태 변수 사용 (예: isLoggedIn)

const logs = [
  { type: "login" },
  { type: "view" },
  { type: "view" },
  { type: "logout" },
  { type: "view" },
  { type: "login" },
  { type: "view" }
];

let isLoggedIn = false;  // 처음엔 로그인 안 한 상태
let viewCount = 0;

for(let i=0; i<logs.length; i++) {
    if(logs[i].type === "login") {
        isLoggedIn = true;
        continue;
    }
    if(logs[i].type === "logout") {
        isLoggedIn = false;
        continue;
    }
    if(logs[i].type === "view" && isLoggedIn) {
        viewCount++;
    }
}
console.log(viewCount);
// 출력 예시
// 3



// -----------------------------------------------
// 문제 4 (⭐⭐⭐⭐)
// -----------------------------------------------
// products 배열에서
// - category가 "food" 이고
// - price가 10000 이하인 상품만 골라
// 👉 상품 이름(name)만 배열로 출력하세요.
//
// ❗ 조건
// - filter → map 체이닝 사용

const products = [
  { name: "라면", category: "food", price: 4000 },
  { name: "치킨", category: "food", price: 18000 },
  { name: "콜라", category: "drink", price: 3000 },
  { name: "김밥", category: "food", price: 6000 }
];

let result1 = products.filter(food => food.category === "food" && food.price <= 10000).map(food => food.name);
console.log(result1);

// 출력 예시
// ["라면", "김밥"]



// -----------------------------------------------
// 문제 5 (⭐⭐⭐⭐⭐)
// -----------------------------------------------
// scores 배열에서
// - score가 70점 이상인 학생만 대상으로
// 👉 평균 점수를 출력하세요.
//
// ❗ 조건
// - filter + reduce 사용
// - 평균 = (총합 / 인원 수)

const scores = [
  { name: "A", score: 65 },
  { name: "B", score: 82 },
  { name: "C", score: 91 },
  { name: "D", score: 70 }
];

// 1️⃣ 70점 이상 필터링
const filteredScores = scores.filter(item => item.score >= 70);

// 2️⃣ 점수만 뽑아서 배열로 만들기 (출력용)
const scoreList = filteredScores.map(item => item.score);

// 3️⃣ 총합 계산
const total1 = scoreList.reduce((sum, score) => sum + score, 0);

// 4️⃣ 평균 계산
const average = total1 / scoreList.length;

// 5️⃣ 출력용 문자열 만들기
const expression = `(${scoreList.join(" + ")}) / ${scoreList.length}`;

console.log(`${expression} = ${average}`);


// 출력 예시
// (82 + 91 + 70) / 3 = 81



// ===============================================
// 📌 JS 문제 — 반복문 + 체이닝 (난이도 유지)
// ===============================================


// -----------------------------------------------
// 문제 1 (⭐⭐⭐⭐)
// -----------------------------------------------
// cart 배열에서
// - quantity가 2개 이상인 상품만 골라
// 👉 총 금액(price * quantity)의 합계를 출력하세요.
//
// ❗ 조건
// - for 또는 for...of 사용
// - filter / map ❌

const cart = [
  { name: "노트북", price: 1000000, quantity: 1 },
  { name: "마우스", price: 30000, quantity: 2 },
  { name: "키보드", price: 80000, quantity: 3 }
];

let sum1 = 0;
let official = [];
for (const product of cart) {
    if(product.quantity >= 2) {
        sum1 += product.price * product.quantity;
        official.push(`${product.price}*${product.quantity}`);
    }
}
console.log(`${official.join(" + ")} = ${sum1}`);


// 출력 예시
// 30000*2 + 80000*3 = 300000



// -----------------------------------------------
// 문제 2 (⭐⭐⭐⭐)
// -----------------------------------------------
// members 배열에서
// - role이 "admin" 인 사람의
// 👉 email만 배열로 만들어 출력하세요.
//
// ❗ 조건
// - filter + map 사용

const members = [
  { name: "철수", role: "user", email: "a@test.com" },
  { name: "영희", role: "admin", email: "b@test.com" },
  { name: "민수", role: "admin", email: "c@test.com" }
];

let result2 = members.filter(user => user.role === "admin").map(mail => mail.email);
console.log(result2);
// 출력 예시
// ["b@test.com", "c@test.com"]



// -----------------------------------------------
// 문제 3 (⭐⭐⭐⭐⭐)
// -----------------------------------------------
// events 배열은 사용자 행동 로그입니다.
// - start 이후
// - end 이전
// 에 발생한 "click" 이벤트만 유효합니다.
//
// 👉 유효한 click 개수를 출력하세요.
//
// ❗ 조건
// - 반복문 사용
// - 상태 변수 사용

const events = [
  { type: "start" },
  { type: "click" },
  { type: "click" },
  { type: "end" },
  { type: "click" },
  { type: "start" },
  { type: "click" }
];

let isloginHistory = false;
let loginCount = 0;

for(let i=0; i<events.length; i++) {
    if(events[i].type === "start") {
        isloginHistory = true;
        continue;
    }
    if(events[i].type === "end") {
        isloginHistory = false;
        continue;
    }
    if(events[i].type === "click" && isloginHistory) {
        loginCount++;
    }
}
console.log(loginCount);

// 출력 예시
// 3



// -----------------------------------------------
// 문제 4 (⭐⭐⭐⭐⭐)
// -----------------------------------------------
// orders 배열에서
// - status가 "완료" 인 주문만 대상으로
// 👉 평균 주문 금액(price * count)을 출력하세요.
//
// ❗ 조건
// - filter + reduce 사용

const orders2 = [
  { price: 12000, count: 2, status: "완료" },
  { price: 8000, count: 1, status: "취소" },
  { price: 5000, count: 3, status: "완료" }
];

let condition1 = orders2.filter(item => item.status === "완료");

const total2 = condition1.reduce((sum, item) => {
  return sum + item.price * item.count;
}, 0);

// 평균
const average1 = total2 / condition1.length;

// 출력용 문자열
const expression1 = condition1
  .map(item => `${item.price}*${item.count}`)
  .join(" + ");

console.log(`(${expression1}) / ${condition1.length} = ${average1}`);


// 출력 예시
// (12000*2 + 5000*3) / 2 = 19500
