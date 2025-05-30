import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import ClientLayout from "../layouts/ClientLayout";
import ProtectedRoute from "../components/ProtectedRoute";
import adminRoutes from "./adminRoutes";
import clientRoutes from "./clientRoutes";
import LoginPage from "../pages/common/LoginPage";
import RegisterPage from "../pages/common/RegisterPage";
import NotFoundPage from "../pages/common/NotFoundPage";

const router = createBrowserRouter([
	// * Layout Client
	{
		path: "/",
		element: <ClientLayout />,
		children: clientRoutes,
	},

	// * Layout Admin
	{
		path: "/admin",
		element: <ProtectedRoute />,
		children: [
			{
				path: "",
				element: <AdminLayout />,
				children: adminRoutes,
			},
		],
	},

	// * Layout Empty
	{ path: "/auth/login", element: <LoginPage /> },
	{ path: "/auth/register", element: <RegisterPage /> },
	{ path: "*", element: <NotFoundPage /> },
]);

const AppRouter = () => {
	return <RouterProvider router={router} />;
};

export default AppRouter;
