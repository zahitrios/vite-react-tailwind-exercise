import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Signin from "../pages/Signin";
import Home from "../pages/Home";
import Notfound from "../pages/Notfound";
import PublicLayout from "../layouts/PublicLayout";
import Team from "../pages/Team";
import Projects from "../pages/Projects";
import Protected from "../pages/Protected";
import RequireAuth from "../components/RequireAuth";

const router = createBrowserRouter([
	{
		path: "/",
		element: <PublicLayout />,
		errorElement: <Notfound />,
		children: [
			{
				errorElement: <Notfound />,
				children: [
					{
						index: true,
						element: <Home />,
					},
					{
						path: "/login",
						element: <Login />,
					},
					{
						path: "/signin",
						element: <Signin />,
					},
					{
						path: "/team",
						element: <Team />,
					},
					{
						path: "/projects",
						element: <Projects />,
					},
					{
						path: "/protected",
						element: (
							<RequireAuth>
								<Protected />
							</RequireAuth>
						),
					},
				],
			},
		],
	},
]);

export default router;
