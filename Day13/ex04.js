/**
 * * Viết một hàm khởi tạo/Object giỏ hàng `Cart` có đầu vào là userId, products(array) có các tính năng sau:

* *- Viết phương thức `calc()` cho Cart giúp trả về tổng gía trị đơn hàng.
* * - Viết phương thức `checkout()` cho Cart để xoá toàn bộ sản phẩm.
 */

const products = [
	{ id: 1, name: "tao", price: 10, quantiy: 1 },
	{ id: 2, name: "bia dau", price: 5, quantiy: 4 },
];

function Cart(userId, products) {
	this.userId = userId;
	this.products = products;
}

Cart.calc = function () {
	let total = 0;
	for (let i = 0; i < this.products.length; i++) {
		total += this.products.price * this.products.quantiy;
	}
	return total;
};
const cartOfHoang = new Cart("123", products);

console.log(Cart.calc());

cartOfHoang.calc = function () {
	let total = 0;
	for (let i = 0; i < this.products.length; i++) {
		total += this.products.price * this.products.quantiy;
	}
	return total;
};

console.log(cartOfHoang.calc());
