/**
 * * Object:
 * * Enhandced Object
 * * Computed Property
 * *
 *
 * Object, Array:
 * * Destructuring
 * * Rest
 * * Spread
 */

const name = "fullname";
let age = 33;
let address = "HN";

const obj1 = {
	[name]: "Hoang Nguyen",
	age,
	address, // shorthand property
	sayHello() {
		console.log("hello");
	}, // enhandced
};

console.log(obj1);
