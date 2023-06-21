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
import GoLongUrl from "../pages/GoLongUrl";

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
						path: "/notFound",
						element: <Notfound />,
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
	{
		path: "/:id",
		element: <GoLongUrl />,
	},
]);

export default router;
