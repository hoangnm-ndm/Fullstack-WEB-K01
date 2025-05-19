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

const useFetchListWithParams = (path, params) => {
	const [list, setList] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const fetchList = async () => {
		try {
			setLoading(true);
			let paramsString = new URLSearchParams(params).toString();
			paramsString = paramsString.replace("search", "search?q");
			console.log(paramsString);
			const { data } = await api.get(`${path}/${paramsString}`);
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
	}, [params.limit, params.page]);
	return [list, loading, error];
};

export default useFetchListWithParams;
