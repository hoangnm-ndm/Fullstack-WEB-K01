// const myLocalStorage = {
// 	length: 0,
// 	getItem: function (key) {
// 		return this[key] || null;
// 	},
// 	setItem: function (key, value) {
// 		this[key] = value;
// 		this.length++;
// 	},
// 	removeItem: function (key) {
// 		if (this[key]) {
// 			delete this[key];
// 			this.length--;
// 		}
// 	},
// 	clear: function () {
// 		for (let key in this) {
// 			if (this.hasOwnProperty(key) && key !== "length") {
// 				delete this[key];
// 			}
// 		}
// 		this.length = 0;
// 	},
// };

// localStorage.setItem("name", "Hoang");
// sessionStorage.setItem("age", 30);

/**
 * * localStorage:
 * * - Khoảng 5MB
 * * - Không tự mất đi dù tắt máy, tắt tab hay trình duyệt.
 * * - Được quản lý theo domain, (và quản lý theo account browser)
 * * - Được dùng để lưu các thông tin có tính lâu dài duy trì qua các phiên làm việc.
 *
 * * sessionStorage:
 * * - Khoảng 5MB
 * * - Được dọn dẹp khi tắt tab hoặc người dùng hết phiên làm việc.
 * * - Được quản lý theo tab.
 * * - Dùng để lưu những dữ liệu có tính tạm thời của tab cho người dùng như các bước nhập form,
 */
