import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const PublicLayout = () => {
	return (
		<div className="h-full bg-white m-0 t-0 p-0">
			<Navbar />
			<Outlet />
		</div>
	);
};

export default PublicLayout;
