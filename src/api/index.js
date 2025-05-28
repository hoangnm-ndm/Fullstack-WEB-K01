import axios from "axios";

// * "https://dummyjson.com/products"
const api = axios.create({
	baseURL: "https://codefarm-json-server-web01-6mnx.onrender.com/",
	headers: {
		"Content-Type": "application/json",
	},
});

export default api;
