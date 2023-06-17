import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

const PublicLayout = () => {
	const navigation = useNavigation();

	return (
		<div className="container max-w-2xl mx-auto bg-slate-200 pt-5">
			<div className="px-3 mb-4">
				<Navbar />
				<h1 className="mb-4 font-bold">This is my app</h1>
				<div className="flex items-stretch">
					<div className="flex-1 flex-64 py-2 px-2 bg-slate-300 max-h-[600px] overflow-y-auto no-scrollbar">
						{navigation.state === "loading" ? (
							<h1>Loading...</h1>
						) : (
							<Outlet />
						)}
					</div>
					<div className=" flex-32 bg-slate-400 text-white py-5 px-2 text-sm">
						sidebar layout
					</div>
				</div>
			</div>
		</div>
	);
};

export default PublicLayout;
