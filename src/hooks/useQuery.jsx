import { useState } from "react";

const initQuery = {
	_page: 1,
	_per_page: 10,
	_sort: "id",
};

const useQuery = (newQuery = initQuery) => {
	const [query, setQuery] = useState(newQuery);
	const updateQuery = (newQuery) => {
		setQuery((prev) => ({ ...prev, ...newQuery }));
	};

	const resetQuery = () => {
		setQuery(initQuery);
	};
	return [query, updateQuery, resetQuery];
};

export default useQuery;
