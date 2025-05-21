import { useEffect, useState } from "react";
import api from "../api";

const useFetchList = (path, query) => {
	const [list, setList] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const fetchList = async () => {
		try {
			setLoading(true);
			console.log(query);
			const skip = (query.page - 1) * query.limit;
			query.skip = skip;
			let queryString = new URLSearchParams(query).toString();
			const { data } = await api.get(`${path}/search?${queryString}`);
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
	}, [query.limit, query.page]);
	return [list, loading, error];
};

export default useFetchList;
