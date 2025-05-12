const result = fetch("https://dummyjson.com/products");

console.log(result);

console.log(Promise);

const myFetch = new Promise((resolve, reject) => {
	// * Mot so viec can thoi gian,
	console.log("dang di lam kiem tien");
	// * Neu thanh cong
	// resolve({
	// 	message: "da kiem dk tien",
	// 	how: 3000,
	// });
	// * Neu that bai
	reject("that bai");
});

myFetch
	.then((result) => {
		console.log(result);
		return result;
	})

	.then((data) => {
		if (data.how >= 5000) {
			console.log("mua nha");
		} else {
			console.log("mua tra gop");
		}
	})
	.catch((error) => console.log(error))
	// .catch((error) => console.log("ú oà"))
	.finally(() => {
		console.log("ket thuc");
		// * Cong viec can dop dep
	});
