import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext(null);
const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState("light");
	const toggleTheme = () => {
		setTheme((prev) => (prev === "light" ? "dark" : "light"));
	};
	useEffect(() => {
		document.body.setAttribute("theme", theme);
	}, [theme]);

	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
