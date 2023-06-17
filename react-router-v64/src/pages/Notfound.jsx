import { NavLink, useRouteError } from "react-router-dom";

const Notfound = () => {
	const error = useRouteError();
	console.log(error);
	return (
		<>
			<div className=" text-red-500 font-bold mb-4">
				CUSTOM ERROR PAGE!!!
			</div>
			<p className="mb-4">
				{error.status} - {error.statusText}
			</p>
			<NavLink
				className="rounded-full bg-blue-400 text-white text-sm px-2 py-1 mb-4"
				to="/"
			>
				Go to home
			</NavLink>
		</>
	);
};

export default Notfound;
