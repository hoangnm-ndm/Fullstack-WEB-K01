const myInfor = {
	name: "Hoang",
	age: 32,
	hello: function () {
		console.log(`hello, minh la ${this.name}`);
	},
};

myInfor.hello();

/**
 * ! Phương phức tĩnh của Object
 */

console.log(Object.values(myInfor));
console.log(Object.keys(myInfor));
console.log(Object.entries(myInfor));
console.log(Object.fromEntries(Object.entries(myInfor)));

function Person(name, age) {
	this.name = name;
	this.age = age;
	this.hello = function () {
		console.log(`xin chao, minh la ${this.name}`);
	};
}

const hoang = new Person("Nguyen Minh Hoang", 33);
console.log(hoang); // instance

hoang.hello();

const huy = new Person("Hoang Thanh Huy", 33);
console.log(hoang);
console.log(huy);

console.log(hoang.hello() === huy.hello());

console.log(huy instanceof Person);
console.log({} instanceof Person);
