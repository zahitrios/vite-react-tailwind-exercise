import TitlePage from "@/app/components/TitlePage";
import Link from "next/link";
import React from "react";
import { posts } from "../data";

export async function generateMetadata({ params }) {
	const post = posts.find(post => post.id == params.post[0]);
	return {
		title: params.post[0],
		description: post.body,
	};
}

const Post = ({ params }) => {
	const post = posts.find(post => post.id == params.post[0]);

	return (
		<>
			<TitlePage title={post.title} />
			<div className="ml-4 mt-4 text-slate-50 first-letter:capitalize">
				{post.body}
			</div>
			<div className="flex justify-center gap-4 mt-10">
				<Link
					className="font-semibold px-4 py-2 rounded-full shadow-sm text-sm text-white bg-fuchsia-500"
					href="/blog"
				>
					Blog
				</Link>
				<Link
					href="/"
					className="font-semibold px-4 py-2 rounded-full shadow-sm text-sm text-white bg-orange-500"
				>
					Home
				</Link>
			</div>
		</>
	);
};

export default Post;
