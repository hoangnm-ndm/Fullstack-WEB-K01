let a;
console.log(a); // undefined

a = null;
console.log(a); // null

let b = 10; // number

let name = "Hoang";
let myString = "10";

console.log(true);

/**
 * 1. string
 * 2. number
 * 3. boolean
 * 4. null
 * 5. undefined
 * 6. symbol
 * 7. BigInt
 * Map, Set, WeakMap, WeakSet
 */

let x = 10;
// console.log(typeof x === "number");
let myString2 = "Huy";
// console.log(typeof myString2);

// console.log(typeof null); // object
// console.log(typeof undefined);

let myString3 = new String(123);
// console.log(myString3); // ! Đối tượng chuỗi

// console.log(typeof myString3);
// console.log(typeof myString3.valueOf());

// ! function constructor

/**
 * String, Number, Boolean,
 */

const myNumber = new Number(123);
const myNumber2 = 123;

console.log({ myNumber });
console.log({ myNumber2 });

/**
 * Nếu như không thực sự cần khai báo giá trị với hàm tạo thì không nên dùng vì hiệu suất truy cập giá trị kém hơn, tốn bộ nhớ lưu trữ hơn.
 */
