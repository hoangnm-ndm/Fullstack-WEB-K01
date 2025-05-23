import React, { useState } from "react";
import { createProduct } from "../../api/productApi";
import FormCommon from "../../components/FormCommon";

const initFormData = {
	title: "",
	description: "",
};

const ProductForm = () => {
	const [formData, setFormData] = useState(initFormData);

	const handleChange = (e) => {
		const { name, value } = e.target;
		// * validation ở đây
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};
	const handleSubmit = async (event) => {
		event.preventDefault();
		// * Gửi dữ liệu lên server.
		console.log(formData);
		try {
			const data = await createProduct(formData);
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<>
			{/* <h1>Add Product</h1> */}
			<FormCommon handleSubmit={handleSubmit}>
				<div className="mb-3">
					<label className="form-label" htmlFor="" name="title">
						Title
					</label>
					<input
						className="form-control"
						name="title"
						type="text"
						placeholder="Product name"
						value={formData.title}
						onChange={handleChange}
					/>
				</div>

				<div className="mb-3">
					<label className="form-label" htmlFor="" name="description">
						Description
					</label>
					<input
						className="form-control"
						name="description"
						type="text"
						placeholder="Product description"
						value={formData.description}
						onChange={handleChange}
					/>
				</div>
				<div className="mb-3">
					<button className="btn btn-primary w-100">Add Product</button>
				</div>
			</FormCommon>
		</>
	);
};

export default ProductForm;
