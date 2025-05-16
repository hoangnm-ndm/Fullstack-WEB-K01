import React, { useEffect, useState } from "react";

const url = "https://dummyjson.com/products";

const ProductList = () => {
	const [products, setProducts] = useState([]);
	const [page, setPage] = useState(1);
	const fetchAPI = async () => {
		const res = await fetch(`${url}?limit=2&skip=${(page - 1) * 2}`);
		const data = await res.json();
		setProducts(data.products);
	};
	useEffect(() => {
		// * logic fetch API
		fetchAPI();
	}, [page]);

	const handlePage = (data) => {
		console.log(data);
		// * logic handle page
	};
	return (
		<div>
			<h1>Danh sach san pham</h1>
			<div>
				{products.map((item) => (
					<div key={item.id}>{item.title}</div>
				))}
			</div>
			<button onClick={() => handlePage("preview")}>preview</button>
			<span>{page}</span>
			<button onClick={() => handlePage("next")}>next</button>
		</div>
	);
};

export default ProductList;
