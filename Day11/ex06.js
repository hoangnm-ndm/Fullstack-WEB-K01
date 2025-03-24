const arr = [1, 2, , , 3, 4]; // [4, 3, , ,2,1]
// console.log(arr.reverse());
// console.log(arr);

/**
 * * Tạo mảng mới là mảng đảo ngược của mảng 'arr' (không dùng reverse)
 * ? Hãy tìm cách giảm số lần lặp xuống thấp nhất có thể
 */

let arrReversed = [];

// for (let i = arr.length - 1; i >= 0; i--) {
// 	arrReversed.push(arr[i]);  // Hieu
// }

// for (let i = 0; i < arr.length; i++) {
// 	arrReversed.unshift(arr[i]);
// }

for (let i = 0; i < arr.length / 2; i++) {
	// Cách 1:
	let b = arr[i];
	arr[i] = arr[arr.length - 1 - i];
	arr[arr.length - 1 - i] = b;

	// Cách 2:
	arrReversed[i] = arr[arr.length - 1 - i];
	arrReversed[arr.length - 1 - i] = arr[i];
}
console.log(arrReversed);
console.log(arr);
