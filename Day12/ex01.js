const myInfor = {
	fullname: "Nguyen Minh Hoang",
	age: 33,
	address: "Hoai Duc",
	showAge: () => {
		console.log(this.age);
	},
	showName: function () {
		console.log(`my name is ${this.fullname}`);
	},
	// showAddress: setTimeout(() => {
	// 	console.log(this.address);
	// }, 3000),
	showAddress: function () {
		setTimeout(function () {
			console.log(this.address);
		}, 3000);
	},
};

// console.log(myInfor);
// myInfor.showAge();
// myInfor.showName();
myInfor.showAddress();

// console.log(
// 	setTimeout(() => {
// 		console.log("alo");
// 	}),
// 	3000
// );

/**
 * ! arrow function khong có context riêng.
 */
