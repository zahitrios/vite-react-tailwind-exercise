import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import PrivateLayout from "../layouts/PrivateLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <PublicLayout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "login",
				element: <Login />,
			},
		],
	},
	{
		path: "/admin",
		element: <PrivateLayout />,
		children: [
			{
				index: true,
				element: <Dashboard />,
			},
		],
	},
]);
