// ==================================================
// 🔥 JavaScript 고난이도 문제
// 날짜: 12/12
// 풀이 ❌ / 문제만 / 출력값 명시
// ==================================================



// --------------------------------------------------
// 문제 1 — 조건 누적 + 상태 분기 ⭐⭐⭐⭐⭐
// --------------------------------------------------
// - isActive === true
// - purchases 총합 >= 50,000
// 조건을 만족하는 유저 이름 출력

const users = [
  { name: "민수", isActive: true,  purchases: [12000, 18000, 9000] },
  { name: "지연", isActive: false, purchases: [50000] },
  { name: "현우", isActive: true,  purchases: [20000, 15000, 18000] },
  { name: "수빈", isActive: true,  purchases: [10000, 9000] },
];

for (const user of users) {
    let purchase = [...user.purchases];
    let sum = 0;
    for(let i = 0; i < purchase.length; i++) {
        sum += purchase[i];
    }
    if(user.isActive === true && sum >= 50000) {
        console.log(user.name);
    }
}

// 출력값
// 현우



// --------------------------------------------------
// 문제 2 — 다중 조건 + 계산 기준 변경 ⭐⭐⭐⭐⭐
// --------------------------------------------------
// status === "완료"
// count >= 3 → price * count * 0.9
// count < 3  → price * count
// 전체 매출 총합 출력

const orders = [
  { product: "키위", price: 3000, count: 2, status: "완료" },
  { product: "딸기", price: 12000, count: 3, status: "완료" },
  { product: "수박", price: 18000, count: 1, status: "취소" },
  { product: "귤",  price: 5000,  count: 4, status: "완료" },
];

let total = 0;          // 누적 변수는 반복문 바깥 스코프에서 한 번만 초기화한다
for (const fruit of orders) {
    let result = 0;
    if(fruit.status === "완료") {
        if(fruit.count >= 3) {
            result = fruit.price * fruit.count * 0.9;
        } else if(fruit.count < 3) {
            result =  fruit.price * fruit.count;
        }
        total += result;
    }
}
console.log(total);

// 출력값
// 59400



// --------------------------------------------------
// 문제 3 — 평균 기준 + 조건 역추적 ⭐⭐⭐⭐⭐⭐
// --------------------------------------------------
// 각 학생 평균 계산
// 전체 평균보다 높은 학생 이름 출력

const students = [
  { name: "민지", scores: [80, 90, 85] },
  { name: "지훈", scores: [70, 75, 72] },
  { name: "서연", scores: [95, 92, 93] },
  { name: "현수", scores: [88, 86, 84] },
];

// 1) 학생별 평균을 구해서 배열에 저장
const avgs = [];
for (const student of students) {
  let sum = 0;
  // scores의 총합
  for (const s of student.scores) {
    sum += s;
  }
  const avg = sum / student.scores.length;
  avgs.push(avg);
}

// 2) 전체 평균(학생 평균들의 평균) 구하기
let totalAvgSum = 0;            // 전체 평균 값들의 총합
for (const a of avgs) {
  totalAvgSum += a;
}
const classAvg = totalAvgSum / avgs.length;

// 3) 전체 평균보다 높은 학생 출력
for (let i = 0; i < students.length; i++) {
  if (avgs[i] > classAvg) {
    console.log(students[i].name);
  }
}

// 출력값
// 서연
// 현수



// --------------------------------------------------
// 문제 4 — 누적 카운트 + 최댓값 판단 ⭐⭐⭐⭐⭐⭐
// --------------------------------------------------
// 가장 많이 득표한 후보 이름 출력 (동점 없음)

const votes = [
  "A", "B", "A", "C", "B",
  "A", "A", "C", "B", "B", "B"
];

// 1) 득표 카운트 객체 만들기
const count = {};
for (const v of votes) {
  count[v] = (count[v] || 0) + 1;       // 초기값 누적
}

// 2) 최댓값 후보 찾기
let winner = "";
let max = -Infinity;

for (const key in count) {
  if (count[key] > max) {
    max = count[key];
    winner = key;
  }
}

console.log(winner); // B

// 출력값
// B



// --------------------------------------------------
// 문제 5 — 상태 머신 사고 ⭐⭐⭐⭐⭐⭐
// --------------------------------------------------
// - login 이후
// - logout 이전
// 발생한 purchase만 유효
// 유효한 purchase 총 금액 출력

const logs = [
  { type: "login" },
  { type: "purchase", price: 12000 },
  { type: "purchase", price: 8000 },
  { type: "logout" },
  { type: "purchase", price: 5000 },
  { type: "login" },
  { type: "purchase", price: 20000 },
];

let isLoggedIn = false;
let total1 = 0;

for (const log of logs) {
  if (log.type === "login") {
    isLoggedIn = true;
    continue;
  }

  if (log.type === "logout") {
    isLoggedIn = false;
    continue;
  }

  if (log.type === "purchase" && isLoggedIn) {
    total1 += log.price;
  }
}

console.log(total1); // 40000


// 출력값
// 40000
