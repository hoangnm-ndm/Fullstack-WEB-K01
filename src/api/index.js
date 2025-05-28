import axios from "axios";

// * "https://dummyjson.com/products"
const api = axios.create({
	baseURL: "https://codefarm-json-server-web01-6mnx.onrender.com/",
	headers: {
		"Content-Type": "application/json",
	},
});

api.interceptors.request.use(
	function (config) {
		console.log(config);
		const accessToken = localStorage.getItem("accessToken");
		if (accessToken) {
			config.headers.Authorization = `Bearer ${accessToken}`;
		}
		console.log(config);
		return config;
	},
	function (error) {
		return Promise.reject(error);
	}
);

export default api;
