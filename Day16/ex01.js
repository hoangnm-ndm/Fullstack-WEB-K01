/**
 * 1. forEach
 * 2. find
 * 3. filter
 * 4. map
 * 5. some
 * 6. every
 * 7. sort
 * 8. reduce
 */

const animals = ["dog", "cat", "mouse", "đóm"];

/**
 * * forEach callback:
 * * input: item, index, array
 * * output: callback không return (undefined)
 */
const result = animals.forEach((item, index, aaa) => {
	console.log(item);
	console.log(index);
	return "hello";
});
console.log(result);

/**
 * * In ra danh sách các loài vật dạng bảng với gợi ý đã cho
 */

function printAnimals(animals) {
	let content = /*html*/ `<table>
			<thead>
				<tr>
					<th>ID</th>
					<th>Tên loài</th>
				</tr>
			</thead>
			<tbody>`;
	// logic
	Array.isArray(animals) &&
		animals.forEach((item, index) => {
			// ! Cộng chuỗi
			content += `<tr>
					<td>${index + 1}</td>
					<td>${item}</td>
				</tr>`;
		});
	content += `</tbody>
		</table>`;
	document.write(content);
}

printAnimals(animals);

/**
 * * template string ``
 * * tư duy phân tách phần dữ liệu không thay đổi trong trang và phần phụ thuộc vào data.
 * * Biết dùng forEach
 * * Biết style bảng
 * * Biết kiểm tra kiểu arr
 */
