/*

map() - 데이터 변환용
: 배열을 다른 형태로 바꾸고 싶을 때 사용

map 특징 - 원본 배열은 그대로 유지됨
        - 새로운 배열을 "같은 길이"로 반환
        - UI 표시용 데이터 전처리에 자주 사용
        - 예 : 숫자를 , 포함 문자열, 단위 추가, label 변환 등


filter() - 조건 검색용
: 특정 조건에 맞는 데이터만 남기고 싶을 때

filter 특징 - 조건식이 true인 요소만 남김
           - 새로운 배열로 반환
           - 검색 / 필터 기능 / 조건별 리스트 출력 등에 사용

           
reduce() - 누적 계산용
: 배열을 하나의 값(합계, 평균, 객체 등)으로 줄이고 싶을 때

arr.reduce((누적값, 현재값) => { return 새로운누적값 }, 초기값)

reduce 특징  - 누적값(sum)이 계속 전달됨
            - 초기값을 꼭 지정해야 예외 없이 작동
            - 합계, 평균, 그룹화, 객체 누적 등에 활용

*/

const job = [
  { title: "경리(경력) 채용", salary:3500000},
  { title: "시설과장 채용", salary:4000000},
  { title: "관리소장 모집", salary:4500000},
];
const jobLostForUI = job.map((job) => {
    return {
        title: job.title,
        salary: job.salary.toLocaleString() + "원"
    };
});
console.log(jobLostForUI);
// [
//   { title: '경리(경력) 채용', salary: '3,500,000원' },
//   { title: '시설과장 채용', salary: '4,000,000원' },
//   { title: '관리소장 모집', salary: '4,500,000원' }
// ]


// 문제
// 서울 지역만 필터하고 급여가 300만 이상인 항목만 남긴 후
// 회사명 - 직무 (급여) 형태의 문자열 배열로 만들어라.
const jobs = [
  { company: "현대아파트", title: "경리", region: "서울", salary: 3200000 },
  { company: "신평미소지움", title: "시설주임", region: "충남", salary: 2900000 },
  { company: "압구정현대", title: "사무직", region: "서울", salary: 3400000 },
];
const result = jobs
  .filter((job) => job.region === "서울" && job.salary >= 3000000)
  .map((job) => `${job.company} - ${job.title} (${job.salary.toLocaleString()}원)`);
console.log(result);
// [ '현대아파트 - 경리 (3,200,000원)', '압구정현대 - 사무직 (3,400,000원)' ]


const jobDate = [
    {id:1, company:"현대아파트", region:"서울", salary:3200000, experience:2},
    {id:2, company:"신평미소지움", region:"충남", salary:2900000, experience:1},
    {id:3, company:"압구정현대", region:"서울", salary:3400000, experience:5},
    {id:4, company:"래미안아파트", region:"서울", salary:2800000, experience:3},
];

// 서울 지역만 필터 + 급여 300만 이상
const filtered = jobDate.filter(j => j.region === "서울" && j.salary >= 3000000);

// 화면 표시용 반환
const formatted = filtered.map(j => ({
    title: `${j.company} (${j.salary / 1000}만원)`,
    exp: j.experience + "년차",
}));

// 평균 급여 계산
const avg = Math.round(
    filtered.reduce((sum, j) => sum + j.salary, 0) / filtered.length
);

console.log(formatted);
console.log(`서울 평균 급여: ${avg.toLocaleString()}원`);


// 문제 1
// jobDate 배열에서 "경력 3년 이상"인 항목만 남겨서
// [회사명 - 경력(n년차)] 문자열 배열로 만드세요.
const resultDate = jobDate.filter(j => j.experience >= 3).map((job) => `${job.company} - 경력 ${job.experience} 년차`);
console.log(resultDate);
// [ '압구정현대 - 경력 5 년차', '래미안아파트 - 경력 3 년차' ]


// 문제 2
// 전체 급여 평균보다 높은 회사만 남기세요.
// (reduce로 평균 계산 후 filter로 필터링)
const avgSalary =
  jobDate.reduce((sum, job) => sum + job.salary, 0) / jobDate.length;

const resultAvg = jobDate.filter(job => job.salary > avgSalary);
console.log(`평균 급여: ${avgSalary.toLocaleString()}원`);
// 평균 급여: 3,075,000원
console.log(resultAvg);  // 평균급여 이상인 date 출력

// 문제 3
// 모든 회사 급여를 만원 단위 문자열로 반환하세요. (map 사용)
const resultSalary = jobDate.map(job => ({
  company: job.company,
  salaryText: (job.salary / 10000).toFixed(0) + "만원"
}));
console.log(resultSalary);

// 문제 4
// region별 회사 개수를 집계하는 객체를 만들어보세요. (reduce로 그룹화)
const regionCount = jobDate.reduce((acc, job) => {
  acc[job.region] = (acc[job.region] || 0) + 1;
  return acc;
}, {});
console.log(regionCount);
// { '서울': 3, '충남': 1 }


// 문제 5
// 급여가 300만 이상인 회사들의 평균 경력을 구하세요. (filter -> reduce 조합)
const highSalaryJobs = jobDate.filter(job => job.salary >= 3000000);

const avgExp =
  highSalaryJobs.reduce((sum, job) => sum + job.experience, 0) /
  highSalaryJobs.length;

console.log(`300만 이상 회사 평균 경력: ${avgExp.toFixed(1)}년`);
// 300만 이상 회사 평균 경력: 3.5년