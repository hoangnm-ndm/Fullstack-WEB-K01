import React, { useState } from "react";

const data = [
	{ id: 1, fullname: "nguyen minh hoang" },
	{ id: 2, fullname: "nguyen ton quy" },
	{ id: 3, fullname: "phung minh phuong" },
];

const SearchStudent = () => {
	// * dùng useState
	const [students, setStudents] = useState(data);
	const handleChange = (e) => {
		console.log(e.target.value);

		// * dùng value để lọc ra người có tên thoả mãn tìm kiếm và cập nhật lại state
	};

	return (
		<div>
			<input type="text" onChange={handleChange} />
			<ol>
				{students.map((item) => (
					<li key={item.id}>{item.fullname}</li>
				))}
			</ol>
		</div>
	);
};

export default SearchStudent;
