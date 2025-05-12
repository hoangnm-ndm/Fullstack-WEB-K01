const productsEle = document.getElementById("products");
const previewEle = document.getElementById("preview");
const nextEle = document.getElementById("next");
const currentPageEle = document.getElementById("current-page");

// * https://dummyjson.com/products?limit=4&skip=0
let page = 1;
let limit = 12;
let skip = (page - 1) * limit;
let totalProducts;

const fetchProducts = async (limit = 12, skip = 0) => {
	try {
		const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
		const { products, total } = await res.json();
		totalProducts = total;
		renderUI(products);
	} catch (error) {
		console.log(error);
	}
};

const renderUI = (products) => {
	productsEle.innerHTML = "";
	products.forEach((product) => {
		const productEle = document.createElement("div");
		productEle.classList.add("product");
		productEle.innerHTML = `
            <img src="${product.thumbnail}" alt="${product.title}" />
            <h3>${product.title}</h3>
            <p>Price: $${product.price}</p>
        `;
		productsEle.appendChild(productEle);
	});
};

fetchProducts();

currentPageEle.innerText = page;

previewEle.addEventListener("click", function () {
	// * giảm 1 page. page--
	if (page > 1) {
		page--;
		currentPageEle.innerText = page;
		skip = (page - 1) * limit;
		fetchProducts(limit, skip);
	}
});

nextEle.addEventListener("click", function () {
	// * tăng 1 page. page++
	pageMax = totalProducts / limit;
	if (page < pageMax) {
		page++;
		currentPageEle.innerText = page;
		skip = (page - 1) * limit;
		fetchProducts(limit, skip);
	}
});
