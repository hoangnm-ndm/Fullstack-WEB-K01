/**
 * * Input: có gì? kiểu dữ liệu là gì? có cần kiểm tra không?
 * * Output: có gì? kiểu dữ liệu là gì?
 * * Chọn giải thuật, phân tách các bước.
 * * Tìm phương thức phù hợp để thực hiện từng bước.
 * * Bắt tay vào code.
 */

function encodeRLE(str) {
	let count = 1;
	let result = "";
	for (let i = 0; i < str.length; i++) {
		// 2
		if (str[i] === str[i + 1]) {
			count++;
		} else {
			result += count + str[i];
			count = 1;
		}
	}
	return result;
}
let str = "aaaabbbcccc";
console.log(encodeRLE(str));

Array.prototype.reduce();
