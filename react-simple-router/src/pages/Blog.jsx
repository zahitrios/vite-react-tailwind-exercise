import { Link, useSearchParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";

const Blog = () => {
	const { data, loading, error } = useFetch("posts");
	const [queryParams, setQueryParams] = useSearchParams();

	// useEffect(() => {
	// 	console.log("search: ", queryParams.get("search")); // {host}/blog?search=posttosearch
	// }, [queryParams]);

	const handleFilterChange = e => {
		let filter = e.target.value;
		if (filter) setQueryParams({ filter: e.target.value });
		else setQueryParams({});
	};

	// useEffect(() => {
	// 	console.log("filtering");
	// }, [queryParams]);

	if (loading) {
		return <h2>Loading...</h2>;
	}

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

			{error ? (
				<h4 className=" text-red-600">{error}</h4>
			) : (
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
			)}
		</>
	);
};

export default Blog;
