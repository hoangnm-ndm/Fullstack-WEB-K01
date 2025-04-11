/**
 * * Viết hàm sortName() theo tên người dùng từ a-z (chỉ sắp xếp theo tên, nếu trùng tên, mới sắp xếp theo họ + tên đệm)
 */

const arr = [
	{ id: 1, fullName: "Nguyen Anh Huy", age: 32 },
	{ id: 2, fullName: "Nguyen Huy Hoang", age: 10 },
	{ id: 3, fullName: "Hoang Thanh Huy", age: 30 },
	{ id: 4, fullName: "Le Dat", age: 30 },
	{ id: 5, fullName: "Le Duy Dat", age: 30 },
	{ id: 6, fullName: "Huy Quoc", age: 30 },
	{ id: 7, fullName: "Anonymous", age: 30 },
];

/**
 * * Bước 1: dùng sort
 * * Bước 2: trong sort:
 *  * - split fullname và lấy firstName để so sánh.
 *  * - nếu firstName === nhau: gom họ và tên đệm thành chuỗi mới. sau đó so sánh chuỗi mới này với nhau.
 */

function sortName(arr) {
	return arr.sort((a, b) => {
		let aFullNameArr = a.fullName.split(" ");
		let bFullNameArr = b.fullName.split(" ");
		if (aFullNameArr[aFullNameArr.length - 1] < bFullNameArr[bFullNameArr.length - 1]) {
			return -1;
		} else if (aFullNameArr[aFullNameArr.length - 1] === bFullNameArr[bFullNameArr.length - 1]) {
			aFullNameArr.pop();
			bFullNameArr.pop();
			if (aFullNameArr.join(" ") < bFullNameArr.join(" ")) return -1;
		} else {
			return 1;
		}
	});
}

console.log(sortName(arr));
