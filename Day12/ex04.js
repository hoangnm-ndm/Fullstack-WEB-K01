/**
 * ! Có ? cách tạo ra 1 Object?
 */

// * Object literal

const obj1 = {};

// * Dùng hàm khởi tạo có sẵn (Object)

const obj2 = new Object({ name: "A" });

// * Dùng Factory Function

function Motor(name, color, price, brand) {
	return {
		name,
		color,
		price,
		brand,
	};
}

const motor1 = Motor("Jupiter", "yellow", 25000000, "yamaha");
const motor2 = Motor("SH", "White", 25000000, "Honda");

console.log(motor1);
console.log(motor2);

// * Constructor function

function Otor(name, price) {
	this.name = name;
	this.price = price;
}

const Otor1 = new Otor("VF3", 250000000);
console.log(Otor1);

// *  Class
class Oto2 {
	constructor(name, price) {
		this.name = name;
		this.price = price;
	}
}
