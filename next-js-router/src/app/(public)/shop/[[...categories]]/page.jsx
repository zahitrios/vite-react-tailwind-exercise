import TitlePage from "@/app/components/TitlePage";
import Link from "next/link";
import React from "react";

const CategoryPage = ({ params }) => {
	const categories = params.categories;
	return (
		<div>
			<TitlePage title={`Categories: ${JSON.stringify(categories)}`} />
			<div className="flex justify-center gap-4 mt-10">
				<Link
					href="/"
					className="font-semibold px-4 py-2 rounded-full shadow-sm text-sm text-white bg-orange-500"
				>
					Home
				</Link>
			</div>
		</div>
	);
};

export default CategoryPage;
