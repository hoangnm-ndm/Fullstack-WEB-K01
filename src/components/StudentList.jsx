import React, { useState } from "react";
import Student from "./Student";

const StudentList = ({ students }) => {
	const [gender, setGender] = useState("all");
	const handleChange = (e) => {
		console.log(e.target.value);
		setGender(e.target.value);
	};
	return (
		<div>
			<h1>Danh sach sinh vien</h1>
			<select name="gender" onChange={handleChange}>
				<option value="all">All</option>
				<option value="male">Male</option>
				<option value="female">Female</option>
			</select>
			{gender}
			{students
				.filter((item) => (gender === "all" ? item : item.gender === gender))
				.map((item) => (
					<Student student={item} />
				))}
		</div>
	);
};

export default StudentList;
