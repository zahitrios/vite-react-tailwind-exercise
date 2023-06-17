import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const Post = () => {
	const { idPost } = useParams();

	const { data, loading, error } = useFetch("posts/" + idPost);

	if (loading) return <h1>Loading...</h1>;
	if (error) return <h1 className="text-red-600">{error}</h1>;

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
