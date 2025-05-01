const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", function () {
	event.preventDefault();
	const formData = new FormData(this);
	const userInfor = Object.fromEntries(formData);
	// Call API:
	console.log(userInfor);
	this.reset();
});
