import React from "react";
import useFetchListWithParams from "./hooks/useFetchListWithParams";
import useQueryParams from "./hooks/useQueryParams";

// * Tách các logic filter ra. Component chỉ làm công việc của UI.
/**
 * * Phân trang
 * * Tìm trang
 * * Sắp xếp theo giá
 * * Lọc theo rate
 */

const ProductList = () => {
	const [params, updateParams, resetParams] = useQueryParams({
		search: "",
		skip: 0,
		limit: 12,
		sortBy: "price",
		order: "asc",
	});
	const [products, loading, error] = useFetchListWithParams("products", params);

	const handlePage = (newPage) => {
		updateParams({ ...params, skip: (newPage - 1) * params.limit });
	};

	const handleLimit = (newLimit) => {
		updateParams({ ...params, limit: newLimit });
	};

	const handleSort = (sortBy, order) => {
		updateParams({ ...params, sortBy, order });
	};

	if (loading) return <div>Loading...</div>;
	if (error) return <div>{error}</div>;

	return (
		<div>
			<h1>Danh sach san pham</h1>
			<span>Hiển thị</span>
			<select name="limit" id="limit" onChange={handleLimit}>
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
			<button onClick={() => handlePage(params.page - 1)}>preview</button>
			<span>{params.skip / params.limit + 1}</span>
			<button onClick={() => handlePage(params.page + 1)}>next</button>
		</div>
	);
};

export default ProductList;
