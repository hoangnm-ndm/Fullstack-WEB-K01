import React from "react";
import { Link } from "react-router-dom";

const ProductListPage = () => {
	return (
		<div>
			<h1>Quan ly san pham</h1>
			<Link to="add">Add Product</Link>
		</div>
	);
};

export default ProductListPage;
