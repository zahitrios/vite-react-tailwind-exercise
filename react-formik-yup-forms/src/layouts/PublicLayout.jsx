import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useUserContext } from "../context/UserContext";

const PublicLayout = () => {
	const { userLogged } = useUserContext();

	return (
		<div
			className={`h-screen w-screen ${
				userLogged
					? "bg-gradient-to-r from-violet-500 to-fuchsia-500"
					: "bg-gradient-to-r from-cyan-500 to-blue-500"
			}`}
		>
			<Navbar />
			<div className="flex fixed w-screen mt-10 h-screen no-scrollbar overflow-auto">
				<main className="basis-4/5 p-2">
					{/* <h1>Public Layout</h1> */}
					<Outlet />
				</main>
				<div className="basis-1/5 p-2 border-l border-white text-white text-sm">
					PUBLIC SIDEBAR
				</div>
			</div>
		</div>
	);
};

export default PublicLayout;
