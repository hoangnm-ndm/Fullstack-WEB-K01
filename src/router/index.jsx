import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../components/Layout";
import ListTasks from "../pages/ListTasks";
import FormTask from "../pages/FormTask";
import DetailTask from "../pages/DetailTask";

const routes = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{ index: true, element: <ListTasks /> },
			{ path: "add", element: <FormTask /> },
			{ path: "update/:id", element: <FormTask /> },
			{ path: "detail/:id", element: <DetailTask /> },
		],
	},
]);

export default function Routes() {
	return <RouterProvider router={routes} />;
}
