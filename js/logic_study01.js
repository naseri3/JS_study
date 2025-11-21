// 나이(age)가 20 이상 40 이하
// email이 "@gmail.com" 으로 끝남
// 회원 상태(status)가 "active"

const members = [
  { name: "철수", age: 25, email: "cs@gmail.com", status: "active" },
  { name: "영희", age: 42, email: "yh@naver.com", status: "active" },
  { name: "민수", age: 31, email: "ms@gmail.com", status: "inactive" },
  { name: "지우", age: 35, email: "jiwoo@gmail.com", status: "active" },
];

const result = members.filter(member => {
  const isAge = member.age >= 20 && member.age <= 40;
  const isGmail = member.email.endsWith("@gmail.com");
  const isActive = member.status === "active";

  return isAge && isGmail && isActive;
});

console.log(result);


/*
    📌 조건
    아래 조건을 모두 만족하는 상품만 필터링하라:
    가격(price)이 10,000 이상 50,000 이하
    상품명(name)에 "Pro" 가 포함됨
    재고(stock)이 0보다 큼 (재고 있음)
    카테고리(category)가 배열 형태로 되어 있으며, 그 안에 "electronics" 가 포함됨
*/
const products = [
  { name: "Phone Pro", price: 45000, stock: 12, category: ["electronics", "mobile"] },
  { name: "Phone Mini", price: 25000, stock: 0, category: ["electronics"] },
  { name: "Headset Pro", price: 12000, stock: 5, category: ["audio", "electronics"] },
  { name: "Watch Basic", price: 33000, stock: 7, category: ["wearables"] },
  { name: "Pro Keyboard", price: 8000, stock: 20, category: ["electronics"] },
];

const result1 = products.filter(product => {
  const isPrice = product.price >= 10000 && product.price <= 50000;
  const isProName = product.name.includes("Pro");
  const hasStock = product.stock > 0;
  const hasCategory = product.category.includes("electronics");

  return isPrice && isProName && hasStock && hasCategory;
});

console.log(result1);
