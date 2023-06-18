import { useEffect, useState } from "react";
import { useUserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { loginFirebase } from "../config/firebase";
import useRedirectActiveUser from "../hooks/useRedirectActiveUser";

const Login = () => {
	const [user, setUser] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);
	const { setUserLogged } = useUserContext();
	const navigate = useNavigate();

	useRedirectActiveUser();

	const handleLogin = async e => {
		e.preventDefault();
		setError(null);
		setLoading(true);

		try {
			await loginFirebase({
				email: user,
				password: password,
			});
			setUserLogged(true);
			navigate("/admin");
			return;
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
			onSubmit={handleLogin}
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
			{error && <p className="text-red-500 text-sm mb-6">{error}</p>}
			<button
				type="submit"
				className="rounded-full bg-blue-400 text-white w-full py-1 text-sm drop-shadow-lg"
			>
				Login
			</button>
		</form>
	);
};

export default Login;
