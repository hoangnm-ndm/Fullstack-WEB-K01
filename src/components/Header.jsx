import React from "react";
import { NavLink } from "react-router-dom";
import ToggleTheme from "./ToggleTheme";

const Header = () => {
	return (
		<header>
			<p>logo</p>
			<ToggleTheme />
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
