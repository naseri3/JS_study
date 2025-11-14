// ===========================================================
// 🧠 JavaScript 상급 문법 종합 예제 (비동기 제외)
// -----------------------------------------------------------
// 목적: 중급 이후 개발자가 로직·설계·패턴 감각을 높이는 연습용
//       배열/객체/고차함수/클로저/모듈화/클래스 패턴 중심
// ===========================================================

// -----------------------------------------------------------
// 1. 데이터 세트 & 헬퍼 유틸
// -----------------------------------------------------------
const employees = [
  { id: 1, name: "홍길동", dept: "개발", salary: 4200, skills: ["HTML", "CSS", "JS"] },
  { id: 2, name: "김철수", dept: "기획", salary: 5000, skills: ["기획", "문서화"] },
  { id: 3, name: "이영희", dept: "디자인", salary: 4700, skills: ["Photoshop", "Figma"] },
  { id: 4, name: "박민수", dept: "개발", salary: 5300, skills: ["JS", "React", "Node"] },
  { id: 5, name: "정유진", dept: "개발", salary: 6100, skills: ["TS", "React", "Next"] },
];


const deepClone = obj => JSON.parse(JSON.stringify(obj));
// 해석 : 객체를 "깊은 복사(Deep Copy)"하는 함수
// JSON.stringify(obj) : 객체를 문자열(JSON텍스트)로 바꿔 줌
// JSON.parse(...) : 그 문자열을 다시 객체로 되돌림
// 즉, 객체 -> 문자열 -> 다시 객체로 변환하면서 새로운 메모리 공간에 완전히 새로 복사된 객체를 얻는 것

// -----------------------------------------------------------
// 2. 배열 고급 메서드 체이닝 (filter → map → reduce)
// -----------------------------------------------------------
const devSummary = employees
  .filter(e => e.dept === "개발" && e.salary >= 4500)
  // 부서(dept)가 개발이면서 급여(salary)4500이상인 조건
  .map(e => ({
    name: e.name,
    totalSkill: e.skills.length,
    bonus: e.salary * 0.1,
  }))
  // 이름(name), 보유스킬개부(totalSkill), 보너스 금액(bonus)만 추출
  // e.skils.length 는 skills 배열의 길이 = 보유 기술개수
  // bonus는 급여의 10%(salary * 0.1)
  // 결과 : {name, totalSkil, bonus} 형태의 새 배열
  .reduce(
    (acc, cur) => {
      acc.count++;                      // 개발팀 중 조건 맞는 사람 수
      acc.totalBonus += cur.bonus;      // 전체 보너스 합계
      acc.members.push(cur.name);       // 조건에 맞는 직원 이름 리스트
      return acc;
    },
    { count: 0, totalBonus: 0, members: [] }
    // .reduce() 배열 전체를 돌면서 누적값(acc)을 업데이트
    // 두 번째 인자 {count: 0, totalBonus: 0, members: []}
  );
  /*
    각 cur(현재 직원)마다
    - count 하나 증가
    - totalBonus에 cur.bonus 더하기
    - members에 cur.name 추가
    결과 : 하나의 객체 {count, totalBonus, members} 반환
  */

console.log("개발팀 성과 요약:", devSummary);

// -----------------------------------------------------------
// 3. 클로저 기반 데이터 은닉 + 커스텀 모듈 패턴
// -----------------------------------------------------------
function EmployeeManager(initialList = []) {
  let list = deepClone(initialList); // 외부 접근 차단
  /*
    - EmployeeManager는 "직원 데이터를 관리하는 함수형 객체 생성기"
    - initialList가 초깃값(직원 배열)로 들어오며, 기본값은 빈 배열
    - deepClone(initialList)는 전달받은 배열을 깊은 복사해서 list에 저장
      즉, 외부에서 원본 데이터를 수정해도 내부 list에는 영향 없음.
    - let list는 함수 내부에만 존재하는 지역 변수,
      return된 객체 밖에서는 절대 접근 불가. (캡슐화)
  */
   return {
    add(emp) {
      list.push(emp);
      return list.length;
    },
    remove(id) {
      list = list.filter(e => e.id !== id);
    },
    findByName(name) {
      return list.find(e => e.name === name);
    },
    get totalSalary() {
      return list.reduce((sum, e) => sum + e.salary, 0);
    },
  };
}

const manager = EmployeeManager(employees);
manager.add({ id: 6, name: "한소희", dept: "디자인", salary: 4800, skills: ["Figma", "Illustrator"] });
console.log("직원 수:", manager.findByName("한소희"));
console.log("총 급여:", manager.totalSalary.toLocaleString(), "만원");

// -----------------------------------------------------------
// 4. 고차 함수: 동적 정렬 & 커링(Currying)
// -----------------------------------------------------------
const byField =
  key =>
  (a, b) =>
    typeof a[key] === "string" ? a[key].localeCompare(b[key]) : a[key] - b[key];

const sortedBySalary = [...employees].sort(byField("salary"));
const sortedByName = [...employees].sort(byField("name"));

console.table(sortedBySalary);
console.table(sortedByName);

// -----------------------------------------------------------
// 5. 클래스 & 상속 예제
// -----------------------------------------------------------
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    return `안녕하세요, ${this.name}입니다.`;
  }
}

class Developer extends Person {
  constructor(name, age, skills = []) {
    super(name, age);
    this.skills = skills;
  }
  code() {
    console.log(`${this.name}이(가) ${this.skills.join(", ")}로 코딩 중...`);
  }
  addSkill(skill) {
    if (!this.skills.includes(skill)) this.skills.push(skill);
  }
}

const dev = new Developer("홍길동", 28, ["JavaScript"]);
dev.addSkill("TypeScript");
dev.code();
console.log(dev.introduce());

// -----------------------------------------------------------
// 6. reduce로 그룹화 로직 구현 (부서별 인원 수)
// -----------------------------------------------------------
const groupedByDept = employees.reduce((acc, cur) => {
  acc[cur.dept] = acc[cur.dept] || [];
  acc[cur.dept].push(cur.name);
  return acc;
}, {});

console.log("부서별 인원:", groupedByDept);

// -----------------------------------------------------------
// 7. 재귀 함수 (중첩 구조 탐색)
// -----------------------------------------------------------
const folder = {
  name: "root",
  files: ["index.html", "style.css"],
  subfolders: [
    {
      name: "js",
      files: ["app.js", "utils.js"],
      subfolders: [{ name: "modules", files: ["auth.js", "api.js"], subfolders: [] }],
    },
  ],
};

function listFiles(dir, depth = 0) {
  console.log(`${" ".repeat(depth * 2)}📁 ${dir.name}`);
  dir.files.forEach(f => console.log(`${" ".repeat(depth * 2 + 2)}📄 ${f}`));
  dir.subfolders.forEach(sf => listFiles(sf, depth + 1));
}

listFiles(folder);

// -----------------------------------------------------------
// 8. 배열 고급 패턴 — flatMap / every / some
// -----------------------------------------------------------
const allSkills = employees.flatMap(e => e.skills);
const hasReactDev = employees.some(e => e.skills.includes("React"));
const allOver4k = employees.every(e => e.salary > 4000);

console.log("전체 스킬 목록:", [...new Set(allSkills)]);
console.log("React 개발자 존재 여부:", hasReactDev);
console.log("모든 직원 급여 4000 이상:", allOver4k);

// -----------------------------------------------------------
// 9. 구조 분해 & 기본값 + 네이밍 변경
// -----------------------------------------------------------
const { name: firstName = "Unknown", dept: team = "미정" } = employees[0];
console.log(`${firstName}은(는) ${team} 부서 소속입니다.`);

// -----------------------------------------------------------
// 10. 체이닝 + reduce로 데이터 요약 리포트 생성
// -----------------------------------------------------------
const report = employees
  .filter(e => e.salary >= 4500)
  .reduce(
    (acc, cur) => {
      acc.names.push(cur.name);
      acc.avgSalary = (acc.avgSalary * acc.count + cur.salary) / (acc.count + 1);
      acc.count++;
      return acc;
    },
    { names: [], count: 0, avgSalary: 0 }
  );

console.log("고연봉 직원 리포트:", report);

// -----------------------------------------------------------
// 11. 즉시실행함수(IIFE) + 모듈 스코프 보호
// -----------------------------------------------------------
(() => {
  const secret = "내부용 데이터";
  const log = msg => console.log("[Log]", msg);
  log("이 블록은 외부에서 접근 불가");
})();

// -----------------------------------------------------------
// 12. 함수형 프로그래밍 연습 - 데이터 변환 파이프라인
// -----------------------------------------------------------
const pipeline =
  (...fns) =>
  init =>
    fns.reduce((acc, fn) => fn(acc), init);

const normalize = str => str.trim().toLowerCase();
const removeVowels = str => str.replace(/[aeiou]/g, "");
const reverse = str => [...str].reverse().join("");

const processed = pipeline(normalize, removeVowels, reverse)("  JavaScript  ");
console.log("파이프라인 결과:", processed);

// -----------------------------------------------------------
// 13. 정규표현식 & 데이터 필터링
// -----------------------------------------------------------
const emails = [
  "admin@example.com",
  "test_user@domain.co.kr",
  "guest@@naver.com",
  "홍길동@example.com",
];

const validEmails = emails.filter(e => /^[\w.-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(e));
console.log("유효한 이메일:", validEmails);

// -----------------------------------------------------------
// 14. 객체 배열 정렬 및 통계 요약
// -----------------------------------------------------------
const summary = employees
  .sort((a, b) => b.salary - a.salary)
  .map((e, i) => `${i + 1}. ${e.name} (${e.salary}만원)`)
  .join("\n");

console.log("💼 급여 순위표\n" + summary);

// -----------------------------------------------------------
// END — 상급자용 JS 문법 복습 세트
// ===========================================================
