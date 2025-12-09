// =====================================================
// APTJOB 채용 공고 데이터 가공 스크립트 (라고 위장한 공부파일 🤫)
// - for
// - for...of
// - for...in
// - forEach
// 중급~고급 활용 연습
// =====================================================

// 가짜 채용 공고 데이터 (실무 데이터 같은 구조로 만들기)
const jobPosts = [
  {
    id: 101,
    title: "아파트 경비원",
    region: "서울 > 송파구",
    isActive: true,
    views: 1234,
    tags: ["야간", "주 5일", "경력 무관"],
    company: {
      name: "송파주택관리",
      grade: "premium",
      contact: "02-000-0000",
    },
  },
  {
    id: 102,
    title: "미화·청소 담당",
    region: "경기 > 성남시",
    isActive: false,
    views: 845,
    tags: ["주간", "주 6일"],
    company: {
      name: "성남종합관리",
      grade: "basic",
      contact: "031-000-0000",
    },
  },
  {
    id: 103,
    title: "시설관리 기사",
    region: "서울 > 강남구",
    isActive: true,
    views: 4320,
    tags: ["주간", "주 5일", "경력 3년 이상"],
    company: {
      name: "강남에프엠",
      grade: "premium",
      contact: "02-111-2222",
    },
  },
  {
    id: 104,
    title: "관리사무소 사무원",
    region: "부산 > 해운대구",
    isActive: true,
    views: 670,
    tags: ["주간", "주 5일"],
    company: {
      name: "해운대주택관리",
      grade: "basic",
      contact: "051-000-0000",
    },
  },
];

// -----------------------------------------------------
// 1. 기본 for 문 - 총 조회수 / 활성 공고 수 구하기
// -----------------------------------------------------
//  💡 언제 쓰는가?
//  - 인덱스(i)를 직접 제어하고 싶을 때
//  - break, continue 자주 쓰는 로직
//  - 배열 길이가 크고, 최대한 단순·빠르게 돌리고 싶을 때

function getSummaryWithFor(posts) {
  let totalViews = 0;           // 총 조회수
  let activeCount = 0;          // 공고 수

  // 고전 for문: 인덱스 기반
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];          // jobPosts 배열안에 있는 값 가져오기

    // 비활성 공고는 조회수 통계에서 제외하고 싶다면?
    if (!post.isActive) {
      continue; // 이 공고는 건너뛰고 다음으로
    }

    activeCount++;
    totalViews += post.views;
  }

  console.log("=== [for] 공고 요약 ===");
  console.log("활성 공고 수:", activeCount);
  console.log("활성 공고 총 조회수:", totalViews);
}

getSummaryWithFor(jobPosts);
// 활성 공고 수: 3
// 활성 공고 총 조회수: 6224


// -----------------------------------------------------
// 2. for...of - 가독성 좋은 배열 순회
// -----------------------------------------------------
//  💡 언제 쓰는가?
//  - 배열 자체 요소에만 관심 있을 때 (인덱스 관심 X)
//  - 읽기 좋은 코드가 중요할 때
//  - 중첩 루프에서 특히 가독성이 좋음

function getPremiumCompanyTitles(posts) {
  const premiumTitles = [];

  // for...of: 배열의 “값”에 직접 접근
  for (const post of posts) {
    if (post.company.grade === "premium" && post.isActive) {
      premiumTitles.push(post.title);
    }
  }

  console.log("=== [for...of] 프리미엄 + 활성 공고 제목 ===");
  console.log(premiumTitles);
}

getPremiumCompanyTitles(jobPosts);
// [ '아파트 경비원', '시설관리 기사' ]

// -----------------------------------------------------
// 3. for...in - 객체의 key 순회
// -----------------------------------------------------
//  💡 언제 쓰는가?
//  - 특정 객체의 필드를 동적으로 보고 싶을 때
//  - “어떤 key들이 들어올지 모르는” 응답 데이터 검사용
//  - 폼 데이터, 옵션 설정값 디버깅 등에 자주 쓰임

const sampleCompany = {
  name: "송파주택관리",
  grade: "premium",
  contact: "02-000-0000",
  homepage: "https://example.com",
};

function logCompanyInfo(obj) {
  console.log("=== [for...in] 회사 정보 디버깅 ===");

  for (const key in obj) {
    // hasOwnProperty 체크 패턴 (상속된 프로퍼티 방어용)
    if (!Object.prototype.hasOwnProperty.call(obj, key)) continue;

    const value = obj[key];
    console.log(`${key}: ${value}`);
  }
}

logCompanyInfo(sampleCompany);

// -----------------------------------------------------
// 4. forEach - “함수형 스타일” + 콜백 활용
// -----------------------------------------------------
//  💡 언제 쓰는가?
//  - “이 배열을 쭉 돌면서 이런 작업을 해라”라고 선언적으로 쓰고 싶을 때
//  - map/filter처럼 새로운 배열을 반환할 필요는 없고,
//    단순히 로그 출력, DOM 추가, 통계 집계 등 사이드 이펙트가 목적일 때

function logActivePostsByRegion(posts) {
  const regionCountMap = {};

  posts.forEach((post) => {
    if (!post.isActive) return;

    const regionKey = post.region.split(">")[0].trim(); // ex) "서울 > 송파구" → "서울"

    if (!regionCountMap[regionKey]) {
      regionCountMap[regionKey] = 0;
    }
    regionCountMap[regionKey]++;

    // 개발 중 임시 로그 (실무 코드처럼 보이게)
    console.log(
      `[디버그] 활성 공고: ${post.title} / 지역: ${post.region} / 조회수: ${post.views}`
    );
  });

  console.log("=== [forEach] 지역별 활성 공고 수 ===");
  console.log(regionCountMap);
}

logActivePostsByRegion(jobPosts);

// -----------------------------------------------------
// 5. for...of + 중첩 루프: tags 분석 (중급 패턴)
// -----------------------------------------------------
//  💡 언제 쓰는가?
//  - “배열 안에 또 다른 배열/리스트” 구조일 때
//  - 예: 공고마다 태그 배열, 유저마다 관심직무 배열, etc.

function getTagStats(posts) {
  const tagCountMap = {};

  for (const post of posts) {
    if (!post.isActive) continue;

    // 각 공고의 tags 배열 순회
    for (const tag of post.tags) {
      if (!tagCountMap[tag]) {
        tagCountMap[tag] = 0;
      }
      tagCountMap[tag]++;
    }
  }

  console.log("=== [for...of 중첩] 태그별 등장 횟수 ===");
  console.log(tagCountMap);
}

getTagStats(jobPosts);

// -----------------------------------------------------
// 6. for vs forEach 비교용 예제 (조기 종료 패턴)
// -----------------------------------------------------
//  💡 for문은 break/continue로 “중간에 멈추기” 쉽고,
//    forEach는 중간에 완전히 멈추기 어렵다 → 이 차이 이해가 중요!

function findFirstHighViewPostWithFor(posts, threshold) {
  // 조회수가 threshold 이상인 첫 공고만 찾기
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    if (post.views >= threshold) {
      console.log("=== [for] 최초 고조회수 공고 ===");
      console.log(post);
      return post; // 바로 함수 종료 가능
    }
  }
  console.log("조건에 맞는 공고 없음 (for)");
  return null;
}

findFirstHighViewPostWithFor(jobPosts, 3000);

// forEach로 비슷한 로직을 억지로 짜면 가독성이 나빠짐 → 그래서 이런 경우 for가 더 적합
function findFirstHighViewPostWithForEach(posts, threshold) {
  let found = null;

  posts.forEach((post) => {
    if (found) return; // 이미 찾았다면 이후는 무시 (하지만 루프 자체는 계속 돎)
    if (post.views >= threshold) {
      found = post;
    }
  });

  console.log("=== [forEach] 최초 고조회수 공고 (흉내낸 버전) ===");
  console.log(found ?? "조건에 맞는 공고 없음 (forEach)");
  return found;
}

findFirstHighViewPostWithForEach(jobPosts, 3000);

// -----------------------------------------------------
// [정리 메모 - 나중에 노트에 옮겨 적기 좋은 포인트]

// 1) for
//  - 인덱스를 직접 다루고 싶을 때
//  - break/continue를 많이 써야 할 때
//  - 성능·제어가 중요한 루프에 좋음

// 2) for...of
//  - "배열 요소" 자체를 순회할 때 가장 읽기 좋음
//  - 중첩 루프, 데이터 가공용 로직에 자주 사용

// 3) for...in
//  - "객체의 key"를 순회할 때 사용
//  - 응답 데이터 구조를 파악하거나, 동적 필드 검사할 때 유용
//  - 배열에는 쓰지 않는 것이 일반적인 권장사항

// 4) forEach
//  - "이 배열을 쭉 돌면서 이 작업을 해줘"라는 선언적 스타일
//  - 반환값 필요 없고, DOM 조작·로그 출력·집계 등에 좋음
//  - 중간에 완전히 멈추기 어렵고, async/await와도 궁합이 좋지 않음
//    (이건 나중에 비동기 공부할 때 다시 연결해서 보면 좋음)
// =====================================================
