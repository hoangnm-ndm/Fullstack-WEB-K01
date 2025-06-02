import axios from "axios";

const api = axios.create({
	// baseURL: "https://codefarm-json-server-web01-6mnx.onrender.com/",
	baseURL: "http://localhost:3000",
	headers: {
		"Content-Type": "application/json",
	},
});

export const createTask = (taskData) => api.post("/tasks", taskData);
export const getTasks = (queryString = "") => api.get(`/tasks?${queryString}`);
export const getTask = (id) => api.get(`/tasks/${id}`);
export const deleteTask = (id) => api.delete(`/tasks/${id}`);
export const updateTask = (id, taskData) => api.patch(`/tasks/${id}`, taskData);

export default api;
