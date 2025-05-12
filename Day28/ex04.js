fetch("https://dummyjson.com/products")
	.then((res) => {
		return res.json();
	})
	.then((data) => {
		console.log(data.products);
		document.write(JSON.stringify(data.products));
	})
	.catch((err) => console.log(err));

// const Response = {
// 	body: "...",
// 	bodyUsed: "...",
// 	ok: true,
// 	data: '{products: [{id: 1, name: "san pham a"}]}',
// 	//...
// };

// Response.prototype.json = function () {
// 	// this.data -> data
// };
