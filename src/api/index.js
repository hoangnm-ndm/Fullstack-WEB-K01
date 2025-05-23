import axios from "axios";

// * "https://dummyjson.com/products"
const api = axios.create({
	baseURL: "http://localhost:3000",
	headers: {
		"Content-Type": "application/json",
	},
});

export default api;
