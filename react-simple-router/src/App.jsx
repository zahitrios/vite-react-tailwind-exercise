import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Notfound from "./pages/Notfound";
import Post from "./pages/Post";
import PublicLayout from "./layouts/PublicLayout";

const App = () => {
	return (
		<>
			<div className="container max-w-xl mx-auto bg-slate-200 pt-5">
				<div className="px-3 mb-4">
					<Navbar />
					<h1 className="mb-4 font-bold">This is my app</h1>
					<Routes>
						<Route path="/" element={<PublicLayout />}>
							<Route element={<Home />} index></Route>
							<Route element={<About />} path="about"></Route>
							<Route element={<Blog />} path="blog"></Route>
							<Route
								element={<Post />}
								path="blog/:idPost"
							></Route>
							<Route element={<Contact />} path="contact"></Route>
							<Route element={<Notfound />} path="*"></Route>
						</Route>
					</Routes>
				</div>
				<footer className="bg-slate-600 text-white py-2 px-3">
					This is the footer
				</footer>
			</div>
		</>
	);
};

export default App;
