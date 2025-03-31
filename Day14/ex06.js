/**
 * flat: làm phẳng mảng
 * * default deepth = 1: làm phẳng 1 cấp
 * * depth: độ sâu của mảng cần làm phẳng (nếu cần làm phẳng toàn bộ mảng chưa xác định cấp thì dùng Ininity)
 * * Làm phẳng ở cấp nào thì mất phần tử empty ở cấp đó.
 * * Nếu depth < 0 thì được gán = 0
 */

const arr1 = [1, 2, , , , 3, [4, 5, , , 6, [7, 8, [9]]]];

const arrFlat1 = arr1.flat();
const arrFlat2 = arr1.flat(-2);
const arrFlat3 = arr1.flat(Infinity);
console.log(arr1);
console.log(arrFlat1);
console.log(arrFlat2);
console.log(arrFlat3);

/**
 *
 */

const myArr = [
	[1, 2],
	[7, -1],
	[7, 9],
	[0, 6, [3, 4, 100]],
];

// ! Tìm giá trị lớn nhất trong mảng myArr

/**
 * ! Viết hàm `flat(deepth)` mô phỏng lại cách hoạt động của phương thức Array.flat() nhưng không được dùng flat()
 */

function flat(arr, depth = 1) {
	const newArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i]) && depth > 0) {
			newArr.push(...flat(arr[i], depth - 1));
		} else {
			arr[i] && newArr.push(arr[i]);
		}
	}

	return newArr;
}

console.log(flat([1, [2, 3, , , [4, [, , , , 6, 7]]]], 5));
