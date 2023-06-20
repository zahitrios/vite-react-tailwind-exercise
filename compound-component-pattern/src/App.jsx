import { useState } from "react";
import Form from "./components/Form";

const App = () => {
	const customParentFunction = values => {
		console.log("from app component ", values);
	};

	return (
		<>
			<h1>Compound component pattern!!</h1>
			<Form
				customParentFunction={customParentFunction}
				initalState={{ user: "first user", title: "first title" }}
			>
				{({ values, setValues, handleSubmit }) => (
					<form onSubmit={handleSubmit}>
						<input
							type="text"
							name="user"
							placeholder="User"
							value={values.user}
							onChange={e => {
								setValues({ ...values, user: e.target.value });
							}}
						/>
						<br />
						<br></br>
						<input
							type="text"
							name="title"
							placeholder="Title"
							value={values.title}
							onChange={e => {
								setValues({ ...values, title: e.target.value });
							}}
						/>
						<br />
						<br />
						<button type="submit">submit</button>
					</form>
				)}
			</Form>
		</>
	);
};

export default App;
