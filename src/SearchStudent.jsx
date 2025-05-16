import React, { useState } from "react";

const data = [
	{ id: 1, fullname: "nguyen minh hoang" },
	{ id: 2, fullname: "nguyen ton quy" },
	{ id: 3, fullname: "phung minh phuong" },
];

const SearchStudent = () => {
	const [students, setStudents] = useState(data);
	const defaultStudents = [...data];
	const handleChange = (e) => {
		let textSearch = e.target.value.toLowerCase();
		textSearch
			? setStudents(students.filter((item) => item.fullname.toLowerCase().includes(textSearch)))
			: setStudents(defaultStudents);
	};

	return (
		<div>
			<input type="text" placeholder="Tim sinh vien..." onChange={handleChange} />
			<ol>
				{students.map((item) => (
					<li key={item.id}>{item.fullname}</li>
				))}
			</ol>
		</div>
	);
};

export default SearchStudent;
