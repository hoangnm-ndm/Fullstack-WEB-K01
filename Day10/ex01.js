// "use strict";

// for (let i = 0; i < 5; i++) {
// 	console.log(i);
// }

/**
 * @for
 * * Bước 1: Khởi tạo biến đếm
 * * Bước 2: Kiểm tra điều kiện.
 * * Bước 3: Thực hiện công việc khi điều kiện đúng, thoát khi điều kiện sai.
 * * Bước 4: Thực hiện bước nhảy
 */

/**
 * * Viết hàm in ra các số nguyên dương chia hết cho 5 từ 1 cho đến n, n nhập từ bàn phím
 */

function divisible5(n) {
	for (let i = 1; i <= n; i++) {
		if (i % 5 == 0) {
			console.log(i);
		}
	}
}

// let n = parseInt(prompt("Nhap n nguyen duong"));

// divisible5(n);

let myName = "Hoang";
for (let i = 0; i < myName.length; i++) {
	console.log(`Ky tu thu ${i + 1} la ${myName[i]}`);
}
