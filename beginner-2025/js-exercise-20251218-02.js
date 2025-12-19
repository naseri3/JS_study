/*
    reduce 코드 정리

    // acc[기준값] = (acc[기준값] || 0) + 더할값
    // Object.entries(obj).reduce((a, b) => a[1] > b[1] ? a : b)[0]

    // 총합 계산
    .reduce((acc, cur) => acc + cur.price * cur.count, 0)

    // group by 집계
    .reduce((acc, cur) => {
        acc[cur.service] = (acc[cur.service] || 0) +1;
        return acc;
    }, {});

    // group by 합계
    .reduce((acc, cur) => {
        acc[cur.price] = (acc[cur.price] || 0) + cur.price;
        return acc;
    }, {});

    // 숫자 누적
    .reduce((acc, cur) => {
        return acc = acc + cur.amount;    
    }, 0);

    // 최대값
    .reduce((acc, cur) => {
        return acc > cur.amount ? acc : cur.amount;    
    }, 0);

    // 개수 세기
    .reduce((acc, cur) => acc + (cur.isActive ? 1 : 0), 0);


    // 객체 변환
    .reduce((acc, cur) => {
        acc[cur.id] = cur.name;
        return acc;    
    }, {});
    // 출력값 : {key:value, key:value, key:value}

    // 조건부 개수
    .reduce((acc, cur) => acc+ (cur.score >= 70 ? 1 : 0), 0);
*/

// ==================================================
// 📌 객체 카운팅 패턴 연습 (⭐⭐⭐⭐)
// ==================================================


// --------------------------------------------------
// 문제 1 — 카테고리별 개수 세기
// --------------------------------------------------
// items 배열에서
// category별로 몇 개씩 있는지 객체로 출력하세요.

const items = [
  { name: "사과", category: "fruit" },
  { name: "당근", category: "vegi" },
  { name: "바나나", category: "fruit" },
  { name: "오이", category: "vegi" },
  { name: "딸기", category: "fruit" },
];

let resultItem = items.reduce((acc, cur) => {
    acc[cur.category] = (acc[cur.category] || 0) +1;
    return acc;
}, {});

console.log(resultItem);
// 👉 출력값: { fruit: 3, vegi: 2 }



// --------------------------------------------------
// 문제 2 — 조건 + 객체 카운팅
// --------------------------------------------------
// records 배열에서
// result가 "fail"인 것만 대상으로
// type별 발생 횟수를 객체로 출력하세요.

const records = [
  { type: "login", result: "fail" },
  { type: "login", result: "success" },
  { type: "payment", result: "fail" },
  { type: "login", result: "fail" },
  { type: "payment", result: "fail" },
  { type: "payment", result: "success" },
];

let result = records
    .filter(item => item.result === "fail")
    .reduce((acc, cur) => {
        acc[cur.type] = (acc[cur.type] || 0) + 1;
        return acc;
    }, {});

console.log(result);
// 👉 출력값: { login: 2, payment: 2 }

// ==================================================
// 🚀 객체 집계 패턴 업그레이드 (⭐⭐⭐⭐)
// ==================================================


// --------------------------------------------------
// 문제 — 타입별 금액 합계 구하기
// --------------------------------------------------
// payments 배열에서
// type별 amount의 총합을 객체로 출력하세요.

const payments = [
  { type: "card", amount: 12000 },
  { type: "cash", amount: 5000 },
  { type: "card", amount: 8000 },
  { type: "point", amount: 3000 },
  { type: "cash", amount: 7000 },
  { type: "card", amount: 4000 },
];

let resultAmount = payments
    .reduce((acc, cur) => {
       acc[cur.type] = (acc[cur.type] || 0) + cur.amount;
       return acc;
    }, {});

console.log(resultAmount);
// 👉 출력값:
// {
//   card: 24000,
//   cash: 12000,
//   point: 3000
// }
