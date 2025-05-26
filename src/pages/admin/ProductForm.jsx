import React from "react";
import { useForm } from "react-hook-form";
import { createProduct } from "../../api/productApi";
import FormCommon from "../../components/FormCommon";
import { zodResolver } from "../../../node_modules/@hookform/resolvers/zod/src/zod";
import { productSchema } from "../../validations/productSchema";

const ProductForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({ resolver: zodResolver(productSchema) });
	const onSubmit = async (data) => {
		try {
			const res = await createProduct(data);
			reset();
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
					{errors?.title && <span className="text-danger">{errors.title.message}</span>}
				</div>

				<div className="mb-3">
					<label className="form-label">Price</label>
					<input className="form-control" {...register("price", { valueAsNumber: true })} />
					{errors?.price && <span className="text-danger">{errors.price.message}</span>}
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
