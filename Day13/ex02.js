function Person(name, age) {
	this.name = name;
	this.age = age;
	this.hello = function () {
		console.log(`xin chao, minh la ${this.name}`);
	};
}

const hoang = new Person("Nguyen Minh Hoang", 33);
const huy = new Person("Hoang Thanh Huy", 33);
huy.hello = function () {
	console.log(`hello, my name is ${this.name}`);
};

console.log(hoang.hello() === huy.hello()); // true
console.log(huy);
console.log(hoang);
console.log({ Person });

huy.hello();

// Person.hello(); // error
