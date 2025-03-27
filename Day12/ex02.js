const myInfor = {
	name: "Hoang",
	email: "thayhoangjs@gmail.com",
	position: "Chủ tịch",
};

myInfor.address = "BG";

myInfor.address = "HN";

// myInfor.pop("address");
delete myInfor.name;

console.log(myInfor);

/**
 * ! Thêm, sửa, xoá key-value của object
 */

// for (let i = 0; i < myInfor.length; i++) {
// 	console.log(i);
// } // sai

// console.log(myInfor.length); // sai

console.log(Object.keys(myInfor));
console.log(Object.values(myInfor));
console.log(Object.entries(myInfor));

for (key in myInfor) {
	console.log(key);
}

// for (key of myInfor) {
// 	console.log(key);
// } // for...of chi hoat dong voi array
