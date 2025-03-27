const obj1 = {
	myInfor: {
		name: "Hoang",
	},
};

const obj2 = obj1;

/**
 * ! Thay doi obj1, thi co thay doi obj2 khong?
 */

const obj3 = { ...obj1 };

/**
 * ! Thay doi obj1, thi co thay doi obj3 khong?
 */

obj1.address = "BG";

console.log(obj3);

console.log(obj3 === obj1); // false
console.log(obj3.myInfor === obj1.myInfor); // true

// ! reference

/**
 * Shallow copy
 * Deep copy
 */

/**
 * JS có reference types: object, array, function.
 * JS khong co: pass by reference
 */
