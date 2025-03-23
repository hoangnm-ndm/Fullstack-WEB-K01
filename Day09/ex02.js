/**
 * ! Ép kiểu tự động (ngầm)
 * Với phép + có 1 vế là chuỗi thì ưu tiên ép sang chuỗi.
 * Với phép + thông thường không có vế nào là chuỗi thì được ưu tiên tính toán như biểu thức toán học.
 * ! Ép kiểu chủ động
 */

// console.log(1 + 1);
console.log(1 + "1");

// console.log(1 - "1");
// console.log(10 / "5");
// console.log("10" / 5);
console.log(10 * "5");
console.log(typeof (10 / "Hoang")); // NaN = Not a Number
console.log(typeof NaN);

// console.log(!0);
// console.log(!"");
// console.log(!null);
// console.log(!undefined);

console.log(true + true); // 1 + 1
console.log(true + false); // 1 + 0
console.log(true - false); // 1 - 0
console.log(false - true); // 0 - 1
