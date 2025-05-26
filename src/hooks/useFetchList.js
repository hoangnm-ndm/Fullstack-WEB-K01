import { useEffect, useState } from "react";
import api from "../api";

const useFetchList = (path, query) => {
	const [list, setList] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const fetchList = async () => {
		try {
			setLoading(true);
			let queryString = new URLSearchParams(query).toString();
			console.log(`${path}?${queryString}`);
			const { data } = await api.get(`${path}?${queryString}`);
			console.log(data);
			setList(data);
			setLoading(false);
		} catch (error) {
			setLoading(false);
			setError(error.message || "Failed!");
			console.log(error);
		}
	};

	useEffect(() => {
		fetchList();
	}, [JSON.stringify(query)]);
	return [list, loading, error];
};

export default useFetchList;
