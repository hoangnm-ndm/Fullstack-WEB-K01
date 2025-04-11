// console.log({ String });
// console.log({ Number });
// console.log(Number.MIN_VALUE);
// console.log(Number.MAX_VALUE);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);

// console.log(Number.isFinite(2.3));
// console.log(Number.isInteger(2.3));
// console.log(Number.parseInt("12.6"));
// console.log(Number.parseInt(12.6));
console.log(Number.isNaN("10"));
console.log(isNaN("10"));
// * Number.isNaN chỉ kiểm tra value với giá trị NaN và đưa ra kết quả.
// * isNaN sẽ cố gắng ép sang Number trước khi kiểm tra

console.log(Number.isNaN("CodeFarm")); // false
console.log(isNaN("CodeFarm")); // true
console.log(NaN === NaN); // false

// Number("CodeFarm") -> === NaN
