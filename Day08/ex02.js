/**
 * Toán tử số học -done
 * Toán tử gán -done
 * Toán tử so sánh -done
 * Toán tử logic -done
 * Toán tử ba ngôi
 * Toán tử nullish coalescing
 */

// ! Toán tử số học: +, -, *, /, %, ++, --

console.log(10 / 3);
console.log(10 % 3);

let a = 10;
// a++;
// a = a + 1;
// console.log(a++);
// console.log(++a);
console.log(a++ + --a + ++a + a--);

// ! Toán tử gán: =, +=, -=, *=, /=, %=, **=

console.log(10 ** 2); // js không hỗ trợ toán tử mũ

let c = 10;
c **= 2;
console.log(c);

// ! Toán tử so sánh: >, <, >=, <=, ==, ===, !=, !==

let x = 10;
let y = "10";
console.log(x == y);
console.log(x === y);

/**
 *  ! Trong JS không khai báo rõ kiểu dữ liệu khi khai báo biến.
 *  ! JS thực hiện ép kiếu tự động (ngầm định) khi cần thiết.
 * */

/**
 * ! Toán tử logic: &&, ||, !
 */

console.log(true && true);
console.log(true && false);
console.log(true || false);
console.log(!true);

console.log("Hoang" && "Huy");
console.log("Hoang" && 0 && "Huy");
console.log("Hoang" || 0 || "Huy");

/**
 * ! falsy values: false, 0, "", null, undefined, NaN
 */
