/**
 * map() callback:
 * * input: item, index, arr
 * * output: trả về mảng đã biến đổi và có độ dài mảng bằng độ dài mảng ban đầu.
 */

const students = [
	{ id: 1, name: "Nguyen The Han", age: 22 },
	{ id: 2, name: "Duong Truong Giang", age: 22 },
	{ id: 3, name: "Huan rose", age: 18 },
	{ id: 4, name: "Nguyen Trung Nguyen", age: 129 },
	{ id: 4, name: "Le Minh Hieu", age: 221 },
];

/**
 * * trả về mảng mới với tất cả các phần tử thêm 1 cặp key-value: "role": "student"
 */

const newArr = students.map((item) => ({ ...item, role: "students" }));

console.log(newArr);

const products = [
	{ id: 1, name: "tomato", price: 2, quantity: 10 },
	{ id: 2, name: "kiwi", price: 4, quantity: 4 },
];

/**
 * const productsAmount = [
	{ id: 1, name: "tomato", price: 2, quantity: 10, amount: 20 },
	{ id: 2, name: "kiwi", price: 4, quantity: 4, amount: 16 },
];
 */

const newProducts = products.map((item) => ({ ...item, amount: item.price * item.quantity }));

console.log(newProducts);

// console.log(
// 	products.map((item) => {
// 		console.log(item);
// 	})
// );
