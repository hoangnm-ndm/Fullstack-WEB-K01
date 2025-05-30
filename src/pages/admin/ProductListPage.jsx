import React from "react";
import { Link } from "react-router-dom";
import useFetchList from "../../hooks/useFetchList";

const ProductListPage = () => {
	const [list, loading, error] = useFetchList("products", {});
	console.log(list);
	return (
		<div>
			<h1>Quan ly san pham</h1>
			<Link to="add" className="btn btn-primary">
				Add Product
			</Link>
			<table className="table table-bordered table-striped text-center">
				<thead>
					<tr>
						<th>No.</th>
						<th>Name</th>
						<th>Price</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{list &&
						list.map((item, index) => (
							<tr key={item.id}>
								<td>{index}</td>
								<td>{item.title}</td>
								<td>{item.price}</td>
								<td>
									<button className="btn btn-danger">Delete</button>{" "}
									<Link className="btn btn-warning" to={`update/${item.id}`}>
										Update
									</Link>
								</td>
							</tr>
						))}
					{/* {JSON.stringify(list)} */}
				</tbody>
			</table>
		</div>
	);
};

export default ProductListPage;
