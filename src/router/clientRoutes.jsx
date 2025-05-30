import HomePage from "../pages/client/HomePage";
import AboutPage from "../pages/client/AboutPage";
import CategoriesPage from "../pages/client/CategoriesPage";
import ProfilePage from "../pages/client/ProfilePage";

export const clientRoutes = [
	// * Common Routes
	{ index: true, element: <HomePage /> },
	{ path: "/about", element: <AboutPage /> },

	// * Product and Category Routes
	{ path: "/categories", element: <CategoriesPage /> },

	// * Blog Routes
	{ path: "/categories", element: <CategoriesPage /> },

	// * User Routes
	{ path: "/profile/me/:id", element: <ProfilePage /> },
];

export default clientRoutes;
