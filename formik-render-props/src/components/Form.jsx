import { useState } from "react";

const Form = ({ children, initalState, customParentFunction }) => {
	const [values, setValues] = useState(initalState);

	const handleSubmit = e => {
		e.preventDefault();
		console.log("from form component", values);
		customParentFunction(values);
	};

	return children({ values, setValues, handleSubmit });
};

export default Form;
