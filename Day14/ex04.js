/**
 * ! shallow copy
 * 1. Array
 * 2. Object
 */

const arr1 = [1, 2, 3];

const arr2 = [...arr1];

const copyFalse = arr1; // sai

const arr3 = [].concat(arr1);
console.log(arr2, arr3);

console.log(arr1 === arr3);

const obj1 = {
	name: "hoang",
	infor: {
		age: 33,
		sex: "male",
	},
};

const obj2 = { ...obj1 };

obj1.name = "Dong"; // thay doi obj1
obj1.infor.sex = "female"; // thay doi ca 2

console.log("obj1: ", obj1);
console.log("obj2: ", obj2);
