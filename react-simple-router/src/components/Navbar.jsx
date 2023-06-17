import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="flex justify-center gap-3 mb-4">
			<NavLink
				className="active:bg-white active:text-blue-500 rounded-full bg-blue-500 text-white px-4 py-1 text-xs"
				to="/"
			>
				{" "}
				Home{" "}
			</NavLink>
			<NavLink
				className="active:bg-white active:text-blue-500 rounded-full bg-blue-500 text-white px-4 py-1 text-xs"
				to="/about"
			>
				{" "}
				About{" "}
			</NavLink>
			<NavLink
				className="active:bg-white active:text-blue-500 rounded-full bg-blue-500 text-white px-4 py-1 text-xs"
				to="/blog"
			>
				{" "}
				Blog{" "}
			</NavLink>
		</div>
	);
};

export default Navbar;
