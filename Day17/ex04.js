const arr = ["hello", "JS", "Hoang", "PHP", "HTML"];

const result = arr.reduce((a, b, c, d) => {
	// console.table({ a, b, c, d });
	console.log("xin chao");
	return a + b;
});

console.log(result);

console.log([1, 2, 3, 4].reduce((a, b) => a + b));
// acc cur
// 1    2
// 3    3
// 6    4
// 10
/**
 * * reduce((acc, cur, index, arr) => {}, <initialValue>)
 *
 * * acc (accumulator) -> Biến tích luỹ
 * * cur (current value) -> phần tử được duyệt hiện tại.
 * * index -> index của phần tử được duyệt.
 * * arr -> array ban đầu.
 */

/**

 * * Tính tích các phần tử trong mảng: [1,2,3,4,5,6,7]
 * * Tính giai thừa với reduce cho số n = 7 (được dùng for)
 */

const arrNumber = [1, 2, 3, 4, 5, 6, 7];
function factorial(arr) {
	arr.reduce((acc, cur, index, array) => {
		// * logic
		return acc * cur;
	});
}

factorial(arrNumber);
