import React from "react";

const Student = ({ student }) => {
	return (
		<>
			<div className="student">
				<h3>{student.name}</h3>
				<p>Gioi tinh: {student.gender}</p>
				<p>Email: {student.email}</p>
			</div>
		</>
	);
};

export default Student;
