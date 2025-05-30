import React from "react";
import useQuery from "../../hooks/useQuery";
import useFetchList from "../../hooks/useFetchList";

const CategoriesPage = () => {
	const [query, updateQuery, resetQuery] = useQuery({
		q: "",
		page: 1,
		limit: 12,
		sortBy: "price",
		order: "asc",
	});
	const [products, loading, error] = useFetchList("products", query);

	const handlePage = (newPage) => {
		updateQuery({ ...query, page: newPage });
	};

	const handleLimit = (e) => {
		updateQuery({ ...query, limit: e.target.value });
	};

	const handleSort = (sortBy, order) => {
		updateQuery({ ...query, sortBy, order });
	};

	if (loading) return <div>Loading...</div>;
	if (error) return <div>{error}</div>;

	return (
		<div>
			<h1>Danh sach san pham</h1>
			<span>Hiển thị</span>
			<select name="limit" id="limit" onChange={handleLimit} value={query.limit}>
				<option value="12">12</option>
				<option value="20">20</option>
				<option value="50">50</option>
				<option value="194">all</option>
			</select>
			<span> sản phẩm</span>
			<div>
				{products.map((item) => (
					<div key={item.id}>
						{item.id} - {item.title} - {item.price}
					</div>
				))}
			</div>
			<button onClick={() => handlePage(query.page - 1)}>preview</button>
			<span>{query.page}</span>
			<button onClick={() => handlePage(query.page + 1)}>next</button>
		</div>
	);
};

export default CategoriesPage;
