import { useEffect, useState } from "react";
import api from "../api";

/**
 * * input: url, limit, skip
 * * output: list
 */

// * products
// * users

// * https://dummyjson.com/products/search?q=apple&sortBy=price&order=asc&limit=30&skip=0

// * const params = {
// * 	seach: "",
// * 	sort: "price",
// * 	order: "asc",
// * 	limit: 12,
// * 	skip: 0,
// * };

const useQueryParams = (path, params = {}) => {
	const [params, setParams] = useState(params);
	const [list, setList] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const fetchList = async () => {
		try {
			setLoading(true);
			console.log(`${path}?limit=${limit}&skip=${skip}`);
			const { data } = await api.get(`${path}?limit=${limit}&skip=${skip}`);
			setList(data[path]);
			setLoading(false);
		} catch (error) {
			setLoading(false);
			setError(error.message || "Failed!");
			console.log(error);
		}
	};

	useEffect(() => {
		fetchList();
	}, [limit, skip]);
	return [list, loading, error];
};

export default useQueryParams;
