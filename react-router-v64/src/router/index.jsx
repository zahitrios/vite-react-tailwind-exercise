import { createBrowserRouter } from "react-router-dom";
import Blog, { loaderBlog } from "../pages/Blog";
import Home from "../pages/Home";
import About from "../pages/About";
import Post, { loaderPost } from "../pages/Post";
import PublicLayout from "../layouts/PublicLayout";
import Notfound from "../pages/Notfound";

export const router = createBrowserRouter([
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
						path: "/about",
						element: <About />,
					},
					{
						path: "/blog",
						element: <Blog />,
						loader: loaderBlog,
					},
					{
						path: "/blog/:idPost",
						element: <Post />,
						loader: loaderPost,
					},
				],
			},
		],
	},
]);
