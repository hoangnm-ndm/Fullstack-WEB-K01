/**
 * * Event
 * * Các cách gắn sự kiện
 * * 1. Gắn lời gọi hàm vào attribute của thẻ html
 * * 2. Dùng JS để gắn hàm xử lý sự kiện
 * * 3. Dùng eventListener (có thể gắn nhiều hàm lắng nghe sự kiện cho cùng một phần tử.)
 */

// const btnElement = document.getElementById("btn");
// console.log({ btn });

// console.log(btnElement.onclick);
// btnElement.onclick = () => console.log("xin chao");
// btnElement.addEventListener("click", function () {
// 	console.log("bonjou!");
// });
// btnElement.addEventListener("click", function () {
// 	console.log("konbanwa!");
// 	console.log(event);
// });

const inputElement = document.getElementsByName("email")[0];
console.log(inputElement);
// inputElement.onchange = function () {
// 	console.log(event.target);
// 	console.log("onchange");
// };

inputElement.oninput = function () {
	console.log(event.target.value);
	// console.log("oninput");
};

/**
 * * Tìm hiểu trước: sự kiện bắt và sự kiện nổi bọt, form và làm việc với form.
 * * event capture, event bubble
 */
