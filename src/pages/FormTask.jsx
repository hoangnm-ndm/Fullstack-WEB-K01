import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const taskSchema = z.object({
	title: z.string().min(6).max(100),
	priority: z.string(),
	completed: z.boolean().default(false),
	description: z.string().optional(),
});

const FormTask = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(taskSchema),
	});

	const onSubmit = (data) => {
		console.log(data);
	};
	return (
		<>
			<h1>Form</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="mb-3">
					<label htmlFor="">Title</label>
					<input type="text" {...register("title", { required: true })} />
					{errors.title && <span className="text-danger">{errors.title.message}</span>}
				</div>

				<div className="mb-3">
					<label htmlFor="">Description</label>
					<input type="text" {...register("description", {})} />
				</div>
				<div className="mb-3">
					<label htmlFor="">Priority</label>
					<select {...register("priority")}>
						<option value="">Priority</option>
						<option value="low">Low</option>
						<option value="medium">Medium</option>
						<option value="high">High</option>
					</select>
				</div>

				<div className="mb-3">
					<button className="btn btn-primary">Add</button>
				</div>
			</form>
		</>
	);
};

export default FormTask;
