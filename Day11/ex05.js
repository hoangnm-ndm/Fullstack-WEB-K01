const arr = ["Apple", "Orange", "Banana", "kiwi", "chili", "kiwi", NaN];

console.log(arr.includes(NaN));
console.log(arr.includes("Apple", 2));
console.log(arr.indexOf("orange", 0));
console.log(arr.indexOf("kiwi"));
console.log(arr.lastIndexOf("kiwi"));

// console.log(NaN === NaN);

/**
 * ChatGPT: Cách kiểm tra giá trị NaN
 */

/**
 * includes()
 * - Input: giá trị cần tìm, dùng được chỉ số âm
 * - Ouput: boolean (true, false)
 *
 * indeOf()
 * - Input, giá trị cần tìm, dùng được chỉ số âm.
 * - Output: index của phần tử đầu tiên tìm thấy.
 */
