let myName = "Hoang";

// * truy cập chuỗi

console.log(myName.charAt(0)); // return string

console.log(myName[0]); // string/undefined

// ! Cập nhật/xoá 1 phần chuỗi không được (primitive type)

// myName = "CodeFarm";

myName[0] = "h";

delete myName[0];
console.log(myName);

// * Vòng lặp qua chuỗi

for (let i = 0; i < myName.length; i++) {
	console.log(myName[i]);
}

// * Chuyển đổi sang kiểu chuỗi.

let age = 100;
console.log(age.toString());
console.log(age + "");
