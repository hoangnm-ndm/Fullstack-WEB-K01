/**
 * * filter()
 */

const arr = [1, 2, 3, 4, 9, -1, 100];

const result = arr.filter((item, index, arr) => item < 5);

console.log(result);

/**
 * * Loc nhung students <= 20 year old
 */

const students = [
	{ id: 1, name: "Nguyen The Han", age: 22 },
	{ id: 2, name: "Duong Truong Giang", age: 22 },
	{ id: 3, name: "Huan rose", age: 18 },
	{ id: 4, name: "Nguyen Trung Nguyen", age: 129 },
	{ id: 4, name: "Le Minh Hieu", age: 221 },
];

const newStudents = students.filter((item) => item.age >= 100);
console.log(newStudents);
console.log(students);
