const arr = [
	{ id: 1, fullname: "Nguyen Quang Huy", age: 32 },
	{ id: 2, fullname: "Nguyen Huy Hoang", age: 10 },
	{ id: 3, fullname: "Hoang Thanh Huy", age: 30 },
	{ id: 4, fullname: "Lê Thanh", age: 30 },
	{ id: 5, fullname: "Huy Quốc", age: 30 },
];

/**
 * * Viết hàm tìm tên người (chỉ tìm theo tên, không tính họ và tên đệm)
 */

function searchName(arr, name) {
	const result = arr.filter((item) => {
		let arrOfName = item.fullname.split(" ");
		let firstName = arrOfName[arrOfName.length - 1];
		return firstName === name;
	});
	return result;
}

console.log(searchName(arr, "Huy"));
console.log(searchName(arr, "Hoang"));

// * input: arr, "Huy" -> ouput [{ id: 1, name: "Nguyen Quang Huy", age: 32 }, { id: 3, name: "Hoang Thanh Huy", age: 30 }]
// * input: arr, "Hoang" -> [{ id: 2, name: "Nguyen Huy Hoang", age: 10 }]
