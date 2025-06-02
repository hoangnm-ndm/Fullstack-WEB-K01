import React, { useContext, useEffect, useState } from "react";
import { getProductList } from "../api/product";
import { CartContext } from "../contexts/CartContext";

const ProductListPage = () => {
	const [products, setProducts] = useState([]);
	const { dispatch } = useContext(CartContext);
	useEffect(() => {
		(async () => {
			try {
				const res = await getProductList();
				setProducts(res.data);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);

	const handleAddToCart = (product) => {
		dispatch({ type: "ADD_TO_CART", payload: { ...product, quantity: 1 } });
	};
	return (
		<div>
			{products.map((item) => (
				<div key={item.id}>
					<h2>{item.title}</h2>
					<p>{item.price}</p>
					<button onClick={() => handleAddToCart(item)}>add to cart</button>
				</div>
			))}
		</div>
	);
};

export default ProductListPage;
