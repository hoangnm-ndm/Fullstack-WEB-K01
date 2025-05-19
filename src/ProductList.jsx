import React from "react";
import useQueryParams from "./hooks/useQueryParams";

// * Tách các logic filter ra. Component chỉ làm công việc của UI.
/**
 * * Phân trang
 * * Tìm trang
 * * Sắp xếp theo giá
 * * Lọc theo rate
 */

const ProductList = () => {
	const [products, loading, error] = useQueryParams("products", params);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>{error}</div>;

	return (
		<div>
			<h1>Danh sach san pham</h1>
			{/* <span>Hiển thị</span>
			<select name="limit" id="limit" onChange={handleLimit}>
				<option value="12">12</option>
				<option value="20">20</option>
				<option value="50">50</option>
				<option value="194">all</option>
			</select>
			<span> sản phẩm</span> */}
			<div>
				{products.map((item) => (
					<div key={item.id}>
						{item.id} - {item.title}
					</div>
				))}
			</div>
			{/* <button onClick={() => handlePage("preview")}>preview</button>
			<span>{page}</span>
			<button onClick={() => handlePage("next")}>next</button> */}
		</div>
	);
};

export default ProductList;
