import { Outlet, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useUserContext } from "../context/UserContext";
import { useEffect } from "react";

const PrivateLayout = () => {
	const { userLogged } = useUserContext();

	return userLogged ? (
		<div className=" bg-gradient-to-r from-violet-500 to-fuchsia-500 h-screen w-screen">
			<Navbar />
			<div className="flex fixed w-screen mt-10 h-screen no-scrollbar overflow-auto">
				<main className="basis-4/5 p-2">
					{/* <h1>Private Layout</h1> */}
					<Outlet />
				</main>
				<div className="basis-1/5 p-2 border-l border-white text-white text-sm">
					PRIVATE SIDEBAR
				</div>
			</div>
		</div>
	) : (
		<Navigate to="/login" />
	);
};

export default PrivateLayout;
