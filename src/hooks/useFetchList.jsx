import { useEffect, useState } from "react";
import { getTasks } from "../api";

const useFetchList = (path, query) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const fetchData = async () => {
		try {
			setLoading(true);
			const res = await getTasks();
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
