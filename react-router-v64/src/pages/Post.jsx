import { Link, useLoaderData, useParams } from "react-router-dom";

const Post = () => {
	const { data } = useLoaderData();
	return (
		<>
			<h4 className="mb-2 font-semibold first-letter:capitalize">
				{data.title}
			</h4>
			<p className="text-xs mb-4 first-letter:capitalize">{data.body}</p>
			<Link
				className="rounded-full bg-blue-500 text-white text-xs px-2 py-1"
				to="/blog"
			>
				Back to blog!
			</Link>
		</>
	);
};

export default Post;

export const loaderPost = async ({ params }) => {
	const idPost = params.idPost;
	const response = await fetch(
		"https://jsonplaceholder.typicode.com/posts/" + idPost
	);

	if (!response.ok)
		throw {
			status: response.status,
			statusText: "Error loading post",
		};

	const data = await response.json();
	return { data };
};
