// ===============================================
// 📌 JS 문제 — 반복문 + 체이닝 (난이도 유지)
// ===============================================


// -----------------------------------------------
// 문제 1 (⭐⭐⭐⭐)
// -----------------------------------------------
// items 배열에서
// - stock이 5개 이상인 상품만 대상으로
// 👉 총 금액(price * stock)의 합계를 출력하세요.
//
// ❗ 조건
// - for 또는 for...of 사용
// - filter / map 사용 ❌

const items = [
  { name: "연필", price: 500, stock: 10 },
  { name: "공책", price: 2000, stock: 3 },
  { name: "지우개", price: 800, stock: 7 }
];

let total = 0;
let expressions = [];
for (const item of items) {
    if(item.stock >= 5) {
        total += item.price * item.stock;
        expressions.push(`${item.price}*${item.stock}`);
    }
}
console.log(`${expressions.join(' + ')} = ${total}`);

// 출력 예시
// 500*10 + 800*7 = 10600



// -----------------------------------------------
// 문제 2 (⭐⭐⭐⭐)
// -----------------------------------------------
// employees 배열에서
// - department가 "dev" 인 사람들의
// 👉 이름(name)만 배열로 만들어 출력하세요.
//
// ❗ 조건
// - filter + map 체이닝 사용
// - for문 사용 ❌

const employees = [
  { name: "민수", department: "design" },
  { name: "지연", department: "dev" },
  { name: "철수", department: "dev" },
  { name: "영희", department: "marketing" }
];

let users = employees.filter(user => user.department === "dev").map(user => user.name);
console.log(users);

// 출력 예시
// ["지연", "철수"]



// -----------------------------------------------
// 문제 3 (⭐⭐⭐⭐⭐)
// -----------------------------------------------
// records 배열은 사용자 행동 기록입니다.
// - enter 이후
// - exit 이전
// 에 발생한 action이 "click" 인 것만 유효합니다.
//
// 👉 유효한 click 개수를 출력하세요.
//
// ❗ 조건
// - 반복문 사용
// - 상태 변수 사용 (예: isInside)

const records = [
  { type: "enter" },
  { type: "click" },
  { type: "click" },
  { type: "exit" },
  { type: "click" },
  { type: "enter" },
  { type: "click" }
];

let isInside = false;
let count = 0;

for(let i = 0; i < records.length; i++) {
    if(records[i].type === "enter") {
        isInside = true;
        continue;
    }
    if(records[i].type === "exit") {
        isInside = false;
        continue;
    }
    if(records[i].type === "click" && isInside) {
        count++;
    }
}
console.log(count);

// 출력 예시
// 3



// -----------------------------------------------
// 문제 4 (⭐⭐⭐⭐⭐)
// -----------------------------------------------
// payments 배열에서
// - status가 "success" 인 결제만 대상으로
// 👉 평균 결제 금액(amount)을 출력하세요.
//
// ❗ 조건
// - filter + reduce 사용
// - 평균 = 총합 / 개수

const payments = [
  { amount: 15000, status: "success" },
  { amount: 8000, status: "fail" },
  { amount: 22000, status: "success" },
  { amount: 5000, status: "success" }
];

const filtered = payments.filter(item => item.status === "success");

const item = filtered.map(item => item.amount);
// console.log(item);

const sum = item.reduce((acc, cur) => acc + cur, 0)
// console.log(sum);

const avg = sum / item.length;

console.log(`(${item.join(' + ')}) / ${item.length} = ${avg}`);

// 출력 예시
// (15000 + 22000 + 5000) / 3 = 14000
