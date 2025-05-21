import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<header>
			<p>Logo</p>
			<nav>
				<ul>
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<NavLink to="/categories">Categories👉</NavLink>
					</li>
					<li>
						<NavLink to="/about">About</NavLink>
					</li>
					<li>
						<NavLink to="/auth/login">Login</NavLink>
					</li>
					<li>
						<NavLink to="/auth/register">Register</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
