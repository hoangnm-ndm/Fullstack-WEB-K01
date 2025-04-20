/**
 * * Viết function countMinutesToNewYear() đếm xem bao nhiêu phút nữa thì đến tết dương lịch 2026 (01/01/2026 00:00:00)
 *
 */

// console.log({ Date });
// console.log(Date.now());
// let now = new Date();
// console.log(now.toISOString());

let now = Date.now();
let newYearEve = new Date("2026-01-01T00:00:00.000");
console.log(newYearEve);
console.log(now);
console.log((newYearEve.getTime() - now) / (1000 * 60));
