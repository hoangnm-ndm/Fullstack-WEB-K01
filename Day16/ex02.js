// console.log("Hoang" && "Fpoly");

const animals = [
	{ id: 1, name: "dog" },
	{ id: 2, name: "dom" },
	{ id: 3, name: "cat" },
	{ id: 4, name: "dom" },
];

/**
 * * find(): Dùng find() để kiểm tra và trả về index của animal "đóm"
 */

/**
 * * function thực hiện những nhiệm vụ gì? dùng bao nhiêu function?
 * * input/output
 * * giải thuật
 */

/**
 * find() callback:
 * * input: item, index, arr
 * * output: item/undefined
 * * Chỉ tìm được phần tử đầu tiên thoả mãn hoặc không
 */

/**
 * * finIndex() callback:
 * * input: item, index, arr
 * * output: index/-1
 * * Chỉ tìm được phần tử đầu tiên thoả mãn hoặc không
 */

/**
 * * finLast(), findLastIndex() có cách hoạt động tương tự nhưng trả về phần tử hoặc index của phần tử cuối cùng thoả mãn điều kiện.
 */

function findAnimal(animals) {
	if (Array.isArray) {
		const result = animals.find((item, index, arr) => {
			return item.name === "cat";
		});
		return result;
	}
	return false;
}

function findIndexAnimal(animals) {
	return Array.isArray(animals) && animals.findIndex((item) => item.name === "panda");
}

console.log(findAnimal(animals));

console.log(findIndexAnimal(animals));
