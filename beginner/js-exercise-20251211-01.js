console.log("===== 문제 1 (⭐⭐⭐⭐) =====");
// 📌 조건에 맞는 상품만 총액 출력하기
// requirements
// - products 배열에서
//   1) 카테고리가 "fruit"
//   2) 수량(count)과 가격(price)을 곱한 총액이 20,000원 이상
// - 위 조건에 맞는 상품명과 총액을 출력하세요.
// (힌트: for문 + if문 활용)

const products = [
  { name: "샤인머스캣", category: "fruit", price: 12000, count: 2 },
  { name: "고구마", category: "vegi", price: 4000, count: 5 },
  { name: "딸기", category: "fruit", price: 8000, count: 1 },
  { name: "블루베리", category: "fruit", price: 15000, count: 2 },
];

for (const fruits of products) {
    let sum = fruits.price * fruits.count;
    if(fruits.category === "fruit" && sum >= 20000) {
        console.log(`${fruits.name} - ${sum}원`);
    }
}

// 👉 출력 예시
// 샤인머스캣 - 24000원
// 블루베리 - 30000원



console.log("===== 문제 2 (⭐⭐⭐⭐⭐) =====");
// 📌 지역별 주문 금액 합산하기
// requirements
// - orders 배열을 순회하면서
//   각 지역(region)별 총 주문금액(price * count)
//   을 계산하고, 결과를 객체 형태로 출력하세요.
// (힌트: for문 + 객체 누적)

const orders = [
  { region: "서울", price: 12000, count: 1 },
  { region: "부산", price: 8000, count: 3 },
  { region: "서울", price: 5000, count: 4 },
  { region: "대구", price: 15000, count: 1 },
  { region: "부산", price: 6000, count: 2 },
];

let result = {};
for(let i = 0; i < orders.length; i++) {
    let region = orders[i].region;
    let total = orders[i].price * orders[i].count;

    // 객체 누적 로직
    result[region] = (result[region] || 0) + total;
    // result["서울"] 없음 -> undefined
    // (result["서울"] || 0) -> undefined || 0 -> 0
    // 즉, || 0 는 “값이 없으면 0부터 시작해”
}
console.log(result);

// 👉 출력 예시
// { 서울: 32000, 부산: 36000, 대구: 15000 }



console.log("===== 문제 3 (⭐⭐⭐⭐⭐) =====");
// 📌 students 배열에서 가장 높은 점수 2명만 출력하기
// requirements
// - for문만 사용해서
//   score 기준 내림차순 상위 2명만 출력
// (힌트: 정렬 X, 직접 비교해서 상위 2명 찾기)

const students2 = [
  { name: "김민준", score: 78 },
  { name: "이서연", score: 91 },
  { name: "박지호", score: 88 },
  { name: "최윤아", score: 95 },
  { name: "정하늘", score: 89 },
];

let first = null;           // 1등 학생 객체
let second = null;          // 2등 학생 객체

for(let i = 0; i < students2.length; i++) {
    let student = students2[i];
    if(!first || student.score > first.score) {
        // !first -> 처음 반복 때, first가 null이니까 이 조건이 true
        // → 즉 “아직 1등이 정해져 있지 않다” 라는 뜻.
        // student.score > first.score → 현재 보는 학생의 점수가 기존 1등보다 높으면 새로운 1등으로 올리자.
        second = first;             // 기존 1등 → 2등으로 내리고
        first = student;            // 현재 학생 → 새로운 1등
    } else if(!second || student.score > second.score) {
        // !second는 false (이미 김민준 있음)
        // student.score > second.score → 88 > 78 → true → second = 박지호(88)
        second = student;
    }
}
console.log(`1등: ${first.name} (${first.score}점)`);
console.log(`2등: ${second.name} (${second.score}점)`);

// 👉 출력 예시
// 1등: 최윤아 (95점)
// 2등: 이서연 (91점)



console.log("===== 문제 4 (⭐⭐⭐⭐) =====");
// 📌 배열에서 중복 숫자 카운트하기
// requirements
// - nums 배열에서 숫자가 등장한 횟수를 객체로 정리하세요.
// - for문으로 직접 count 누적
// (힌트: 객체[key] = (기존값 || 0) + 1)

const nums2 = [4, 1, 4, 3, 2, 1, 1, 4, 3, 5, 5, 5, 2];

const count = {};
for(let i = 0; i < nums2.length; i++) {
    const num = nums2[i];
    // 누적 코드
    count[num] = (count[num] || 0) + 1;
    // (count[num] || 0) 은 초기값 설정
}
console.log(count);
// 👉 출력 예시
// { 1: 3, 2: 2, 3: 2, 4: 3, 5: 3 }



console.log("===== 문제 5 (⭐⭐⭐⭐⭐) =====");
// 📌 조건을 충족하는 사람만 '새로운 배열'로 생성하기
// requirements
// - members 배열에서
//   1) 나이가 30세 이상
//   2) 활동상태(active)가 true
// - 두 조건을 모두 만족하는 사람만 새 배열(activeList)에 저장
// (힌트: push 사용 가능)

const members = [
  { name: "A", age: 29, active: true },
  { name: "B", age: 33, active: false },
  { name: "C", age: 41, active: true },
  { name: "D", age: 30, active: true },
  { name: "E", age: 24, active: true },
];

let activeList = [];
members.forEach(member => {
    if(member.age >= 30 && member.active === true) {
        activeList.push(member);
    }
});
console.log(activeList);

// 👉 출력 예시
// activeList = [
//   { name: "C", age: 41, active: true },
//   { name: "D", age: 30, active: true }
// ]
