import HomePage from "../pages/client/HomePage";
import AboutPage from "../pages/client/AboutPage";
import ContactPage from "../pages/client/ContactPage";
import FAQPage from "../pages/client/FAQPage";
import TermsPrivacyPage from "../pages/client/TermsPrivacyPage";

import ProductsPage from "../pages/client/ProductsPage";
import ProductDetailPage from "../pages/client/ProductDetailPage";
import CategoriesPage from "../pages/client/CategoriesPage";

import BlogListPage from "../pages/client/BlogListPage";
import BlogDetailPage from "../pages/client/BlogDetailPage";
import ProfilePage from "../pages/client/ProfilePage";
import OrderListPage from "../pages/client/OrderListPage";
import OrderDetailPage from "../pages/client/OrderDetailPage";
import WishListPage from "../pages/client/WishListPage";

export const clientRoutes = [
	// * Common Routes
	{ index: true, element: <HomePage /> },
	{ path: "/about", element: <AboutPage /> },
	{ path: "/contact", element: <ContactPage /> },
	{ path: "/fag", element: <FAQPage /> },
	{ path: "/terms-privacy", element: <TermsPrivacyPage /> },

	// * Product and Category Routes
	{ path: "/products", element: <ProductsPage /> },
	{ path: "/products/:id", element: <ProductDetailPage /> },
	{ path: "/categories", element: <CategoriesPage /> },

	// * Blog Routes
	{ path: "/blogs", element: <BlogListPage /> },
	{ path: "/blogs/:slug", element: <BlogDetailPage /> },

	// * User Routes
	{ path: "/profile/me/:id", element: <ProfilePage /> },
	{ path: "/profile/orders", element: <OrderListPage /> },
	{ path: "/profile/orders/:id", element: <OrderDetailPage /> },
	{ path: "/profile/wishlist", element: <WishListPage /> },
];

export default clientRoutes;
