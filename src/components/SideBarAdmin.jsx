import React from "react";
import { NavLink } from "react-router-dom";

const SideBarAdmin = () => {
	return (
		<>
			<div>
				<nav>
					<ul>
						<li>
							<NavLink to="products">Quản lý sản phẩm</NavLink>
						</li>
						<li>
							<NavLink to="orders">Quản lý đơn hàng</NavLink>
						</li>

						<li>
							<NavLink to="blogs">Quản lý blogs</NavLink>
						</li>

						<li>
							<NavLink to="users">Quản lý người dùng</NavLink>
						</li>
						<li>
							<NavLink to="settings">Cài đặt</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</>
	);
};

export default SideBarAdmin;
