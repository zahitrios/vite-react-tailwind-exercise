import TitlePage from "@/app/components/TitlePage";
import Link from "next/link";

const Page = () => {
	return (
		<div>
			<TitlePage title="Home" />
			<div className="flex justify-center mt-10 gap-4">
				<Link
					href="/shop/men"
					className="rounded-full bg-indigo-500 text-white py-2 px-4 shadow-sm text-sm font-semibold"
				>
					Shop Men
				</Link>
				<Link
					href="/shop/women"
					className="rounded-full bg-purple-500 text-white py-2 px-4 shadow-sm text-sm font-semibold"
				>
					Shop Women
				</Link>
				<Link
					href="/blog"
					className="rounded-full bg-fuchsia-500 text-white py-2 px-4 shadow-sm text-sm font-semibold"
				>
					Blog
				</Link>
				<Link
					href="/admin"
					className="rounded-full bg-slate-500 text-white py-2 px-4 shadow-sm text-sm font-semibold"
				>
					Admin
				</Link>
			</div>
		</div>
	);
};

export default Page;
