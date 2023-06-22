import React, { useEffect } from "react";
import { useCounterStore } from "./store/counterStore";
import { shallow } from "zustand/shallow";
import Component from "./Component";

function App() {
	const { count, title, posts } = useCounterStore(
		state => ({
			count: state.count,
			title: state.title,
			posts: state.posts,
		}),
		shallow
	);

	const { reset, increment, getPosts } = useCounterStore();

	return (
		<>
			<div className="half">
				<h1>
					{title}: {count}
					<hr />
					<button
						onClick={() => {
							increment(1);
						}}
					>
						increment counter
					</button>
					&nbsp;&nbsp;&nbsp;&nbsp;
					<button onClick={reset}>reset state</button>
					&nbsp;&nbsp;&nbsp;&nbsp;
					<button onClick={getPosts}>fetch posts</button>
					<ul>
						{posts.map(post => (
							<li key={post.id}>{post.title}</li>
						))}
					</ul>
				</h1>
			</div>
			<div className="half">
				<Component />
			</div>
		</>
	);
}

export default App;
