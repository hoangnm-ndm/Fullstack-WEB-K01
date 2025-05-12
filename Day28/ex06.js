// * pending, fulfilled, rejected

const rs1 = fetch("https://dummyjson.com/products")
	.then((res) => res.json())
	.then((data) => data);
const rs2 = fetch("https://dummyjson.com/carts")
	.then((res) => res.json())
	.then((data) => data);
const rs3 = fetch("https://dummyjson.com/products/1000")
	.then((res) => res.json())
	.then((data) => data);

Promise.all([rs1, rs2, rs3]).then((values) => console.log(values));
Promise.race([rs1, rs2, rs3]).then((values) => console.log(values));
