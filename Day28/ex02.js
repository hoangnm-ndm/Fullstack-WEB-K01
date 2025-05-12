const themeElement = document.getElementById("theme");

//* checkbox thay doi theme sang toi, va luu lua chon cua nguoi dung vao localStorage moi khi thay doi.

themeElement.addEventListener("click", function () {
	const checked = event.target.checked;
	/**
	 * * Bước 1: Từ thông tin checked quyết định có gắn class dark-mode vào body hay không?
	 * * Bước 2: Cập nhật storage
	 */

	if (checked) {
		document.body.classList.add("dark-mode");
		localStorage.setItem("theme", "dark-mode");
	} else {
		document.body.classList.remove("dark-mode");
		localStorage.setItem("theme", "light-mode");
	}
});

// * Bước 3: set value mặc định cho checked lấy từ storage ra để mỗi lần vào trang web, tuỳ chọn theme mode của người dùng được áp dụng

let checked = localStorage.getItem("theme") || "light-mode";

checked ? document.body.classList.add("dark-mode") : document.body.classList.remove("dark-mode");
