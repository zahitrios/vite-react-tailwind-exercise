import { useContext } from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { signOutFirebase } from "../config/firebase";

const Navbar = () => {
	const { userLogged, setUserLogged } = useUserContext();

	const handleLogout = async () => {
		await signOutFirebase();
		setUserLogged(false);
	};

	return (
		<div
			className={`flex justify-between fixed top-0 left-0 right-0 h-10 p-2 ${
				userLogged
					? "bg-gradient-to-r from-violet-500 to-fuchsia-500"
					: "bg-gradient-to-r from-cyan-500 to-blue-500"
			}`}
		>
			<div className="text-white font-semibold drop-shadow-md">
				{userLogged ? "Welcome admin" : "Welcome guest"}
			</div>

			<div className="flex gap-3">
				<Link
					className="bg-indigo-500 text-white rounded-tr-lg rounded-bl-lg px-3 text-sm drop-shadow-md"
					to="/"
				>
					Home
				</Link>
				{userLogged ? (
					<>
						<Link
							className="bg-indigo-500 text-white rounded-tr-lg rounded-bl-lg px-3 text-sm drop-shadow-md"
							to="/admin"
						>
							Admin
						</Link>
						<button
							className="bg-indigo-500 text-white rounded-tr-lg rounded-bl-lg px-3 text-sm drop-shadow-md"
							onClick={handleLogout}
						>
							Logout
						</button>
					</>
				) : (
					<>
						<Link
							className="bg-indigo-500 text-white rounded-tr-lg rounded-bl-lg px-3 text-sm drop-shadow-md"
							to="/signin"
						>
							Sign in
						</Link>
						<Link
							className="bg-indigo-500 text-white rounded-tr-lg rounded-bl-lg px-3 text-sm drop-shadow-md"
							to="/login"
						>
							Login
						</Link>
					</>
				)}
			</div>
		</div>
	);
};

export default Navbar;
