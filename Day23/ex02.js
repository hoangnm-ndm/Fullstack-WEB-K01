const data = [
	{ id: 1, name: "Iphone 16 pro max", price: 2000 },
	{ id: 2, name: "Xiaomi red mi note 12", price: 800 },
	{ id: 3, name: "Macbook air m3 2256GB", price: 2000 },
	{ id: 4, name: "Samsung S22 Ultra", price: 1400 },
];

const products = document.getElementsByClassName("products")[0];

let maxPrice = data[0].price;
for (let i = 0; i < data.length; i++) {
	if (data[i].price > maxPrice) {
		maxPrice = data[i].price;
	}
}

// * href = "http://127.0.0.1:5501/iphone-16-pro-max-1"
/**
 * * Tạo ra một mảng sản phẩm bổ sung thuộc tính slug.
 * * Bọc thẻ h2 của sản phẩm trong thẻ a.
 * * Bổ sung href cho thẻ a với slug
 */

const newData = data.map((item) => ({
	...item,
	slug: `${item.name.toLocaleLowerCase().replaceAll(" ", "-")}-${item.id}`,
}));

newData.forEach((item) => {
	let liElement = document.createElement("li");
	liElement.innerHTML = /*html*/ `
    <a href="/${item.slug}"><h2>${item.name}</h2></a>
    <p>${item.price}</p>
  `;
	if (item.price === maxPrice) {
		liElement.style.color = "red";
	}
	products.appendChild(liElement);
});
