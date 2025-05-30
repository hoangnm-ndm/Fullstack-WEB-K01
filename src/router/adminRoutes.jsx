import DashBoardPage from "../pages/admin/DashBoardPage";
import OrderListPage from "../pages/admin/OrderListPage";
import BlogListPage from "../pages/admin/BlogListPage";
import UserListPage from "../pages/admin/UserListPage";
import SettingsPage from "../pages/admin/SettingsPage";
import ProductListPage from "../pages/admin/ProductListPage";
import ProductForm from "../pages/admin/ProductForm";

const adminRoutes = [
	// * Common Routes
	{ index: true, element: <DashBoardPage /> },
	{ path: "settings", element: <SettingsPage /> },

	// * Product and Category Routes
	{ path: "products", element: <ProductListPage /> },
	{ path: "products/add", element: <ProductForm /> },
	{ path: "orders", element: <OrderListPage /> },

	// * Blog Routes
	{ path: "blogs", element: <BlogListPage /> },

	// * User Routes
	{ path: "users", element: <UserListPage /> },
];

export default adminRoutes;
