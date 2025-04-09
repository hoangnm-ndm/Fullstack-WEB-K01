const arr = [1, 5, 100, 12, 10 - 1, "hoang", "anh", "yen", null, NaN, "", , , 100];

/**
 * * Sắp xếp lại mảng arr với các số từ bé đến lớn và xếp trước, sau đó đếm chuỗi xếp theo a-z, các falsy values để cuối mảng, bỏ qua các empty values.
 */

/**
 * * Bước 1: loại bỏ mảng thưa
 * * Bước 2:
 * * - switch case để phân loại và sắp xếp cho từng case.
 * * - Tạo ra 3 mảng con và sắp xếp lại 3 mảng con này (number, string, falsy values)
 * * Bước 3:
 * *   trả về kết quả
 */

function mixSort(arr) {
	const arrCopy = arr.flat(1);
	const stringArr = [];
	const numberArr = [];
	const falsyValuesArr = [];
	arrCopy.forEach((element) => {
		if (!element) {
			falsyValuesArr.push(element);
		} else if (typeof element === "string" && element !== "") {
			stringArr.push(element);
		} else {
			numberArr.push(element);
		}
	});

	return [...numberArr.sort((a, b) => a - b), ...stringArr.sort(), ...falsyValuesArr];
}

console.log(mixSort(arr));
