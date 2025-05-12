const arr1 = [
	{ id: 1, name: "Hoang" },
	{ id: 2, name: "Dong" },
];

const str1 = JSON.stringify(arr1);
console.log(str1);
console.log(typeof str1);

console.log(JSON.parse(str1));

// * JavaScript Object Notation

const products = [{ id: 1, name: "iphone", price: 2000 }];

localStorage.setItem("products", JSON.stringify(products));

const studentManager = {
	students: [],
	addStudent: function (student) {
		this.students.push(student);
	},
	test1: null,
	test2: undefined,
	test3: NaN,
	// test4: 10000n,
};

console.log(JSON.stringify(studentManager));

/**
 * * JSON:
 * * - không xử lý được function,
 * * - không lưu thuộc tính có value là undefined.
 * * - NaN khi lưu được convert thành null
 */
