import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
	const user = JSON.parse(localStorage.getItem("user") || {});
	return <div>{user.id === 11 ? <Outlet /> : <Navigate to={"/"} />}</div>;
};

export default ProtectedRoute;
