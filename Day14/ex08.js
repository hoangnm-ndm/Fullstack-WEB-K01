/**
 * * In ra cac so tu 1 den n sử dụng đệ quy
 */

// for (let i = 1; i <= 10; i++) {
// 	console.log(i);
// }

function printNumber(n) {
	let i = n - 1;
	if (n > 1) {
		printNumber(n - 1);
	}
	console.log(i);
}

function printNumber2(n) {
	if (n < 1) return;
	printNumber2(n - 1);
	console.log(n);
}

printNumber(5);
printNumber2(5);

/**
 * function printNumber(n)
 * * Bước 1: Kiểm tra n >=1 thì in n
 * * Bước 2: giảm n đi 1
 * * Bước 3: Gọi lại printNumber(n) - n lúc này đã giảm
 */
