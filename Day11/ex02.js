/**
 * * Thao tác đầu, cuối mảng: push, pop, shift, unshift
 * * Thao tác tìm kiếm: includes, indexOf, find, filter
 * * Thao tác thay đổi: reverse, flat
 * * Thao tác duyệt: forEach, map, reduce
 * * slice, splice
 */

const arr1 = ["Quynh Anh", "Han", "VirusS", "Jack"];

// arr1.length++;
// console.log(arr1);
// arr1.length--;
// arr1.length--;
// arr1.length--;
// console.log(arr1);

// arr1.length = 100;
// console.log(arr1);
// console.log(arr1.length);

// console.log(arr1.pop());

const newArr = arr1.pop();
console.log(newArr);
console.log(arr1);

/**
 * * pop()
 * - Xoá 1 phần tử ở cuối mảng.
 * - Thay đổi mảng gốc
 * - Trả về phần tử bị xoá
 */

/**
 * * push()
 * - Thêm một hoặc nhiều phần tử vào cuối mảng
 * - Thay đổi mảng gốc
 * - Trả về độ dài mới của mảng
 */

/**
 * * shift()
 * - Bớt 1 phần tử ở đầu mảng
 * - Thay đổi mảng gốc
 * - Trả về phần tử bị xoá
 */

/**
 * * unshift()
 * - Thêm một hoặc nhiều phần tử ở đầu mảng
 * - Thay đổi mảng gốc
 * - Trả về độ dài mới của mảng.
 */

const arr2 = [1, 2, 3];
console.log(arr2.unshift(4, 5, 6));
