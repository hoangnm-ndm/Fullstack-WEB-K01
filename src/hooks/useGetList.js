import { useEffect, useState } from "react";
import api from "../api";

/**
 * * input: url, limit, skip
 * * output: list
 */

// * products
// * users

const useGetList = (path, limit = 12, skip = 0) => {
	const [list, setList] = useState([]);

	const fetchList = async () => {
		try {
			const res = await api.get(`${path}?limit=${limit}&skip=${skip}`);
			const data = await res.json();
			setList(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchList();
	}, [limit, skip]);
	return [list];
};

export default useGetList;
