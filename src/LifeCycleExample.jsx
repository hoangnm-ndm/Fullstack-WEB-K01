import React, { useEffect, useState } from "react";

const url = "https://dummyjson.com/products";

const LifeCycleExample = () => {
	const [products, setProducts] = useState([]);
	const [limit, setLimit] = useState(4);
	const fetchAPI = async () => {
		try {
			const res = await fetch(`${url}?limit=${limit}&skip=0`);
			const data = await res.json();
			console.log(data);
			setProducts(data.products);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchAPI();
	}, [limit]);

	const handleLoadMore = () => {
		setLimit(limit + 4);
	};

	// console.log("Component được sinh ra");
	// useEffect(() => {
	// 	console.log("Ngay sau khi component được render");
	// 	return () => {
	// 		console.log("Chạy ngay trước khi component bị gỡ");
	// 	};
	// }, []);
	return (
		<>
			<h2>test</h2>
			<div>
				{products.map((item) => (
					<div key={item.id}>
						<p>{item.id}</p>
						<h2>{item.title}</h2>
					</div>
				))}
			</div>
			<button onClick={handleLoadMore}>Xem them</button>
		</>
	);
};

export default LifeCycleExample;
