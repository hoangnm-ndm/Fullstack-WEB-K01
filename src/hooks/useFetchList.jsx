import { useEffect, useState } from "react";
import { getTasks } from "../api";

const useFetchList = (path, query) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const fetchData = async () => {
		try {
			setLoading(true);
			const queryString = new URLSearchParams(query).toString();
			console.log(queryString);
			const res = await getTasks(queryString);
			console.log(res);
			setData(res.data);
			setLoading(false);
		} catch (error) {
			setLoading(false);
			console.log(error);
			setError(error);
		}
	};

	useEffect(() => {
		fetchData();
	}, [path, JSON.stringify(query)]);

	return [data, loading, error, fetchData];
};

export default useFetchList;
