import { useState } from "react";
import { useUserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const [user, setUser] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);
	const { setUserLogged } = useUserContext();
	const navigate = useNavigate();

	const handleLogin = () => {
		setError(null);
		if (user === "user" && password === "pass") {
			setUserLogged(true);
			navigate("/admin");
			return;
		}
		setError("Incorrect user and password");
	};

	return (
		<div className=" w-80 h-fit rounded-xl border border-white justify-self-center m-auto bg-violet-200 mt-4 overflow-hidden text-center py-8 px-4 drop-shadow-lg">
			<input
				type="text"
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
				className="rounded-full bg-blue-400 text-white w-full py-1 text-sm drop-shadow-lg"
				onClick={handleLogin}
			>
				Login
			</button>
		</div>
	);
};

export default Login;
