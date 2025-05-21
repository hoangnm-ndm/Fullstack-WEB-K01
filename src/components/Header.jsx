import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header>
			<p>Logo</p>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/categories">Categories👉</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/auth/login">Login</Link>
					</li>
					<li>
						<Link to="/auth/register">Register</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
