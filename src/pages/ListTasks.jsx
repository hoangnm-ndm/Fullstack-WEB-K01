import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteTask, getTasks, updateTask } from "../api/index";
import { success } from "../../node_modules/zod/dist/esm/v4/classic/schemas";
import { toast } from "react-toastify";

const ListTasks = () => {
	const [tasks, setTasks] = useState([]);

	const fetchTasks = async () => {
		try {
			const { data } = await getTasks();
			setTasks(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchTasks();
	}, []);

	const handleDelete = async (id) => {
		try {
			if (confirm("Are you sure?")) {
				await deleteTask(id);
				fetchTasks();
				toast.success("Delete successfully!");
			}
		} catch (error) {
			console.log(error);
			toast.error(error.message || "Delete failed!");
		}
	};

	const handleCompleted = async (id, completed) => {
		try {
			const res = await updateTask(id, { completed: !completed });
			console.log(res);
			fetchTasks();
			toast.success("Change status successfully");
		} catch (error) {
			console.log(error);
			toast.error("Change status failed!");
		}
	};

	return (
		<div>
			<Link className="btn btn-primary" to="/add">
				Add new task
			</Link>
			<table className="table table-striped table-bordered text-center">
				<thead>
					<tr>
						<td>No.</td>
						<td>Title</td>
						<td>
							<select className="form-select" name="priority" id="">
								<option value="">Priority</option>
								<option value="high">High</option>
								<option value="medium">Medium</option>
								<option value="low">Low</option>
							</select>
						</td>
						<td>Completed</td>
						<td>Action</td>
					</tr>
				</thead>
				<tbody>
					{tasks.map((item, index) => (
						<tr key={index}>
							<td>{index + 1}</td>
							<td>
								<Link to={`detail/${item.id}`}>{item.title}</Link>
							</td>
							<td>{item.priority}</td>
							<td>
								<button
									onClick={() => handleCompleted(item.id, item.completed)}
									className={item.completed ? "btn btn-success" : "btn btn-warning"}
								>
									{item.completed ? "completed" : "active"}
								</button>
							</td>
							<td>
								<button className="btn btn-danger" onClick={() => handleDelete(item.id)}>
									Delete
								</button>{" "}
								<Link to={`/update/${item.id}`} className="btn btn-warning">
									Update
								</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ListTasks;
