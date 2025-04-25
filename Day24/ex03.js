const username = document.getElementById("username");
const password = document.getElementById("password");

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function () {
	event.preventDefault();

	// * Cách 1:
	// const userInfor = {
	// 	username: username.value,
	// 	password: password.value,
	// };

	// * Cách 2:
	const formData = new FormData(this);
	const userInfor = Object.fromEntries(formData);
	// Call API:
	console.log(userInfor);
	this.reset();
});
