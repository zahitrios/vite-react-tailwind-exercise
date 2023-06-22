import React from "react";
import { useCounterStore } from "./store/counterStore";
import { shallow } from "zustand/shallow";

function Component() {
	const { count } = useCounterStore(
		state => ({
			count: state.count,
		}),
		shallow
	);

	//const { count } = useCounterStore();

	return (
		<>
			<h1>Counter: {count}</h1>
		</>
	);
}

export default Component;
