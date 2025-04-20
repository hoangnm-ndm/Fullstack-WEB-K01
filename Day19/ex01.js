// Array.prototype.splice();
// Array.prototype.slice();
const b = [1, 2];
const a = b.concat(3, 4, [5, 6]);
console.log(a);
console.log(b);

console.log(b.join(1));
console.log(b.forEach((item) => item));
Array.prototype.includes();

const arr = [1, 2, 3, NaN, 4, 5, 6];
/**
 * * tim  xem arr có NaN không?
 */

console.log(NaN === NaN); // false
console.log(arr.includes(NaN)); // true

arr.find((item) => item === NaN);
// Nunber.isNaN()
// isNaN()

Array.prototype.reduce();
