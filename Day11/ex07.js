/**
 * concat, join, toString.
 */

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr = arr1.concat(arr2, 3, 4, 6, [10, 100, 200]);
const arr1Copy = arr1.concat();
console.log(arr);
console.log(arr1);
console.log(arr2);

console.log(arr1Copy);
console.log(arr1Copy === arr1); // so sánh địa chỉ ô nhớ

console.log(arr1Copy == arr1);

/**
 * ! Shallow copy
 * ! Deep copy
 * ! So sánh reference type
 */
