const arr1 = [1, 2, 6, 8, 11, 5, 3, 5, 7];
const randomArray = Array.from({ length: 100000 }, () => Math.floor(Math.random() * 1000000000));
console.log(randomArray);
/**
 *  ! Sắp xếp mảng tăng dần không dùng phương thức sort()
 * * QuickSort
 * * MergeSort
 * * BubbleSort
 */

/**white board */

function quickSort(arr) {
	if (arr.length <= 1) {
		return arr;
	}
	let pivot = arr[arr.length - 1];
	const left = [];
	const right = [];
	for (let i = 0; i < arr.length - 1; i++) {
		// chia de tri
		/**
		 * * 1. So sanh pivot voi arr[i]
		 * * 2. arr[i] <= pivot -> left.push(arr[i])
		 * * 3. arr[i] > pivot -> right.push(arr[i])
		 */
		if (pivot > arr[i]) {
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}

	// ! Đệ quy
	return [...quickSort(left), pivot, ...quickSort(right)];
}

// console.log(quickSort(arr1));
console.time("countTime");
console.log(quickSort(randomArray));
console.timeEnd("countTime");
