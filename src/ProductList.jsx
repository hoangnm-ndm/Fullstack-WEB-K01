import React, { useEffect, useState } from "react";
import useGetList from "./hooks/useGetList";

// * Tách các logic filter ra. Component chỉ làm công việc của UI.

const ProductList = () => {
	const [list] = useGetList("products");

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
				{list &&
					list.products.map((item) => (
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
