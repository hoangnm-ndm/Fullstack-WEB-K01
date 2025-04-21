/**
 * * Spam message
 * * cứ mỗi 3s thì thêm một dòng "I love you" vào trang web.
 *
 * */

setInterval(() => {
	let pElement = document.createElement("p"); // * #0fgh34
	pElement.innerText = "I love you";
	document.body.appendChild(pElement);
}, 1000);

// console.log({ textNode: "i love you" } === { textNode: "i love you" });
