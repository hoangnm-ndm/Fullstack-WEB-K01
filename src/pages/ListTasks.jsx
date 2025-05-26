import React from "react";
import { Link } from "react-router-dom";
import { deleteTask, updateTask } from "../api/index";
import { toast } from "react-toastify";
import useFetchList from "../hooks/useFetchList";
import useQuery from "../hooks/useQuery";

const ListTasks = () => {
	const [query, updateQuery, resetQuery] = useQuery();
	const [data, loading, error, fetchData] = useFetchList("tasks", query);
	const handleDelete = async (id) => {
		try {
			if (confirm("Are you sure?")) {
				await deleteTask(id);
				fetchData();
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
			fetchData();
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
					{data.map((item, index) => (
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
