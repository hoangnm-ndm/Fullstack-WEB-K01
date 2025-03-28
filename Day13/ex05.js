function Person(name, age) {
	this.name = name;
	this.age = age;
}

// Thêm phương thức tĩnh
Person.sayHello = function () {
	console.log("Hello from Person class!");
};

// Gọi phương thức tĩnh
Person.sayHello(); // ✅ "Hello from Person class!"

// Không thể gọi từ instance
let p1 = new Person("Alice", 25);
console.log(p1.sayHello); // ❌ undefined
