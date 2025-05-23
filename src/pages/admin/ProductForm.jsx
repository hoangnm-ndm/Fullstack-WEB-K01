import React, { useState } from "react";
import styled from "@emotion/styled";
import { createProduct } from "../../api/productApi";

const Form = styled.form`
	padding: 24px;
	margin: 0 auto;
	border: 1px solid #ccc;
	border-radius: 8px;
	box-shadow: 0 0 12px rgba(0, 0, 0, 0.5);
	width: 400px;
	max-width: 100%;
`;

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
			<Form action="" onSubmit={handleSubmit}>
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
			</Form>
		</>
	);
};

export default ProductForm;
