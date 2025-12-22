// ==================================================
// 📘 오늘의 JS 문제 세트 (5문제)
// 주제: 체이닝 / reduce 집계 / 상태 처리 / 문자열 가공
// 규칙: 풀이 X, 문제만
// ==================================================


// --------------------------------------------------
// 문제 1 (⭐⭐⭐) — filter + map (기본 체이닝)
// 조건:
// - category가 "fruit" 인 것만
// - name만 뽑아서 배열로 출력
// --------------------------------------------------
const items1 = [
  { name: "사과", category: "fruit", price: 3000 },
  { name: "감자", category: "vegi",  price: 2000 },
  { name: "딸기", category: "fruit", price: 12000 },
  { name: "양파", category: "vegi",  price: 1500 },
  { name: "키위", category: "fruit", price: 5000 },
];

// 👉 코드 작성
let result1 = items1
    .filter(item => item.category === "fruit")
    .map(item => item.name);

console.log(result1);
// 👉 출력값:
// ["사과", "딸기", "키위"]



// --------------------------------------------------
// 문제 2 (⭐⭐⭐) — reduce (객체 집계: 타입별 합계)
// 조건:
// - type별로 amount 총합을 객체로 만들기
// --------------------------------------------------
const payments2 = [
  { type: "card", amount: 12000 },
  { type: "cash", amount: 5000 },
  { type: "card", amount: 8000 },
  { type: "point", amount: 3000 },
  { type: "cash", amount: 7000 },
  { type: "card", amount: 4000 },
];

// 👉 코드 작성
let result2 = payments2
    .reduce((acc, cur) => {
        acc[cur.type] = (acc[cur.type] || 0) + cur.amount;
        return acc;
    }, {})

console.log(result2);
// 👉 출력값:
// { card: 24000, cash: 12000, point: 3000 }



// --------------------------------------------------
// 문제 3 (⭐⭐⭐⭐) — filter + reduce (조건부 총액)
// 조건:
// - status === "paid" 만 유효
// - total = price * count 합계
// --------------------------------------------------
const orders3 = [
  { item: "사과", price: 3000,  count: 5, status: "paid" },
  { item: "딸기", price: 12000, count: 1, status: "pending" },
  { item: "수박", price: 18000, count: 2, status: "paid" },
  { item: "귤",   price: 5000,  count: 2, status: "paid" },
  { item: "망고", price: 9000,  count: 1, status: "cancel" },
];

// 👉 코드 작성
let result3 = orders3
    .filter(fruit => fruit.status === "paid")
    .reduce((acc, cur) => {
        return acc + cur.price * cur.count;
    }, 0);

console.log(result3);
// 👉 출력값:
// 43000



// --------------------------------------------------
// 문제 4 (⭐⭐⭐⭐) — 문자열 가공 (replace + 정규식)
// 조건:
// - phone 문자열들에서 숫자만 남기기 (하이픈/공백/괄호 제거)
// - "01012345678" 형태로 통일한 배열 출력
// 힌트: replace + 정규식 사용
// --------------------------------------------------
const phones4 = [
  "010-1234-5678",
  "010 9876 5432",
  "(010) 2222-3333",
  "010-0000-0000",
];

// 👉 코드 작성
let result4 = phones4.map(phone =>
  phone.replace(/\W/g, "")
);
// replace()란? 문자열.replace(찾을값, 바꿀값)
// "hello world".replace("world", "JS");
// "hello JS"

// /a/ → a 찾기
// /[0-9]/ → 숫자 찾기
// /\D/ → 숫자가 아닌 것 찾기

// \D 숫자
// \W 문자+숫자+_
// \S 공백
console.log(result4);
// 👉 출력값:
// ["01012345678", "01098765432", "01022223333", "01000000000"]



// --------------------------------------------------
// 문제 5 (⭐⭐⭐⭐⭐) — 상태 기반 누적 (로그 처리)
// 조건:
// - login 이후 ~ logout 이전 사이의 purchase만 유효
// - 유효한 purchase 총액 출력
// --------------------------------------------------
const logs5 = [
  { type: "purchase", price: 5000 },   // 무효 (로그인 전)
  { type: "login" },
  { type: "purchase", price: 12000 },  // 유효
  { type: "purchase", price: 8000 },   // 유효
  { type: "logout" },
  { type: "purchase", price: 7000 },   // 무효
  { type: "login" },
  { type: "purchase", price: 20000 },  // 유효
  { type: "logout" },
  { type: "purchase", price: 3000 },   // 무효
];

// 👉 코드 작성 (힌트: isLoggedIn 불리언 상태 + 반복문)
let isLoggedIn = false;
let total = 0;
for(let i = 0; i < logs5.length; i++) {
    if(logs5[i].type === "login") isLoggedIn = true;
    if(logs5[i].type === "logout") isLoggedIn = false;
    if(logs5[i].type === "purchase" && isLoggedIn) {
        total += logs5[i].price;
    }
}

console.log(total);
// 👉 출력값:
// 40000


// ==================================================
// 📘 JS 문제 세트 — 새로운 유형
// 주제: 문자열 분석 / 객체 집계 / 조건 처리 / 패턴 사고
// ==================================================


// --------------------------------------------------
// 문제 1 (⭐⭐⭐) — 문자열 카운팅
// 조건:
// - sentence에서
// - 각 알파벳의 등장 횟수를 객체로 만들어라
// - 대소문자 구분 X
// --------------------------------------------------
const sentence1 = "Frontend Developer";

// 👉 코드 작성
let resultA = sentence1
    .toLowerCase()
    .split("")                              // 각 알파벳의 등장 횟수 카운팅
    // .filter(char => char !== " ")       // 공백(스페이스)을 제거하는 역할
    .filter(char => /[a-z]/.test(char))
    // 알파벳(a~z)인 문자만 배열에 남겨라
    // /[a-z]/ a부터 z까지 중 하나라도 포함되면 매칭
    // .test() 문자열이 정규식 패턴과 “맞는지” 검사, 결과는 true / false
    .reduce((acc, char) => {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
    }, {});

console.log(resultA);
// 👉 출력값 예시:
// {
//   f: 1,
//   r: 2,
//   o: 2,
//   n: 2,
//   t: 1,
//   e: 4,
//   d: 2,
//   v: 1,
//   l: 1,
//   p: 1
// }



// --------------------------------------------------
// 문제 2 (⭐⭐⭐) — 조건 필터링
// 조건:
// - score가 80점 이상
// - passed: true 인 사람만
// - name만 배열로 출력
// --------------------------------------------------
const students2 = [
  { name: "민수", score: 92, passed: true },
  { name: "영희", score: 78, passed: true },
  { name: "철수", score: 85, passed: false },
  { name: "지수", score: 88, passed: true },
  { name: "수진", score: 95, passed: true },
];

// 👉 코드 작성
let resultB = students2
    .filter(item => item.score >= 80 && item.passed === true)
    .map(list => list.name);

console.log(resultB);
// 👉 출력값:
// ["민수", "지수", "수진"]



// --------------------------------------------------
// 문제 3 (⭐⭐⭐⭐) — 상태 누적 (구간 집계)
// 조건:
// - start 이후부터 end 이전까지
// - value 합계 구하기
// --------------------------------------------------
const logs3 = [
  { type: "value", value: 5 },
  { type: "start" },
  { type: "value", value: 10 },
  { type: "value", value: 20 },
  { type: "end" },
  { type: "value", value: 100 },
  { type: "start" },
  { type: "value", value: 15 },
  { type: "end" },
];

// 👉 코드 작성
let isLoggined = false;
let sum = 0;
for(let i = 0; i < logs3.length; i++) {
    if(logs3[i].type === "start") isLoggined = true;
    if(logs3[i].type === "end") isLoggined = false;
    if(logs3[i].type === "value" && isLoggined) {
        sum += logs3[i].value;
    }
}

console.log(sum);
// 👉 출력값:
// 45



// --------------------------------------------------
// 문제 4 (⭐⭐⭐⭐) — 문자열 패턴 변환
// 조건:
// - fileNames 배열에서
// - 확장자(.png, .jpg, .gif)를 제거
// - 파일명만 배열로 출력
// --------------------------------------------------
const fileNames4 = [
  "profile.png",
  "banner.jpg",
  "icon.gif",
  "thumbnail.png",
];

// 👉 코드 작성
let resultD = fileNames4.map(name =>
  name.replace(/\.(png|jpg|gif)$/, "")
  // 파일명 문자열에서 맨 뒤에 붙은 확장자(.png, .jpg, .gif)만 제거하라
);

let resultE = fileNames4.map(name =>
  name.split(".")[0]
  // 파일명을 점(.) 기준으로 나눠서, 첫 번째 조각만 사용하라
);

console.log(resultD);
console.log(resultE);

// 👉 출력값:
// ["profile", "banner", "icon", "thumbnail"]



// --------------------------------------------------
// 문제 5 (⭐⭐⭐⭐⭐) — 객체 그룹화
// 조건:
// - category별로 items 배열 만들기
// --------------------------------------------------
const products5 = [
  { name: "사과", category: "fruit" },
  { name: "감자", category: "vegi" },
  { name: "딸기", category: "fruit" },
  { name: "양파", category: "vegi" },
  { name: "키위", category: "fruit" },
];

// 👉 코드 작성
let result = products5.reduce((acc, cur) => {
    if(!acc[cur.category]) {
        acc[cur.category] = [];
    }
    // 이 카테고리 이름을 key로 하는 배열이 아직 없으면, 새로 만들어라
    acc[cur.category].push(cur.name);
    return acc;
    // 카테고리(key)별로 만들어 둔 배열에, 해당 항목의 이름(name)을 하나씩 추가하면서 
    // 최종적으로 하나의 객체(acc)를 완성해라
}, {});

let result5 = products5.reduce((acc, cur) => {
  (acc[cur.category] ??= []).push(cur.name);
  return acc;
  // 현재 항목의 category를 key로 하는 배열이 아직 없으면 빈 배열을 만들고,
  // 그 배열에 현재 항목의 name을 하나 추가하라.
}, {});

console.log(result);
console.log(result5);
// 👉 출력값:
// {
//   fruit: ["사과", "딸기", "키위"],
//   vegi: ["감자", "양파"]
// }
