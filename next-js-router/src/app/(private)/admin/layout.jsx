import Link from "next/link";
import React from "react";

const DashboardLayout = ({ children }) => {
	return (
		<div className="w-screen h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500">
			{children}
			<div className="flex justify-center gap-4 mt-4">
				<div className="rounded-full bg-slate-500 text-white font-semibold text-sm py-2 px-4">
					<Link href="/">Home</Link>
				</div>
				<div className="rounded-full bg-lime-500 text-white font-semibold text-sm py-2 px-4">
					<Link href="/admin">Admin</Link>
				</div>
				<div className="rounded-full bg-orange-500 text-white font-semibold text-sm py-2 px-4">
					<Link href="/admin/settings">Settings</Link>
				</div>
				<div className="rounded-full bg-sky-500 text-white font-semibold text-sm py-2 px-4">
					<Link href="/admin/space/1">Space detail</Link>
				</div>
			</div>
		</div>
	);
};

export default DashboardLayout;
