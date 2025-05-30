import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ToggleTheme = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);
	return (
		<>
			<div class="form-check form-switch">
				<input
					class="form-check-input"
					type="checkbox"
					id="flexSwitchCheckDefault"
					value={theme}
					onChange={toggleTheme}
				/>
			</div>
		</>
	);
};

export default ToggleTheme;
