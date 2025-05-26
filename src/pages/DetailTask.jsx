import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getTask } from "../api";

const DetailTask = () => {
	const { id } = useParams();
	const [task, setTask] = useState({});

	useEffect(() => {
		async function fetchTask(id) {
			try {
				const res = await getTask(id);
				setTask(res.data);
			} catch (error) {
				console.log(error);
				toast.error("Failed");
			}
		}
		fetchTask(id);
	}, [id]);
	return (
		<div>
			<h1>{task.title}</h1>
			<p>Priority: {task.priority}</p>
			<p>Completed: {task.completed ? "Done" : "Active"}</p>
			<p>Chi tiết: {task.description}</p>
		</div>
	);
};

export default DetailTask;
