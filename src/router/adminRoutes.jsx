import DashBoardPage from "../pages/admin/DashBoardPage";
import OrderListPage from "../pages/admin/OrderListPage";
import BlogListPage from "../pages/admin/BlogListPage";
import UserListPage from "../pages/admin/UserListPage";
import SettingsPage from "../pages/admin/SettingsPage";
import ProductListPage from "../pages/admin/ProductListPage";
import ProductForm from "../pages/admin/ProductForm";
import CategoryListPage from "../pages/admin/CategoryListPage";
import CategoryFormPage from "../pages/admin/CategoryFormPage";
import ProfilePage from "../pages/admin/ProfilePage";
import OrderDetailPage from "../pages/admin/OrderDetailPage";
import BlogFormPage from "../pages/admin/BlogFormPage";

const adminRoutes = [
	// * Common Routes
	{ index: true, element: <DashBoardPage /> },
	{ path: "settings", element: <SettingsPage /> },
	{ path: "me/profile", element: <ProfilePage /> },

	// * Product and Category Routes
	{ path: "products", element: <ProductListPage /> },
	{ path: "products/add", element: <ProductForm /> },
	{ path: "products/edit/:id", element: <ProductForm /> },
	{ path: "categories", element: <CategoryListPage /> },
	{ path: "categories/add", element: <CategoryFormPage /> },
	{ path: "categories/update/:id", element: <CategoryFormPage /> },

	{ path: "orders", element: <OrderListPage /> },
	{ path: "orders/:id", element: <OrderDetailPage /> },

	// * Blog Routes
	{ path: "blogs", element: <BlogListPage /> },
	{ path: "blogs/edit/:id", element: <BlogFormPage /> },
	{ path: "blogs/add", element: <BlogFormPage /> },

	// * User Routes
	{ path: "users", element: <UserListPage /> },
];

export default adminRoutes;
