import TitlePage from "@/app/components/TitlePage";
import Link from "next/link";
import { posts } from "./data";

export const metadata = {
	title: "Blog",
	description: "This is the new description of blog page",
};

function Blog() {
	return (
		<>
			<TitlePage title="Blog" />
			<div className="flex justify-center gap-4 mt-10">
				<Link
					href="/"
					className="font-semibold px-4 py-2 rounded-full shadow-sm text-sm text-white bg-orange-500"
				>
					Home
				</Link>
			</div>
			<div className="ml-4 mt-4">
				<ul>
					{posts.map(post => {
						return (
							<li key={post.id} className="mb-8">
								<h2 className="text-xl font-semibold text-slate-200 first-letter:capitalize mb-2">
									{post.title}
								</h2>
								<Link
									href={`/blog/${post.id}`}
									className="rounded-full bg-lime-500 px-4 py-2 text-white"
								>
									More info
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</>
	);
}

export default Blog;
