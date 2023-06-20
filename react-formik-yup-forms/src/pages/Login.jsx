import { useEffect, useState } from "react";
import { useUserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { loginFirebase } from "../config/firebase";
import useRedirectActiveUser from "../hooks/useRedirectActiveUser";
import { Formik } from "formik";
import * as Yup from "yup";

const Login = () => {
	const navigate = useNavigate();

	useRedirectActiveUser();

	const onSubmit = async (values, props) => {
		const { user, password } = values;
		const { setSubmitting, setErrors, resetForm } = props;
		try {
			await loginFirebase({
				email: user,
				password: password,
			});
			resetForm();
			navigate("/admin");
			return;
		} catch (error) {
			console.log(error.code, error.message);
			setErrors({
				form: error.message,
			});
		} finally {
			setSubmitting(false);
		}
	};

	const yupValidationSchema = Yup.object().shape({
		user: Yup.string().trim().email().required(),
		password: Yup.string().trim().max(16).min(8),
	});

	return (
		<Formik
			initialValues={{ user: "", password: "" }}
			onSubmit={onSubmit}
			validationSchema={yupValidationSchema}
		>
			{({
				values,
				handleSubmit,
				handleChange,
				errors,
				touched,
				handleBlur,
				isSubmitting,
			}) => {
				return (
					<form
						onSubmit={handleSubmit}
						className=" w-80 h-fit rounded-xl border border-white justify-self-center m-auto bg-violet-200 mt-4 overflow-hidden text-center py-8 px-4 drop-shadow-lg"
					>
						<input
							type="text"
							className=" outline-none text-gray-500 px-2 py-2 bg-white rounded-lg w-full mb-6 text-sm drop-shadow-lg"
							placeholder="Usuario"
							name="user"
							value={values.user}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						{errors && errors.user && touched.user && (
							<p className="text-red-500 text-sm mb-6 first-letter:capitalize">
								{errors.user}
							</p>
						)}
						<input
							type="password"
							className=" outline-none text-gray-500 px-2 py-2 bg-white rounded-lg w-full mb-6 text-sm drop-shadow-lg"
							placeholder="Password"
							name="password"
							value={values.password}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						{errors && errors.password && touched.password && (
							<p className="text-red-500 text-sm mb-6 first-letter:capitalize">
								{errors.password}
							</p>
						)}
						{errors && errors.form && (
							<p className="text-red-500 text-sm mb-6 first-letter:capitalize">
								{errors.form}
							</p>
						)}
						{!isSubmitting && (
							<button
								type="submit"
								className="rounded-full bg-blue-400 text-white w-full py-1 text-sm drop-shadow-lg"
								disabled={isSubmitting}
							>
								Login
							</button>
						)}
					</form>
				);
			}}
		</Formik>
	);
};

export default Login;
