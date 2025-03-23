/**
 * ! 1. Lập trình là giải quyêt bài toán của cuộc sống.
 * * Đối tượng: -> sự vật, hiện tượng trong cuộc sống.
 * * Sự kiện: -> hành vi xảy ra.
 * * Hàm; -> Chức năng, chuỗi hành động.
 */

/**
 * ! Hàm:
 * * Input:
 * * Output:
 * * logic hàm: (giải thuật)
 */

/**
 * 1. Tính tái sử dụng cao
 * 2. Đóng gói
 */

/**
 * * input: number
 * * output: boolean
 * * logic: kiểm tra chia hết cho 2
 */

function checkEven(number) {
	// ! validation.
	if (number % 2 === 0) {
		return true;
	}
	return false;
}

// console.log(checkEven(199));

/**
 * input: number
 * output: boolean
 * ! logic: kiểm tra number chỉ chia hết cho 1 và chính nó.
 */

function checkPrimeNumber(number) {
	// ! validation
	for (let i = 2; i < number; i++) {
		if (number % i === 0) {
			return false;
		}
		// ! Kiểm tra xem number có chia hết cho i không? ->
		return true;
		// console.log("hello");
	}
}

console.log(checkPrimeNumber(10));
console.log(checkPrimeNumber(7));
console.log(checkPrimeNumber(11));
console.log(checkPrimeNumber(23));

/**
 * * Hàm không có return thì trả về undefined.
 * * Logic sau return sẽ không được thực hiện
 */

/**
 * ! BTVN:
 * Làm task 09, 10, 11, 12
 */
