import { Link, useSearchParams, useLoaderData } from "react-router-dom";

const Blog = () => {
	const [queryParams, setQueryParams] = useSearchParams();
	const { data } = useLoaderData();

	const handleFilterChange = e => {
		let filter = e.target.value;
		if (filter) setQueryParams({ filter: e.target.value });
		else setQueryParams({});
	};

	return (
		<>
			<h2 className=" font-semibold mb-4">Blog!!!</h2>
			<input
				type="text"
				name="filter"
				value={queryParams.get("filter") || ""}
				className=" rounded-full w-full mb-4 font-light p-1 pl-2 text-xs outline-none"
				placeholder="Filter..."
				onChange={handleFilterChange}
			/>

			<ul className=" list-none">
				{data
					.filter(post => {
						let string = queryParams.get("filter");
						if (!string) return true;
						return post.title
							.toLowerCase()
							.startsWith(string.toLocaleLowerCase());
					})
					.map(post => (
						<Link key={post.id} to={`/blog/${post.id}`}>
							<li className="first-letter:capitalize text-xs overflow-hidden truncate text-ellipsis  mb-4">
								{post.title}
							</li>
						</Link>
					))}
			</ul>
		</>
	);
};

export default Blog;

export const loaderBlog = async () => {
	const response = await fetch("https://jsonplaceholder.typicode.com/posts");

	if (!response.ok)
		throw {
			status: response.status,
			statusText: "Error loading blog",
		};

	const data = await response.json();

	return { data };
};
