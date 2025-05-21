import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
	return (
		<>
			<h1>Ối! Trang này không tồn tại nữa.</h1>
			<Link to="/">Go back home</Link>
		</>
	);
};

export default NotFoundPage;
