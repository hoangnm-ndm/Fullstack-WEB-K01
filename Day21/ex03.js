/**
 * Date
 */

const now = new Date();
const now2 = Date.now();
console.log(now);
console.log(now2);
console.log(typeof now);
// console.log(now instanceof Date);

console.log({ Date });
console.log(now.getDate());
console.log(now.getDay()); // Chủ nhật = 0, Thứ 2 = 1, ..., Thứ 7 = 6
console.log(now.getFullYear());
console.log(now.getMonth()); // 0 = tháng 1, ..., 11 = tháng 12
console.log(now.getHours());
console.log(now.getTime());
console.log("----------------------");
console.log(now.toString());
console.log(now.toJSON());
console.log(now.toISOString());
console.log(now.toDateString());
console.log(now.toLocaleString());
console.log(now.toUTCString());
