const animals = ["dog", "dog", "cat", "python", "cat", "virusS", "snake", "virusS", "panda", "đom đóm", "virusS"];

/**
 * Tạo ra function trả về mảng mới đã loại bỏ các phần tử trùng lặp ở mảng đưa vào.
 */

function duplicateFilter(arr) {
	return arr.reduce((acc, cur) => {
		// * if (acc.findIndex((item) => item === cur) === -1) {
		if (!acc.includes(cur)) {
			acc.push(cur);
		}
		return acc;
	}, []);
}

console.log(duplicateFilter(animals));
