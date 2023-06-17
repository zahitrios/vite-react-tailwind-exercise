import { useCallback, useEffect } from "react";
import { useState } from "react";
import {useFetch} from './hooks/useFetch'

const App = () => {

	const [counter, setCounter] = useState(0);
	const { data, loading, error } = useFetch('users');

	console.log('rendering');

	if (loading){
		return (
			<h3>Loading...</h3>
		);
	}

	else{
		return (
			<>
				<h1>Use effect!</h1>
				<button
					onClick={() => {
						setCounter(counter + 1);
					}}
				>
					Counter: {counter}
				</button>

				{
					error === null
					?
						<ul>
						{
							data.map((user) => {
								return (
									<li key={user.id}>{user.name}</li>
								);
							})
						}
					</ul>
					:
					<p>{error}</p>
				}
			</>
		);
	}
};

export default App;
