const data = [
	{ id: 1, name: "Iphone 16 pro max", price: 2000 },
	{ id: 2, name: "Xiaomi red mi note 12", price: 800 },
	{ id: 3, name: "Macbook air m3 2256GB", price: 2000 },
	{ id: 4, name: "Samsung S22 Ultra", price: 1400 },
];

// * đưa danh sách sản phẩm ra màn hình, sản phẩm nào có giá cao nhất thì tô đỏ thông tin của sản phẩm đó (nếu nhiều sản phẩm đều có giá cao nhất thì tô đỏ tất cả).

/**
 * * Bước 1: lấy một phần tử (products) trong DOM ra (để đưa các phần tử con vào)
 * * Bước 2: Tìm sản phẩm có giá cao nhất.
 * * Bước 3: khởi tạo content (string) từ data cho trước (style riêng cho sản phẩm có giá cao nhất).
 * * Bước 4:
 * * - products.innerHTML = content (content là chuỗi) hoặc
 * * - products.appendChild(content) (content phải là element node)
 */

const products = document.getElementsByClassName("products")[0];

let maxPrice = data[0].price;
for (let i = 0; i < data.length; i++) {
	if (data[i].price > maxPrice) {
		maxPrice = data[i].price;
	}
}

data.forEach((item) => {
	let liElement = document.createElement("li");
	liElement.innerHTML = `
    <h2>${item.name}</h2>
    <p>${item.price}</p>
  `;
	if (item.price === maxPrice) {
		liElement.style.color = "red";
	}
	products.appendChild(liElement);
});

/**
 * classList
 * attribute
 * textNode
 * event
 * form
 */
