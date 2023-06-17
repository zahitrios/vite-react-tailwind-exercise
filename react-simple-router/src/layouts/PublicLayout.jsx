import { Outlet } from "react-router-dom";

const PublicLayout = () => {
	return (
		<div className="flex items-stretch">
			<div className="flex-1 flex-64 py-2 px-2 bg-slate-300 max-h-[600px] overflow-y-auto no-scrollbar">
				<Outlet />
			</div>
			<div className=" flex-32 bg-slate-400 text-white py-5 px-2 text-sm">
				sidebar layout
			</div>
		</div>
	);
};

export default PublicLayout;
