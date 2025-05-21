import React from "react";
import { Outlet } from "react-router-dom";
import FooterAdmin from "../components/FooterAdmin";
import HeaderAdmin from "../components/HeaderAdmin";
import SideBarAdmin from "../components/SideBarAdmin";

const AdminLayout = () => {
	return (
		<div>
			<HeaderAdmin />
			<main style={{ display: "flex" }}>
				<SideBarAdmin />
				<Outlet />
			</main>
			<FooterAdmin />
		</div>
	);
};

export default AdminLayout;
