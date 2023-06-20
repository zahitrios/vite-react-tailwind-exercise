import { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const Signin = () => {
	const { setUser, registerWithGoogle, registerWithEmail } =
		useContext(UserContext);
	const [globalError, setGlobalError] = useState(null);
	const navigate = useNavigate();

	const SignupSchema = Yup.object().shape({
		email: Yup.string().email().trim().max(60).required(),
		password: Yup.string().trim().min(8).max(16).required(),
		passwordConfirmation: Yup.string().trim().min(8).max(16).required(),
	});

	const handleRegister = async (
		values,
		{ setSubmitting, setErrors, resetForm }
	) => {
		const { email, password, passwordConfirmation } = values;

		if (password !== passwordConfirmation) {
			setErrors({ form: "Password confirmation doesn't match" });
			return;
		}
		setSubmitting(true);
		try {
			const result = await registerWithEmail({ email, password });
			setUser(result.user);
			resetForm();
			navigate("/protected");
			return;
		} catch (error) {
			setGlobalError(error.message);
		} finally {
			setSubmitting(false);
		}
	};

	const handleSignWithGoogle = async () => {
		try {
			const result = await registerWithGoogle();
			setUser(result.user);
			navigate("/protected");
		} catch (error) {
			setGlobalError(error.message);
		} finally {
		}
	};

	return (
		<>
			<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<img
						className="mx-auto h-10 w-auto"
						src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
						alt="Your Company"
					/>
					<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
						Sign in
					</h2>
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<Formik
						initialValues={{
							email: "",
							password: "",
							passwordConfirmation: "",
						}}
						validationSchema={SignupSchema}
						onSubmit={handleRegister}
					>
						{({
							values,
							errors,
							touched,
							handleChange,
							handleBlur,
							handleSubmit,
							isSubmitting,
						}) => (
							<form className="space-y-6" onSubmit={handleSubmit}>
								<div>
									<label
										htmlFor="email"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										Email address
									</label>
									<div className="mt-2">
										<input
											name="email"
											type="email"
											required
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.email}
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
										{errors.email && touched.email && (
											<p className=" text-red-500 first-letter:uppercase">
												{errors.email}
											</p>
										)}
									</div>
								</div>

								<div>
									<div className="flex items-center justify-between">
										<label
											htmlFor="password"
											className="block text-sm font-medium leading-6 text-gray-900"
										>
											Password
										</label>
									</div>
									<div className="mt-2">
										<input
											name="password"
											type="password"
											required
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.password}
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
										{errors.password &&
											touched.password && (
												<p className=" text-red-500 first-letter:capitalize">
													{errors.password}
												</p>
											)}
									</div>
								</div>

								<div>
									<div className="flex items-center justify-between">
										<label
											htmlFor="passwordConfirmation"
											className="block text-sm font-medium leading-6 text-gray-900"
										>
											Password confirmation
										</label>
									</div>
									<div className="mt-2">
										<input
											name="passwordConfirmation"
											type="password"
											required
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.passwordConfirmation}
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
										{errors.passwordConfirmation &&
											touched.passwordConfirmation && (
												<p className=" text-red-500 first-letter:capitalize">
													{
														errors.passwordConfirmation
													}
												</p>
											)}
									</div>
								</div>

								{globalError && (
									<span className=" text-red-500 first-letter:capitalize">
										{globalError}
									</span>
								)}

								<div>
									{!isSubmitting && (
										<>
											<button
												type="submit"
												className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mb-4"
											>
												Sign in
											</button>
											<button
												type="button"
												onClick={handleSignWithGoogle}
												className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
											>
												Sign in with Google
											</button>
										</>
									)}
								</div>
							</form>
						)}
					</Formik>
				</div>
			</div>
		</>
	);
};

export default Signin;
