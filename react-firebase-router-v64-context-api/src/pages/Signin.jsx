import { useEffect, useState } from "react";
import { useUserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { registerFirebase } from "../config/firebase";
import useRedirectActiveUser from "../hooks/useRedirectActiveUser";

const Signin = () => {
	useRedirectActiveUser();
	const [user, setUser] = useState("");
	const [password, setPassword] = useState("");
	const [password2, setPassword2] = useState("");
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

	const handleRegister = async e => {
		e.preventDefault();
		setError(null);
		setLoading(true);

		// validate passwords matches
		if (password !== password2) {
			setError("Passwords doesn't match");
			setLoading(false);
			return;
		}

		try {
			await registerFirebase({
				email: user,
				password: password,
			});
			navigate("/login");
		} catch (error) {
			setError(error.message);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		setLoading(false);
	}, []);

	return loading ? (
		<h1>Loading...</h1>
	) : (
		<form
			onSubmit={handleRegister}
			className=" w-80 h-fit rounded-xl border border-white justify-self-center m-auto bg-violet-200 mt-4 overflow-hidden text-center py-8 px-4 drop-shadow-lg"
		>
			<input
				type="email"
				className=" outline-none text-gray-500 px-2 py-2 bg-white rounded-lg w-full mb-6 text-sm drop-shadow-lg"
				placeholder="Usuario"
				name="user"
				value={user}
				onChange={e => {
					setUser(e.target.value);
				}}
			/>
			<input
				type="password"
				className=" outline-none text-gray-500 px-2 py-2 bg-white rounded-lg w-full mb-6 text-sm drop-shadow-lg"
				placeholder="Password"
				name="password"
				value={password}
				onChange={e => {
					setPassword(e.target.value);
				}}
			/>
			<input
				type="password"
				className=" outline-none text-gray-500 px-2 py-2 bg-white rounded-lg w-full mb-6 text-sm drop-shadow-lg"
				placeholder="Confirm password"
				name="password2"
				value={password2}
				onChange={e => {
					setPassword2(e.target.value);
				}}
			/>
			{error && <p className="text-red-500 text-sm mb-6">{error}</p>}
			<button
				type="submit"
				className="rounded-full bg-blue-400 text-white w-full py-1 text-sm drop-shadow-lg"
			>
				Sign in
			</button>
		</form>
	);
};

export default Signin;
