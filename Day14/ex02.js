/**
 * Object, Array:
 * * Spread
 * * Destructuring
 * * Rest (phần còn lại)
 *
 */

/**
 * * Spread rải các giá trị có sẵn vào một object, array mới, nếu như trùng key thì sẽ được ghi đè.
 * * - Có thể dùng ở đầu, cuối, hoặc bất kỳ vị trí nào trong khai báo Object, array.
 */

const obj1 = { name: "Hoang", age: 33 };

const obj2 = { email: "hoang@gmail.com" };

const arr = [1, , , , 2, 3];

const fullInfor = {
	...obj1,
	...obj2,
	address: "HN",
	1: "xin chao",
	...arr,
};

console.log(fullInfor);

const obj3 = {
	fullname: "Hoang NM",
	email: "hoang@gmail.com",
	idol: "Jack",
	password: "123456",
	bios: "Coder ho Nguyen",
};

const { email, password: matkhau, ...other } = obj3; // destructuring
console.log(email);
console.log(matkhau);
console.log(other); // other lấy được do áp dụng rest để gom phần còn lại thành object/array

const copyObj = { ...obj3 }; // shallow copy

console.log("hello", 1, 2, 3, "JS");

function sum(...rest) {
	console.log(rest);
	let total = 0;
	// logic
	for (let i = 0; i < rest.length; i++) {
		total += rest[i];
	}
	return total;
}

sum(1, 2, 3, 4);
