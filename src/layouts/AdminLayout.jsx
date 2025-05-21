import styled from "@emotion/styled";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import FooterAdmin from "../components/FooterAdmin";
import HeaderAdmin from "../components/HeaderAdmin";
import SideBarAdmin from "../components/SideBarAdmin";

const LayoutWrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
`;

const Body = styled.div`
	display: flex;
	flex: 1;
	overflow: hidden;
`;

const Content = styled.main`
	flex: 1;
	padding: 16px;
	overflow-y: auto;
	background-color: #f9f9f9;
`;

const AdminLayout = () => {
	const [collapsed, setCollapsed] = useState(false);

	const handleToggleSidebar = () => {
		setCollapsed((prev) => !prev);
	};

	return (
		<>
			<LayoutWrapper>
				<HeaderAdmin />
				<Body>
					<SideBarAdmin collapsed={collapsed} onToggle={handleToggleSidebar} />
					<Content>
						<Outlet />
					</Content>
				</Body>
				<FooterAdmin />
			</LayoutWrapper>
		</>
	);
};

export default AdminLayout;
