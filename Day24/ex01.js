/**
 * * Có ? cách để gắn sự kiện?
 * * 1. Gắn sự kiện bằng attribute HTML
 * * 2. Dùng JS để gắn sự kiện.
 * * 3. Dùng eventListener()
 */

const btnElement = document.getElementById("btn");

function handleClick(event) {
	console.log(event);
}
btnElement.onclick = handleClick;
