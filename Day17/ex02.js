const users = [
	{ id: 1, username: "hoang", email: "hoang@gmail.com", age: 33 },
	{ id: 5, username: "yen", email: "yen@gmail.com", age: 33 },
	{ id: 2, username: "anh", email: "minh@gmail.com", age: 22 },
	{ id: 3, username: "quan", email: "quan@gmail.com", age: 24 },
	{ id: 4, username: "khanh", email: "khanh@gmail.com", age: 18 },
];

/**
 * * Viết hàm nhận vào mảng users và trả vể danh sách users được sắp xếp theo username từ a-z
 */

console.log("hoang" > "dong"); // true

function sortUsers(users) {
	// toSorted // copy ra mảng mới.
	// logic
	const usersCopy = structuredClone(users); // deep copy

	usersCopy.sort((a, b) => {
		if (a.username < b.username) {
			return -1;
		}
	});
	return usersCopy;
}

console.log(sortUsers(users));

/**
 * ! sort(compareFn)
 * * input: không nhập hoặc nhập một compareFn
 * * thay đổi mảng ban đầu. (nếu không muốn thay đổi mảng ban đầu-> dùng toSorted())
 * * chỉ thực hiện so sánh chuỗi, nếu so sánh số thì kết quả không chính xác
 * * compareFn(): âm thì a trước b, dương thì a sau b, ===0 thì không đổi chỗ.
 */
