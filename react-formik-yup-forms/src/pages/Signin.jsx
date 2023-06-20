import { useEffect, useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { registerFirebase, auth, googleProvider } from "../config/firebase";
import useRedirectActiveUser from "../hooks/useRedirectActiveUser";
import { Formik } from "formik";
import * as Yup from "yup";

const Signin = () => {
	useRedirectActiveUser();
	const navigate = useNavigate();

	const handleRegister = async (values, props) => {
		const { user, password, password2 } = values;
		const { isSubmitting, setErrors, resetForm } = props;
		setErrors(null);

		// validate passwords matches
		if (password !== password2) {
			setErrors({ password2: "Passwords doesn't match" });
			return;
		}

		try {
			await registerFirebase({
				email: user,
				password: password,
			});
			resetForm();
			navigate("/login");
		} catch (error) {
			//setError(error.code, error.message);
			setErrors({ form: error.message });
		} finally {
			isSubmitting(false);
		}
	};

	const signInWithGoogle = async () => {
		try {
			const result = await signInWithPopup(auth, googleProvider);
			console.log(result); //TODO handle the register with result.email, resutl.displayName, etc.
		} catch (err) {
			console.error(err);
		}
	};

	const yupValidationSchema = Yup.object().shape({
		user: Yup.string().trim().email().required(),
		password: Yup.string().trim().max(16).min(8),
		password2: Yup.string().trim().max(16).min(8),
	});

	return (
		<Formik
			initialValues={{ user: "", password: "", password2: "" }}
			onSubmit={handleRegister}
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
							placeholder="User"
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
						<input
							type="password"
							className=" outline-none text-gray-500 px-2 py-2 bg-white rounded-lg w-full mb-6 text-sm drop-shadow-lg"
							placeholder="Confirm password"
							name="password2"
							value={values.password2}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						{errors && errors.password2 && touched.password2 && (
							<p className="text-red-500 text-sm mb-6 first-letter:capitalize">
								{errors.password2}
							</p>
						)}

						{errors && errors.form && (
							<p className="text-red-500 text-sm mb-6">
								{errors.form}
							</p>
						)}
						<button
							type="submit"
							className="rounded-full bg-blue-400 text-white w-full py-1 text-sm drop-shadow-lg mb-4"
						>
							Sign in
						</button>
						{!isSubmitting && (
							<button
								onClick={signInWithGoogle}
								type="button"
								className="rounded-full bg-yellow-400 w-full py-1 text-sm drop-shadow-lg text-zinc-700"
							>
								{" "}
								Signin with google
							</button>
						)}
					</form>
				);
			}}
		</Formik>
	);
};

export default Signin;
