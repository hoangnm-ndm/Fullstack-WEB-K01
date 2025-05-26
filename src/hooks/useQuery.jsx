import { useState } from "react";

const initQuery = {
	page: 1,
	per_page: 10,
	sort: "id",
	priority: "",
	conpleted: null,
};

// http://localhost:3000/tasks?priority=high

const useQuery = (newQuery = initQuery) => {
	const [query, setQuery] = useState(newQuery);
	const updateQuery = (newQuery) => {
		setQuery((prev) => {
			const updated = { ...prev, ...newQuery };

			Object.keys(updated).forEach((key) => {
				if (updated[key] === "" || updated[key] == null) {
					delete updated[key];
				}
			});

			return updated;
		});
	};

	const resetQuery = () => {
		setQuery(initQuery);
	};
	return [query, updateQuery, resetQuery];
};

export default useQuery;
