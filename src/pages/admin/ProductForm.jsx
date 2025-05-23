import React, { useState } from "react";
import { createProduct } from "../../api/productApi";
import FormCommon from "../../components/FormCommon";
import { useForm } from "react-hook-form";

const initFormData = {
	title: "",
	description: "",
};

const ProductForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();
	const onSubmit = async (data) => {
		try {
			const res = await createProduct(data);
			console.log(res);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<>
			{/* <h1>Add Product</h1> */}
			<FormCommon handleSubmit={handleSubmit(onSubmit)}>
				<div className="mb-3">
					<label className="form-label">Title</label>
					<input className="form-control" {...register("title", { required: true })} />
					{errors.title && <span className="text-danger">Title không được bỏ trống</span>}
				</div>

				<div className="mb-3">
					<label className="form-label">Description</label>
					<input className="form-control" {...register("description")} />
				</div>
				<div className="mb-3">
					<button className="btn btn-primary">Add Product</button>{" "}
					<button className="btn btn-secondary" onClick={reset}>
						Cancel
					</button>
				</div>
			</FormCommon>
		</>
	);
};

export default ProductForm;
