const arrNumber = [1, 2, 3, 4];

let result = arrNumber.reduce((acc, cur) => {
	return acc + cur;
}, 0);

console.log(result);

const animals = ["dog", "cat", "python", "cat", "virusS", "snake", "virusS", "panda", "đom đóm", "virusS"];

/**
 * * Đếm số lần xuất hiện,
 * * Gom các thực thể cùng thuộc tính
 * * Loại bỏ phần tử trùng lặp.
 */
/**
 * {
 *  "dog": 1,
 *  "cat": 2,
 *  "python": 1,
 *  "virusS": 3,
 *  "snake": 1,
 *  "panda": 1,
 *  "đom đóm": 1
 * }
 */

function countAnimals(arr) {
	return arr.reduce((acc, cur) => {
		/**
		 * ! If acc không chứa thuộc tính cur thì thêm thuộc tính vào acc với value là 1.
		 * else: value++
		 */
		if (acc[cur]) {
			acc[cur]++;
		} else {
			acc[cur] = 1;
		}
		return acc;
	}, {});
}

console.log(countAnimals(animals));
