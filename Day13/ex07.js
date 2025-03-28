const products = [
	{ id: 1, name: "tao", price: 10, quantiy: 1 },
	{ id: 2, name: "bia dau", price: 5, quantiy: 4 },
];

function Cart(userId, products) {
	this.userId = userId;
	this.products = products;
}

Cart.calc = function (products) {
	console.log(products);
};

const cartOfHoang = new Cart("123", products);

Cart.calc(cartOfHoang);
