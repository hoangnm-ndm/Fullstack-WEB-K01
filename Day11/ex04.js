const arr = ["Apple", "Orange", "Banana", "kiwi"];

/**
 * * Tìm và in ra trái cây có tên dài nhất, tên ngắn nhất.
 * * Nếu phần tử có độ dài bằng nhau thì lấy phần tử đầu tiên tìm được.
 */

let maxLength = arr[0];
let minLength = arr[0];

for (let i = 0; i < arr.length; i++) {
	/**
	 * ! Giải thuật:
	 * * 1. Gán phần tử 0 là phần tử có tên dài nhất, hoặc ngắn nhất.
	 * * 2. So sánh độ dài của phần tử thứ i với phần tử maxLength. Nếu dài hơn thì gán lại maxLength
	 */

	if (maxLength.length < arr[i].length) {
		maxLength = arr[i];
	}
	if (minLength.length > arr[i].length) {
		minLength = arr[i];
	}
}

console.log(maxLength);
console.log(minLength);
