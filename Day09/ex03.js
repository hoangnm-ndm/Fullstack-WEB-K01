// let myString = "hoang";

// let myNumber = Number(myString);
// console.log(myNumber);

// console.log(String(123));

// console.log(Boolean(123));

//! instance là một giá trị cụ thể của hàm tạo sinh ra.

console.log(Number(true));
console.log(Number(false));
console.log(Number("Hoang"));
console.log(Number(null));
console.log(Number(undefined));

console.log(String(true)); // true
console.log(String(false)); // false
console.log(String(1)); // 1
console.log(String(null)); // null
console.log(String(undefined)); // undefined

console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(Boolean(NaN)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("")); // false
console.log(Boolean(" ")); // true

console.log([] == []); // true >< false
console.log([] != []); // true >< false
console.log(![] == []); // false >< true
console.log([] + []); // ""

console.log("Hoang" > "BigC");
console.log("alo" > 100);
