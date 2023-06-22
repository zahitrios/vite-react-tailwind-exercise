import { Formik } from "formik";
import React from "react";
import * as Yup from "yup";

interface Props {
	addTodo: (todo: string) => void;
}

const validationSchema = Yup.object().shape({
	todo: Yup.string().trim().required().min(3).max(255),
});

const Form = ({ addTodo }: Props) => {
	const submitForm = (values: { todo: string }, actions: any) => {
		addTodo(values.todo);
		actions.setSubmitting(false);
		actions.resetForm();
	};

	return (
		<Formik
			initialValues={{ todo: "" }}
			onSubmit={submitForm}
			validationSchema={validationSchema}
		>
			{({
				values,
				errors,
				touched,
				handleChange,
				handleBlur,
				handleSubmit,
				isSubmitting,
				/* and other goodies */
			}) => {
				return (
					<form onSubmit={handleSubmit}>
						<input
							name="todo"
							type="text"
							className="w-full rounded-sm px-4 py-2 outline-none mb-4 shadow-md text-sm"
							placeholder="Enter todo"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.todo}
						/>
						<p className="text-red-500 text-sm first-letter:capitalize mb-4">
							{errors.todo && touched.todo && errors.todo}
						</p>
						<button
							type="submit"
							disabled={isSubmitting}
							className="rounded-full bg-indigo-300 px-4 py-2 text-white text-sm shadow-md"
						>
							Add
						</button>
					</form>
				);
			}}
		</Formik>
	);
};

export default Form;
